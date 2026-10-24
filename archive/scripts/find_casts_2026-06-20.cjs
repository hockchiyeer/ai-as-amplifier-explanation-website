const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pattern = /(\(t as any\))/g;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === '.git') continue;
      walk(full);
    } else if (ent.isFile()) {
      if (!full.endsWith('.ts') && !full.endsWith('.tsx') && !full.endsWith('.js') && !full.endsWith('.jsx')) continue;
      try {
        const content = fs.readFileSync(full, 'utf8');
        const m = content.match(pattern);
        if (m) {
          console.log(`${full}:${m.length}`);
        }
      } catch (e) {
        // ignore
      }
    }
  }
}

walk(root);
