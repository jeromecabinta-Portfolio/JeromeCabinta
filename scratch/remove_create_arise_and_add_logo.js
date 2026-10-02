const fs = require('fs');

// 1. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Update favicon
indexHtml = indexHtml.replace(/<link rel="icon" [^>]+>/gi, `<link rel="icon" type="image/png" href="Assets/logo.png" />\n  <link rel="apple-touch-icon" href="Assets/logo.png" />`);

// Navbar brand
const oldIndexNav = `<a href="#hero" class="logo custom-logo nav-brand-wrap">
        <div class="nav-brand-text-col">
          <span class="nav-brand-name">JEROME CABINTA</span>
          <span class="nav-brand-sub">CREATE &amp; ARISE</span>
        </div>
      </a>`;

const newIndexNav = `<a href="#hero" class="logo custom-logo nav-brand-wrap">
        <img src="Assets/logo.png" alt="Jerome Cabinta Logo" class="nav-brand-logo" />
        <div class="nav-brand-text-col">
          <span class="nav-brand-name">JEROME CABINTA</span>
          <span class="nav-brand-sub">CREATIVE STRATEGIST</span>
        </div>
      </a>`;

if (indexHtml.includes(oldIndexNav)) {
  indexHtml = indexHtml.replace(oldIndexNav, newIndexNav);
} else {
  // Regex fallback for nav
  indexHtml = indexHtml.replace(
    /<a href="#hero" class="logo custom-logo nav-brand-wrap">[\s\S]*?<\/a>/,
    newIndexNav
  );
}

// Hero brand pill
const oldHeroPill = `<div class="hero-brand-pill">
            <div class="hero-brand-pill-text">
              <span class="hero-brand-pill-tag">CREATE &amp; ARISE &bull; ISAIAH 60:1</span>
              <span class="hero-brand-pill-title">Jerome Cabinta Creative Studio</span>
            </div>
          </div>`;

const newHeroPill = `<div class="hero-brand-pill">
            <img src="Assets/logo.png" alt="Jerome Cabinta Logo" class="hero-brand-logo" />
            <div class="hero-brand-pill-text">
              <span class="hero-brand-pill-tag"><i class="fas fa-sparkles"></i> DIGITAL GROWTH &bull; STRATEGY</span>
              <span class="hero-brand-pill-title">Jerome Cabinta Creative Studio</span>
            </div>
          </div>`;

if (indexHtml.includes(oldHeroPill)) {
  indexHtml = indexHtml.replace(oldHeroPill, newHeroPill);
} else {
  indexHtml = indexHtml.replace(
    /<div class="hero-brand-pill">[\s\S]*?<\/div>\s*<\/div>/,
    newHeroPill
  );
}

// Thumbnail 5 podcast title
indexHtml = indexHtml.replace(/Create &amp; Arise Podcast: Make Your Own Future/g, 'Creative Strategy Podcast: Make Your Own Future');
indexHtml = indexHtml.replace(/Create & Arise Podcast/g, 'Creative Strategy Podcast');

fs.writeFileSync('index.html', indexHtml);
console.log('index.html updated successfully!');

// 2. Subpages navbar and branding updates
const subpages = [
  'agape-case-study.html',
  'book-cover.html',
  'smm-branding.html',
  'smm-ecommerce.html',
  'smm-mockup.html',
  'smm-sneakers.html',
  'social-media-ads.html',
  'story.html'
];

const newSubNav = `<a href="index.html" class="logo custom-logo nav-brand-wrap">
        <img src="Assets/logo.png" alt="Jerome Cabinta Logo" class="nav-brand-logo" />
        <div class="nav-brand-text-col">
          <span class="nav-brand-name">JEROME CABINTA</span>
          <span class="nav-brand-sub">CREATIVE STRATEGIST</span>
        </div>
      </a>`;

