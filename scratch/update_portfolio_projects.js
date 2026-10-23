const fs = require('fs');

console.log('--- STARTING CREATE AND ARISE INTEGRATION ---');

// 1. UPDATE index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// A. Navbar dropdown link
const oldNavDropdown = `<a href="#websites" class="dropdown-link">
                <div class="dropdown-link-icon" style="color: #00e5ff; background: rgba(0, 229, 255, 0.12);"><i class="fas fa-laptop-code"></i></div>
                <div class="dropdown-link-text">
                  <span class="dropdown-link-title" style="display: flex; align-items: center; justify-content: space-between; gap: 4px;">
                    <span>Website Projects</span>
                    <span style="font-size: 0.6rem; font-weight: 800; background: #00e5ff; color: #000; padding: 1px 6px; border-radius: 999px; line-height: 1.3;">PH CLIENT</span>
                  </span>
                  <span class="dropdown-link-desc">Live Client Web Platform</span>
                </div>
              </a>`;

const newNavDropdown = `<a href="#websites" class="dropdown-link">
                <div class="dropdown-link-icon" style="color: #00e5ff; background: rgba(0, 229, 255, 0.12);"><i class="fas fa-laptop-code"></i></div>
                <div class="dropdown-link-text">
                  <span class="dropdown-link-title" style="display: flex; align-items: center; justify-content: space-between; gap: 4px;">
                    <span>Create &amp; Arise</span>
                    <span style="font-size: 0.6rem; font-weight: 800; background: #00e5ff; color: #000; padding: 1px 6px; border-radius: 999px; line-height: 1.3;">LIVE CLIENT WEB</span>
                  </span>
                  <span class="dropdown-link-desc">Live Philippine Studio Platform</span>
                </div>
              </a>`;

if (indexHtml.includes(oldNavDropdown)) {
  indexHtml = indexHtml.replace(oldNavDropdown, newNavDropdown);
  console.log('✓ Updated index.html navbar dropdown');
} else {
  // Try normalized replacement
  const normOld = oldNavDropdown.replace(/\r\n/g, '\n');
  const normHtml = indexHtml.replace(/\r\n/g, '\n');
  if (normHtml.includes(normOld)) {
    indexHtml = normHtml.replace(normOld, newNavDropdown.replace(/\r\n/g, '\n'));
    console.log('✓ Updated index.html navbar dropdown (normalized)');
  } else {
    console.warn('⚠️ Could not match old navbar dropdown in index.html');
  }
}

// B. Section #websites in index.html
const oldWebsitesSectionRegex = /<!-- =========================\s*WEBSITE PROJECTS[\s\S]*?<\/section>/;

