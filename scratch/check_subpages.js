const fs = require('fs');

// Let's check if any subpage has specific styles that might need polish
const pages = [
  'story.html',
  'contact.html',
  'about.html',
  'services.html',
  'projects.html',
  'testimonials.html',
  'book-cover.html',
  'agape-case-study.html',
  'smm-branding.html',
  'smm-ecommerce.html',
  'smm-mockup.html',
  'smm-sneakers.html',
  'social-media-ads.html'
];

pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  console.log(`Page: ${p} - length: ${content.length}`);
});
