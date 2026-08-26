const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

// Let's check sections in style.css:
// 1. Navbar
// 2. Hero
// 3. About / Superpowers / Timeline
// 4. Single Posts / Filters / Cards
// 5. Reels / Shorts / Video Modals
// 6. Carousels / Previewers
// 7. Thumbnails / Before-After
// 8. Story 9:16
// 9. Certificates & Stats
// 10. Services
// 11. Testimonials
// 12. Contact / Forms / Footer
// 13. Case Studies (Agape, SMM branding, etc.)

console.log('Searching for elements with hardcoded colors that might clash in light mode...');

const rules = css.split('}');
const issues = [];

rules.forEach(r => {
  const parts = r.split('{');
  if (parts.length < 2) return;
  const selector = parts[0].trim();
  const body = parts[1].trim();

  // If selector is for behance or generic components
  if (body.includes('color: #ffffff') || body.includes('color:#ffffff') || body.includes('color: #fff') || body.includes('color:#fff')) {
    if (!selector.includes('body.dark') && !selector.includes('.btn-behance-primary') && !selector.includes('.glass-play-btn') && !selector.includes('.marquee') && !selector.includes('.badge') && !selector.includes('nav-pill')) {
      issues.push({ selector, prop: 'color: #ffffff', body: body.substring(0, 100) });
    }
  }
});

console.log(`Found ${issues.length} potential hardcoded white text selectors:`);
issues.slice(0, 30).forEach(i => console.log(`  ${i.selector}`));
