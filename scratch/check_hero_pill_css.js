const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');
const pillIdx = css.indexOf('.hero-brand-pill');
if (pillIdx !== -1) {
  console.log(css.slice(pillIdx, pillIdx + 1200));
}

