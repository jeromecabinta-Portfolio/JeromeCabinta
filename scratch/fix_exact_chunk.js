const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const target = `  margin-top: 10px;
  display: flex;
  align-items: center;
  border-radius: 24px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;
}`;

const replacement = `  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
}

/* ==========================================================================
   #CARROUSEL (MULTI-SLIDE SWIPE CARDS)
   ========================================================================== */
.carousels-container-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.carousel-deck-card {
  background: var(--canvas-card);
  border: 1px solid var(--canvas-border);
  border-radius: 24px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;
}`;

if (css.includes(target)) {
  css = css.replace(target, replacement);
  fs.writeFileSync('style.css', css, 'utf8');
  console.log('Successfully fixed .reel-strategy-pill and .carousels-container-grid!');
} else {
  console.log('Target string not matched.');
}
