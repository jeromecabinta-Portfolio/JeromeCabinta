const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

// Let's check sections in style.css:
// Find rules with hardcoded #fff, #ffffff, #000, #000000, #111a13, #070d08, #0e1610, rgba(255,255,255,...) 
const lines = css.split('\n');

const checks = [
  'behance-title-condensed',
  'hero-title-main',
  'hero-value-statement',
  'hero-stat-card',
  'hero-stat-number',
  'hero-stat-label',
  'hero-visual-card',
  'hero-floating-badge',
  'btn-behance-primary',
  'btn-behance-outline',
  'post-card-behance',
  'post-card-title',
  'post-card-img-wrap',
  'reel-card-behance',
  'reel-media-wrap',
  'carousel-deck-card',
  'carousel-deck-title',
  'thumbnail-card-behance',
  'certificate-card-behance',
  'story-card-916',
  'service-card-behance',
  'service-card-title',
  'service-card-desc',
  'outro-contact-card',
  'outro-headline',
  'outro-action-item',
  'outro-action-text',
  'social-qr-card',
  'growth-brief-form',
  'form-input-group',
  'skills-category',
  'skill-card',
  'skill-name',
  'testi-slider-bg',
  'testi-active-name',
  'testi-active-text',
  'testi-thumb',
  'testi-thumb-name',
  'timeline-behance-card',
  'superpower-card',
  'navbar',
  'nav-pill',
  'theme-toggle'
];

checks.forEach(term => {
  const matching = [];
  lines.forEach((l, i) => {
    if (l.includes(term) && (l.includes('{') || l.includes('color') || l.includes('background') || l.includes('border'))) {
      matching.push(`${i+1}: ${l.trim()}`);
    }
  });
  console.log(`=== ${term} (${matching.length} matches) ===`);
  matching.slice(0, 5).forEach(m => console.log('  ' + m));
});
