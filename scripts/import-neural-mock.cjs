#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const srcHtml = path.resolve('D:/source_code/experiments/ai-amplifier-website/resources/data/websites/neuralNetworkLimitations/neural-learning-comparison.html');
const srcAssets = path.resolve('D:/source_code/experiments/ai-amplifier-website/resources/data/websites/neuralNetworkLimitations/neural-learning-comparison_files');
const destDir = path.resolve(__dirname, '..', 'client', 'public', 'neural-mock');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    console.error('Source not found:', src);
    process.exitCode = 2;
    return;
  }
  const stat = fs.statSync(src);
  if (stat.isFile()) {
    ensureDir(path.dirname(dest));
    fs.copyFileSync(src, dest);
    console.log('copied', src, '->', dest);
    return;
  }
  ensureDir(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const e of entries) {
    const s = path.join(src, e.name);
    const d = path.join(dest, e.name);
    if (e.isDirectory()) copyRecursive(s, d);
    else fs.copyFileSync(s, d);
  }
}

ensureDir(destDir);
copyRecursive(srcHtml, path.join(destDir, 'neural-learning-comparison.html'));
copyRecursive(srcAssets, path.join(destDir, 'neural-learning-comparison_files'));

console.log('\nDone. Files copied to', destDir);
