const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');
const sections = html.split('<section');
console.log('Total sections in index.html:', sections.length - 1);
sections.slice(1).forEach((s, idx) => {
  const idMatch = s.match(/id="([^"]+)"/);
  console.log('Section ' + (idx + 1) + ' id:', idMatch ? idMatch[1] : 'NO_ID');
});
