const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const all = getFiles('Assets');
console.log('--- ALL FILES IN Assets/SMM ---');
all.filter(f => f.includes('Assets\\SMM')).forEach(f => console.log(f));

console.log('\n--- ALL FILES IN Assets/Social Media Ads ---');
all.filter(f => f.includes('Assets\\Social Media Ads')).forEach(f => console.log(f));

console.log('\n--- ALL FILES IN Assets/Brand Campaign ---');
all.filter(f => f.includes('Assets\\Brand Campaign')).forEach(f => console.log(f));

console.log('\n--- ALL FILES IN Assets/Website ---');
all.filter(f => f.includes('Assets\\Website')).forEach(f => console.log(f));

console.log('\n--- ALL FILES IN Assets/Landing page & Email Design ---');
all.filter(f => f.includes('Assets\\Landing') || f.includes('Assets\\Email')).forEach(f => console.log(f));

