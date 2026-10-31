const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const regex = /(<!-- =========================[\s\S]*?========================= -->[\s\S]*?<section[^>]+>)/g;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log(`Match at index ${match.index}:`);
  const lines = match[0].split('\n');
  lines.slice(0, 5).forEach(l => console.log('  ' + l.trim()));
}

