const fs = require('fs');

// 1. UPDATE index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Target the start of section id="case-studies" down to postsGrid start
const startMarker = '<!-- =========================\n       FEATURED CASE STUDIES (STRATEGIC CONCEPTS & SYSTEMS)\n  ========================= -->';
const endMarker = '<!-- Post Cards Grid -->\n      <div class="posts-showcase-grid" id="postsGrid">';

const startIdx = indexHtml.indexOf(startMarker);
const endIdx = indexHtml.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  const replacementSection = `<!-- =========================
       SOCIAL MEDIA WORK & CASE STUDIES (CONTENT CREATION, CANVA & SCHEDULING)
  ========================= -->
  <section id="posts" class="section-behance" style="padding: 70px 0;">
    <!-- Anchor for direct navigation to Case Studies -->
    <div id="case-studies" style="position: relative; top: -100px;"></div>

    <div class="behance-container">
      <div class="behance-section-header" style="margin-bottom: 35px;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px;">
          <div>
            <h2 class="behance-title-condensed">SOCIAL MEDIA WORK &amp; CASE STUDIES</h2>
            <span class="behance-subtitle-lime">Strategic Concepts &bull; Content Planning &bull; Canva Posts &bull; Brand Systems &bull; Scheduling</span>
          </div>
          <div class="glass-pill-badge" style="border-color: rgba(243, 146, 0, 0.4); color: #f39200;">
            <i class="fas fa-flask"></i> <span>2 STRATEGIC CASE STUDIES</span>
          </div>
        </div>
        <p style="font-size: 0.95rem; color: var(--text-light); max-width: 840px; margin: 12px 0 0; line-height: 1.6;">
          Real, execution-ready concepts demonstrating strategic thinking over an uncontextualized gallery of designs. Explore the two in-depth case studies below, or filter through the complete social media creative library.
        </p>
      </div>

      <!-- Spotlight: 2 Featured Case Study Deep-Dives -->
      <div class="featured-case-studies-grid" style="margin-bottom: 45px;">

        <!-- Case Study A Card -->
        <article class="featured-cs-card cs-card-campaign">
          <div class="featured-cs-badge-row">
            <span class="featured-cs-badge-concept"><i class="fas fa-flask"></i> CONCEPT CAMPAIGN</span>
            <span class="featured-cs-badge-role">SMM VA &bull; SCHEDULING</span>
          </div>

          <div class="featured-cs-image-preview">
            <img src="Assets/SMM/Agape/church_ad_1.png" alt="Agape Social Media Campaign Preview" loading="lazy" />
            <div class="featured-cs-image-overlay">
              <span class="cs-quick-view-tag">8 Sample Posts &bull; 7-Day Calendar &bull; Scheduling Workflow</span>
            </div>
          </div>

          <div class="featured-cs-content">
            <div class="featured-cs-client">Agape Community Fellowship &bull; Community Outreach</div>
            <h3 class="featured-cs-title">Case Study A: Social Media Content Campaign</h3>
            <p class="featured-cs-desc">
              A comprehensive 7-day social media campaign strategy designed to boost service attendance and volunteer onboarding. Includes 3 audience-aligned content pillars, 8 sample Canva posts with full captions and CTAs, a 1-week calendar table, and an accountable measurement framework without fabricated metrics.
            </p>

            <div class="featured-cs-key-points">
              <div class="cs-point-item"><i class="fas fa-bullseye" style="color: #f39200;"></i> <span><strong>Goal:</strong> Attendance &amp; Midweek Retention</span></div>
              <div class="cs-point-item"><i class="fas fa-layer-group" style="color: #f39200;"></i> <span><strong>Pillars:</strong> Inspiration (40%), Events (35%), People (25%)</span></div>
              <div class="cs-point-item"><i class="fas fa-calendar-week" style="color: #f39200;"></i> <span><strong>Workflow:</strong> 7-Day Calendar + Meta Business Suite</span></div>
              <div class="cs-point-item"><i class="fas fa-chart-line" style="color: #f39200;"></i> <span><strong>KPIs:</strong> True Engagement Rate, Saves, UTM Bio Clicks</span></div>
            </div>

            <div class="featured-cs-action-row">
              <a href="case-study-campaign.html" class="btn-behance-primary" style="background: #f39200; border-color: #f39200; color: #111; font-weight: 800;">
                <i class="fas fa-arrow-right"></i> Open Case Study A (Playbook)
              </a>
              <span class="featured-cs-runtime"><i class="fas fa-clock"></i> 4 min read</span>
            </div>
          </div>
        </article>

        <!-- Case Study B Card -->
        <article class="featured-cs-card cs-card-brand">
          <div class="featured-cs-badge-row">
            <span class="featured-cs-badge-concept" style="background: rgba(197, 160, 89, 0.12); border-color: #c5a059; color: #c5a059;"><i class="fas fa-compass"></i> CONCEPT BRAND SYSTEM</span>
            <span class="featured-cs-badge-role" style="color: #c5a059;">BRAND DESIGN &bull; FIGMA</span>
          </div>

          <div class="featured-cs-image-preview">
            <img src="Assets/Brand Campaign/1.png" alt="Apex Outdoors Brand System Preview" loading="lazy" />
            <div class="featured-cs-image-overlay">
              <span class="cs-quick-view-tag" style="border-color: #c5a059;">Design Tokens &bull; Multi-Format &bull; 16 Assets</span>
            </div>
          </div>

          <div class="featured-cs-content">
            <div class="featured-cs-client">Apex Outdoors &bull; DTC Technical Outerwear</div>
            <h3 class="featured-cs-title">Case Study B: Brand Design System</h3>
            <p class="featured-cs-desc">
              A robust visual identity rollout engineered to transition a sustainable outdoor apparel brand from fragmented marketing collateral to an iconic DTC presence. Features systematic Alpine Olive &amp; Summit Cream color tokens, typography rules, 16 multi-format social assets, and a 15-minute templating workflow.
            </p>

            <div class="featured-cs-key-points">
              <div class="cs-point-item"><i class="fas fa-palette" style="color: #c5a059;"></i> <span><strong>Tokens:</strong> Alpine Olive, Summit Cream, Ice White, Obsidian</span></div>
              <div class="cs-point-item"><i class="fas fa-font" style="color: #c5a059;"></i> <span><strong>Typography:</strong> Serif Display + Clean Sans + Monospace Specs</span></div>
              <div class="cs-point-item"><i class="fas fa-expand-arrows-alt" style="color: #c5a059;"></i> <span><strong>Formats:</strong> 1:1 Feed, 4:5 Carousels, 9:16 Stories, Packaging</span></div>
              <div class="cs-point-item"><i class="fas fa-stopwatch" style="color: #c5a059;"></i> <span><strong>Impact:</strong> Cuts asset creation from 90 mins to 15 mins</span></div>
            </div>

            <div class="featured-cs-action-row">
              <a href="case-study-brand-system.html" class="btn-behance-primary" style="background: #c5a059; border-color: #c5a059; color: #111; font-weight: 800;">
                <i class="fas fa-arrow-right"></i> Open Case Study B (Brand System)
              </a>
              <span class="featured-cs-runtime"><i class="fas fa-clock"></i> 5 min read</span>
            </div>
          </div>
        </article>

      </div>

      <!-- Filter Controls: Case Studies First -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px; margin: 40px 0 20px; padding-top: 25px; border-top: 1px solid var(--border);">
        <div style="font-family: 'Space Mono', monospace; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text); font-weight: 800; display: flex; align-items: center; gap: 8px;">
          <i class="fas fa-layer-group" style="color: #f39200;"></i> Filter Creative Library
        </div>
        <span style="font-size: 0.76rem; color: var(--text-light); font-family: 'Space Mono', monospace;">Select a category to filter cards below</span>
      </div>

      <!-- Filter Buttons with Case Studies Tab -->
      <div class="filter-tabs-container">
        <button class="filter-tab-btn active" data-filter="case-studies"><i class="fas fa-star" style="color: #f39200;"></i> Case Studies (2)</button>
        <button class="filter-tab-btn" data-filter="branding">Brand Campaigns (12)</button>
        <button class="filter-tab-btn" data-filter="event-ads">Event &amp; Church Ads (32)</button>
        <button class="filter-tab-btn" data-filter="mockups">Mockups &amp; Products (12)</button>
        <button class="filter-tab-btn" data-filter="book-covers">Book Covers (14)</button>
        <button class="filter-tab-btn" data-filter="all">All Social Work (72)</button>
      </div>\n\n      `;

  indexHtml = indexHtml.slice(0, startIdx) + replacementSection + indexHtml.slice(endIdx);
  console.log('Successfully replaced case studies + posts section header in index.html');
} else {
  console.log('Could not find markers in index.html');
}

