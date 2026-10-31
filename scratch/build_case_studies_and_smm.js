const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// =========================================================================
// 1. EXTRACT DATA CHUNKS FROM CURRENT INDEX.HTML
// =========================================================================
const regexBrand = /<!-- Brand Campaign Post \d+ -->[\s\S]*?(?=(?:<!-- Brand Campaign Post \d+ -->|<!-- Church Ad 1 -->))/g;
const brandCampaigns = html.match(regexBrand);

const regexChurch = /<!-- Church Ad \d+ -->[\s\S]*?(?=(?:<!-- Church Ad \d+ -->|<!-- Mockup Post 1 -->))/g;
const churchAds = html.match(regexChurch);

const regexMock = /<!-- Mockup Post \d+ -->[\s\S]*?(?=(?:<!-- Mockup Post \d+ -->|<!-- Book Cover 1 -->))/g;
const mockups = html.match(regexMock);

const regexBooks = /<!-- Book Cover \d+ -->[\s\S]*?(?=(?:<!-- Book Cover \d+ -->|<\/div>\s*<\/div>\s*<\/section>\s*<!-- =========================\s*TILTED MARQUEE RIBBON 1))/g;
let books = html.match(regexBooks);
if (!books) {
  // alternative match
  const start = html.indexOf('<!-- Book Cover 1 -->');
  const end = html.indexOf('</div>\n    </div>\n  </section>\n\n  <!-- =========================\n       TILTED MARQUEE RIBBON 1');
  if (start !== -1 && end !== -1) {
    books = [html.slice(start, end).trim()];
  }
}

console.log('Brand campaigns count:', brandCampaigns.length);
console.log('Church ads count:', churchAds.length);
console.log('Mockups count:', mockups.length);
console.log('Books length:', books ? books.length : 0);

// =========================================================================
// 2. CONSTRUCT SECTION 2: TWO DETAILED CASE STUDIES (#case-studies)
// =========================================================================
const caseStudiesSectionHtml = `
  <!-- =========================
       FEATURED DETAILED CASE STUDIES (PRIORITY 2: FIRST IMPRESSION)
  ========================= -->
  <section id="case-studies" class="section-behance" style="padding: 70px 0;">
    <div class="behance-container">
      <div class="behance-section-header">
        <h2 class="behance-title-condensed">FEATURED CASE STUDIES</h2>
        <span class="behance-subtitle-lime">In-Depth Strategic Breakdowns &bull; End-to-End SMM VA Workflows &bull; Visual Design Systems</span>
      </div>

      <div class="featured-cs-grid">
        <!-- Case Study A: Social Media Content Campaign -->
        <article class="featured-cs-card">
          <div class="featured-cs-banner">
            <img src="Assets/SMM/Agape/church_ad_1.png" alt="Agape Social Media Campaign Case Study" loading="lazy" />
            <span class="featured-cs-tag campaign">
              <i class="fas fa-flask"></i> CONCEPT PROJECT &bull; STRATEGY &amp; SMM PLAYBOOK
            </span>
          </div>
          <div class="featured-cs-body">
            <span class="featured-cs-category" style="color: #f39200;">
              CASE STUDY A &bull; SOCIAL MEDIA VA PLAYBOOK
            </span>
            <h3 class="featured-cs-title">
              Agape Community Outreach: 7-Day Social Campaign &amp; VA Workflow
            </h3>
            <p class="featured-cs-desc">
              A goal-driven weekly campaign strategy designed for a multi-campus community organization. Replaced erratic, text-heavy announcements with a structured publishing cadence to build service attendance, mobilize volunteers, and foster authentic engagement without paid ad spend.
            </p>
            <div class="featured-cs-highlights">
              <div><i class="fas fa-layer-group" style="color: #f39200; width: 18px;"></i> <strong>Core Pillars:</strong> Inspiration (40%), Events &amp; Invites (35%), Community Stories (25%)</div>
              <div><i class="fas fa-calendar-alt" style="color: #f39200; width: 18px;"></i> <strong>Key Deliverables:</strong> 8 Sample Canva Creatives with full captions/CTAs + 7-Day Calendar</div>
              <div><i class="fas fa-clock" style="color: #f39200; width: 18px;"></i> <strong>SMM VA Workflow:</strong> Notion Staging &rarr; Canva Batching &rarr; Meta Business Suite &rarr; 30-Min Moderation</div>
            </div>
            <a href="case-study-campaign.html" class="featured-cs-cta-btn" style="background: #f39200;">
              <span>Read Full Case Study A</span> <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </article>

        <!-- Case Study B: Brand Design System -->
        <article class="featured-cs-card">
          <div class="featured-cs-banner">
            <img src="Assets/Brand Campaign/1.png" alt="Apex Outdoors Brand Design System Case Study" loading="lazy" />
            <span class="featured-cs-tag brand">
              <i class="fas fa-compass"></i> CONCEPT PROJECT &bull; BRAND DESIGN SYSTEM SPEC
            </span>
          </div>
          <div class="featured-cs-body">
            <span class="featured-cs-category" style="color: #c5a059;">
              CASE STUDY B &bull; BRAND IDENTITY &amp; DESIGN SYSTEM
            </span>
            <h3 class="featured-cs-title">
              Apex Outdoors: Visual Identity &amp; Multi-Format Design System
            </h3>
            <p class="featured-cs-desc">
              A comprehensive brand rollout and social media design system engineered for a sustainable technical outerwear label. Solved severe visual fragmentation across channels and reduced post production time from 90 minutes to 15 minutes through pre-locked Canva brand kits.
            </p>
            <div class="featured-cs-highlights">
              <div><i class="fas fa-palette" style="color: #c5a059; width: 18px;"></i> <strong>Design Tokens:</strong> Alpine Olive Palette (#2D3B2D, #C5A059) + Bebas Neue &amp; Syne Typography</div>
              <div><i class="fas fa-images" style="color: #c5a059; width: 18px;"></i> <strong>Key Deliverables:</strong> 16 Cross-Platform Assets (1:1 Feed Posts, 9:16 Stories, 16:9 Banners)</div>
              <div><i class="fas fa-bolt" style="color: #c5a059; width: 18px;"></i> <strong>Impact:</strong> 100% visual consistency and rapid turnaround for multi-channel product campaigns</div>
            </div>
            <a href="case-study-brand-system.html" class="featured-cs-cta-btn" style="background: #c5a059;">
              <span>Read Full Case Study B</span> <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>`;

