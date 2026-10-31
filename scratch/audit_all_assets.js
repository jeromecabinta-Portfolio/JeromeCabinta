const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('index.html', 'utf8');

// Find all src and data-img attributes
const srcMatches = [...html.matchAll(/(?:src|data-img)="([^"]+)"/g)].map(m => m[1]);
console.log('Total asset references in index.html:', srcMatches.length);

const missing = [];
const checked = new Set();

srcMatches.forEach(ref => {
  if (ref.startsWith('http://') || ref.startsWith('https://') || ref.startsWith('data:')) {
    return;
  }
  const cleanPath = ref.split('#')[0].split('?')[0];
  if (checked.has(cleanPath)) return;
  checked.add(cleanPath);

  const fullPath = path.join(__dirname, '..', cleanPath);
  if (!fs.existsSync(fullPath)) {
    missing.push(cleanPath);
  }
});

console.log('Checked unique local assets:', checked.size);
if (missing.length === 0) {
  console.log('All local images and assets exist on disk!');
} else {
  console.log('Missing assets count:', missing.length);
  missing.forEach(m => console.log('  MISSING:', m));
}

