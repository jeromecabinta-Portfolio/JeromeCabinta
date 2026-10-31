const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

function getImageSize(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    if (filePath.endsWith('.png')) {
      const width = buffer.readUInt32BE(16);
      const height = buffer.readUInt32BE(20);
      return { width, height };
    } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
      let offset = 2;
      while (offset < buffer.length - 8) {
        if (buffer[offset] === 0xFF && (buffer[offset + 1] >= 0xC0 && buffer[offset + 1] <= 0xC3)) {
          const height = buffer.readUInt16BE(offset + 5);
          const width = buffer.readUInt16BE(offset + 7);
          return { width, height };
        }
        offset += 2 + buffer.readUInt16BE(offset + 2);
      }
    }
  } catch(e) {}
  return null;
}

const all = getFiles('Assets');
const imgs = all.filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.avif'));

console.log('Total images:', imgs.length);

const wideImgs = [];
imgs.forEach(f => {
  const size = getImageSize(f);
  if (size && size.width && size.height && size.width < 10000 && size.height < 10000) {
    const ratio = size.width / size.height;
    if (ratio >= 1.2) {
      wideImgs.push({ path: f, ...size, ratio: ratio.toFixed(2) });
    }
  }
});

console.log(`Wide images (aspect ratio >= 1.2): ${wideImgs.length}`);
wideImgs.forEach(w => console.log(`  ${w.path}: ${w.width}x${w.height} (ratio: ${w.ratio})`));

