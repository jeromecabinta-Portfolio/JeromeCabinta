const fs = require('fs');
const path = require('path');

const svgFavicon = `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='25' fill='%230066ff'/><text x='50' y='68' font-family='sans-serif' font-size='56' font-weight='900' fill='white' text-anchor='middle'>JC</text></svg>" />`;

// 1. Update style.css
let css = fs.readFileSync('style.css', 'utf8');

// Replace Root & Themes
const oldRootPattern = /:root\s*\{[\s\S]*?--checkerboard-c2:\s*#e4e8ed;[\s\S]*?\}/;
const newRoot = `:root {
  --bg: #06080e;
  --surface: #0a0e17;
  --surface-1: #0f1523;
  --surface-2: #151d30;
  --text: #ffffff;
  --text-light: #94a3b8;
  --border: rgba(0, 102, 255, 0.18);
  --shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  --radius: 24px;
  --container: 1440px;
  --accent: #0066ff;
  --accent-gradient: linear-gradient(135deg, #00d2ff 0%, #0066ff 50%, #0044cc 100%);
  --agape-orange: #0066ff;

  /* Brand Signature Palette - Electric Sapphire & High-Impact Azure Blue */
  --behance-lime: #0066ff;
  --behance-lime-hover: #38bdf8;
  --behance-lime-glow: rgba(0, 102, 255, 0.45);
  --behance-lime-dim: rgba(0, 102, 255, 0.12);
  --behance-blue: #00d2ff;
  --behance-blue-glow: rgba(0, 210, 255, 0.4);
  --canvas-obsidian: #06080e;
  --canvas-obsidian-2: #0a0e17;
  --canvas-card: #0d121e;
  --canvas-card-hover: #121929;
  --canvas-border: rgba(0, 102, 255, 0.18);
  --canvas-border-hover: rgba(0, 102, 255, 0.5);
  --checkerboard-c1: #ffffff;
  --checkerboard-c2: #e4e8ed;

  /* Typography */
  --font-condensed: 'Bebas Neue', 'Syne', sans-serif;
  --font-display: 'Syne', 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Space Mono', monospace;
}`;

css = css.replace(oldRootPattern, newRoot);

const oldDarkPattern = /body\.dark\s*\{[\s\S]*?--behance-lime-dim:\s*rgba\([^)]+\);[\s\S]*?\}/;
const newDark = `body.dark {
  --bg: #06080e;
  --surface: #0a0e17;
  --surface-1: #0f1523;
  --surface-2: #151d30;
  --text: #ffffff;
  --text-light: #94a3b8;
  --border: rgba(0, 102, 255, 0.18);
  --shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  --canvas-obsidian: #06080e;
  --canvas-obsidian-2: #0a0e17;
  --canvas-card: #0d121e;
  --canvas-card-hover: #121929;
  --canvas-border: rgba(0, 102, 255, 0.18);
  --canvas-border-hover: rgba(0, 102, 255, 0.5);
  --behance-lime: #0066ff;
  --behance-lime-hover: #38bdf8;
  --behance-lime-glow: rgba(0, 102, 255, 0.45);
  --behance-lime-dim: rgba(0, 102, 255, 0.12);
}`;

css = css.replace(oldDarkPattern, newDark);

const oldLightPattern = /body:not\(\.dark\)\s*\{[\s\S]*?--behance-lime-dim:\s*rgba\([^)]+\);[\s\S]*?\}/;
const newLight = `body:not(.dark) {
  --bg: #f8fafc;
  --surface: #ffffff;
  --surface-1: #f1f5f9;
  --surface-2: #e2e8f0;
  --text: #0f172a;
  --text-light: #64748b;
  --border: rgba(15, 23, 42, 0.1);
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  --canvas-obsidian: #f8fafc;
  --canvas-obsidian-2: #f1f5f9;
  --canvas-card: #ffffff;
  --canvas-card-hover: #f0f7ff;
  --canvas-border: rgba(15, 23, 42, 0.1);
  --canvas-border-hover: rgba(0, 102, 255, 0.45);
  --behance-lime: #0066ff;
  --behance-lime-hover: #0052cc;
  --behance-lime-glow: rgba(0, 102, 255, 0.3);
  --behance-lime-dim: rgba(0, 102, 255, 0.08);
}`;

css = css.replace(oldLightPattern, newLight);

// Replace gradients & rgba
css = css.replaceAll(`linear-gradient(to right, #fcb117, #f88e1e, #f47b20)`, `linear-gradient(to right, #38bdf8, #0066ff, #0044cc)`);
css = css.replaceAll(`linear-gradient(135deg, #fcb117 0%, #f88e1e 50%, #f47b20 100%)`, `linear-gradient(135deg, #00d2ff 0%, #0066ff 50%, #0044cc 100%)`);

// Orange RGB replacements
css = css.replaceAll(`249, 158, 26`, `0, 102, 255`);
css = css.replaceAll(`217, 98, 0`, `0, 102, 255`);

// Warm dark backgrounds to midnight blue obsidian
css = css.replaceAll(`#0b0908`, `#06080e`);
css = css.replaceAll(`#110f0d`, `#0a0e17`);
css = css.replaceAll(`#171411`, `#0f1523`);
css = css.replaceAll(`#1f1a16`, `#151d30`);
css = css.replaceAll(`#14110e`, `#0d121e`);
css = css.replaceAll(`#1c1813`, `#121929`);
css = css.replaceAll(`#0f0d0a`, `#080c14`);
css = css.replaceAll(`#1a1510`, `#0f1523`);
css = css.replaceAll(`rgba(17, 15, 13, 0.95)`, `rgba(10, 14, 23, 0.95)`);
css = css.replaceAll(`rgba(14, 12, 10, 0.88)`, `rgba(10, 14, 23, 0.88)`);
css = css.replaceAll(`rgba(23, 20, 17, 0.85)`, `rgba(13, 18, 30, 0.85)`);
css = css.replaceAll(`rgba(11, 9, 8, 0.7)`, `rgba(6, 8, 14, 0.7)`);

