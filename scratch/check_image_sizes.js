const fs = require('fs');

const files = [
  'Assets/SMM/Agape/SMM.png',
  'Assets/SMM/Agape/agape_services.png',
  'Assets/SMM/Agape/agape_ba.png',
  'Assets/Social Media Ads/SMA.jpg',
  'Assets/Website/create-and-arise-preview.jpg',
  'Assets/Website/create-and-arise.png',
  'Assets/Landing page/landing page.png',
  'Assets/Book Cover/book cover.png',
  'Assets/Email Design/1.png',
  'Assets/SMM/Agape/church_ad_1.png',
  'Assets/Social Media Ads/calvary baptist church/1.png',
  'Assets/Brand Campaign/1.png'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const stat = fs.statSync(f);
    console.log(`${f}: ${(stat.size / 1024).toFixed(1)} KB`);
  } else {
    console.log(`${f}: NOT FOUND`);
  }
});

