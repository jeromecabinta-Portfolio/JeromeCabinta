const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('index.html', 'utf8');

// Find all src= and href=
const links = [];
const srcRegex = /(?:src|href)="([^"]+)"/g;
let match;
while ((match = srcRegex.exec(html)) !== null) {
  const url = match[1];
  if (!url.startsWith('http') && !url.startsWith('#') && !url.startsWith('mailto:') && !url.startsWith('tel:')) {
    links.push(url);
  }
}

console.log('Local links found:', links);
let hasErrors = false;
for (const link of links) {
  // Decode URL in case of %20 or others
  const decodedPath = decodeURIComponent(link);
  const fullPath = path.resolve(decodedPath);
  if (!fs.existsSync(fullPath)) {
    console.error('ERROR: File does not exist:', link);
    hasErrors = true;
  } else {
    console.log('OK:', link);
  }
}

if (hasErrors) {
  process.exit(1);
} else {
  console.log('All local links and resources exist!');
}
