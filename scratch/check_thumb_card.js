const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const m = html.match(/<div class="thumbnail-card-behance open-lightbox"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
if (m) {
  console.log(m[0].slice(0, 400));
}

