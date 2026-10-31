const fs = require('fs');

const csB = fs.readFileSync('case-study-brand-system.html', 'utf8');
console.log('--- case-study-brand-system.html lines 1-150 ---');
console.log(csB.split('\n').slice(0, 150).join('\n'));
