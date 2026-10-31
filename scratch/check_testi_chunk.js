const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const testimonialsIdx = html.indexOf('<section id="testimonials"');
const contactIdx = html.indexOf('<section id="contact"');

const testiChunk = html.slice(testimonialsIdx, contactIdx);
console.log('testiChunk starts with:');
console.log(testiChunk.slice(0, 200));
console.log('testiChunk ends with:');
console.log(testiChunk.slice(-300));

