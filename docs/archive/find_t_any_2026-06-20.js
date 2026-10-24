#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function walk(dir, cb) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full, cb);
    } else if (stat.isFile()) {
      cb(full);
    }
  }
}

const root = path.resolve(__dirname, '..');
const matches = [];
walk(root, (file) => {
  if (!file.endsWith('.ts') && !file.endsWith('.tsx') && !file.endsWith('.js') && !file.endsWith('.jsx')) return;
  const rel = path.relative(root, file);
  if (rel.startsWith('node_modules') || rel.startsWith('.git')) return;
  const s = fs.readFileSync(file, 'utf8');
  if (s.includes('(t as any)')) matches.push(rel);
});

if (matches.length === 0) {
  console.log('No occurrences of "(t as any)" found.');
  process.exit(0);
}

console.log('Found (t as any) occurrences in:');
for (const m of matches) console.log(' -', m);
process.exit(0);
