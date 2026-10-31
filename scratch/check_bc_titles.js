const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const brandMatches = [...html.matchAll(/<!-- Brand Campaign Post (\d+) -->[\s\S]*?data-title="([^"]+)"[\s\S]*?data-category-name="([^"]+)"[\s\S]*?data-desc="([^"]+)"/g)];

brandMatches.forEach(m => {
  console.log(`Post ${m[1]}: "${m[2]}" | "${m[4].slice(0, 80)}..."`);
});

