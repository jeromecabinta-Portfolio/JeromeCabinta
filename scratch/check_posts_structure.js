const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const postsSection = html.slice(15983, 96920);

const cards = [...postsSection.matchAll(/<div class="post-card-behance[^"]*"[^>]*data-category="([^"]+)"[^>]*data-title="([^"]+)"/g)];
console.log('Total post cards in #posts:', cards.length);

const grouped = {};
cards.forEach(c => {
  const cat = c[1];
  grouped[cat] = (grouped[cat] || 0) + 1;
});
console.log('Grouped by data-category:', grouped);

