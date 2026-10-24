import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";

/**
 * Standalone ("zero-build" for the end user) bundle.
 *
 * Produces ONE self-contained `index.html` that works when opened by double-click (file://), on GitHub Pages
 * (any sub-path) or on any static host — no Node server required:
 *   - base './'  → every URL is relative to index.html
 *   - JS + CSS are inlined into the HTML (classic <script>, so file:// is not blocked by module/CORS rules)
 *   - `<script src="./content.js">` is loaded first so the wording can be edited without rebuilding
 *   - slides / PPTX are read from ./resources/ (see client/src/lib/assets.ts)
 *
 * Used by `npm run build:standalone` (scripts/build-standalone.mjs). The normal app keeps using vite.config.ts.
 */
function standaloneHtml(): Plugin {
  return {
    name: "ai-amplifier-standalone-html",
    // 1) Drop the analytics tag: its %VITE_ANALYTICS_*% placeholders only exist on the hosted site.
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        return html.replace(/<script\s+defer[^>]*VITE_ANALYTICS_ENDPOINT[\s\S]*?<\/script>\s*/i, "");
      },
    },
    // 2) After bundling, inline the CSS + JS chunks into index.html and delete the loose files.
    enforce: "post",
    generateBundle(_options, bundle) {
      const htmlFile = Object.values(bundle).find(f => f.type === "asset" && f.fileName.endsWith(".html"));
      if (!htmlFile || htmlFile.type !== "asset") throw new Error("standalone: index.html was not emitted");
      let html = String(htmlFile.source);

      const toText = (f: any) => String(f.type === "asset" ? f.source : f.code);
      let inlineScripts = "";
      for (const [name, file] of Object.entries(bundle)) {
        if (name.endsWith(".js") && file.type === "chunk") {
          // "</script" inside a script body would end the tag early.
          const code = toText(file).replace(/<\/script/gi, "<\\/script");
          inlineScripts += `<script>\n${code}\n</script>\n`;
          // remove any <script ... src="...that file..."> tag Vite injected
          html = html.replace(new RegExp(`<script[^>]*src="[^"]*${escapeRe(name.split("/").pop()!)}"[^>]*></script>\\s*`, "i"), "");
          delete bundle[name];
        } else if (name.endsWith(".css") && file.type === "asset") {
          const css = toText(file).replace(/<\/style/gi, "<\\/style");
          html = html.replace(
            new RegExp(`<link[^>]*href="[^"]*${escapeRe(name.split("/").pop()!)}"[^>]*>`, "i"),
            () => `<style>\n${css}\n</style>`
          );
          delete bundle[name];
        }
      }
      // content.js first (defines window.AI_AMPLIFIER_CONTENT), then the app, both at the end of <body>.
      const tail = `<script src="./content.js"></script>\n${inlineScripts}`;
      html = html.includes("</body>") ? html.replace("</body>", () => `${tail}</body>`) : html + tail;
      htmlFile.source = html;
    },
  };
}

function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default defineConfig({
  plugins: [react(), tailwindcss(), standaloneHtml()],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  // Static files are handled by scripts/build-standalone.mjs (they go to ./resources/, not next to index.html).
  publicDir: false,
  define: {
    "import.meta.env.VITE_STANDALONE": JSON.stringify("true"),
  },
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/standalone"),
    emptyOutDir: true,
    cssCodeSplit: false,
    assetsInlineLimit: 100_000_000,
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      output: {
        format: "iife",
        inlineDynamicImports: true,
        entryFileNames: "app.js",
        assetFileNames: "app[extname]",
      },
    },
  },
});
