const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const missingAssets = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const regex = /(?:src|href)=["']([^"'#]+)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    let ref = match[1].split('?')[0];
    if (ref.startsWith('http://') || ref.startsWith('https://') || ref.startsWith('mailto:') || ref.startsWith('tel:') || ref.startsWith('${')) {
      continue;
    }
    try {
      ref = decodeURIComponent(ref);
    } catch(e) {}
    
    const targetPath = path.join(path.dirname(file), ref);
    if (!fs.existsSync(targetPath)) {
      missingAssets.push({ file, ref });
    }
  }
});

console.log('Real missing assets count:', missingAssets.length);
if (missingAssets.length > 0) {
  console.log(missingAssets);
} else {
  console.log('✓ 100% of all referenced local images, videos, stylesheets, and scripts exist on disk!');
}
