const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const m = html.match(/<div class="posts-showcase-grid" id="designArchiveGrid">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/);
if (m) {
  const inner = m[1];
  console.log('designArchiveGrid inner length:', inner.length);

  // Check card classes
  const cards = inner.match(/<div class="([^"]+)"/g) || [];
  const classCounts = {};
  cards.forEach(c => {
    classCounts[c] = (classCounts[c] || 0) + 1;
  });
  console.log('Card classes in designArchiveGrid:', classCounts);

  // Check data-category values
  const catMatches = [...inner.matchAll(/data-category="([^"]+)"/g)].map(m => m[1]);
  console.log('Unique data-category values:', [...new Set(catMatches)]);
} else {
  console.log('designArchiveGrid not found in index.html!');
}

