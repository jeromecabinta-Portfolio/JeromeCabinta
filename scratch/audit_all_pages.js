const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

console.log('=== HTML Files Audit ===');
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const hasStyle = content.includes('style.css');
  const hasScript = content.includes('script.js');
  const hasMetaViewport = content.includes('name="viewport"');
  const hasThemeScript = content.includes('localStorage.getItem("theme")');
  
  console.log(`${file}:`);
  console.log(`  - style.css: ${hasStyle}`);
  console.log(`  - script.js: ${hasScript}`);
  console.log(`  - viewport meta: ${hasMetaViewport}`);
  console.log(`  - anti-FOUC theme script: ${hasThemeScript}`);
});
