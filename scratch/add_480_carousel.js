const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const target480 = `/* Mobile Devices (<= 480px) */
@media (max-width: 480px) {`;

const replacement480 = `/* Mobile Devices (<= 480px) */
@media (max-width: 480px) {
  .carousels-container-grid {
    grid-template-columns: 1fr;
    max-width: 100%;
    gap: 20px;
  }

  .carousel-deck-card {
    padding: 14px 12px;
    border-radius: 18px;
    gap: 12px;
  }

  .carousel-deck-title {
    font-size: 0.95rem;
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
  }`;

if (css.includes(target480) && !css.includes('.carousel-deck-title {\n    font-size: 0.95rem;')) {
  css = css.replace(target480, replacement480);
  fs.writeFileSync('style.css', css, 'utf8');
  console.log('Added 480px carousel mobile styles!');
} else {
  console.log('Target not found or already added.');
}
