const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Find boundaries of mockups and book-covers
const mockupStart = html.indexOf('<!-- Mockup 1');
const mockupEnd = html.indexOf('<!-- Book Cover 1');
const bookCoverEnd = html.indexOf('</div>\n    </div>\n  </section>\n\n  <!-- =========================\n       #REELS');

console.log('mockupStart:', mockupStart);
console.log('mockupEnd:', mockupEnd);
console.log('bookCoverEnd:', bookCoverEnd);

if (mockupStart !== -1 && mockupEnd !== -1 && bookCoverEnd !== -1) {
  console.log('Mockups length:', mockupEnd - mockupStart);
  console.log('Book covers length:', bookCoverEnd - mockupEnd);
}

