const fs = require('fs');

const files = [
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

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let html = fs.readFileSync(file, 'utf8');

  // Remove any stray SVG tags or corrupted link tags
  html = html.replace(/<rect width='100'[^>]*><text[^>]*>[^<]*<\/text><\/svg>" \/>/gi, '');
  html = html.replace(/<link rel="icon" type="image\/svg\+xml"[^>]*\/>/gi, '<link rel="icon" type="image/png" href="Assets/logo.png" />');

  // Standardize head favicons
  html = html.replace(/(<head>[\s\S]*?)(<link rel="icon"[^>]*>[\s\S]*?<link rel="apple-touch-icon"[^>]*>)([\s\S]*?<\/head>)/i, (match, p1, p2, p3) => {
    // Keep single clean favicon
    return p1 + '<link rel="icon" type="image/png" href="Assets/logo.png" />\n  <link rel="apple-touch-icon" href="Assets/logo.png" />' + p3;
  });

  fs.writeFileSync(file, html);
  console.log(`${file} cleaned successfully.`);
});
