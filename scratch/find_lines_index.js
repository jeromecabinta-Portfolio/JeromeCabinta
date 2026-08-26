const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

lines.forEach((l, i) => {
  if (l.includes('#ffffff') || l.includes('WHAT I CAN DO FOR YOU') || l.includes('hero-value-statement') || l.includes('LET\'S SCALE YOUR')) {
    console.log(`${i+1}: ${l.trim()}`);
  }
});