// Add the 2 case study cards into postsGrid if not already present
if (!indexHtml.includes('data-category="case-studies"')) {
  const postsGridTarget = '<div class="posts-showcase-grid" id="postsGrid">';
  const caseStudyGridCards = `<div class="posts-showcase-grid" id="postsGrid">
        <!-- Case Study A Post Card -->
        <div class="post-card-behance" data-category="case-studies" data-img="Assets/SMM/Agape/church_ad_1.png"
          data-title="Case Study A: Social Media Content Campaign" data-category-name="Case Study A"
          data-desc="Complete 7-day social media campaign strategy for Agape Community Fellowship: 3 content pillars, 8 sample Canva posts with copy/CTAs, calendar table & Meta scheduling workflow.">
          <div class="post-card-img-wrap" style="position: relative;">
            <img src="Assets/SMM/Agape/church_ad_1.png" alt="Agape Social Media Campaign Case Study" loading="lazy" />
            <div style="position: absolute; top: 12px; left: 12px; background: rgba(243, 146, 0, 0.95); color: #111; font-weight: 800; font-size: 0.68rem; padding: 4px 10px; border-radius: 999px; z-index: 2; font-family: 'Space Mono', monospace;">
              ⭐ CONCEPT PLAYBOOK
            </div>
            <div class="post-card-overlay">
              <a href="case-study-campaign.html" class="glass-play-btn" style="text-decoration: none; font-size: 0.95rem; width: auto; padding: 10px 18px; border-radius: 999px; gap: 8px;">
                <i class="fas fa-file-alt"></i> <span>Open Case Study A</span>
              </a>
            </div>
          </div>
          <div class="post-card-info">
            <span class="post-card-category" style="color: #f39200;">CASE STUDY A &bull; SMM PLAYBOOK</span>
            <h3 class="post-card-title">Agape Community: Social Campaign &amp; VA Workflow</h3>
            <p style="font-size: 0.82rem; color: var(--text-light); margin: 6px 0 12px; line-height: 1.45;">
              Goal-oriented 7-day social campaign with 3 pillars, 8 sample posts, 1-week calendar table &amp; measurement framework.
            </p>
            <a href="case-study-campaign.html" class="post-card-cs-btn" style="--btn-bg: #f39200;">
              Read Full Case Study A <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <!-- Case Study B Post Card -->
        <div class="post-card-behance" data-category="case-studies" data-img="Assets/Brand Campaign/1.png"
          data-title="Case Study B: Brand Design System" data-category-name="Case Study B"
          data-desc="Complete visual identity and multi-format social design system for Apex Outdoors: Alpine Olive design tokens, typography rules & 16 cross-platform social assets.">
          <div class="post-card-img-wrap" style="position: relative;">
            <img src="Assets/Brand Campaign/1.png" alt="Apex Outdoors Brand Design System Case Study" loading="lazy" />
            <div style="position: absolute; top: 12px; left: 12px; background: rgba(197, 160, 89, 0.95); color: #111; font-weight: 800; font-size: 0.68rem; padding: 4px 10px; border-radius: 999px; z-index: 2; font-family: 'Space Mono', monospace;">
              ⭐ BRAND SYSTEM SPEC
            </div>
            <div class="post-card-overlay">
              <a href="case-study-brand-system.html" class="glass-play-btn" style="text-decoration: none; font-size: 0.95rem; width: auto; padding: 10px 18px; border-radius: 999px; gap: 8px;">
                <i class="fas fa-compass"></i> <span>Open Case Study B</span>
              </a>
            </div>
          </div>
          <div class="post-card-info">
            <span class="post-card-category" style="color: #c5a059;">CASE STUDY B &bull; DESIGN SYSTEM</span>
            <h3 class="post-card-title">Apex Outdoors: Brand Identity System</h3>
            <p style="font-size: 0.82rem; color: var(--text-light); margin: 6px 0 12px; line-height: 1.45;">
              Systematic Alpine Olive design tokens, typography rules, 16 multi-format social assets &amp; 15-minute templating workflow.
            </p>
            <a href="case-study-brand-system.html" class="post-card-cs-btn" style="--btn-bg: #c5a059;">
              Read Full Case Study B <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>`;

  indexHtml = indexHtml.replace(postsGridTarget, caseStudyGridCards);
  console.log('Added case study cards to postsGrid in index.html');
}

