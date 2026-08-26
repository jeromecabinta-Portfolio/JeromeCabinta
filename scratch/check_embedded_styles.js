const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const hasStyleTag = content.includes('<style>');
  console.log(`${f}: has embedded <style>: ${hasStyleTag}`);
  if (hasStyleTag) {
    const styleMatches = content.match(/<style>([\s\S]*?)<\/style>/g);
    styleMatches.forEach((sm, i) => {
      console.log(`  style block ${i+1} length: ${sm.length} chars`);
    });
  }
});
