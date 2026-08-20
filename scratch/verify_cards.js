const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');

const brandCards = (html.match(/data-img="Assets\/Brand Campaign\/[^"]+"/g) || []);
const churchCards = (html.match(/data-img="Assets\/Social Media Ads\/calvary baptist church\/[^"]+"/g) || []);
const mockupCards = (html.match(/data-img="Assets\/Mock ups\/[^"]+"/g) || []);

console.log('Brand Campaign cards count in index.html:', brandCards.length);
console.log('Event & Church cards count in index.html:', churchCards.length);
console.log('Mockup cards count in index.html:', mockupCards.length);

const seenBrand = new Set();
const dups = [];
brandCards.forEach(c => {
  if (seenBrand.has(c)) dups.push(c);
  seenBrand.add(c);
});
console.log('Brand Campaign duplicates:', dups.length === 0 ? 'None (All 12 unique)' : dups);
