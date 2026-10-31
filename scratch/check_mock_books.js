const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const regexMock = /<!-- Mockup Post \d+ -->[\s\S]*?(?=(?:<!-- Mockup Post \d+ -->|<!-- Book Cover 1 -->))/g;
const mockups = html.match(regexMock);
console.log('Total mockups matched:', mockups ? mockups.length : 0);

const regexBooks = /<!-- Book Cover \d+ -->[\s\S]*?(?=(?:<!-- Book Cover \d+ -->|<\/div>\s*<\/div>\s*<\/section>\s*<!-- =========================\s*TILTED MARQUEE RIBBON 1))/g;
const books = html.match(regexBooks);
console.log('Total book covers matched:', books ? books.length : 0);

