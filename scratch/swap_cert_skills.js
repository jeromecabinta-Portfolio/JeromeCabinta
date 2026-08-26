const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Extract sections
const certStart = '<!-- =========================\n       #CERTIFICATES (VERIFIED CREDENTIALS & SPECIALIZATIONS)\n  ========================= -->';
const servStart = '<!-- =========================\n       SERVICES & WHAT I CAN DO FOR YOU\n  ========================= -->';
const skillStart = '<!-- =========================\n       TOOLS & SKILLS\n  ========================= -->';
const testiStart = '<!-- =========================\n       TESTIMONIALS SLIDER\n  ========================= -->';

const certIdx = html.indexOf(certStart);
const servIdx = html.indexOf(servStart);
const skillIdx = html.indexOf(skillStart);
const testiIdx = html.indexOf(testiStart);

if (certIdx !== -1 && servIdx !== -1 && skillIdx !== -1 && testiIdx !== -1) {
  const certBlock = html.substring(certIdx, servIdx);
  const servBlock = html.substring(servIdx, skillIdx);
  const skillBlock = html.substring(skillIdx, testiIdx);

  // New sequence: skills -> services -> certificates
  const newMiddle = skillBlock + servBlock + certBlock;

  html = html.substring(0, certIdx) + newMiddle + html.substring(testiIdx);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Successfully switched #CERTIFICATES and TOOLS & SKILLS in index.html!');
} else {
  console.log('Indices not found:', { certIdx, servIdx, skillIdx, testiIdx });
}
