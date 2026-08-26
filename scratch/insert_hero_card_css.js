const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const target = `.btn-behance-outline {
  background: transparent;
  color: var(--text) !important;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.95rem;
  padding: 13px 26px;
  border-radius: 999px;
}`;

const replacement = `.btn-behance-outline {
  background: transparent;
  color: var(--text) !important;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.95rem;
  padding: 13px 26px;
  border-radius: 999px;
  border: 1px solid var(--border);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.btn-behance-outline:hover {
  border-color: var(--behance-lime);
  color: var(--behance-lime) !important;
  background: var(--behance-lime-dim);
  transform: translateY(-3px);
}

/* Hero Right Showcase Composition */
.hero-visual-card {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  background: var(--canvas-card);
  border: 1px solid var(--canvas-border);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  aspect-ratio: 4 / 3;
  width: 100%;
}

.hero-visual-card img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center top;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 10px 10px 0 10px;
}

.hero-visual-card:hover img {
  transform: scale(1.02);
}

.hero-floating-badge {
  position: absolute;
  bottom: 14px;
  left: 14px;
  right: 14px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 16px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  transition: all 0.3s ease;
  z-index: 5;
}

body.dark .hero-floating-badge {
  background: rgba(10, 16, 11, 0.88);
  border: 1px solid rgba(195, 255, 56, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
}

body.dark .hero-badge-title {
  color: #ffffff;
}

body.dark .hero-badge-subtitle {
  color: var(--behance-lime);
}

body.dark .hero-edition-badge {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

body.dark .hero-edition-badge i {
  color: var(--behance-lime);
}

body:not(.dark) .hero-floating-badge {
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(13, 21, 14, 0.14);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

body:not(.dark) .hero-badge-title {
  color: #0d150e;
}

body:not(.dark) .hero-badge-subtitle {
  color: #0e8c00;
}

body:not(.dark) .hero-edition-badge {
  background: rgba(14, 140, 0, 0.08);
  border: 1px solid rgba(14, 140, 0, 0.22);
  color: #0d150e;
}

body:not(.dark) .hero-edition-badge i {
  color: #0e8c00;
}

.hero-badge-title {
  font-size: 0.82rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.3px;
}

.hero-badge-subtitle {
  font-size: 0.72rem;
  font-weight: 700;
  font-family: var(--font-mono);
  line-height: 1.2;
  margin-top: 2px;
}

.hero-edition-badge {
  padding: 6px 12px;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}

.hero-floating-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.live-pulse-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--behance-lime);
  box-shadow: 0 0 10px var(--behance-lime);
  animation: livePulse 1.8s infinite;
}

@keyframes livePulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(195, 255, 56, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(195, 255, 56, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(195, 255, 56, 0); }
}

/* ==========================================================================
   ABOUT SECTION (CHECKERBOARD CANVAS)
   ========================================================================== */
.about-checkerboard-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}`;

if (css.includes(target)) {
  css = css.replace(target, replacement);
  fs.writeFileSync('style.css', css, 'utf8');
  console.log('Successfully inserted hero visual card CSS!');
} else {
  console.log('Target not found, checking...');
}
