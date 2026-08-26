const fs = require('fs');

console.log('Validating JavaScript in script.js...');
try {
  const js = fs.readFileSync('script.js', 'utf8');
  // Simple check for unclosed brackets or syntax errors by running Function constructor check
  new Function(js);
  console.log('✓ script.js syntax is 100% valid!');
} catch (e) {
  console.error('✗ script.js syntax error:', e.message);
}
