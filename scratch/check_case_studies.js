const fs = require('fs');
const files = ['agape-case-study.html', 'smm-branding.html', 'smm-ecommerce.html', 'smm-mockup.html', 'smm-sneakers.html', 'social-media-ads.html'];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`\n=================== ${f} ===================`);
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    if (l.includes(':root') || l.includes('body.dark') || l.includes('body:not(.dark)') || l.includes('dark-theme') || l.includes('--bg') || l.includes('--surface')) {
      console.log(`${i+1}: ${l.trim()}`);
    }
  });
});
