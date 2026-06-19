const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const includeDirs = ['client/src', 'shared'];
const fileExts = ['.ts', '.tsx', '.js', '.jsx'];

function walk(dir, cb) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === '.git') continue;
      walk(full, cb);
    } else if (ent.isFile()) {
      cb(full);
    }
  }
}

const re = /\(t as any\)\.([A-Za-z0-9_$.]+)/g;
let total = 0;
const changedFiles = [];

for (const dir of includeDirs) {
  const abs = path.join(root, dir);
  if (!fs.existsSync(abs)) continue;
  walk(abs, (file) => {
    if (!fileExts.includes(path.extname(file))) return;
    let s = fs.readFileSync(file, 'utf8');
    if (!s.includes('(t as any)')) return;
    const original = s;
    s = s.replace(re, (m, p) => `t.${p}`);
    if (s !== original) {
      fs.writeFileSync(file + '.bak', original, 'utf8');
      fs.writeFileSync(file, s, 'utf8');
      changedFiles.push(file);
      total += 1;
      console.log('Rewrote', file);
    }
  });
}

console.log('Done. Rewrote', total, 'matches across', changedFiles.length, 'files.');
console.log('Backups saved with .bak extension.');
