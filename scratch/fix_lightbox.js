const fs = require('fs');

let content = fs.readFileSync('case-study-brand-system.html', 'utf8');

const oldCss = `    .bds-lightbox {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(12px);
      z-index: 9999;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .bds-lightbox.active {
      display: flex;
      opacity: 1;
    }`;

const newCss = `    .bds-lightbox {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.92);
      backdrop-filter: blur(12px);
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s ease;
    }

    .bds-lightbox.active {
      opacity: 1;
      pointer-events: auto;
    }`;

content = content.replace(oldCss, newCss);
fs.writeFileSync('case-study-brand-system.html', content, 'utf8');
console.log('Fixed lightbox CSS in case-study-brand-system.html');
