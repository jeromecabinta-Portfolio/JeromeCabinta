const fs = require('fs');

const html = fs.readFileSync('smm-branding.html', 'utf8');
const pIdx = html.indexOf('const brandingAssets =');
if (pIdx !== -1) {
  console.log(html.slice(pIdx, pIdx + 1200));
} else {
  console.log('brandingAssets not found, finding img:');
  const imgs = [...html.matchAll(/Assets\/[^\s"'>]+/g)].map(m => m[0]);
  console.log(imgs);
}
