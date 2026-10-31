const fs = require('fs');

const files = [
  'case-study-campaign.html',
  'case-study-brand-system.html',
  'smm-branding.html',
  'smm-ecommerce.html',
  'smm-mockup.html',
  'smm-sneakers.html',
  'social-media-ads.html',
  'book-cover.html'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const html = fs.readFileSync(f, 'utf8');
    const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim();
    const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.trim()?.replace(/\s+/g, ' ');
    const imgs = [...html.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
    console.log(`\n=== ${f} ===`);
    console.log(`Title: ${title}`);
    console.log(`H1: ${h1}`);
    console.log(`Images (${imgs.length}):`, imgs.slice(0, 5));
  }
});
