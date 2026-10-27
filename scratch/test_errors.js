const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let totalIssues = 0;
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');

  // Strip script tags so we don't match template literals like `${asset.img}`
  const contentWithoutScripts = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // Check src
  const srcRegex = /src=["']([^"']+)["']/g;
  let match;
  while ((match = srcRegex.exec(contentWithoutScripts)) !== null) {
    const src = match[1];
    if (src.startsWith('http') || src.startsWith('data:') || src.startsWith('//') || src.includes('${')) continue;
    const clean = decodeURIComponent(src.split('?')[0].split('#')[0]);
    if (!fs.existsSync(clean)) {
      console.log(`[BROKEN SRC] ${file} -> "${src}" (resolved: ${clean})`);
      totalIssues++;
    }
  }

  // Check href
  const hrefRegex = /href=["']([^"']+)["']/g;
  while ((match = hrefRegex.exec(contentWithoutScripts)) !== null) {
    const href = match[1];
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:') || href.startsWith('#') || href.includes('${')) continue;
    const clean = decodeURIComponent(href.split('?')[0].split('#')[0]);
    if (!fs.existsSync(clean)) {
      console.log(`[BROKEN HREF] ${file} -> "${href}" (resolved: ${clean})`);
      totalIssues++;
    }
  }
}

console.log('Done scanning all HTML files with URI decoding and script stripping. Total issues:', totalIssues);
