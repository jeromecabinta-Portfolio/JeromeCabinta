const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const thumbnailsIdx = html.indexOf('<section id="thumbnails"');
const websitesIdx = html.indexOf('<section id="websites"');

const thumbChunk = html.slice(thumbnailsIdx, websitesIdx);
console.log('thumbChunk starts with:');
console.log(thumbChunk.slice(0, 200));
console.log('thumbChunk ends with:');
console.log(thumbChunk.slice(-300));

