const fs = require('fs');

console.log('--- APPLYING FULL RESPONSIVENESS ---');

// 1. UPDATE index.html
let html = fs.readFileSync('index.html', 'utf8');

const oldWebsitesRegex = /<!-- =========================\s*WEBSITE PROJECTS[\s\S]*?<\/section>/;

const newWebsitesHtml = `<!-- =========================
       WEBSITE PROJECTS (LIVE CLIENT WEBSITES & PLATFORMS - FULLY RESPONSIVE)
  ========================= -->
  <section id="websites" class="section-behance">
    <div class="behance-container">
      <div class="behance-section-header">
        <h2 class="behance-title-condensed">WEBSITE PROJECTS</h2>
        <span class="behance-subtitle-lime">Live Client Web Platforms, E-Commerce Systems &amp; Digital Storefronts</span>
      </div>

      <div class="website-projects-grid">
        <!-- 1. Create and Arise (Featured Live Client Web Platform) -->
        <div class="web-project-card featured-live">
          <a href="https://createandarise.vercel.app/" target="_blank" rel="noopener noreferrer" class="web-card-img-wrap" title="Open createandarise.vercel.app live in new tab">
            <img src="Assets/Website/create-and-arise.png" alt="Create and Arise Live Web Platform" loading="lazy" />
            <div class="web-card-overlay">
              <span class="web-card-overlay-btn">
                <i class="fas fa-arrow-up-right-from-square"></i> Open Live Website
              </span>
            </div>
            <span class="web-card-badge-live"><span class="pulse-dot"></span> LIVE WEB</span>
          </a>
          <div class="web-card-content">
            <div class="web-card-tag-row">
              <span class="web-card-cat-tag client">PHILIPPINE CLIENT &bull; LIVE</span>
              <span class="web-card-domain">createandarise.vercel.app</span>
            </div>
            <h3 class="web-card-title">Create and Arise</h3>
            <p class="web-card-desc">
              Purpose-driven creative design, web development &amp; digital ads studio platform based in La Trinidad, Benguet. Full-stack web application featuring real-time PHT studio status, interactive quote calculator &amp; service catalog.
            </p>
            <div class="web-card-footer">
              <a href="https://createandarise.vercel.app/" target="_blank" rel="noopener noreferrer" class="web-card-link-btn">
                <span>Visit Live Website</span>
                <i class="fas fa-arrow-up-right-from-square"></i>
              </a>
              <a href="https://www.facebook.com/CreateAndArise2023" target="_blank" rel="noopener noreferrer" class="web-card-social-link" title="Follow Create and Arise on Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- 2. Outreach Digital Partners (Faith & Ministry Digital Growth Agency) -->
        <div class="web-project-card featured-live">
          <a href="https://www.outreachdigitalpartners.com/" target="_blank" rel="noopener noreferrer" class="web-card-img-wrap" title="Visit Outreach Digital Partners live in new tab">
            <img src="Assets/Website/3.png" alt="Outreach Digital Partners Web Platform" loading="lazy" />
            <div class="web-card-overlay">
              <span class="web-card-overlay-btn">
                <i class="fas fa-arrow-up-right-from-square"></i> Open Live Website
              </span>
            </div>
            <span class="web-card-badge-live"><span class="pulse-dot"></span> LIVE SITE</span>
          </a>
          <div class="web-card-content">
            <div class="web-card-tag-row">
              <span class="web-card-cat-tag tag-cyan">AGENCY / DIGITAL STRATEGY</span>
              <span class="web-card-domain">outreachdigitalpartners.com</span>
            </div>
            <h3 class="web-card-title">Outreach Digital Partners</h3>
            <p class="web-card-desc">
              Faith &amp; ministry digital growth agency helping churches and organizations expand their online reach through social media marketing, content creation, and high-converting web strategy.
            </p>
            <div class="web-card-footer">
              <a href="https://www.outreachdigitalpartners.com/" target="_blank" rel="noopener noreferrer" class="web-card-link-btn">
                <span>Visit Live Website</span>
                <i class="fas fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

if (oldWebsitesRegex.test(html)) {
  html = html.replace(oldWebsitesRegex, newWebsitesHtml);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('✓ Updated index.html with responsive image links');
} else {
  console.error('❌ Could not match oldWebsitesRegex in index.html');
}

// 2. UPDATE style.css - replace the web card CSS with full responsive version
let css = fs.readFileSync('style.css', 'utf8');

const oldCssRegex = /\/\* ==========================================================================\s*#WEBSITE PROJECTS[\s\S]*$/;

const newResponsiveCss = `/* ==========================================================================
   #WEBSITE PROJECTS (CLEAN BEHANCE CARD GRID - FULLY RESPONSIVE)
   ========================================================================== */
#websites {
  padding: clamp(45px, 6vw, 75px) 0;
  overflow: hidden;
}

.website-projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(18px, 3vw, 32px);
  margin-top: clamp(20px, 3vw, 32px);
  width: 100%;
}

@media (max-width: 820px) {
  .website-projects-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }
}

.web-project-card {
  background: var(--surface, #151821);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: clamp(14px, 2vw, 20px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;
  box-sizing: border-box;
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

body.dark .web-project-card {
  background: #0f131f;
  border-color: rgba(255, 255, 255, 0.08);
}

body:not(.dark) .web-project-card {
  background: #ffffff;
  border-color: #e2e8f0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}

.web-project-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 229, 255, 0.45);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3), 0 0 25px rgba(0, 229, 255, 0.12);
}