// Warm light backgrounds to crisp slate
css = css.replaceAll(`rgba(24, 21, 18, 0.12)`, `rgba(15, 23, 42, 0.12)`);
css = css.replaceAll(`rgba(24, 21, 18, 0.14)`, `rgba(15, 23, 42, 0.14)`);
css = css.replaceAll(`#181512`, `#0f172a`);
css = css.replaceAll(`#635c55`, `#64748b`);
css = css.replaceAll(`#faf8f5`, `#f8fafc`);
css = css.replaceAll(`#f5efe8`, `#f1f5f9`);
css = css.replaceAll(`#ebdccf`, `#e2e8f0`);
css = css.replaceAll(`#a8a29e`, `#94a3b8`);
css = css.replaceAll(`#d96200`, `#0066ff`);
css = css.replaceAll(`#b84e00`, `#0052cc`);
css = css.replaceAll(`#f99e1a`, `#0066ff`);
css = css.replaceAll(`#ffb42e`, `#38bdf8`);
css = css.replaceAll(`#fcb117`, `#38bdf8`);
css = css.replaceAll(`#f88e1e`, `#0066ff`);
css = css.replaceAll(`#f47b20`, `#0044cc`);

// Navbar brand styling update (no logo image, sleek typographic badge)
const oldNavBrandWrap = `.nav-brand-wrap {
  display: inline-flex !important;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: transform 0.25s ease;
}`;

const newNavBrandWrap = `.nav-brand-wrap {
  display: inline-flex !important;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: transform 0.25s ease, opacity 0.25s ease;
  padding: 4px 0;
}`;

css = css.replace(oldNavBrandWrap, newNavBrandWrap);

// Hero brand pill update (clean badge pill without logo image)
const oldHeroBrandPill = `.hero-brand-pill {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(0, 102, 255, 0.08);
  border: 1px solid rgba(0, 102, 255, 0.25);
  padding: 6px 18px 6px 8px;
  border-radius: 999px;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 102, 255, 0.15);
  transition: all 0.3s ease;
}`;

const newHeroBrandPill = `.hero-brand-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(0, 102, 255, 0.08);
  border: 1px solid rgba(0, 102, 255, 0.25);
  padding: 8px 20px;
  border-radius: 999px;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 102, 255, 0.15);
  transition: all 0.3s ease;
}`;

css = css.replace(oldHeroBrandPill, newHeroBrandPill);

fs.writeFileSync('style.css', css);
console.log('style.css successfully updated with modern Blue Brand palette!');

// 2. Update HTML files
const htmlFiles = [
  'index.html',
  'agape-case-study.html',
  'book-cover.html',
  'smm-branding.html',
  'smm-ecommerce.html',
  'smm-mockup.html',
  'smm-sneakers.html',
  'social-media-ads.html',
  'story.html'
];

htmlFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let html = fs.readFileSync(file, 'utf8');

  // Replace favicons
  html = html.replace(/<link rel="icon" [^>]+>/gi, svgFavicon);
  html = html.replace(/<link rel="apple-touch-icon" [^>]+>\s*/gi, '');

  // Remove nav logo image
  html = html.replace(/<img[^>]*src="Assets\/logo\.png"[^>]*class="nav-brand-logo"[^>]*>\s*/gi, '');
  html = html.replace(/<img[^>]*class="nav-brand-logo"[^>]*src="Assets\/logo\.png"[^>]*>\s*/gi, '');

  // In index.html, remove hero logo image
  html = html.replace(/<img[^>]*src="Assets\/logo\.png"[^>]*class="hero-brand-logo"[^>]*>\s*/gi, '');
  html = html.replace(/<img[^>]*class="hero-brand-logo"[^>]*src="Assets\/logo\.png"[^>]*>\s*/gi, '');

  // Replace any hardcoded warm backgrounds
  html = html.replaceAll('#0b0908', '#06080e');

  fs.writeFileSync(file, html);
  console.log(`${file} updated successfully!`);
});

// Update subpages with specific orange accents (smm-ecommerce.html, smm-sneakers.html, social-media-ads.html)
const specificSubpages = ['smm-ecommerce.html', 'smm-sneakers.html', 'social-media-ads.html'];
specificSubpages.forEach(file => {
  if (!fs.existsSync(file)) return;
  let html = fs.readFileSync(file, 'utf8');
  html = html.replaceAll('rgba(243, 146, 0, 0.15)', 'rgba(0, 102, 255, 0.15)');
  html = html.replaceAll('rgba(243, 146, 0, 0.12)', 'rgba(0, 102, 255, 0.12)');
  html = html.replaceAll('rgba(243, 146, 0, 0.08)', 'rgba(0, 102, 255, 0.08)');
  html = html.replaceAll('rgba(243, 146, 0, 0.2)', 'rgba(0, 102, 255, 0.2)');
  html = html.replaceAll('rgba(243, 146, 0, 0.35)', 'rgba(0, 102, 255, 0.35)');
  html = html.replaceAll('rgba(243, 146, 0, 0.85)', 'rgba(0, 102, 255, 0.85)');
  fs.writeFileSync(file, html);
  console.log(`Subpage accents updated for ${file}`);
});
