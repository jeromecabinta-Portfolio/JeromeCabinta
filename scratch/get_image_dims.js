const fs = require('fs');

function getImageSize(filePath) {
  const buffer = fs.readFileSync(filePath);
  if (filePath.endsWith('.png')) {
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    return { width, height };
  } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
    // Quick JPEG size parser
    let offset = 2;
    while (offset < buffer.length) {
      if (buffer[offset] === 0xFF && (buffer[offset + 1] >= 0xC0 && buffer[offset + 1] <= 0xC3)) {
        const height = buffer.readUInt16BE(offset + 5);
        const width = buffer.readUInt16BE(offset + 7);
        return { width, height };
      }
      offset += 2 + buffer.readUInt16BE(offset + 2);
    }
  }
  return null;
}

const images = [
  'Assets/SMM/Agape/SMM.png',
  'Assets/Social Media Ads/SMA.jpg',
  'Assets/SMM/Agape/agape_ba.png',
  'Assets/SMM/Agape/agape_services.png',
  'Assets/Landing page/landing page.png',
  'Assets/Book Cover/book cover.png',
  'Assets/Website/create-and-arise-preview.jpg'
];

images.forEach(img => {
  try {
    const size = getImageSize(img);
    console.log(`${img}:`, size);
  } catch (e) {
    console.log(`${img}: error`, e.message);
  }
});

