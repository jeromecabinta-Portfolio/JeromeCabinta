const fs = require('fs');

console.log('--- APPLYING CLEAN WEBSITE CARDS GRID ---');

// 1. UPDATE index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

const websitesRegex = /<!-- =========================\s*WEBSITE PROJECTS[\s\S]*?<\/section>/;

const newWebsitesSection = `<!-- =========================
       WEBSITE PROJECTS (LIVE CLIENT WEBSITES & E-COMMERCE CONCEPTS)
  ========================= -->
  <section id="websites" class="section-behance" style="padding: 70px 0;">
    <div class="behance-container">
      <div class="behance-section-header">
        <h2 class="behance-title-condensed">WEBSITE PROJECTS</h2>
        <span class="behance-subtitle-lime">Live Client Web Platforms, E-Commerce Systems &amp; Digital Storefronts</span>
      </div>

      <div class="website-projects-grid">
        <!-- 1. Create and Arise (Featured Live Client Web Platform) -->
        <div class="web-project-card featured-live">
          <div class="web-card-img-wrap">
            <img src="Assets/Website/create-and-arise.png" alt="Create and Arise Live Web Platform" loading="lazy" />
            <div class="web-card-overlay">
              <a href="https://createandarise.vercel.app/" target="_blank" rel="noopener noreferrer" class="web-card-overlay-btn" title="Open createandarise.vercel.app live in new tab">
                <i class="fas fa-arrow-up-right-from-square"></i> Open Live Website
              </a>
            </div>
            <span class="web-card-badge-live"><span class="pulse-dot"></span> LIVE WEB</span>
          </div>
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

        <!-- 2. Rosie's Roofing & Restoration -->
        <div class="web-project-card">
          <div class="web-card-img-wrap">
            <img src="Assets/Website/1.png" alt="Rosie's Roofing and Restoration Web Design" loading="lazy" />
            <div class="web-card-overlay">
              <button class="web-card-overlay-btn open-lightbox" data-img="Assets/Website/1.png" data-title="Rosie's Roofing &amp; Restoration" data-desc="High-trust contractor landing page with instant free estimate booking, certifications &amp; Google/Facebook reviews integration.">
                <i class="fas fa-magnifying-glass-plus"></i> View Design
              </button>
            </div>
          </div>
          <div class="web-card-content">
            <span class="web-card-cat-tag tag-orange">CONTRACTOR / LEAD GEN</span>
            <h3 class="web-card-title">Rosie's Roofing &amp; Restoration</h3>
            <p class="web-card-desc">
              High-trust contractor landing page with instant free estimate booking, certifications &amp; Google/Facebook reviews integration.
            </p>
          </div>
        </div>

        <!-- 3. Based Mode Coffee Co. -->
        <div class="web-project-card">
          <div class="web-card-img-wrap">
            <img src="Assets/Website/2.png" alt="Based Mode Coffee Co. E-Commerce Platform" loading="lazy" />
            <div class="web-card-overlay">
              <button class="web-card-overlay-btn open-lightbox" data-img="Assets/Website/2.png" data-title="Based Mode Coffee Co." data-desc="Modern coffee beans e-commerce web design with streamlined search, product showcase, and conversion-optimized checkout.">
                <i class="fas fa-magnifying-glass-plus"></i> View Design
              </button>
            </div>
          </div>
          <div class="web-card-content">
            <span class="web-card-cat-tag tag-yellow">DTC E-COMMERCE</span>
            <h3 class="web-card-title">Based Mode Coffee Co.</h3>
            <p class="web-card-desc">
              Modern coffee beans e-commerce web design with streamlined search, product showcase, and conversion-optimized checkout.
            </p>
          </div>
        </div>

        <!-- 4. Outreach Digital Partners -->
        <div class="web-project-card">
          <div class="web-card-img-wrap">
            <img src="Assets/Website/3.png" alt="Outreach Digital Partners Web Platform" loading="lazy" />
            <div class="web-card-overlay">
              <button class="web-card-overlay-btn open-lightbox" data-img="Assets/Website/3.png" data-title="Outreach Digital Partners" data-desc="Faith &amp; community outreach marketing web platform with strategy call scheduling and clean service package tiers.">
                <i class="fas fa-magnifying-glass-plus"></i> View Design
              </button>
            </div>
          </div>
          <div class="web-card-content">
            <span class="web-card-cat-tag tag-cyan">AGENCY / DIGITAL STRATEGY</span>
            <h3 class="web-card-title">Outreach Digital Partners</h3>
            <p class="web-card-desc">
              Faith &amp; community outreach marketing web platform with strategy call scheduling and clean service package tiers.
            </p>
          </div>
        </div>

        <!-- 5. VEmpire Luxury Watches -->
        <div class="web-project-card">
          <div class="web-card-img-wrap">
            <img src="Assets/Website/4.png" alt="VEmpire Luxury Watches E-Commerce" loading="lazy" />
            <div class="web-card-overlay">
              <button class="web-card-overlay-btn open-lightbox" data-img="Assets/Website/4.png" data-title="VEmpire Luxury Watches" data-desc="Sleek luxury timepiece product showcase highlighting 316L stainless steel, sunburst dials, and premium interactive product specs.">
                <i class="fas fa-magnifying-glass-plus"></i> View Design
              </button>
            </div>
          </div>
          <div class="web-card-content">
            <span class="web-card-cat-tag tag-green">LUXURY GOODS / BRANDING</span>
            <h3 class="web-card-title">VEmpire Luxury Watches</h3>
            <p class="web-card-desc">
              Sleek luxury timepiece product showcase highlighting 316L stainless steel, sunburst dials, and premium interactive product specs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>`;

