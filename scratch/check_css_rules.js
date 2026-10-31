const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

const classesToCheck = [
  '.featured-cs-grid',
  '.top-smm-grid',
  '.smm-calendar-table',
  '.caption-workflow-grid',
  '.analytics-grid-wrap',
  '.archive-tabs-container',
  '.archive-tab-btn',
  '.btn-toggle-archive',
  '.exact-contribution-box'
];

classesToCheck.forEach(cls => {
  console.log(`Checking ${cls}:`, css.includes(cls));
});

// Check mobile media queries
const mobileMatch = css.match(/@media\s*\(\s*max-width:\s*768px\s*\)[\s\S]*?(?=@media|\Z)/g);
console.log('Mobile media query blocks count:', mobileMatch ? mobileMatch.length : 0);
