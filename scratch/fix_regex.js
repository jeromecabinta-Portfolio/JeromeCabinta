const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// Normalize line endings for replacement
const oldBlock = `.reel-strategy-pill {
  background: rgba(195, 255, 56, 0.1);
  border: 1px solid rgba(195, 255, 56, 0.25);
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 0.8rem;
  color: var(--behance-lime);
  margin-top: 10px;
  display: flex;
  align-items: center;
  border-radius: 24px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;
}`;

const newBlock = `.reel-strategy-pill {
  background: rgba(195, 255, 56, 0.1);
  border: 1px solid rgba(195, 255, 56, 0.25);
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 0.8rem;
  color: var(--behance-lime);
  margin-top: 10px;
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

// Try direct replace or regex with \r?\n
const regex = /\.reel-strategy-pill\s*\{[\s\S]*?transition:\s*all\s*0\.3s\s*ease;\s*\}/;
if (regex.test(css)) {
  css = css.replace(regex, newBlock);
  fs.writeFileSync('style.css', css, 'utf8');
  console.log('Regex replace successful!');
} else {
  console.log('Regex did not match!');
}
