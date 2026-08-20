const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');

const aboutMarker = '  <!-- =========================\n       ABOUT SECTION';
const firstAbout = html.indexOf(aboutMarker);
const secondAbout = html.indexOf(aboutMarker, firstAbout + 10);
const reelsMarker = '  <!-- =========================\n       REELS / SHORTS';
const reelsIndex = html.indexOf(reelsMarker);

const block1 = html.slice(firstAbout, secondAbout);
const block2 = html.slice(secondAbout, reelsIndex);

fs.writeFileSync('scratch/block1.html', block1);
fs.writeFileSync('scratch/block2.html', block2);
console.log('Saved block1 and block2 to scratch/');
