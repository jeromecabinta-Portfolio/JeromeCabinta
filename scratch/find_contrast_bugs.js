const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('style.css', 'utf8');

// 1. Check "I bridge the gap" in index.html and its CSS classes
console.log('--- 1. Hero text ---');
const heroMatches = indexHtml.match(/<p[^>]*>[\s\S]*?bridge the gap[\s\S]*?<\/p>/i);
console.log(heroMatches ? heroMatches[0] : 'not found');

// 2. Check "WHAT I CAN DO FOR YOU" in index.html
console.log('--- 2. Services / What I can do ---');
const serviceMatches = indexHtml.match(/<h[1-6][^>]*>[\s\S]*?WHAT I CAN DO FOR YOU[\s\S]*?<\/h[1-6]>/i);
console.log(serviceMatches ? serviceMatches[0] : 'not found');

// 3. Check "LET'S SCALE YOUR" in index.html
console.log('--- 3. Outro headline ---');
const outroMatches = indexHtml.match(/<h[1-6][^>]*>[\s\S]*?LET'S SCALE YOUR[\s\S]*?<\/h[1-6]>/i);
console.log(outroMatches ? outroMatches[0] : 'not found');

// 4. Check "REQUEST GROWTH PROPOSAL" in index.html
console.log('--- 4. Proposal heading ---');
const proposalMatches = indexHtml.match(/<h[1-6][^>]*>[\s\S]*?GROWTH PROPOSAL[\s\S]*?<\/h[1-6]>/i);
console.log(proposalMatches ? proposalMatches[0] : 'not found');
