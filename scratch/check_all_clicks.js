const fs = require('fs');

const script = fs.readFileSync('script.js', 'utf8');
const lines = script.split('\n');

lines.forEach((l, i) => {
  if (l.includes('addEventListener') || l.includes('scroll') || l.includes('testi')) {
    console.log((i+1) + ': ' + l.trim().slice(0, 100));
  }
});
