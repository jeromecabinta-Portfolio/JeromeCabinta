const fs = require('fs');
const js = fs.readFileSync('script.js', 'utf8');

const lbIdx = js.indexOf('PROJECT MODAL + SLIDER');
if (lbIdx !== -1) {
  console.log(js.slice(lbIdx + 7000, lbIdx + 9500));
}
