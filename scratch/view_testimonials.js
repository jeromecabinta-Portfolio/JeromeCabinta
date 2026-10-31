const fs = require('fs');
const js = fs.readFileSync('script.js', 'utf8');

const testArrayMatch = js.match(/const testimonials\s*=\s*\[([\s\S]*?)\];/);
if (testArrayMatch) {
  console.log(testArrayMatch[0]);
}

