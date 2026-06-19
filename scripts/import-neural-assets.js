#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Usage: node scripts/import-neural-assets.js "F:\\Downloads\\Design and Deploy a Webpage on Neural Network Limitations\\neural-learning-comparison_files"
const src = process.argv[2];
if (!src) {
  console.error('Please provide the source directory containing the downloaded assets.');
  console.error('Example: node scripts/import-neural-assets.js "F:\\Downloads\\...\\neural-learning-comparison_files"');
  process.exit(2);
}

const targetBase = path.resolve(__dirname, '..', 'client', 'public', 'neural-assets', 'original');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function isImage(f) {
  return /\.(png|jpg|jpeg|svg|gif|webp)$/i.test(f);
}

try {
  const absSrc = path.resolve(src);
  if (!fs.existsSync(absSrc)) {
    console.error('Source directory does not exist:', absSrc);
    process.exit(3);
  }

  ensureDir(targetBase);

  const files = fs.readdirSync(absSrc).filter(f => isImage(f));
  if (files.length === 0) {
    console.error('No image files found in source directory.');
    process.exit(4);
  }

  // Copy files
  files.forEach(f => {
    const from = path.join(absSrc, f);
    const to = path.join(targetBase, f);
    fs.copyFileSync(from, to);
    console.log('copied', f);
  });

  // Heuristic manifest: try to pick hero/diagram/chart by filename keywords
  const lower = files.map(f => f.toLowerCase());
  function pick(keywords) {
    for (const k of keywords) {
      const idx = lower.findIndex(n => n.includes(k));
      if (idx !== -1) return files[idx];
    }
    return null;
  }

  const manifest = {
    hero: pick(['hero', 'banner', 'header', 'main']) || files[0],
    diagram: pick(['diagram', 'diagram', 'neural', 'network']) || files[1] || files[0],
    chart: pick(['chart', 'comparison', 'compare']) || files[2] || files[0],
    all: files,
  };

  fs.writeFileSync(path.join(targetBase, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('manifest created at', path.join(targetBase, 'manifest.json'));
  console.log('Import complete. Restart your dev server if it was running.');
} catch (err) {
  console.error('Import failed:', err && err.message ? err.message : String(err));
  process.exit(1);
}
