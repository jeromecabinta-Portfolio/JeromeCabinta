const fs = require('fs');

const html = fs.readFileSync('case-study-brand-system.html', 'utf8');
const s3Idx = html.indexOf('Section 3: Consistent Graphics');
if (s3Idx !== -1) {
  console.log(html.slice(s3Idx, s3Idx + 1500));
} else {
  const idx = html.indexOf('Brand Campaign');
  console.log(html.slice(idx - 100, idx + 800));
}
