const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const m = html.match(/<div class="thumbnails-showcase-grid">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/);
if (m) {
  console.log('Found thumbnails content! Length:', m[1].length);
  console.log('Sample start:', m[1].trim().slice(0, 300));
  console.log('Sample end:', m[1].trim().slice(-300));
} else {
  console.log('Could not match thumbnails grid!');
}