const newWebsitesSection = `<!-- =========================
       WEBSITE PROJECTS (PHILIPPINE CLIENT LIVE WEB PLATFORM)
  ========================= -->
  <section id="websites" class="section-behance" style="padding: 70px 0;">
    <div class="behance-container">
      <div class="behance-section-header">
        <h2 class="behance-title-condensed">WEBSITE PROJECTS</h2>
        <span class="behance-subtitle-lime">Full-Stack Web Design, Client Platforms &amp; Creative Studio Systems</span>
      </div>

      <!-- Website Project Card: Create and Arise -->
      <div class="website-project-card">
        <!-- Browser Header Bar -->
        <div class="browser-header-bar">
          <div class="browser-controls">
            <span class="browser-dot dot-red"></span>
            <span class="browser-dot dot-yellow"></span>
            <span class="browser-dot dot-green"></span>
          </div>
          <div class="browser-address-bar">
            <i class="fas fa-lock" style="color: #10b981; font-size: 0.75rem;"></i>
            <span class="browser-url">https://createandarise.vercel.app</span>
          </div>
          <div class="browser-status-pill">
            <span class="pulse-dot"></span>
            <span>PHILIPPINE CLIENT &bull; LIVE</span>
          </div>
        </div>

        <!-- Interactive Visual Preview Banner -->
        <div class="website-preview-banner">
          <a href="https://createandarise.vercel.app/" target="_blank" rel="noopener noreferrer" class="website-preview-link" title="Open createandarise.vercel.app live in a new tab">
            <img src="Assets/Website/create-and-arise-preview.jpg" alt="Create and Arise - Digital Studio Platform Preview" class="website-preview-img" loading="lazy" />
            <div class="website-preview-overlay">
              <div class="website-preview-badge">
                <img src="Assets/Website/create-and-arise-logo.png" alt="Create and Arise Official Logo" class="preview-logo-chip" />
                <div class="preview-badge-text">
                  <span class="preview-badge-title">CREATE AND ARISE</span>
                  <span class="preview-badge-sub"><i class="fas fa-arrow-up-right-from-square"></i> Open Live App: createandarise.vercel.app</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Project Body Content -->
        <div class="website-card-body">
          <div class="website-card-details">
            <div class="website-tag-strip">
              <span class="web-badge-pill client"><i class="fas fa-map-marker-alt"></i> La Trinidad, Benguet &bull; PH</span>
              <span class="web-badge-pill tech"><i class="fas fa-cross"></i> Christian Creative Studio</span>
              <span class="web-badge-pill tech"><i class="fas fa-laptop-code"></i> Full-Stack Web Platform</span>
              <span class="web-badge-pill tech"><i class="fas fa-calculator"></i> Interactive Cost Estimator</span>
              <span class="web-badge-pill tech"><i class="fas fa-cloud"></i> Deployed on Vercel</span>
            </div>

            <div style="display: flex; align-items: center; gap: 18px; margin: 6px 0 16px 0; flex-wrap: wrap;">
              <img src="Assets/Website/create-and-arise-logo.png" alt="Create and Arise Official Logo" style="width: 56px; height: 56px; border-radius: 50%; border: 2px solid #00e5ff; box-shadow: 0 4px 16px rgba(0, 229, 255, 0.3);" />
              <div>
                <h3 class="website-title" style="margin: 0;">Create and Arise</h3>
                <h4 class="website-subtitle" style="margin: 4px 0 0 0;">Web Design, Graphic Design, Digital Ads &amp; Creative Studio</h4>
              </div>
            </div>

            <!-- Philippine Client Background Callout Box -->
            <div class="client-background-box">
              <div class="client-bg-header">
                <i class="fas fa-circle-info client-bg-icon"></i>
                <span>PHILIPPINE CLIENT BACKGROUND &bull; PROJECT OVERVIEW</span>
              </div>
              <p class="client-bg-text">
                <strong>The Client:</strong> <strong>Create and Arise</strong> is a premier Christian-led creative design and digital studio based in <strong>La Trinidad, Benguet, Philippines (serving worldwide)</strong>. They empower visionary businesses with purpose-driven Graphic Design, High-Converting Web Design, Digital Ads Marketing, and Social Media Management.
              </p>
              <p class="client-bg-text">
                <strong>Jerome's Role &amp; Engineering Solution:</strong> Jerome Cabinta engineered the complete production web platform from concept to launch. The interactive web application features real-time Philippine operating hours (PHT GMT+8), filterable multi-category service catalogs, an instant project cost estimation calculator &amp; quote quiz, interactive client reviews carousel, dual theme engine (dark/light), and direct consultation booking funnels.
              </p>
            </div>

            <p class="website-desc">
              Complete full-stack website designed and developed for Philippine client <strong>Create and Arise</strong>, deployed live on Vercel. Engineered with clean modular vanilla architecture, accessible semantic structure, rich responsive interactions, and high-performance cloud hosting.
            </p>

            <!-- Key Metrics Grid -->
            <div class="website-metrics-grid">
              <div class="web-metric-card">
                <span class="web-metric-val">Full-Stack</span>
                <span class="web-metric-label">Web Architecture</span>
              </div>
              <div class="web-metric-card">
                <span class="web-metric-val">4 Core</span>
                <span class="web-metric-label">Service Verticals</span>
              </div>
              <div class="web-metric-card">
                <span class="web-metric-val">100%</span>
                <span class="web-metric-label">Responsive &amp; Mobile</span>
              </div>
              <div class="web-metric-card">
                <span class="web-metric-val">Live</span>
                <span class="web-metric-label">Production on Vercel</span>
              </div>
            </div>

            <!-- Features Bullet List -->
            <div class="website-features-list">
              <div class="web-feature-item"><i class="fas fa-check-circle"></i> Complete End-to-End Web Platform Designed &amp; Developed by Jerome Cabinta</div>
              <div class="web-feature-item"><i class="fas fa-check-circle"></i> Real-Time Philippine Time (PHT GMT+8) Live Studio Status Bar</div>
              <div class="web-feature-item"><i class="fas fa-check-circle"></i> Interactive Project Cost Estimator &amp; Dynamic Quote Quiz Engine</div>
              <div class="web-feature-item"><i class="fas fa-check-circle"></i> Filterable Services Catalog (Web Design, Branding, Digital Ads, Social Media)</div>
              <div class="web-feature-item"><i class="fas fa-check-circle"></i> Dual Theme Engine (Dark &amp; Light Mode) with Glassmorphism Aesthetics</div>
              <div class="web-feature-item"><i class="fas fa-check-circle"></i> High-Speed Vercel Cloud Deployment with Optimized Asset Pipelines</div>
            </div>

            <!-- Actions Bar -->
            <div class="website-actions-bar">
              <a href="https://createandarise.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn-launch-website">
                <span>Visit Live Website</span>
                <i class="fas fa-arrow-up-right-from-square"></i>
              </a>
              <a href="https://www.facebook.com/CreateAndArise2023" target="_blank" rel="noopener noreferrer" class="btn-launch-website" style="background: rgba(24, 119, 242, 0.15); border: 1px solid rgba(24, 119, 242, 0.4); color: #1877f2 !important; box-shadow: none;">
                <i class="fab fa-facebook-f"></i>
                <span>Facebook Page</span>
              </a>
              <span class="website-domain-text">
                <i class="fas fa-globe"></i> createandarise.vercel.app
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- More Web Design & Client Platform Projects -->
      <div style="margin-top: 45px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
          <div>
            <h3 style="font-family: var(--font-syne, 'Syne', sans-serif); font-size: 1.4rem; font-weight: 800; margin: 0; color: var(--text, #ffffff);">
              ADDITIONAL CLIENT WEB DESIGNS &amp; E-COMMERCE CONCEPTS
            </h3>
            <p style="font-size: 0.85rem; color: var(--text-light, #94a3b8); margin: 4px 0 0 0;">
              High-converting digital storefronts, landing pages, and lead-generation platforms
            </p>
          </div>
          <span style="font-family: var(--font-mono, 'Space Mono', monospace); font-size: 0.75rem; color: #00e5ff; font-weight: 700; background: rgba(0, 229, 255, 0.1); border: 1px solid rgba(0, 229, 255, 0.3); padding: 4px 12px; border-radius: 999px;">
            4 PROJECTS
          </span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
          <!-- Web Project 1 -->
          <div class="web-extra-card" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; overflow: hidden; transition: all 0.3s ease;">
            <div style="aspect-ratio: 16/9; overflow: hidden; background: #0a0d14;">
              <img src="Assets/Website/1.png" alt="Rosie's Roofing and Restoration Web Design" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;" loading="lazy" />
            </div>
            <div style="padding: 16px;">
              <span style="font-size: 0.7rem; font-weight: 800; color: #ff5f56; text-transform: uppercase; letter-spacing: 0.5px;">CONTRACTOR / LEAD GEN</span>
              <h4 style="font-family: var(--font-syne, 'Syne', sans-serif); font-size: 1.05rem; font-weight: 800; margin: 4px 0 6px 0; color: var(--text, #ffffff);">Rosie's Roofing &amp; Restoration</h4>
              <p style="font-size: 0.82rem; color: var(--text-light, #94a3b8); line-height: 1.5; margin: 0;">High-trust contractor landing page with instant free estimate booking, certifications &amp; Google/Facebook reviews integration.</p>
            </div>
          </div>

          <!-- Web Project 2 -->
          <div class="web-extra-card" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; overflow: hidden; transition: all 0.3s ease;">
            <div style="aspect-ratio: 16/9; overflow: hidden; background: #0a0d14;">
              <img src="Assets/Website/2.png" alt="Based Mode Coffee Co. E-Commerce Platform" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;" loading="lazy" />
            </div>
            <div style="padding: 16px;">
              <span style="font-size: 0.7rem; font-weight: 800; color: #ffbd2e; text-transform: uppercase; letter-spacing: 0.5px;">DTC E-COMMERCE</span>
              <h4 style="font-family: var(--font-syne, 'Syne', sans-serif); font-size: 1.05rem; font-weight: 800; margin: 4px 0 6px 0; color: var(--text, #ffffff);">Based Mode Coffee Co.</h4>
              <p style="font-size: 0.82rem; color: var(--text-light, #94a3b8); line-height: 1.5; margin: 0;">Modern coffee beans e-commerce web design with streamlined search, product showcase, and conversion-optimized checkout.</p>
            </div>
          </div>

          <!-- Web Project 3 -->
          <div class="web-extra-card" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; overflow: hidden; transition: all 0.3s ease;">
            <div style="aspect-ratio: 16/9; overflow: hidden; background: #0a0d14;">
              <img src="Assets/Website/3.png" alt="Outreach Digital Partners Web Platform" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;" loading="lazy" />
            </div>
            <div style="padding: 16px;">
              <span style="font-size: 0.7rem; font-weight: 800; color: #00e5ff; text-transform: uppercase; letter-spacing: 0.5px;">AGENCY / DIGITAL STRATEGY</span>
              <h4 style="font-family: var(--font-syne, 'Syne', sans-serif); font-size: 1.05rem; font-weight: 800; margin: 4px 0 6px 0; color: var(--text, #ffffff);">Outreach Digital Partners</h4>
              <p style="font-size: 0.82rem; color: var(--text-light, #94a3b8); line-height: 1.5; margin: 0;">Faith &amp; community outreach marketing web platform with strategy call scheduling and clean service package tiers.</p>
            </div>
          </div>

          <!-- Web Project 4 -->
          <div class="web-extra-card" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; overflow: hidden; transition: all 0.3s ease;">
            <div style="aspect-ratio: 16/9; overflow: hidden; background: #0a0d14;">
              <img src="Assets/Website/4.png" alt="VEmpire Luxury Watches E-Commerce" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;" loading="lazy" />
            </div>
            <div style="padding: 16px;">
              <span style="font-size: 0.7rem; font-weight: 800; color: #27c93f; text-transform: uppercase; letter-spacing: 0.5px;">LUXURY GOODS / BRANDING</span>
              <h4 style="font-family: var(--font-syne, 'Syne', sans-serif); font-size: 1.05rem; font-weight: 800; margin: 4px 0 6px 0; color: var(--text, #ffffff);">VEmpire Luxury Watches</h4>
              <p style="font-size: 0.82rem; color: var(--text-light, #94a3b8); line-height: 1.5; margin: 0;">Sleek luxury timepiece product showcase highlighting 316L stainless steel, sunburst dials, and premium interactive product specs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

if (oldWebsitesSectionRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldWebsitesSectionRegex, newWebsitesSection);
  console.log('✓ Replaced #websites section in index.html');
} else {
  console.warn('⚠️ Could not match old #websites section in index.html');
}

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('✓ Saved updated index.html');


// 2. UPDATE story.html
let storyHtml = fs.readFileSync('story.html', 'utf8');

// Fact item
const oldStoryFactRegex = /<div class="fact-item">\s*<p class="fact-label">Featured Philippine Project<\/p>[\s\S]*?<\/div>/;
const newStoryFact = `<div class="fact-item">
          <p class="fact-label">Featured Philippine Project</p>
          <p class="fact-value"><strong>Create and Arise</strong> (<a href="https://createandarise.vercel.app/"
              target="_blank" rel="noopener noreferrer"
              style="color: #00e5ff; text-decoration: underline; font-weight: 700;">createandarise.vercel.app</a>)
            &mdash; Premier Creative Design, Web Development &amp; Digital Ads Studio.</p>
        </div>`;

if (oldStoryFactRegex.test(storyHtml)) {
  storyHtml = storyHtml.replace(oldStoryFactRegex, newStoryFact);
  console.log('✓ Replaced featured fact item in story.html');
}

// Spotlight card
const oldStoryCardRegex = /<!-- FEATURED PHILIPPINE PROJECT SPOTLIGHT[\s\S]*?<\/div>\s*<\/div>/;
const newStoryCard = `<!-- FEATURED PHILIPPINE PROJECT SPOTLIGHT (CREATE AND ARISE) -->
      <div class="story-featured-project-card">
        <div class="story-project-badge-strip">
          <span class="story-badge-live"><span class="pulse-dot"></span> LIVE PHILIPPINE PROJECT</span>
          <span class="story-badge-tag"><i class="fas fa-cross"></i> CHRISTIAN CREATIVE STUDIO</span>
          <span class="story-badge-tag"><i class="fas fa-laptop-code"></i> FULL-STACK WEB APP</span>
          <span class="story-badge-tag"><i class="fas fa-mountain"></i> BENGUET TO GLOBAL</span>
        </div>
        <div style="display: flex; align-items: center; gap: 16px; margin: 15px 0 10px 0; flex-wrap: wrap;">
          <img src="Assets/Website/create-and-arise-logo.png" alt="Create and Arise Logo" style="width: 56px; height: 56px; border-radius: 50%; box-shadow: 0 4px 14px rgba(0,0,0,0.4);" />
          <div>
            <h2 class="story-project-title" style="margin: 0;">Create and Arise</h2>
            <p class="story-project-tagline" style="margin: 2px 0 0 0;">Purpose-Driven Web Design, Graphic Design, Digital Ads &amp; Creative Studio</p>
          </div>
        </div>
        <p class="story-project-desc">
          Born and engineered out of <strong>La Trinidad, Benguet, Philippines</strong>, <strong>Create and Arise</strong> is a premier Christian-led creative &amp; digital growth studio servicing visionary businesses worldwide. Jerome Cabinta developed the full responsive web platform from scratch—integrating real-time Philippine operating hours, interactive services filtering, instant project cost estimators, and customer review modules.
        </p>
        <div class="story-project-actions">
          <a href="https://createandarise.vercel.app/" target="_blank" rel="noopener noreferrer"
            class="btn-story-project">
            <i class="fas fa-external-link-alt"></i> Visit Live Website: createandarise.vercel.app
          </a>
        </div>
      </div>`;

if (oldStoryCardRegex.test(storyHtml)) {
  storyHtml = storyHtml.replace(oldStoryCardRegex, newStoryCard);
  console.log('✓ Replaced featured project card in story.html');
}

fs.writeFileSync('story.html', storyHtml, 'utf8');
console.log('✓ Saved updated story.html');


// 3. UPDATE agape-case-study.html
let agapeHtml = fs.readFileSync('agape-case-study.html', 'utf8');

const oldAgapeCardRegex = /<!-- Card 5: Create With Purpose[\s\S]*?<\/a>/;
const newAgapeCard = `<!-- Card 5: Create and Arise (Live Creative Studio & Web Platform - Philippines) -->
                <a href="https://createandarise.vercel.app/" target="_blank" rel="noopener noreferrer"
                    class="folder-card"
                    style="border: 1px solid rgba(0, 229, 255, 0.35); background: linear-gradient(135deg, rgba(0, 229, 255, 0.06) 0%, rgba(26, 26, 26, 0.95) 100%);">
                    <div class="folder-icon" style="color: #00e5ff; background: rgba(0, 229, 255, 0.12);">
                        <i class="fas fa-laptop-code"></i>
                    </div>
                    <div class="folder-details">
                        <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                            <h3 style="color: #00e5ff;">Create and Arise</h3>
                            <span
                                style="font-size: 0.65rem; font-weight: 800; background: #00e5ff; color: #000; padding: 2px 8px; border-radius: 999px;">LIVE
                                &bull; PH</span>
                        </div>
                        <p>Premier creative design &amp; digital studio web platform engineered in Benguet, Philippines for global brands. Full-stack responsive web application with real-time PHT status &amp; cost calculator.</p>
                        <span class="folder-action" style="color: #00e5ff;">Visit Live Website: createandarise.vercel.app <i
                                class="fas fa-external-link-alt"></i></span>
                    </div>
                </a>`;

if (oldAgapeCardRegex.test(agapeHtml)) {
  agapeHtml = agapeHtml.replace(oldAgapeCardRegex, newAgapeCard);
  console.log('✓ Replaced project card in agape-case-study.html');
}

fs.writeFileSync('agape-case-study.html', agapeHtml, 'utf8');
console.log('✓ Saved updated agape-case-study.html');

console.log('--- ALL UPDATES COMPLETED SUCCESSFULLY ---');
