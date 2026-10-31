const fs = require('fs');

const csA = fs.readFileSync('case-study-campaign.html', 'utf8');
const csB = fs.readFileSync('case-study-brand-system.html', 'utf8');

console.log('--- Case Study A (case-study-campaign.html) ---');
console.log('Title match:', csA.match(/<title>([\s\S]*?)<\/title>/)?.[1]);
console.log('H1 match:', csA.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]);
const imgsA = [...csA.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Images in Case Study A:', [...new Set(imgsA)]);

console.log('\n--- Case Study B (case-study-brand-system.html) ---');
console.log('Title match:', csB.match(/<title>([\s\S]*?)<\/title>/)?.[1]);
console.log('H1 match:', csB.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]);
const imgsB = [...csB.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Images in Case Study B:', [...new Set(imgsB)]);

