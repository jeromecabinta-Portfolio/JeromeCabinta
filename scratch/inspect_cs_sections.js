const fs = require('fs');

const csA = fs.readFileSync('case-study-campaign.html', 'utf8');
const csB = fs.readFileSync('case-study-brand-system.html', 'utf8');

console.log('--- Case Study A Deliverables / Assets ---');
const sectionMatchesA = csA.match(/<section[\s\S]*?<\/section>/g) || [];
sectionMatchesA.forEach((s, idx) => {
  const h2 = s.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)?.[1]?.trim()?.replace(/\s+/g, ' ');
  const imgs = [...s.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
  console.log(`Section ${idx + 1}: ${h2} | Imgs:`, imgs);
});

console.log('\n--- Case Study B Deliverables / Assets ---');
const sectionMatchesB = csB.match(/<section[\s\S]*?<\/section>/g) || [];
sectionMatchesB.forEach((s, idx) => {
  const h2 = s.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)?.[1]?.trim()?.replace(/\s+/g, ' ');
  const imgs = [...s.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
  console.log(`Section ${idx + 1}: ${h2} | Imgs:`, imgs);
});

