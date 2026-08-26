const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const inlineColorRegex = /style=["'][^"']*color:\s*([^;"]+)[^"']*["']/g;
let match;
const found = [];
while ((match = inlineColorRegex.exec(html)) !== null) {
  found.push({ full: match[0], color: match[1].trim() });
}

console.log(`Found ${found.length} inline color styles in index.html:`);
found.forEach(f => console.log(f.full));
