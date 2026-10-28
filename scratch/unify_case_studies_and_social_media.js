const fs = require('fs');

// 1. UPDATE index.html
let html = fs.readFileSync('index.html', 'utf8');

// (a) Remove duplicate "Case Studies" link from navbar
const oldNavbarItem = `<li><a href="#case-studies" style="color: #f39200; font-weight: 700;">Case Studies</a></li>\n        `;
if (html.includes(oldNavbarItem)) {
  html = html.replace(oldNavbarItem, '');
  console.log('Removed duplicate Case Studies nav item');
}

// (b) Replace the entire #posts section header and remove duplicate spotlight block
const oldPostsSectionStart = '<!-- =========================\n       SOCIAL MEDIA WORK & CASE STUDIES (CONTENT CREATION, CANVA & SCHEDULING)\n  ========================= -->';
const oldPostsGridStart = '<!-- Post Cards Grid -->\n      <div class="posts-showcase-grid" id="postsGrid">';

const pStart = html.indexOf(oldPostsSectionStart);
const pGrid = html.indexOf(oldPostsGridStart);

if (pStart !== -1 && pGrid !== -1) {
  const newUnifiedHeader = `<!-- =========================
       SOCIAL MEDIA WORK (INCLUDES CASE STUDIES, CANVA CREATIVES & SCHEDULING)
  ========================= -->
  <section id="posts" class="section-behance" style="padding: 70px 0;">
    <!-- Anchor for any internal case study links -->
    <div id="case-studies" style="position: relative; top: -100px;"></div>

    <div class="behance-container">
      <div class="behance-section-header">
        <h2 class="behance-title-condensed">SOCIAL MEDIA WORK</h2>
        <span class="behance-subtitle-lime">Strategic Case Studies &bull; Content Creation &bull; Canva Posts &bull; Campaign Scheduling</span>
      </div>

      <!-- Unified Filter Tabs: Case Studies First -->
      <div class="filter-tabs-container">
        <button class="filter-tab-btn active" data-filter="case-studies"><i class="fas fa-star" style="color: #f39200;"></i> Case Studies (2)</button>
        <button class="filter-tab-btn" data-filter="branding">Brand Campaigns (12)</button>
        <button class="filter-tab-btn" data-filter="event-ads">Event &amp; Church Ads (32)</button>
        <button class="filter-tab-btn" data-filter="mockups">Mockups &amp; Products (12)</button>
        <button class="filter-tab-btn" data-filter="book-covers">Book Covers (14)</button>
        <button class="filter-tab-btn" data-filter="all">All Social Work (72)</button>
      </div>\n\n      `;

  html = html.slice(0, pStart) + newUnifiedHeader + html.slice(pGrid);
  console.log('Replaced section with unified single Social Media Work header and filter tabs');
}

// (c) Update Case Studies cards inside postsGrid to have the rich content
const oldGridCardStart = '<!-- Case Study A Post Card -->';
const oldBrandingCard1 = '<!-- Brand Campaign Post 1 -->';

const cStart = html.indexOf(oldGridCardStart);
const cEnd = html.indexOf(oldBrandingCard1);