// =========================================================================
// 3. CONSTRUCT SECTION 3: PRIMARY SOCIAL MEDIA WORK (#posts)
// Showing strongest 5-6 social media projects first, followed by expandable library of client work
// =========================================================================

// Top 6 curated projects:
const top6CardsHtml = `
      <!-- Top 6 Curated Social Media Projects Upfront (Priority 2.2) -->
      <div class="top-smm-grid">
        <!-- Project 1: Sunday Outreach Ad (Calvary Baptist Church) -->
        <div class="post-card-behance" data-category="event-ads client-work"
          data-img="Assets/Social Media Ads/calvary baptist church/1.png"
          data-title="In Christ — Sunday Service (April 26)" data-category-name="Event &amp; Church Ads"
          data-desc="Official social media ad design for community outreach, ministry campaigns, and worship services.">
          <div class="post-card-img-wrap">
            <img src="Assets/Social Media Ads/calvary baptist church/1.png" alt="In Christ — Sunday Service (April 26)" loading="lazy" />
            <div class="post-card-overlay">
              <div class="glass-play-btn"><i class="fas fa-magnifying-glass-plus"></i></div>
            </div>
          </div>
          <div class="post-card-info">
            <span class="post-card-category"><span class="post-type-tag client-tag"><i class="fas fa-check-circle"></i> CLIENT WORK</span> EVENT &amp; CHURCH ADS</span>
            <h3 class="post-card-title">In Christ — Sunday Service Outreach (April 26)</h3>
            <p style="font-size: 0.8rem; color: var(--text-light); margin-top: 6px; line-height: 1.4;">Sunday service invitation with clear venue location, service hours, and warm community welcoming typography.</p>
          </div>
        </div>

        <!-- Project 2: Agape Community Care & Fellowship -->
        <div class="post-card-behance" data-category="event-ads client-work"
          data-img="Assets/SMM/Agape/church_ad_1.png"
          data-title="Agape Community Outreach &amp; Care Drive" data-category-name="Event &amp; Church Ads"
          data-desc="Official social media promotional asset created for Agape Ministries volunteer mobilization and food distribution outreach.">
          <div class="post-card-img-wrap">
            <img src="Assets/SMM/Agape/church_ad_1.png" alt="Agape Community Outreach &amp; Care Drive" loading="lazy" />
            <div class="post-card-overlay">
              <div class="glass-play-btn"><i class="fas fa-magnifying-glass-plus"></i></div>
            </div>
          </div>
          <div class="post-card-info">
            <span class="post-card-category"><span class="post-type-tag client-tag"><i class="fas fa-check-circle"></i> CLIENT WORK</span> MINISTRY OUTREACH</span>
            <h3 class="post-card-title">Agape Community Outreach &amp; Care Drive</h3>
            <p style="font-size: 0.8rem; color: var(--text-light); margin-top: 6px; line-height: 1.4;">Multi-platform promotional campaign graphic designed to drive volunteer registrations and food care packages.</p>
          </div>
        </div>

        <!-- Project 3: Sermon Series Themed Artwork (Calvary Baptist Church) -->
        <div class="post-card-behance" data-category="event-ads client-work"
          data-img="Assets/Social Media Ads/calvary baptist church/2.png"
          data-title="In Christ — John 3:16 Sermon Series" data-category-name="Event &amp; Church Ads"
          data-desc="Weekly topical sermon series visual branding, Bible verse typography, and digital sermon flyer for online attendees.">
          <div class="post-card-img-wrap">
            <img src="Assets/Social Media Ads/calvary baptist church/2.png" alt="In Christ — John 3:16" loading="lazy" />
            <div class="post-card-overlay">
              <div class="glass-play-btn"><i class="fas fa-magnifying-glass-plus"></i></div>
            </div>
          </div>
          <div class="post-card-info">
            <span class="post-card-category"><span class="post-type-tag client-tag"><i class="fas fa-check-circle"></i> CLIENT WORK</span> SERMON SERIES ART</span>
            <h3 class="post-card-title">In Christ — John 3:16 Sermon Series Artwork</h3>
            <p style="font-size: 0.8rem; color: var(--text-light); margin-top: 6px; line-height: 1.4;">Thematic sermon branding combining Scripture focal point with high-contrast mobile typography.</p>
          </div>
        </div>

        <!-- Project 4: Educational Growth Carousel Deck -->
        <div class="post-card-behance" data-category="event-ads client-work"
          data-img="Assets/carousell/1/1.png"
          data-title="5 Daily Rest Habits Multi-Slide Carousel Deck" data-category-name="Carousels"
          data-desc="Multi-slide educational carousel designed in Canva to encourage audience saves, shares, and habit building.">
          <div class="post-card-img-wrap">
            <img src="Assets/carousell/1/1.png" alt="5 Daily Rest Habits Carousel" loading="lazy" />
            <div class="post-card-overlay">
              <div class="glass-play-btn"><i class="fas fa-magnifying-glass-plus"></i></div>
            </div>
          </div>
          <div class="post-card-info">
            <span class="post-card-category"><span class="post-type-tag client-tag"><i class="fas fa-check-circle"></i> CONTENT ASSET</span> MULTI-SLIDE CAROUSEL</span>
            <h3 class="post-card-title">5 Daily Rest Habits Multi-Slide Carousel Deck</h3>
            <p style="font-size: 0.8rem; color: var(--text-light); margin-top: 6px; line-height: 1.4;">Educational carousel designed to maximize audience bookmarking and personal story sharing.</p>
          </div>
        </div>

        <!-- Project 5: Weekend Worship Services (Calvary Baptist Church) -->
        <div class="post-card-behance" data-category="event-ads client-work"
          data-img="Assets/Social Media Ads/calvary baptist church/3.png"
          data-title="Join Us Worship Services (May 2-3)" data-category-name="Event &amp; Church Ads"
          data-desc="Official weekend service announcement flyer for community outreach and congregation updates.">
          <div class="post-card-img-wrap">
            <img src="Assets/Social Media Ads/calvary baptist church/3.png" alt="Join Us Worship Services (May 2-3)" loading="lazy" />
            <div class="post-card-overlay">
              <div class="glass-play-btn"><i class="fas fa-magnifying-glass-plus"></i></div>
            </div>
          </div>
          <div class="post-card-info">
            <span class="post-card-category"><span class="post-type-tag client-tag"><i class="fas fa-check-circle"></i> CLIENT WORK</span> WORSHIP SERVICE ANNOUNCEMENT</span>
            <h3 class="post-card-title">Join Us Weekend Worship Services</h3>
            <p style="font-size: 0.8rem; color: var(--text-light); margin-top: 6px; line-height: 1.4;">Community invitation poster highlighting service schedules, guest directions, and fellowship times.</p>
          </div>
        </div>

        <!-- Project 6: Agape Ministry Volunteer Spotlight -->
        <div class="post-card-behance" data-category="event-ads client-work"
          data-img="Assets/SMM/Agape/agape_ad1.png"
          data-title="Agape Volunteer Appreciation &amp; Ministry Spotlight" data-category-name="Event &amp; Church Ads"
          data-desc="Community storytelling visual celebrating ministry volunteers and welcoming new team sign-ups.">
          <div class="post-card-img-wrap">
            <img src="Assets/SMM/Agape/agape_ad1.png" alt="Agape Volunteer Appreciation" loading="lazy" />
            <div class="post-card-overlay">
              <div class="glass-play-btn"><i class="fas fa-magnifying-glass-plus"></i></div>
            </div>
          </div>
          <div class="post-card-info">
            <span class="post-card-category"><span class="post-type-tag client-tag"><i class="fas fa-check-circle"></i> CLIENT WORK</span> VOLUNTEER SPOTLIGHT</span>
            <h3 class="post-card-title">Agape Volunteer Appreciation &amp; Ministry Spotlight</h3>
            <p style="font-size: 0.8rem; color: var(--text-light); margin-top: 6px; line-height: 1.4;">Community storytelling post celebrating church volunteers and fostering warm audience comment engagement.</p>
          </div>
        </div>
      </div>
`;

