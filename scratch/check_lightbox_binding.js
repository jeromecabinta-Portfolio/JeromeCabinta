const fs = require('fs');
const js = fs.readFileSync('script.js', 'utf8');

console.log(js.slice(80600, 82500));

