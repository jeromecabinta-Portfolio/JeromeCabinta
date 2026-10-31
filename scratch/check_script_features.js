const fs = require('fs');
const js = fs.readFileSync('script.js', 'utf8');

console.log('toggleSmmArchiveBtn in script.js?:', js.includes('toggleSmmArchiveBtn'));
console.log('archive-tab-btn in script.js?:', js.includes('archive-tab-btn') || js.includes('data-archive-filter'));
console.log('testimonials in script.js count:', (js.match(/name:\s*["'][^"']+["']/g) || []).length);

const testArrayMatch = js.match(/const testimonials\s*=\s*\[([\s\S]*?)\];/);
if (testArrayMatch) {
  console.log('\nTestimonials array:');
  console.log(testArrayMatch[0].slice(0, 600));
}

