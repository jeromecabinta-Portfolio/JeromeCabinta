const fs = require('fs');

// 1. UPDATE style.css
let css = fs.readFileSync('style.css', 'utf8');

// Replace all hardcoded #ffffff with var(--text) in specific component title classes
css = css.replace(
  /\.behance-title-condensed\s*\{[\s\S]*?color:\s*#[0-9a-fA-F]{3,6};/m,
  `.behance-title-condensed {\n  font-family: var(--font-condensed);\n  font-size: clamp(2.8rem, 6.5vw, 5.2rem);\n  font-weight: 900;\n  letter-spacing: 2px;\n  line-height: 0.95;\n  text-transform: uppercase;\n  color: var(--text);`
);

css = css.replace(
  /\.hero-title-main\s*\{[\s\S]*?color:\s*#[0-9a-fA-F]{3,6};/m,
  `.hero-title-main {\n  font-family: var(--font-condensed);\n  font-size: clamp(3.2rem, 7.5vw, 6.2rem);\n  font-weight: 900;\n  letter-spacing: 2px;\n  line-height: 0.92;\n  text-transform: uppercase;\n  color: var(--text);`
);

css = css.replace(
  /\.hero-value-statement\s*\{[\s\S]*?color:\s*#[0-9a-fA-F]{3,6};/m,
  `.hero-value-statement {\n  font-size: 1.15rem;\n  line-height: 1.6;\n  color: var(--text-light);`
);

css = css.replace(
  /\.btn-behance-outline\s*\{[\s\S]*?color:\s*#[0-9a-fA-F]{3,6}\s*!important;[\s\S]*?border:\s*1px solid rgba\(255,\s*255,\s*255,\s*0\.3\);/m,
  `.btn-behance-outline {\n  background: transparent;\n  color: var(--text) !important;\n  font-family: var(--font-body);\n  font-weight: 700;\n  font-size: 0.95rem;\n  padding: 13px 26px;\n  border-radius: 999px;\n  border: 1px solid var(--border);`
);

css = css.replace(
  /\.post-card-title\s*\{[\s\S]*?color:\s*#[0-9a-fA-F]{3,6};/m,
  `.post-card-title {\n  font-size: 1.05rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text);`
);

css = css.replace(
  /\.carousel-deck-title\s*\{[\s\S]*?color:\s*#[0-9a-fA-F]{3,6};/m,
  `.carousel-deck-title {\n  font-size: 1.15rem;\n  font-weight: 800;\n  margin: 0;\n  color: var(--text);`
);

css = css.replace(
  /\.service-card-title\s*\{[\s\S]*?color:\s*#[0-9a-fA-F]{3,6};/m,
  `.service-card-title {\n  font-size: 1.12rem;\n  font-weight: 800;\n  margin-bottom: 10px;\n  color: var(--text);`
);

css = css.replace(
  /\.outro-headline\s*\{[\s\S]*?color:\s*#[0-9a-fA-F]{3,6};/m,
  `.outro-headline {\n  font-family: var(--font-condensed);\n  font-size: clamp(2.8rem, 5.5vw, 4.5rem);\n  font-weight: 900;\n  line-height: 0.95;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: var(--text);`
);

css = css.replace(
  /\.outro-action-text p\s*\{[\s\S]*?color:\s*#[0-9a-fA-F]{3,6};/m,
  `.outro-action-text p {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--text);`
);

css = css.replace(
  /\.form-input-group input,\s*\.form-input-group textarea\s*\{[\s\S]*?color:\s*#[0-9a-fA-F]{3,6};/m,
  `.form-input-group input,\n.form-input-group textarea {\n  background: var(--surface-1);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 14px 16px;\n  color: var(--text);`
);

css = css.replace(
  /\.skill-name\s*\{[\s\S]*?color:\s*#[0-9a-fA-F]{3,6};/m,
  `.skill-name {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text);`
);

css = css.replace(
  /\.testi-active-name\s*\{[\s\S]*?color:\s*#[0-9a-fA-F]{3,6};/m,
  `.testi-active-name {\n  font-family: var(--font-condensed);\n  font-size: clamp(2.2rem, 4.5vw, 3.5rem);\n  font-weight: 900;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  color: var(--text);`
);

css = css.replace(
  /\.testi-active-text\s*\{[\s\S]*?color:\s*#e4ebe5;/m,
  `.testi-active-text {\n  font-size: 1.15rem;\n  line-height: 1.6;\n  color: var(--text-light);`
);

css = css.replace(
  /\.testi-thumb-name\s*\{[\s\S]*?color:\s*#[0-9a-fA-F]{3,6};/m,
  `.testi-thumb-name {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--text);`
);

fs.writeFileSync('style.css', css, 'utf8');
console.log('Updated style.css!');

// 2. UPDATE index.html
let html = fs.readFileSync('index.html', 'utf8');

// Fix inline #ffffff styles
html = html.replace('style="font-size: 0.85rem; font-weight: 800; color: #ffffff;"', 'style="font-size: 0.85rem; font-weight: 800; color: var(--text);"');
html = html.replace('style="font-size: 1.15rem; font-weight: 800; margin: 0; color: #ffffff;"', 'style="font-size: 1.15rem; font-weight: 800; margin: 0; color: var(--text);"');
html = html.replace('style="color: #ffffff; margin-bottom: 16px; font-weight: 800;"', 'style="color: var(--text); margin-bottom: 16px; font-weight: 800;"');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Updated index.html!');
