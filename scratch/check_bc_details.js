const fs = require('fs');

const html = fs.readFileSync('case-study-brand-system.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('14.jpg') || l.includes('15.jpg') || l.includes('16.jpg') || l.includes('4.png') || l.includes('5.png')) {
    console.log(`Line ${idx + 1}: ${l}`);
    console.log(lines.slice(idx, idx + 8).join('\n'));
    console.log('---');
  }
});

