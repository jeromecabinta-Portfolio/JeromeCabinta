const fs = require('fs');
const b1 = fs.readFileSync('scratch/block1.html', 'utf-8');
const b2 = fs.readFileSync('scratch/block2.html', 'utf-8');

console.log('Block 1 brand cards:', (b1.match(/data-img="Assets\/Brand Campaign\/[^"]+"/g) || []).length);
console.log('Block 1 church cards:', (b1.match(/data-img="Assets\/Social Media Ads\/calvary baptist church\/[^"]+"/g) || []).length);
console.log('Block 1 mockup cards:', (b1.match(/data-img="Assets\/Mock ups\/[^"]+"/g) || []).length);

console.log('Block 2 brand cards:', (b2.match(/data-img="Assets\/Brand Campaign\/[^"]+"/g) || []).length);
console.log('Block 2 church cards:', (b2.match(/data-img="Assets\/Social Media Ads\/calvary baptist church\/[^"]+"/g) || []).length);
console.log('Block 2 mockup cards:', (b2.match(/data-img="Assets\/Mock ups\/[^"]+"/g) || []).length);
