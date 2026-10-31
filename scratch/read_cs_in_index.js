const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const pIdx = html.indexOf('<section id="posts"');
const eIdx = html.indexOf('archive-expand-box');

console.log(html.slice(pIdx, eIdx));
