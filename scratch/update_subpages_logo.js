const fs = require('fs');

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

subpages.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // 1. Add favicon if missing
  if (!content.includes('Assets/logo.png') && content.includes('<head>')) {
    content = content.replace('<head>', '<head>\n  <link rel="icon" type="image/png" href="Assets/logo.png" />\n  <link rel="apple-touch-icon" href="Assets/logo.png" />');
  }

  // 2. Update navbar logo
  const oldLogoRegex = /<a href="index\.html" class="logo custom-logo">[\s\S]*?<\/a>/;
  const newLogoHtml = `<a href="index.html" class="logo custom-logo nav-brand-wrap">
        <img src="Assets/logo.png" alt="Create and Arise Logo" class="nav-brand-logo" />
        <div class="nav-brand-text-col">
          <span class="nav-brand-name">JEROME CABINTA</span>
          <span class="nav-brand-sub">CREATE &amp; ARISE</span>
        </div>
      </a>`;

  if (oldLogoRegex.test(content)) {
    content = content.replace(oldLogoRegex, newLogoHtml);
  }

  fs.writeFileSync(file, content);
  console.log(`Updated logo in ${file}`);
});
