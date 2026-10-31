const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

lines.forEach((l, i) => {
  if (l.includes('mockups') || l.includes('book-covers') || l.includes('<!-- Mock') || l.includes('<!-- Book')) {
    console.log(`L${i+1}: ${l.trim()}`);
  }
});