body:not(.dark) .web-project-card:hover {
  border-color: rgba(2, 132, 199, 0.4);
  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.12);
}

.web-project-card.featured-live {
  border-color: rgba(0, 229, 255, 0.4);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25), 0 0 20px rgba(0, 229, 255, 0.08);
}

body:not(.dark) .web-project-card.featured-live {
  border-color: rgba(2, 132, 199, 0.35);
}

.web-card-img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #0a0d14;
  display: block;
  text-decoration: none;
}

.web-card-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.web-project-card:hover .web-card-img-wrap img {
  transform: scale(1.04);
}

.web-card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 13, 20, 0.65);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 3;
}

.web-project-card:hover .web-card-overlay {
  opacity: 1;
}

.web-card-overlay-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 229, 255, 0.95);
  color: #000000 !important;
  font-weight: 800;
  font-size: clamp(0.78rem, 1.8vw, 0.88rem);
  padding: 10px 20px;
  border-radius: 999px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(0, 229, 255, 0.4);
  transition: transform 0.2s ease, background 0.2s ease;
}

.web-card-overlay-btn:hover {
  transform: scale(1.06);
  background: #00e5ff;
}

.web-card-badge-live {
  position: absolute;
  top: clamp(8px, 1.5vw, 12px);
  right: clamp(8px, 1.5vw, 12px);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono, 'Space Mono', monospace);
  font-size: clamp(0.62rem, 1.4vw, 0.7rem);
  font-weight: 800;
  color: #10b981;
  background: rgba(10, 13, 20, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(16, 185, 129, 0.4);
  padding: 4px 10px;
  border-radius: 999px;
  letter-spacing: 0.5px;
  z-index: 2;
  white-space: nowrap;
}

.web-card-content {
  padding: clamp(16px, 3vw, 24px);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 0;
  box-sizing: border-box;
}

.web-card-tag-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.web-card-cat-tag {
  font-family: var(--font-mono, 'Space Mono', monospace);
  font-size: clamp(0.66rem, 1.5vw, 0.72rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  display: inline-block;
  white-space: nowrap;
}

.web-card-cat-tag.client {
  color: #00e5ff;
}

body:not(.dark) .web-card-cat-tag.client {
  color: #0284c7;
}

.web-card-cat-tag.tag-cyan {
  color: #00e5ff;
}

body:not(.dark) .web-card-cat-tag.tag-cyan {
  color: #0284c7;
}

.web-card-domain {
  font-family: var(--font-mono, 'Space Mono', monospace);
  font-size: clamp(0.65rem, 1.5vw, 0.72rem);
  color: var(--text-light, #94a3b8);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

.web-card-title {
  font-family: var(--font-syne, 'Syne', sans-serif);
  font-size: clamp(1.15rem, 2.5vw, 1.35rem);
  font-weight: 800;
  line-height: 1.25;
  margin: 4px 0 8px 0;
  color: var(--text, #ffffff);
  overflow-wrap: break-word;
  word-break: break-word;
}

body:not(.dark) .web-card-title {
  color: #0f172a;
}

.web-card-desc {
  font-size: clamp(0.82rem, 1.8vw, 0.88rem);
  line-height: 1.6;
  color: var(--text-light, #94a3b8);
  margin: 0 0 16px 0;
  flex-grow: 1;
  overflow-wrap: break-word;
}

body:not(.dark) .web-card-desc {
  color: #64748b;
}

.web-card-footer {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin-top: auto;
  flex-wrap: wrap;
}

body:not(.dark) .web-card-footer {
  border-top-color: #e2e8f0;
}

.web-card-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #00e5ff 0%, #0d52ff 100%);
  color: #ffffff !important;
  font-weight: 800;
  font-size: clamp(0.76rem, 1.6vw, 0.82rem);
  padding: 9px 18px;
  border-radius: 999px;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(0, 229, 255, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  white-space: nowrap;
}

.web-card-link-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 229, 255, 0.45);
}

.web-card-social-link {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(24, 119, 242, 0.15);
  border: 1px solid rgba(24, 119, 242, 0.35);
  color: #1877f2 !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 0.88rem;
  transition: transform 0.2s ease, background 0.2s ease;
  flex-shrink: 0;
}

.web-card-social-link:hover {
  transform: translateY(-2px);
  background: rgba(24, 119, 242, 0.28);
}

/* Mobile & Touch Specific Enhancements */
@media (max-width: 480px) {
  .web-card-content {
    padding: 16px 14px 18px 14px;
  }

  .web-card-footer {
    gap: 8px;
  }

  .web-card-link-btn {
    flex: 1 1 auto;
    justify-content: center;
    padding: 10px 14px;
  }

  .web-card-tag-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}

@media (hover: none) and (pointer: coarse) {
  .web-card-overlay {
    display: none !important;
  }

  .web-card-img-wrap {
    cursor: pointer;
  }
}
`;

if (oldCssRegex.test(css)) {
  css = css.replace(oldCssRegex, newResponsiveCss);
  fs.writeFileSync('style.css', css, 'utf8');
  console.log('✓ Successfully updated style.css with fully responsive CSS!');
} else {
  console.error('❌ Could not match oldCssRegex in style.css');
}
