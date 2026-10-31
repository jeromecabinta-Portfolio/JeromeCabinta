const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

for (let i = 2626; i < lines.length; i++) {
  if (lines[i].includes('</section>')) {
    console.log(`Carousels ends at L${i+1}: ${lines[i]}`);
    console.log(`Next lines:`);
    for (let j = i + 1; j < i + 10; j++) {
      if (lines[j]) console.log(`  L${j+1}: ${lines[j]}`);
    }
    break;
  }
}