// Remaining church ads (Ad 4 through 32):
const remainingChurchAds = churchAds.slice(3).join('\n');

const socialWorkSectionHtml = `
  <!-- =========================
       SOCIAL MEDIA WORK (STRONG 6 FIRST + CLIENT LIBRARY)
  ========================= -->
  <section id="posts" class="section-behance" style="padding: 70px 0;">
    <div class="behance-container">
      <div class="behance-section-header">
        <h2 class="behance-title-condensed">SOCIAL MEDIA WORK</h2>
        <span class="behance-subtitle-lime">Curated Client Campaigns &bull; Church Announcements &bull; Sermon Series &bull; Content Calendars</span>
      </div>

      <!-- Credibility Legend: Client / Employer Work vs Concept Projects -->
      <div class="project-credibility-legend">
        <span class="cred-legend-title"><i class="fas fa-shield-halved"></i> TRANSPARENT PROJECT CLASSIFICATION:</span>
        <div class="cred-legend-items">
          <span class="cred-badge client-work"><i class="fas fa-check-circle"></i> <strong>Client &amp; Employer Work:</strong> Real-world deliverables created for contracted organizations &amp; employers (Agape Ministries, Calvary Baptist Church, Create and Arise, Northridge Institute)</span>
          <span class="cred-badge concept-work"><i class="fas fa-flask"></i> <strong>Concept &amp; Speculative Projects:</strong> Strategic campaign playbooks and brand specs developed to demonstrate SMM VA workflows</span>
        </div>
      </div>

      ${top6CardsHtml}

      <!-- Interactive Expander for Full Client Ad Archive (Priority 2.2: Strongest first) -->
      <div class="archive-expand-box">
        <p style="color: var(--text-light); font-size: 0.95rem; margin: 0 0 16px 0;">
          Explore the full collection of 30+ official social media ads created for Calvary Baptist Church and Agape Ministries:
        </p>
        <button type="button" class="btn-toggle-archive" id="toggleSmmArchiveBtn" aria-expanded="false">
          <i class="fas fa-images"></i> <span>View All 30+ Client Church &amp; Event Ads</span> <i class="fas fa-chevron-down" id="archiveCaret"></i>
        </button>
      </div>

      <!-- Expandable Grid Container (Hidden by default to keep first impression punchy) -->
      <div class="posts-showcase-grid" id="smmFullArchiveGrid" style="display: none; margin-top: 30px;">
        ${remainingChurchAds}
      </div>

    </div>
  </section>`;

// Replace old #posts section with case studies + new social work section!
const oldPostsStart = html.indexOf('<section id="posts"');
const oldPostsEnd = html.indexOf('<!-- =========================\n       TILTED MARQUEE RIBBON 1');

if (oldPostsStart !== -1 && oldPostsEnd !== -1) {
  html = html.slice(0, oldPostsStart) + caseStudiesSectionHtml + '\n\n' + socialWorkSectionHtml + '\n\n' + html.slice(oldPostsEnd);
  console.log('Successfully replaced old #posts with #case-studies and curated #posts');
} else {
  console.error('Could not find boundaries of old #posts section!');
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Step 2 & 3 completed.');

