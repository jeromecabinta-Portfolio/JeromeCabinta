const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const target = `  /* Grids */
  .posts-showcase-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }

  }

  .certificates-showcase-grid {`;

const replacement = `  /* Grids */
  .posts-showcase-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }

  .reels-showcase-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }

  .carousels-container-grid {
    grid-template-columns: 1fr;
    max-width: 440px;
    margin: 0 auto;
    gap: 24px;
  }

  .carousel-deck-card {
    padding: 18px 16px;
    border-radius: 20px;
  }

  .thumbnails-showcase-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .certificates-showcase-grid {`;

// Replace target with CRLF/LF normalization
const normCss = css.replace(/\r\n/g, '\n');
const normTarget = target.replace(/\r\n/g, '\n');
const normReplacement = replacement.replace(/\r\n/g, '\n');

if (normCss.includes(normTarget)) {
  const updatedCss = normCss.replace(normTarget, normReplacement);
  fs.writeFileSync('style.css', updatedCss, 'utf8');
  console.log('Fixed grids in @media (max-width: 768px)!');
} else {
  console.log('Target block not found!');
}
