import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

console.log('🚀 Building standalone static application for GitHub Pages...');

// Step 1: Ensure public assets exist in client/public
const pptxImagesSrc = path.join(projectRoot, 'resources', 'data', 'pptx_images');
const pptxImagesDest = path.join(projectRoot, 'client', 'public', 'pptx-images');
if (fs.existsSync(pptxImagesSrc) && !fs.existsSync(pptxImagesDest)) {
  fs.mkdirSync(pptxImagesDest, { recursive: true });
  fs.cpSync(pptxImagesSrc, pptxImagesDest, { recursive: true });
}

const pptxSrc = path.join(projectRoot, 'resources', 'data', 'pptx');
const pptxDest = path.join(projectRoot, 'client', 'public', 'pptx');
if (fs.existsSync(pptxSrc) && !fs.existsSync(pptxDest)) {
  fs.mkdirSync(pptxDest, { recursive: true });
  fs.cpSync(pptxSrc, pptxDest, { recursive: true });
}

// Step 2: Build using Vite with base: "./" and output to dist-standalone and dist/public
const standaloneOutDir = path.join(projectRoot, 'dist-standalone');

console.log('📦 Running Vite build for static standalone deployment...');
execSync(
  `npx vite build --base=./ --outDir="${standaloneOutDir}"`,
  {
    cwd: projectRoot,
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  }
);

// Step 3: Add .nojekyll for GitHub Pages compatibility
fs.writeFileSync(path.join(standaloneOutDir, '.nojekyll'), '');

// Also copy index.html as 404.html for GitHub Pages client-side routing fallback
const indexHtmlPath = path.join(standaloneOutDir, 'index.html');
if (fs.existsSync(indexHtmlPath)) {
  fs.copyFileSync(indexHtmlPath, path.join(standaloneOutDir, '404.html'));
}

console.log('✅ Standalone build complete!');
console.log(`📁 Output directory: ${standaloneOutDir}`);
console.log('📄 Ready to deploy to GitHub Pages (root index.html + .nojekyll generated).');
