const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');
const csBannerIdx = css.indexOf('.featured-cs-banner');
if (csBannerIdx !== -1) {
  console.log(css.slice(csBannerIdx, csBannerIdx + 600));
} else {
  console.log('featured-cs-banner not found in style.css');
}