if (cStart !== -1 && cEnd !== -1) {
  const richCaseStudyCards = `<!-- Case Study A Post Card -->
        <div class="post-card-behance cs-grid-card" data-category="case-studies" data-img="Assets/SMM/Agape/church_ad_1.png"
          data-title="Case Study A: Social Media Content Campaign" data-category-name="Case Study A"
          data-desc="Complete 7-day social media campaign strategy for Agape Community Fellowship: 3 content pillars, 8 sample Canva posts with copy/CTAs, calendar table & Meta scheduling workflow.">
          <div class="post-card-img-wrap" style="position: relative; aspect-ratio: 16/10;">
            <img src="Assets/SMM/Agape/church_ad_1.png" alt="Agape Social Media Campaign Case Study" loading="lazy" />
            <div style="position: absolute; top: 12px; left: 12px; background: rgba(243, 146, 0, 0.95); color: #111; font-weight: 800; font-size: 0.68rem; padding: 4px 10px; border-radius: 999px; z-index: 2; font-family: 'Space Mono', monospace;">
              ⭐ CONCEPT CAMPAIGN &bull; SMM PLAYBOOK
            </div>
            <div class="post-card-overlay">
              <a href="case-study-campaign.html" class="glass-play-btn" style="text-decoration: none; font-size: 0.92rem; width: auto; padding: 10px 18px; border-radius: 999px; gap: 8px;">
                <i class="fas fa-file-alt"></i> <span>Open Full Case Study A</span>
              </a>
            </div>
          </div>
          <div class="post-card-info" style="padding: 22px 20px;">
            <div style="font-family: 'Space Mono', monospace; font-size: 0.72rem; text-transform: uppercase; color: #f39200; font-weight: 700; margin-bottom: 4px;">
              CASE STUDY A &bull; SOCIAL MEDIA VA
            </div>
            <h3 class="post-card-title" style="font-size: 1.25rem; font-weight: 800; line-height: 1.25; margin-bottom: 8px;">
              Agape Community Outreach: 7-Day Social Campaign &amp; VA Workflow
            </h3>
            <p style="font-size: 0.84rem; color: var(--text-light); margin: 0 0 14px; line-height: 1.5;">
              A goal-driven weekly campaign strategy designed to boost service attendance (+25%) and volunteer sign-ups without paid ad spend.
            </p>
            <div style="display: flex; flex-direction: column; gap: 6px; padding: 12px; background: rgba(0, 0, 0, 0.05); border: 1px solid var(--border); border-radius: 10px; margin-bottom: 16px; font-size: 0.78rem;">
              <div><i class="fas fa-layer-group" style="color: #f39200; width: 16px;"></i> <strong>Pillars:</strong> Inspiration (40%), Events (35%), People (25%)</div>
              <div><i class="fas fa-calendar-alt" style="color: #f39200; width: 16px;"></i> <strong>Deliverables:</strong> 8 Sample Posts with copy/CTAs + 7-Day Calendar</div>
              <div><i class="fas fa-clock" style="color: #f39200; width: 16px;"></i> <strong>Workflow:</strong> Notion Planning + Meta Business Suite Batching</div>
            </div>
            <a href="case-study-campaign.html" class="post-card-cs-btn" style="--btn-bg: #f39200;">
              Read Full Case Study A <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <!-- Case Study B Post Card -->
        <div class="post-card-behance cs-grid-card" data-category="case-studies" data-img="Assets/Brand Campaign/1.png"
          data-title="Case Study B: Brand Design System" data-category-name="Case Study B"
          data-desc="Complete visual identity and multi-format social design system for Apex Outdoors: Alpine Olive design tokens, typography rules & 16 cross-platform social assets.">
          <div class="post-card-img-wrap" style="position: relative; aspect-ratio: 16/10;">
            <img src="Assets/Brand Campaign/1.png" alt="Apex Outdoors Brand Design System Case Study" loading="lazy" />
            <div style="position: absolute; top: 12px; left: 12px; background: rgba(197, 160, 89, 0.95); color: #111; font-weight: 800; font-size: 0.68rem; padding: 4px 10px; border-radius: 999px; z-index: 2; font-family: 'Space Mono', monospace;">
              ⭐ CONCEPT BRAND SYSTEM SPEC
            </div>
            <div class="post-card-overlay">
              <a href="case-study-brand-system.html" class="glass-play-btn" style="text-decoration: none; font-size: 0.92rem; width: auto; padding: 10px 18px; border-radius: 999px; gap: 8px;">
                <i class="fas fa-compass"></i> <span>Open Full Case Study B</span>
              </a>
            </div>
          </div>
          <div class="post-card-info" style="padding: 22px 20px;">
            <div style="font-family: 'Space Mono', monospace; font-size: 0.72rem; text-transform: uppercase; color: #c5a059; font-weight: 700; margin-bottom: 4px;">
              CASE STUDY B &bull; BRAND IDENTITY
            </div>
            <h3 class="post-card-title" style="font-size: 1.25rem; font-weight: 800; line-height: 1.25; margin-bottom: 8px;">
              Apex Outdoors: Visual Identity &amp; Multi-Format Design System
            </h3>
            <p style="font-size: 0.84rem; color: var(--text-light); margin: 0 0 14px; line-height: 1.5;">
              A cohesive identity rollout resolving visual fragmentation for a sustainable outdoor apparel brand and cutting asset creation to 15 mins.
            </p>
            <div style="display: flex; flex-direction: column; gap: 6px; padding: 12px; background: rgba(0, 0, 0, 0.05); border: 1px solid var(--border); border-radius: 10px; margin-bottom: 16px; font-size: 0.78rem;">
              <div><i class="fas fa-palette" style="color: #c5a059; width: 16px;"></i> <strong>Tokens:</strong> Alpine Olive, Summit Cream, Ice White, Obsidian</div>
              <div><i class="fas fa-font" style="color: #c5a059; width: 16px;"></i> <strong>Typography:</strong> Serif Display + Clean Sans + Monospace Specs</div>
              <div><i class="fas fa-expand-arrows-alt" style="color: #c5a059; width: 16px;"></i> <strong>Formats:</strong> 16 Assets (1:1 Feed, 4:5 Carousels, 9:16, Web)</div>
            </div>
            <a href="case-study-brand-system.html" class="post-card-cs-btn" style="--btn-bg: #c5a059;">
              Read Full Case Study B <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>\n\n        `;

  html = html.slice(0, cStart) + richCaseStudyCards + html.slice(cEnd);
  console.log('Updated rich case studies cards inside postsGrid');
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Finished updating index.html');
