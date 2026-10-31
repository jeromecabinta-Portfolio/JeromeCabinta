const fs = require('fs');
const js = fs.readFileSync('script.js', 'utf8');

const matches = [...js.matchAll(/post-card-behance/g)];
matches.forEach(m => {
  console.log('Match at index:', m.index);
  console.log(js.slice(m.index - 50, m.index + 200));
  console.log('---');
});

