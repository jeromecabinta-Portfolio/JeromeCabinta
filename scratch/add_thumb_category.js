const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Ensure thumbnail cards have data-category="thumbnails"
let count = 0;
html = html.replace(/<div class="thumbnail-card-behance open-lightbox"(?! data-category)/g, () => {
  count++;
  return '<div class="thumbnail-card-behance open-lightbox" data-category="thumbnails"';
});

console.log(`Updated ${count} thumbnail cards with data-category="thumbnails"`);
fs.writeFileSync('index.html', html, 'utf8');

