const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');
const lines = css.split('\n');

console.log('--- Lines 8660-8770 ---');
console.log(lines.slice(8660, 8770).join('\n'));

console.log('--- Lines 8770-8880 ---');
console.log(lines.slice(8770, 8880).join('\n'));

console.log('--- Lines 8880-8960 ---');
console.log(lines.slice(8880, 8960).join('\n'));