fs.writeFileSync('index.html', indexHtml, 'utf8');

// 2. UPDATE style.css
let styleCss = fs.readFileSync('style.css', 'utf8');
const extraCss = `
/* Post card case study button & card styles */
.post-card-cs-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--btn-bg, #f39200);
  color: #111 !important;
  font-weight: 800;
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 8px 16px;
  border-radius: 999px;
  text-decoration: none;
  margin-top: 8px;
  transition: all 0.25s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  align-self: flex-start;
}

.post-card-cs-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

.post-card-behance[data-category="case-studies"] {
  border: 1px solid rgba(243, 146, 0, 0.35);
  background: linear-gradient(180deg, rgba(243, 146, 0, 0.05) 0%, rgba(26, 26, 26, 0.95) 100%);
}

body.dark .post-card-behance[data-category="case-studies"] {
  border: 1px solid rgba(243, 146, 0, 0.35);
  background: linear-gradient(180deg, rgba(243, 146, 0, 0.06) 0%, rgba(20, 21, 25, 0.95) 100%);
}

.post-card-behance[data-category="case-studies"]:hover {
  border-color: #f39200;
  box-shadow: 0 16px 36px rgba(243, 146, 0, 0.16);
}
`;

if (!styleCss.includes('.post-card-cs-btn')) {
  styleCss += extraCss;
  fs.writeFileSync('style.css', styleCss, 'utf8');
  console.log('Added case study button CSS to style.css');
}

// 3. UPDATE script.js
let scriptJs = fs.readFileSync('script.js', 'utf8');
const oldClickGuard = 'if (e.target.closest(".open-video-modal")) return;';
const newClickGuard = 'if (e.target.closest(".open-video-modal") || e.target.closest("a") || e.target.closest(".post-card-cs-btn") || e.target.closest(".glass-play-btn")) return;';

if (scriptJs.includes(oldClickGuard)) {
  scriptJs = scriptJs.replace(oldClickGuard, newClickGuard);
  fs.writeFileSync('script.js', scriptJs, 'utf8');
  console.log('Updated click guard in script.js');
}
