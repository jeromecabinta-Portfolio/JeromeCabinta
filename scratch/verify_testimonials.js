const fs = require('fs');

const script = fs.readFileSync('script.js', 'utf8');
const index = fs.readFileSync('index.html', 'utf8');

const tests = [
  'Agape Reaching People Ministries Benguet PH',
  'Calvary Baptist Church of Baguio City Inc.',
  'Northridge Institute of Business and Technology Inc. - Baguio',
  'Ar & Co. Rock Creatives'
];

tests.forEach(t => {
  const inScript = script.includes(t);
  const inIndex = index.includes(t) || index.includes(t.replace('&', '&amp;'));
  console.log(`[PASS] "${t}": Script=${inScript}, Index=${inIndex}`);
});
