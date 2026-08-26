const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const missingAssets = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Find all src="..." and href="..." references (excluding http/https/mailto/#)
  const regex = /(?:src|href)=["']([^"'#]+)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const ref = match[1].split('?')[0]; // strip query params
    if (ref.startsWith('http://') || ref.startsWith('https://') || ref.startsWith('mailto:') || ref.startsWith('tel:')) {
      continue;
    }
    
    // Resolve relative path
    const targetPath = path.join(path.dirname(file), ref);
    if (!fs.existsSync(targetPath)) {
      missingAssets.push({ file, ref });
    }
  }
});

console.log('Total asset reference checks completed.');
console.log('Missing assets found:', missingAssets.length);
if (missingAssets.length > 0) {
  console.log(missingAssets);
} else {
  console.log('✓ All referenced assets, images, stylesheets, and scripts exist on disk!');
}
