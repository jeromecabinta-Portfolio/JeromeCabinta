const fs = require('fs');
const js = fs.readFileSync('script.js', 'utf8');

// Use a simple simulator with jsdom or mock window to see if any runtime exceptions are thrown!
try {
  const { JSDOM } = require('jsdom');
  const html = fs.readFileSync('index.html', 'utf8');
  const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable", url: "http://localhost:5000/" });
  console.log('JSDOM loaded without crash');
} catch(e) {
  console.log('JSDOM error or not installed:', e.message);
}
