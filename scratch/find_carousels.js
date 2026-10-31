const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

lines.forEach((l, i) => {
  if (l.includes('id="carousels"') || l.includes('MULTI-SLIDE CAROUSELS')) {
    console.log(`L${i+1}: ${l}`);
    for (let j = i; j < i + 35; j++) {
      if (lines[j]) console.log(`  L${j+1}: ${lines[j]}`);
    }
  }
});

