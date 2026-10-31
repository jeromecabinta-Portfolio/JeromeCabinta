const fs = require('fs');
const js = fs.readFileSync('script.js', 'utf8');

const tIdx = js.indexOf('const testimonials = [');
if (tIdx !== -1) {
  console.log(js.slice(tIdx + 1200, tIdx + 3000));
}
