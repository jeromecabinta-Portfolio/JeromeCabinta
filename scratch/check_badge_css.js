const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

const lines = css.split('\n');
console.log('Lines 8970-9040:');
console.log(lines.slice(8970, 9040).join('\n'));
