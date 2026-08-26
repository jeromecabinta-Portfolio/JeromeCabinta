const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');
const html = fs.readFileSync('index.html', 'utf8');

// Check for fixed pixel widths > 320px in style.css and index.html
const fixedWidthsCss = [];
const lines = css.split('\n');
lines.forEach((l, i) => {
  const match = l.match(/(?:width|min-width|max-width):\s*(\d+)px/);
  if (match && parseInt(match[1]) > 320) {
    if (!l.includes('max-width') && !l.includes('var(')) {
      fixedWidthsCss.push({ line: i + 1, text: l.trim() });
    }
  }
});

console.log('Potentially dangerous fixed widths in CSS:');
fixedWidthsCss.slice(0, 30).forEach(f => console.log(`  Line ${f.line}: ${f.text}`));

// Check inline styles in index.html for fixed widths
const fixedWidthsHtml = [];
const htmlLines = html.split('\n');
htmlLines.forEach((l, i) => {
  if (l.includes('width:') || l.includes('max-width:') || l.includes('padding:')) {
    if (l.includes('style=')) {
      fixedWidthsHtml.push({ line: i + 1, text: l.trim() });
    }
  }
});

console.log(`Inline width/padding styles in index.html: ${fixedWidthsHtml.length}`);
fixedWidthsHtml.slice(0, 20).forEach(f => console.log(`  Line ${f.line}: ${f.text}`));
