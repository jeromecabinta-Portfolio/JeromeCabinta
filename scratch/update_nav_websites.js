const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const target = `<span class="dropdown-link-title" style="display: flex; align-items: center; justify-content: space-between; gap: 4px;">
                    <span>Create &amp; Arise</span>
                    <span style="font-size: 0.6rem; font-weight: 800; background: #00e5ff; color: #000; padding: 1px 6px; border-radius: 999px; line-height: 1.3;">LIVE CLIENT WEB</span>
                  </span>
                  <span class="dropdown-link-desc">Live Philippine Studio Platform</span>`;

const replacement = `<span class="dropdown-link-title" style="display: flex; align-items: center; justify-content: space-between; gap: 4px;">
                    <span>Website Projects</span>
                    <span style="font-size: 0.6rem; font-weight: 800; background: #00e5ff; color: #000; padding: 1px 6px; border-radius: 999px; line-height: 1.3;">LIVE CLIENTS</span>
                  </span>
                  <span class="dropdown-link-desc">Live Client Web Platforms</span>`;

const normTarget = target.replace(/\r\n/g, '\n');
const normHtml = html.replace(/\r\n/g, '\n');

if (normHtml.includes(normTarget)) {
  html = normHtml.replace(normTarget, replacement.replace(/\r\n/g, '\n'));
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('✓ Successfully updated nav dropdown title to Website Projects!');
} else {
  console.error('❌ Could not match target in index.html');
}
