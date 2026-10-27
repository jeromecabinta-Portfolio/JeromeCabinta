const fs = require('fs');
const js = fs.readFileSync('script.js', 'utf8');

const lines = js.split('\n');
const errors = [];

lines.forEach((line, idx) => {
  // Check for getElementById(...).addEventListener
  if (/getElementById\([^)]+\)\.addEventListener/.test(line)) {
    errors.push({ line: idx + 1, code: line.trim() });
  }
});

console.log('Direct addEventListener on getElementById without null check:', errors);
