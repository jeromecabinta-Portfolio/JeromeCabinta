const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const heroIdx = html.indexOf('<section id="hero"');
console.log(html.slice(heroIdx + 1200, heroIdx + 2800));
