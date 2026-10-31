const fs = require('fs');

function inspectStrings(filePath) {
  const buf = fs.readFileSync(filePath);
  const str = buf.toString('latin1');
  const printableMatches = str.match(/[A-Za-z0-9\s:.,\-_'/]{4,}/g) || [];
  const interesting = printableMatches.filter(s => s.length > 6 && !s.includes('Adobe') && !s.includes('Photoshop') && !s.includes('XML') && !s.includes('uuid'));
  console.log(`\n=== ${filePath} ===`);
  console.log('Sample strings:', interesting.slice(0, 15));
}

inspectStrings('Assets/SMM/Agape/SMM.png');
inspectStrings('Assets/SMM/Agape/1.png');
inspectStrings('Assets/SMM/Agape/agape_ba.png');
inspectStrings('Assets/SMM/Agape/agape_services.png');
inspectStrings('Assets/SMM/Agape/AGAPE ADS 1.png');
inspectStrings('Assets/Social Media Ads/SMA.jpg');
inspectStrings('Assets/Website/create-and-arise-preview.jpg');

