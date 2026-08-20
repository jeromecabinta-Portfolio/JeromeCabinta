const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');

// Find all occurrences of <!-- =========================\n       ABOUT SECTION
const aboutMarker = '  <!-- =========================\n       ABOUT SECTION';
const firstAbout = html.indexOf(aboutMarker);
const secondAbout = html.indexOf(aboutMarker, firstAbout + 10);

console.log('firstAbout index:', firstAbout);
console.log('secondAbout index:', secondAbout);

// Find <!-- =========================\n       REELS / SHORTS
const reelsMarker = '  <!-- =========================\n       REELS / SHORTS';
const reelsIndex = html.indexOf(reelsMarker);
console.log('reelsIndex:', reelsIndex);

// Let's check between secondAbout and reelsIndex
const secondBlock = html.slice(secondAbout, reelsIndex);
console.log('secondBlock length:', secondBlock.length);
console.log('firstBlock length:', html.slice(firstAbout, secondAbout).length);
