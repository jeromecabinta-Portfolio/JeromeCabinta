const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const hasViewport = content.includes('name="viewport"');
  console.log(`${f}: has viewport meta tag: ${hasViewport}`);
});
