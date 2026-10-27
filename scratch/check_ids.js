const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('script.js', 'utf8');

const regex = /getElementById\(['"]([^'"]+)['"]\)/g;
let match;
const ids = new Set();
while ((match = regex.exec(js)) !== null) {
  ids.add(match[1]);
}

console.log('Total getElementById calls:', ids.size);
const missing = [];
ids.forEach(id => {
  if (!html.includes('id="' + id + '"') && !html.includes("id='" + id + "'")) {
    missing.push(id);
  }
});
console.log('Missing IDs in index.html:', missing);
