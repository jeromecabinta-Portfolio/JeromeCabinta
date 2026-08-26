const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// Fix .reel-strategy-pill and .carousels-container-grid and .carousel-deck-card
const brokenChunk = `.reel-strategy-pill {
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

const correctChunk = `.reel-strategy-pill {
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

if (css.includes(brokenChunk)) {
  css = css.replace(brokenChunk, correctChunk);
  console.log('Fixed carousel base grid!');
} else {
  console.log('Broken chunk not found directly, checking...');
}

// Now let's check @media (max-width: 1024px)
const media1024Target = `@media (max-width: 1024px) {
  .hero-behance-grid {`;

const media1024Replacement = `@media (max-width: 1024px) {
  .carousels-container-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }

  .hero-behance-grid {`;

if (css.includes(media1024Target) && !css.includes('grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));')) {
  css = css.replace(media1024Target, media1024Replacement);
  console.log('Added 1024px carousel rules!');
}

// Now let's check @media (max-width: 768px)
const media768CarouselOld = `.carousels-container-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }`;

const media768CarouselNew = `.carousels-container-grid {
    grid-template-columns: 1fr;
    max-width: 440px;
    margin: 0 auto;
    gap: 24px;
  }

  .carousel-deck-card {
    padding: 18px 16px;
    border-radius: 20px;
  }`;

if (css.includes(media768CarouselOld)) {
  css = css.replace(media768CarouselOld, media768CarouselNew);
  console.log('Added 768px carousel rules!');
}

// Now let's check @media (max-width: 480px)
const media480Target = `@media (max-width: 480px) {
  .hero-cta-group {`;

const media480Replacement = `@media (max-width: 480px) {
  .carousels-container-grid {
    max-width: 100%;
    gap: 20px;
  }

  .carousel-deck-card {
    padding: 14px 12px;
    border-radius: 18px;
    gap: 12px;
  }

  .carousel-deck-title {
    font-size: 0.96rem;
  }

  .carousel-btn {
    width: 34px;
    height: 34px;
    font-size: 0.85rem;
  }

  .carousel-dots-wrap {
    gap: 5px;
  }

  .carousel-dot-indicator {
    width: 6px;
    height: 6px;
  }

  .carousel-dot-indicator.active {
    width: 16px;
  }

  .hero-cta-group {`;

if (css.includes(media480Target) && !css.includes('.carousel-deck-title {\n    font-size: 0.96rem;')) {
  css = css.replace(media480Target, media480Replacement);
  console.log('Added 480px carousel rules!');
}

fs.writeFileSync('style.css', css, 'utf8');
console.log('Updated style.css successfully!');
