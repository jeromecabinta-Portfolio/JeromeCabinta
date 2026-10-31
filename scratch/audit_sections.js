const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const sectionMatches = [...html.matchAll(/<section[^>]*id=["']([^"']+)["'][^>]*>/g)];
console.log('Sections found in order:');
sectionMatches.forEach((m, i) => {
  console.log(`  ${i + 1}. #${m[1]}`);
});

// Check if any old tags or unwanted sections remain
console.log('\nIntegrity checks:');
console.log('Contains #case-studies?:', html.includes('id="case-studies"'));
console.log('Contains #posts?:', html.includes('id="posts"'));
console.log('Contains #reels?:', html.includes('id="reels"'));
console.log('Contains #carousels?:', html.includes('id="carousels"'));
console.log('Contains #workflows?:', html.includes('id="workflows"'));
console.log('Contains #analytics?:', html.includes('id="analytics"'));
console.log('Contains #about?:', html.includes('id="about"'));
console.log('Contains #websites?:', html.includes('id="websites"'));
console.log('Contains #skills?:', html.includes('id="skills"'));
console.log('Contains #services?:', html.includes('id="services"'));
console.log('Contains #certificates?:', html.includes('id="certificates"'));
console.log('Contains #testimonials?:', html.includes('id="testimonials"'));
console.log('Contains #graphic-design-archive?:', html.includes('id="graphic-design-archive"'));
console.log('Contains #contact?:', html.includes('id="contact"'));
console.log('Any duplicate section IDs?:');
const ids = sectionMatches.map(m => m[1]);
const dupes = ids.filter((item, index) => ids.indexOf(item) !== index);
console.log(dupes.length ? dupes : 'None! All section IDs are unique.');

