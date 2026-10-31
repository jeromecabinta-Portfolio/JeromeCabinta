const fs = require('fs');

const bcFiles = fs.readdirSync('Assets/Brand Campaign');
bcFiles.forEach(f => {
  const p = 'Assets/Brand Campaign/' + f;
  const stat = fs.statSync(p);
  console.log(`${f.padEnd(15)}: ${(stat.size / 1024).toFixed(1)} KB`);
});

