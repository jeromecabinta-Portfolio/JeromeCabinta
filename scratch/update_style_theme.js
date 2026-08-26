const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// Replace behance-title-condensed color: #ffffff with var(--text)
css = css.replace(
`.behance-title-condensed {
  font-family: var(--font-condensed);
  font-size: clamp(2.8rem, 6.5vw, 5.2rem);
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 0.95;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0 0 8px 0;
}`,
`.behance-title-condensed {
  font-family: var(--font-condensed);
  font-size: clamp(2.8rem, 6.5vw, 5.2rem);
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 0.95;
  text-transform: uppercase;
  color: var(--text);
  margin: 0 0 8px 0;
}`
);

// Replace hero-title-main color: #ffffff
css = css.replace(
`.hero-title-main {
  font-family: var(--font-condensed);
  font-size: clamp(3.2rem, 7.5vw, 6.2rem);
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 0.92;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0 0 20px 0;
}`,
`.hero-title-main {
  font-family: var(--font-condensed);
  font-size: clamp(3.2rem, 7.5vw, 6.2rem);
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 0.92;
  text-transform: uppercase;
  color: var(--text);
  margin: 0 0 20px 0;
}`
);

// Replace hero-value-statement
css = css.replace(
`.hero-value-statement {
  font-size: 1.15rem;
  line-height: 1.6;
  color: #e1e7e2;
  margin: 0;
}`,
`.hero-value-statement {
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--text-light);
  margin: 0;
}`
);

// Replace btn-behance-outline
css = css.replace(
`.btn-behance-outline {
  background: transparent;
  color: #ffffff !important;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.95rem;
  padding: 13px 26px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}`,
`.btn-behance-outline {
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
}`
);

// Replace hero-floating-badge
css = css.replace(
`.hero-floating-badge {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background: rgba(10, 16, 11, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(195, 255, 56, 0.3);
  border-radius: 18px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}`,
`.hero-floating-badge {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background: rgba(10, 16, 11, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(195, 255, 56, 0.3);
  border-radius: 18px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--shadow);
}

body:not(.dark) .hero-floating-badge {
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid var(--border);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

body:not(.dark) .hero-floating-badge h4,
body:not(.dark) .hero-floating-badge p {
  color: var(--text);
}`
);

// Replace post-card-title
css = css.replace(
`.post-card-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0;
  color: #ffffff;
  line-height: 1.3;
}`,
`.post-card-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0;
  color: var(--text);
  line-height: 1.3;
}`
);

// Replace carousel-deck-title
css = css.replace(
`.carousel-deck-title {
  font-size: 1.15rem;
  font-weight: 800;
  margin: 0;
  color: #ffffff;
}`,
`.carousel-deck-title {
  font-size: 1.15rem;
  font-weight: 800;
  margin: 0;
  color: var(--text);
}`
);

// Replace carousel-btn and dot
css = css.replace(
`.carousel-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
}`,
`.carousel-btn {
  background: var(--surface-1);
  border: 1px solid var(--border);
  color: var(--text);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
}`
);

css = css.replace(
`.carousel-dot-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  transition: all 0.25s ease;
}`,
`.carousel-dot-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--border);
  transition: all 0.25s ease;
}`
);

// Replace service-card-title
css = css.replace(
`.service-card-title {
  font-size: 1.12rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: #ffffff;
  line-height: 1.35;
}`,
`.service-card-title {
  font-size: 1.12rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: var(--text);
  line-height: 1.35;
}`
);

// Replace outro-headline and outro-action-text p
css = css.replace(
`.outro-headline {
  font-family: var(--font-condensed);
  font-size: clamp(2.8rem, 5.5vw, 4.5rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0 0 16px 0;
}`,
`.outro-headline {
  font-family: var(--font-condensed);
  font-size: clamp(2.8rem, 5.5vw, 4.5rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text);
  margin: 0 0 16px 0;
}`
);

css = css.replace(
`.outro-action-text p {
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}`,
`.outro-action-text p {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
}`
);

// Replace form-input-group input/textarea
css = css.replace(
`.form-input-group input,
.form-input-group textarea {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 14px 16px;
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.95rem;
  transition: all 0.25s ease;
  outline: none;
}`,
`.form-input-group input,
.form-input-group textarea {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 14px 16px;
  color: var(--text);
  font-family: var(--font-body);
  font-size: 0.95rem;
  transition: all 0.25s ease;
  outline: none;
}`
);

css = css.replace(
`.form-input-group input:focus,
.form-input-group textarea:focus {
  border-color: var(--behance-lime);
  box-shadow: 0 0 16px rgba(195, 255, 56, 0.2);
  background: #152217;
}`,
`.form-input-group input:focus,
.form-input-group textarea:focus {
  border-color: var(--behance-lime);
  box-shadow: 0 0 16px var(--behance-lime-glow);
  background: var(--surface);
}`
);

// Replace skill-name, skills-category-header, skill-icon-wrapper
css = css.replace(
`.skills-category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}`,
`.skills-category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}`
);

css = css.replace(
`.skill-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: all 0.3s ease;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}`,
`.skill-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: var(--surface-1);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: all 0.3s ease;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}`
);

css = css.replace(
`.skill-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  letter-spacing: 0.3px;
  transition: color 0.25s ease;
}`,
`.skill-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
  letter-spacing: 0.3px;
  transition: color 0.25s ease;
}`
);

// Replace testi active items
css = css.replace(
`.testi-active-name {
  font-family: var(--font-condensed);
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0;
  line-height: 1;
}`,
`.testi-active-name {
  font-family: var(--font-condensed);
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text);
  margin: 0;
  line-height: 1;
}`
);

css = css.replace(
`.testi-active-text {
  font-size: 1.15rem;
  line-height: 1.6;
  color: #e4ebe5;
  font-style: italic;
  margin: 12px 0;
}`,
`.testi-active-text {
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--text-light);
  font-style: italic;
  margin: 12px 0;
}`
);

css = css.replace(
`.testi-nav-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}`,
`.testi-nav-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--surface-1);
  border: 1px solid var(--border);
  color: var(--text);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}`
);

css = css.replace(
`.testi-thumb-name {
  font-size: 0.82rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  white-space: nowrap;
}`,
`.testi-thumb-name {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.2;
  white-space: nowrap;
}`
);

fs.writeFileSync('style.css', css, 'utf8');
console.log('Successfully updated style.css with dynamic theme color tokens!');
