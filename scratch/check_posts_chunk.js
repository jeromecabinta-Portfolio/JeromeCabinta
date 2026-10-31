const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const postsIdx = html.indexOf('<section id="posts"');
const reelsIdx = html.indexOf('<section id="reels"');

const postsChunk = html.slice(postsIdx, reelsIdx);
console.log('postsChunk starts with:');
console.log(postsChunk.slice(0, 200));
console.log('postsChunk ends with:');
console.log(postsChunk.slice(-300));

