const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const hasToggle = content.includes('theme-toggle');
  const hasInlineScript = content.includes('localStorage.getItem("theme")') || content.includes("localStorage.getItem('theme')");
  const bodyMatch = content.match(/<body[^>]*>/);
  const scriptTag = content.includes('script.js');
  console.log(`${f}:`);
  console.log(`  body: ${bodyMatch ? bodyMatch[0] : 'no body tag'}`);
  console.log(`  themeToggle: ${hasToggle}`);
  console.log(`  inlineThemeScript: ${hasInlineScript}`);
  console.log(`  includesScriptJs: ${scriptTag}`);
});
