const fs = require('fs');

const allHtmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
console.log('HTML files in root:', allHtmlFiles);

const targets = [
  'Assets/SMM/Agape/SMM.png',
  'Assets/SMM/Agape/agape_services.png',
  'Assets/SMM/Agape/agape_ba.png',
  'Assets/Social Media Ads/SMA.jpg',
  'Assets/Website/create-and-arise-preview.jpg',
  'Assets/Landing page/landing page.png',
  'Assets/Book Cover/book cover.png'
];

targets.forEach(t => {
  const matched = [];
  allHtmlFiles.forEach(hf => {
    const content = fs.readFileSync(hf, 'utf8');
    if (content.includes(t)) matched.push(hf);
  });
  console.log(`${t} is used in:`, matched.length ? matched : 'NONE');
});

