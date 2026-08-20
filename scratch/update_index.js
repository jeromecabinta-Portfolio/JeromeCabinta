const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');
const churchCards = fs.readFileSync('scratch/church_cards.html', 'utf-8');

// Replace filter button
html = html.replace(
  '<button class="filter-tab-btn" data-filter="event-ads">Event &amp; Church Ads</button>',
  '<button class="filter-tab-btn" data-filter="event-ads">Event &amp; Church Ads (32)</button>'
);

// Target content block to replace
const targetStart = '        <!-- Post 7: Agape Worship Ad -->';
const targetEnd = '        <!-- Post 10: Product Mockup 1 -->';

const startIndex = html.indexOf(targetStart);
const endIndex = html.indexOf(targetEnd);

if (startIndex !== -1 && endIndex !== -1) {
  const newHtml = html.slice(0, startIndex) + churchCards + html.slice(endIndex);
  fs.writeFileSync('index.html', newHtml, 'utf-8');
  console.log('Successfully inserted all 32 church ad projects into index.html');
} else {
  console.error('Target block not found', { startIndex, endIndex });
}
