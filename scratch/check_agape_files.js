const fs = require('fs');

const agapeFiles = fs.readdirSync('Assets/SMM/Agape');
agapeFiles.forEach(f => {
  const p = 'Assets/SMM/Agape/' + f;
  const stat = fs.statSync(p);
  console.log(`${f.padEnd(25)}: ${(stat.size / 1024).toFixed(1)} KB`);
});

