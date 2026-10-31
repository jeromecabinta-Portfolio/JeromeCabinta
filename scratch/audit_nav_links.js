const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Find all internal anchor links
const hrefMatches = [...html.matchAll(/href="(#[a-zA-Z0-9_-]+)"/g)].map(m => m[1]);
console.log('Total internal anchor links:', hrefMatches.length);

const uniqueAnchors = [...new Set(hrefMatches)];
const missingTargets = [];

uniqueAnchors.forEach(anchor => {
  const targetId = anchor.slice(1);
  const exists = html.includes(`id="${targetId}"`) || html.includes(`name="${targetId}"`);
  if (!exists) {
    missingTargets.push(anchor);
  }
});

console.log('Unique anchors checked:', uniqueAnchors.length);
if (missingTargets.length === 0) {
  console.log('All internal anchor links successfully map to targets in index.html!');
} else {
  console.log('Missing target anchors:', missingTargets);
}

