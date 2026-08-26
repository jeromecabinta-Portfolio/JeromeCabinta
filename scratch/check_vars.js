const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

console.log('CSS lines total:', css.split('\n').length);

// Let's find all CSS rules in style.css and check variables used
const varUsage = new Set();
const varDefs = {};

const varRegex = /var\((--[a-zA-Z0-9_-]+)\)/g;
let match;
while ((match = varRegex.exec(css)) !== null) {
  varUsage.add(match[1]);
}

console.log('Variables used across style.css:');
console.log(Array.from(varUsage).sort());