subpages.forEach(file => {
  if (!fs.existsSync(file)) return;
  let html = fs.readFileSync(file, 'utf8');

  // Favicon
  html = html.replace(/<link rel="icon" [^>]+>/gi, `<link rel="icon" type="image/png" href="Assets/logo.png" />\n  <link rel="apple-touch-icon" href="Assets/logo.png" />`);

  // Nav brand wrap
  html = html.replace(
    /<a href="index.html" class="logo custom-logo nav-brand-wrap">[\s\S]*?<\/a>/,
    newSubNav
  );

  // Generic replace for any remaining nav-brand-sub
  html = html.replace(/<span class="nav-brand-sub">CREATE &amp; ARISE<\/span>/g, '<span class="nav-brand-sub">CREATIVE STRATEGIST</span>');

  fs.writeFileSync(file, html);
  console.log(`${file} navbar & favicon updated!`);
});

// 3. Clean specific pages of "Create and Arise" & "Create & Arise"
// smm-branding.html
let smmBranding = fs.readFileSync('smm-branding.html', 'utf8');
smmBranding = smmBranding.replace(/<p class="hero-subtitle">Create and Arise\.<\/p>/g, '<p class="hero-subtitle">Apex Outdoors Brand Identity.</p>');
smmBranding = smmBranding.replace(/Create and Arise\./g, 'Apex Outdoors.');
fs.writeFileSync('smm-branding.html', smmBranding);
console.log('smm-branding.html cleaned!');

// smm-mockup.html
let smmMockup = fs.readFileSync('smm-mockup.html', 'utf8');
smmMockup = smmMockup.replace(/\/\* ===== Theme Variables for Create & Arise ===== \*\//g, '/* ===== Theme Variables for Brand Merchandise & Mockups ===== */');
smmMockup = smmMockup.replace(/<p class="hero-subtitle">Create and Arise\.<\/p>/g, '<p class="hero-subtitle">Brand Merchandise &amp; Product Mock-ups.</p>');
smmMockup = smmMockup.replace(/prototypes, and editorial assets tailored for Thynk Unlimited and Create & Arise\./g, 'prototypes, and editorial packaging assets for modern retail brands.');
smmMockup = smmMockup.replace(/Create and Arise\./g, 'Brand Merchandise Studio.');
smmMockup = smmMockup.replace(/Create & Arise Scripture Shopping Bag/g, 'Minimalist Scripture Shopping Bag');
smmMockup = smmMockup.replace(/the signature 'Create & Arise' emblem/g, 'the signature brand emblem');
smmMockup = smmMockup.replace(/Create & Arise Minimalist Shopping Bag/g, 'Luxury Minimalist Shopping Bag');
smmMockup = smmMockup.replace(/'Create and Arise' seal/g, 'brand seal');
smmMockup = smmMockup.replace(/Create & Arise Folded T-Shirt/g, 'Signature Graphic Folded T-Shirt');
smmMockup = smmMockup.replace(/'CREATE AND ARISE' typography/g, 'signature apparel typography');
smmMockup = smmMockup.replace(/Create & Arise Ceramic Mug/g, 'Modern Ceramic Mug');
smmMockup = smmMockup.replace(/Create & Arise Embroidered Cap/g, 'Signature Embroidered Cap');
smmMockup = smmMockup.replace(/'Create and Arise' logo/g, 'brand logo');
smmMockup = smmMockup.replace(/Create & Arise Kraft Shopping Bag/g, 'Eco-Kraft Shopping Bag');
smmMockup = smmMockup.replace(/Create & Arise Stand-up Pouch/g, 'Matte Stand-up Pouch');
smmMockup = smmMockup.replace(/Create & Arise Matte Coffee Cup/g, 'Matte Black Coffee Cup');
smmMockup = smmMockup.replace(/'Create and Arise 2025' branding/g, 'premium brand packaging');
smmMockup = smmMockup.replace(/Create & Arise Premium Coffee Bag/g, 'Artisan Premium Coffee Bag');
smmMockup = smmMockup.replace(/'CREATE AND ARISE'/g, "'FUEL YOUR SPIRIT'");

fs.writeFileSync('smm-mockup.html', smmMockup);
console.log('smm-mockup.html cleaned!');
