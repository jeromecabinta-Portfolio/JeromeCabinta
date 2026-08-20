const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');
const mockupCards = fs.readFileSync('scratch/mockup_cards.html', 'utf-8');

// Update filter button
html = html.replace(
  '<button class="filter-tab-btn" data-filter="mockups">Mockups &amp; Products</button>',
  '<button class="filter-tab-btn" data-filter="mockups">Mockups &amp; Products (12)</button>'
);

// Target block to replace (the existing Post 10 / Post 11 mockup cards)
const targetStart = '        <!-- Post 10: Product Mockup 1 -->';
const targetEnd = '      </div>\n    </div>\n  </section>';

const startIndex = html.indexOf(targetStart);
const endIndex = html.indexOf(targetEnd);

if (startIndex !== -1 && endIndex !== -1) {
  html = html.slice(0, startIndex) + mockupCards + html.slice(endIndex);
  fs.writeFileSync('index.html', html, 'utf-8');
  console.log('Successfully updated index.html with all 12 Mockup cards');
} else {
  console.error('Target block not found for mockup cards', { startIndex, endIndex });
}
