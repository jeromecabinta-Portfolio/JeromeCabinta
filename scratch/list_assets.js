const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync('Assets', { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
console.log('Subdirectories in Assets:', dirs);
dirs.forEach(d => {
  const p = path.join('Assets', d);
  const items = fs.readdirSync(p);
  console.log(`Assets/${d}: (${items.length} items)`, items.slice(0, 10));
});

