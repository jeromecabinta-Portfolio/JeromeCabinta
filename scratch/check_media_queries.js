const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

const mediaRegex = /@media[^{]+\{/g;
let match;
const matches = [];
while ((match = mediaRegex.exec(css)) !== null) {
  matches.push({ index: match.index, line: css.substring(0, match.index).split('\n').length, text: match[0] });
}

console.log(`Found ${matches.length} media queries in style.css:`);
matches.forEach(m => console.log(`Line ${m.line}: ${m.text}`));
