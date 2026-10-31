const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Find all cards with data-category="event-ads client-work"
const regex = /<!-- Church Ad \d+ -->[\s\S]*?(?=(?:<!-- Church Ad \d+ -->|<!-- Mockup Post 1 -->))/g;
const churchAds = html.match(regex);
console.log('Total church ads matched:', churchAds ? churchAds.length : 0);

if (churchAds) {
  console.log('First church ad length:', churchAds[0].length);
  console.log('Last church ad index:', churchAds.length - 1);
}

