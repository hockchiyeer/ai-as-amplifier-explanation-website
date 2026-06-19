import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { i18n } from '../client/src/lib/i18n';

console.log('Starting standalone generation...');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const standaloneDir = path.join(rootDir, 'AI_Amplifier_Standalone');

// 1. Build the Vite React bundle
console.log('Running Vite build...');
try {
  execSync('npm run build', { stdio: 'inherit', cwd: rootDir });
} catch (error) {
  console.error('Build failed', error);
  process.exit(1);
}

// 2. Prepare directories
if (!fs.existsSync(standaloneDir)) {
  fs.mkdirSync(standaloneDir, { recursive: true });
}

// 3. Copy index.html
const distIndex = path.join(rootDir, 'dist', 'index.html');
const rootIndex = path.join(rootDir, 'index.html');
const standaloneIndex = path.join(standaloneDir, 'index.html');

console.log('Copying index.html to root and standalone folder...');
fs.copyFileSync(distIndex, rootIndex);
fs.copyFileSync(distIndex, standaloneIndex);

// 4. Generate content.js
console.log('Generating content.js from i18n configuration...');
const contentJsString = `window.APP_CONTENT = ${JSON.stringify(i18n, null, 2)};`;

const rootContentJs = path.join(rootDir, 'content.js');
const standaloneContentJs = path.join(standaloneDir, 'content.js');

fs.writeFileSync(rootContentJs, contentJsString, 'utf-8');
fs.writeFileSync(standaloneContentJs, contentJsString, 'utf-8');

// 5. Copy resources directory
console.log('Copying resources directory...');
function copyRecursiveSync(src: string, dest: string) {
  if (!fs.existsSync(src)) return;
  const exists = fs.existsSync(dest);
  const stats = exists && fs.statSync(dest);
  const isDirectory = fs.existsSync(src) && fs.statSync(src).isDirectory();
  
  if (isDirectory) {
    if (!exists) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

const rootResources = path.join(rootDir, 'resources');
const standaloneResources = path.join(standaloneDir, 'resources');

if (fs.existsSync(rootResources)) {
  copyRecursiveSync(rootResources, standaloneResources);
} else {
  console.warn('Resources directory not found at', rootResources);
}

console.log('✅ Standalone generation complete.');
console.log('- Root deployment ready');
console.log('- AI_Amplifier_Standalone/ deployment ready');
