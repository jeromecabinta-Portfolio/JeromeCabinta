const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');

// Check for any potential overflow culprits (fixed widths > 300px without max-width)
const lines = css.split('\n');
const fixedWidths = [];

lines.forEach((line, idx) => {
  const trimmed = line.trim();
  if (/width:\s*(\d{3,})px/.test(trimmed) && !/max-width/.test(trimmed) && !/min-width/.test(trimmed)) {
    const match = trimmed.match(/width:\s*(\d+)px/);
    if (match && parseInt(match[1]) > 320) {
      fixedWidths.push({ line: idx + 1, content: trimmed });
    }
  }
});

console.log('Fixed widths > 320px found:', fixedWidths.length);
fixedWidths.slice(0, 20).forEach(f => console.log(`Line ${f.line}: ${f.content}`));
