import "dotenv/config";
import express from "express";
import path from "path";
import fs from "fs";
import { execFile } from "child_process";
import { promisify } from "util";
import { sdk } from "./sdk";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { registerStorageProxy } from "./storageProxy";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  // Serve local PPTX resources under /pptx/<filename>
  // Serve local PPTX resources under /pptx/<filename>
  app.use('/pptx', express.static(path.resolve(import.meta.dirname, '..', '..', 'resources', 'data', 'pptx')));
  // Serve generated PPTX images under /pptx-images
  const pptxImagesDir = path.resolve(import.meta.dirname, '..', '..', 'resources', 'data', 'pptx_images');
  if (!fs.existsSync(pptxImagesDir)) {
    fs.mkdirSync(pptxImagesDir, { recursive: true });
  }
  app.use('/pptx-images', express.static(pptxImagesDir));

  const execFileAsync = promisify(execFile);

  // Helper: ensure images exist for a PPTX. Returns array of image filenames (relative to pptxImagesDir subfolder) or null if conversion not possible.
  async function ensureImagesForPptx(filename: string): Promise<string[] | null> {
    const safe = path.basename(filename);
    const pptPath = path.resolve(import.meta.dirname, '..', '..', 'resources', 'data', 'pptx', safe);
    if (!fs.existsSync(pptPath)) return null;

    const outFolder = path.resolve(pptxImagesDir, path.parse(safe).name);
    if (!fs.existsSync(outFolder)) {
      fs.mkdirSync(outFolder, { recursive: true });
    }

    // If folder already contains PNG files, return them
    const existing = fs.readdirSync(outFolder).filter(f => /\.png$/i.test(f)).sort();
    if (existing.length > 0) return existing.map(f => path.join(path.parse(safe).name, f));

    // Try to use LibreOffice (soffice) to convert slides to PNG
    try {
      // soffice --headless --convert-to png --outdir <outFolder> <pptPath>
      await execFileAsync('soffice', ['--headless', '--convert-to', 'png', '--outdir', outFolder, pptPath], { timeout: 30_000 });

      // Collect generated png files
      const generated = fs.readdirSync(outFolder).filter(f => /\.png$/i.test(f)).sort();
      if (generated.length === 0) return null;
      return generated.map(f => path.join(path.parse(safe).name, f));
    } catch (err) {
      console.warn('[PPTX] conversion failed (soffice not available or error):', String(err));
      return null;
    }
  }

  // Endpoint: list / generate images for a pptx
  app.get('/pptx/:filename/images', async (req, res) => {
    const filename = req.params.filename;
    try {
      const images = await ensureImagesForPptx(filename);
      if (!images) {
        res.status(404).json({ ok: false, message: 'No images available' });
        return;
      }
      // construct URLs relative to server
      const urls = images.map(p => `/pptx-images/${p.replace(/\\\\/g, '/')}`);
      res.json({ ok: true, images: urls });
    } catch (err) {
      console.error('[PPTX] images error', err);
      res.status(500).json({ ok: false, message: 'Conversion error' });
    }
  });

  // Pre-generation status object
  const pregenStatus: {
    started: boolean;
    completed: boolean;
    total: number;
    processed: number;
    currentFile: string | null;
    errors: string[];
    startTime: number | null;
    endTime: number | null;
  } = {
    started: false,
    completed: false,
    total: 0,
    processed: 0,
    currentFile: null,
    errors: [],
    startTime: null,
    endTime: null,
  };

  // Status endpoint for UI to poll pre-generation progress
  app.get('/pptx/pregen/status', (_req, res) => {
    res.json({ ok: true, status: pregenStatus });
  });

  // Authenticated download endpoint
  app.get('/pptx/:filename/protected-download', async (req, res) => {
    const filename = path.basename(req.params.filename);
    try {
      // try to authenticate request via sdk
      await sdk.authenticateRequest(req as any);
    } catch (err) {
      res.status(403).send('Forbidden');
      return;
    }

    const pptPath = path.resolve(import.meta.dirname, '..', '..', 'resources', 'data', 'pptx', filename);
    if (!fs.existsSync(pptPath)) {
      res.status(404).send('Not found');
      return;
    }

    res.download(pptPath, filename);
  });
  registerStorageProxy(app);
  registerOAuthRoutes(app);
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });

  // Background pre-generation: convert all PPTX files to images to avoid first-request latency
  (async function preGenerateAllPptxImages() {
    try {
      const pptxDir = path.resolve(import.meta.dirname, '..', '..', 'resources', 'data', 'pptx');
      if (!fs.existsSync(pptxDir)) return;

      const files = fs.readdirSync(pptxDir).filter(f => /\.pptx$/i.test(f));
      if (files.length === 0) return;

      pregenStatus.started = true;
      pregenStatus.startTime = Date.now();
      pregenStatus.total = files.length;
      pregenStatus.completed = false;
      pregenStatus.processed = 0;

      console.log(`[PPTX] Pre-generation started for ${files.length} files...`);

      // run conversions serially to avoid overwhelming the host
      for (const f of files) {
        pregenStatus.currentFile = f;
        try {
          const imgs = await ensureImagesForPptx(f);
          pregenStatus.processed += 1;
          if (imgs && imgs.length > 0) {
            console.log(`[PPTX] Generated ${imgs.length} images for ${f}`);
          } else {
            console.log(`[PPTX] No images generated for ${f}`);
          }
        } catch (err) {
          const msg = String(err);
          pregenStatus.errors.push(`${f}: ${msg}`);
          pregenStatus.processed += 1;
          console.warn(`[PPTX] Pre-gen failed for ${f}:`, msg);
        }
      }

      pregenStatus.completed = true;
      pregenStatus.endTime = Date.now();
      pregenStatus.currentFile = null;

      console.log('[PPTX] Pre-generation completed');
    } catch (err) {
      pregenStatus.errors.push(String(err));
      pregenStatus.completed = true;
      pregenStatus.endTime = Date.now();
      console.warn('[PPTX] Pre-generation job failed:', String(err));
    }
  })();
}

startServer().catch(console.error);
