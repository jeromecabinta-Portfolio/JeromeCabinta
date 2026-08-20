const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('index.html', 'utf-8');
const brandCards = fs.readFileSync('scratch/brand_cards.html', 'utf-8');

// Update filter button
html = html.replace(
  '<button class="filter-tab-btn" data-filter="branding">Brand Campaigns</button>',
  '<button class="filter-tab-btn" data-filter="branding">Brand Campaigns (16)</button>'
);

// Replace lines 341 to 424
const targetStart = '        <!-- Post 1: Apex Outdoors -->';
const targetEnd = '        <!-- Church Ad 1 -->';

const startIndex = html.indexOf(targetStart);
const endIndex = html.indexOf(targetEnd);

if (startIndex !== -1 && endIndex !== -1) {
  html = html.slice(0, startIndex) + brandCards + html.slice(endIndex);
} else {
  console.error('Target block not found for brand cards', { startIndex, endIndex });
}

// Remove duplicate Post 12 (14.jpg) from near the end
const dupBlockStart = '        <!-- Post 12: Sneaker / E-comm -->';
const dupBlockEnd = '      </div>\n    </div>\n  </section>';
const dupStartIndex = html.indexOf(dupBlockStart);
if (dupStartIndex !== -1) {
  const dupEndIndex = html.indexOf('      </div>\n    </div>\n  </section>', dupStartIndex);
  if (dupEndIndex !== -1) {
    html = html.slice(0, dupStartIndex) + html.slice(dupEndIndex);
    console.log('Removed duplicate footwear card at end of grid');
  }
}

fs.writeFileSync('index.html', html, 'utf-8');
console.log('Successfully updated index.html with all 16 Brand Campaign cards');

// 2. Update script.js for multi-category filter support
let script = fs.readFileSync('script.js', 'utf-8');
const oldCondition = 'if (filterValue === "all" || category === filterValue) {';
const newCondition = 'if (filterValue === "all" || category === filterValue || (category && category.split(" ").includes(filterValue))) {';

if (script.includes(oldCondition)) {
  script = script.replace(oldCondition, newCondition);
  fs.writeFileSync('script.js', script, 'utf-8');
  console.log('Successfully updated script.js multi-category filter support');
} else {
  console.log('script.js filter condition check:', script.includes('category === filterValue'));
}
