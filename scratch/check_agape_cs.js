const fs = require('fs');
const html = fs.readFileSync('agape-case-study.html', 'utf8');
const imgs = [...html.matchAll(/Assets\/[^\s"'>]+/g)].map(m => m[0]);
console.log('Assets references in agape-case-study.html:', [...new Set(imgs)]);
