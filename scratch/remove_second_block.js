const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const aboutMarker = '  <!-- =========================\n       ABOUT SECTION';
const firstAbout = html.indexOf(aboutMarker);
const secondAbout = html.indexOf(aboutMarker, firstAbout + 10);
const reelsMarker = '  <!-- =========================\n       REELS / SHORTS';
const reelsIndex = html.indexOf(reelsMarker);

if (secondAbout !== -1 && reelsIndex !== -1 && secondAbout < reelsIndex) {
  html = html.slice(0, secondAbout) + html.slice(reelsIndex);
  fs.writeFileSync('index.html', html, 'utf-8');
  console.log('Successfully removed duplicate block from index.html');
} else {
  console.error('Could not find duplicate block boundaries', { secondAbout, reelsIndex });
}