if (websitesRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(websitesRegex, newWebsitesSection);
  fs.writeFileSync('index.html', indexHtml, 'utf8');
  console.log('✓ Replaced #websites section with clean card grid in index.html');
} else {
  console.error('❌ Could not find #websites section regex in index.html');
}

// 2. UPDATE style.css - Add clean card grid styles
let css = fs.readFileSync('style.css', 'utf8');

const newCardCss = `
/* ==========================================================================
   #WEBSITE PROJECTS (CLEAN BEHANCE CARD GRID)
   ========================================================================== */
.website-projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 28px;
  margin-top: 25px;
}

@media (max-width: 768px) {
  .website-projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.web-project-card {
  background: var(--surface, #151821);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
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
  font-size: 0.85rem;
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
  top: 12px;
  right: 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono, 'Space Mono', monospace);
  font-size: 0.68rem;
  font-weight: 800;
  color: #10b981;
  background: rgba(10, 13, 20, 0.82);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(16, 185, 129, 0.4);
  padding: 4px 10px;
  border-radius: 999px;
  letter-spacing: 0.5px;
  z-index: 2;
}

.web-card-content {
  padding: 22px 20px 24px 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  display: inline-block;
}

.web-card-cat-tag.client {
  color: #00e5ff;
}

body:not(.dark) .web-card-cat-tag.client {
  color: #0284c7;
}

.web-card-cat-tag.tag-orange {
  color: #ff5f56;
}

.web-card-cat-tag.tag-yellow {
  color: #ffbd2e;
}

.web-card-cat-tag.tag-cyan {
  color: #00e5ff;
}

body:not(.dark) .web-card-cat-tag.tag-cyan {
  color: #0284c7;
}

.web-card-cat-tag.tag-green {
  color: #27c93f;
}

.web-card-domain {
  font-family: var(--font-mono, 'Space Mono', monospace);
  font-size: 0.7rem;
  color: var(--text-light, #94a3b8);
}

.web-card-title {
  font-family: var(--font-syne, 'Syne', sans-serif);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.25;
  margin: 4px 0 8px 0;
  color: var(--text, #ffffff);
}

body:not(.dark) .web-card-title {
  color: #0f172a;
}

.web-card-desc {
  font-size: 0.86rem;
  line-height: 1.6;
  color: var(--text-light, #94a3b8);
  margin: 0 0 16px 0;
  flex-grow: 1;
}

body:not(.dark) .web-card-desc {
  color: #64748b;
}

.web-card-footer {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin-top: auto;
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
  font-size: 0.8rem;
  padding: 8px 16px;
  border-radius: 999px;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(0, 229, 255, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.web-card-link-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 229, 255, 0.45);
}

.web-card-social-link {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(24, 119, 242, 0.15);
  border: 1px solid rgba(24, 119, 242, 0.35);
  color: #1877f2 !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 0.85rem;
  transition: transform 0.2s ease, background 0.2s ease;
}

.web-card-social-link:hover {
  transform: translateY(-2px);
  background: rgba(24, 119, 242, 0.28);
}
`;

css += newCardCss;
fs.writeFileSync('style.css', css, 'utf8');
console.log('✓ Added .web-project-card styles to style.css');
console.log('--- DONE ---');
