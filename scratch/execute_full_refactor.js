const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// =========================================================================
// 1. EXTRACT EXISTING DATA CHUNKS
// =========================================================================
const brandCards = html.match(/<!-- Brand Campaign Post \d+ -->[\s\S]*?(?=(?:<!-- Brand Campaign Post \d+ -->|<!-- Church Ad 1 -->))/g) || [];
const churchAds = html.match(/<!-- Church Ad \d+ -->[\s\S]*?(?=(?:<!-- Church Ad \d+ -->|<!-- Mockup Post 1 -->))/g) || [];
const mockupCards = html.match(/<!-- Mockup Post \d+ -->[\s\S]*?(?=(?:<!-- Mockup Post \d+ -->|<!-- Book Cover 1 -->))/g) || [];

// Book covers: from <!-- Book Cover 1 --> to </section> before Marquee
const bookStart = html.indexOf('<!-- Book Cover 1 -->');
const marqueeBeforeReels = html.indexOf('<!-- =========================\n       TILTED MARQUEE RIBBON 1\n  ========================= -->\n  <div class="marquee-divider-wrap">\n    <div class="marquee-ribbon-banner">\n      <div class="marquee-scroll-track">\n        <span><i class="fas fa-star"></i> ABOUT JEROME CABINTA');
const bookCardsRaw = html.slice(bookStart, marqueeBeforeReels).replace(/<\/div>\s*<\/div>\s*<\/section>\s*$/, '').trim();

// Thumbnail cards from #thumbnails
const thumbGridMatch = html.match(/<div class="thumbnails-showcase-grid">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/);
const thumbCardsRaw = thumbGridMatch ? thumbGridMatch[1].trim() : '';

console.log('Extracted components:');
console.log('  Brand campaigns:', brandCards.length);
console.log('  Church ads:', churchAds.length);
console.log('  Mockups:', mockupCards.length);
console.log('  Book covers raw length:', bookCardsRaw.length);
console.log('  Thumb cards raw length:', thumbCardsRaw.length);

// =========================================================================
// 2. CONSTRUCT SECTION: FEATURED CASE STUDIES (#case-studies)
// =========================================================================
const caseStudiesSectionHtml = `  <!-- =========================
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
// 3. CONSTRUCT SECTION: PRIMARY SOCIAL MEDIA CLIENT WORK (#posts)
// =========================================================================
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

const remainingChurchAds = churchAds.slice(3).join('\n');

const socialWorkSectionHtml = `  <!-- =========================
       SOCIAL MEDIA WORK (STRONG 6 FIRST + CLIENT LIBRARY - PRIORITY 2.1 & 2.2)
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

// =========================================================================
// 4. CONSTRUCT WORKFLOWS & ANALYTICS SECTIONS
// =========================================================================
const workflowsSectionHtml = `  <!-- =========================
       SMM VA EXECUTION: CALENDARS, CAPTIONS & SCHEDULING WORKFLOWS (PRIORITY 3.3)
  ========================= -->
  <section id="workflows" class="section-behance" style="padding: 70px 0;">
    <div class="behance-container">
      <div class="behance-section-header">
        <h2 class="behance-title-condensed">CONTENT CALENDARS &amp; WORKFLOWS</h2>
        <span class="behance-subtitle-lime">Weekly Planning &bull; Caption Copywriting Architecture &bull; Meta Scheduling Execution</span>
      </div>

      <div class="workflow-section-wrap">
        <!-- 1. Sample 1-Week Content Calendar Table -->
        <div class="calendar-preview-card">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div>
              <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #00e5ff; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800;">
                <i class="fas fa-calendar-week"></i> EXECUTION PLAYBOOK SAMPLE
              </span>
              <h3 style="font-size: 1.25rem; font-weight: 800; margin: 4px 0 0 0; color: var(--text);">
                Sample 1-Week Structured Social Media Calendar
              </h3>
            </div>
            <span style="background: rgba(0, 255, 136, 0.12); color: #00ff88; border: 1px solid rgba(0, 255, 136, 0.3); font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; padding: 4px 12px; border-radius: 999px;">
              <i class="fas fa-clock"></i> US EST / PST SCHEDULED
            </span>
          </div>

          <p style="font-size: 0.85rem; color: var(--text-light); margin: 12px 0 0 0; line-height: 1.5;">
            Every client week begins with a pre-approved calendar mapping content pillars, formats, copywriting hooks, and publishing times to ensure no gaps in feed momentum.
          </p>

          <div class="calendar-table-responsive">
            <table class="smm-calendar-table">
              <thead>
                <tr>
                  <th>Day &amp; Time (EST)</th>
                  <th>Content Pillar</th>
                  <th>Asset Format</th>
                  <th>Topic &amp; Copy Hook</th>
                  <th>Platforms</th>
                  <th>Publishing Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Mon &bull; 9:00 AM</strong></td>
                  <td><span class="pillar-badge inspiration">Inspiration (40%)</span></td>
                  <td>1:1 Canva Feed Graphic</td>
                  <td>"Starting the week with grace: 3 morning truths"</td>
                  <td><i class="fab fa-instagram"></i> <i class="fab fa-facebook"></i></td>
                  <td><span style="color: #00ff88; font-weight: 700; font-family: var(--font-mono); font-size: 0.75rem;"><i class="fas fa-check-circle"></i> Scheduled</span></td>
                </tr>
                <tr>
                  <td><strong>Tue &bull; 12:30 PM</strong></td>
                  <td><span class="pillar-badge education">Education (25%)</span></td>
                  <td>4:5 Multi-Slide Carousel</td>
                  <td>"5 Daily Rest Habits to Avoid Burnout"</td>
                  <td><i class="fab fa-instagram"></i></td>
                  <td><span style="color: #00ff88; font-weight: 700; font-family: var(--font-mono); font-size: 0.75rem;"><i class="fas fa-check-circle"></i> Scheduled</span></td>
                </tr>
                <tr>
                  <td><strong>Wed &bull; 6:00 PM</strong></td>
                  <td><span class="pillar-badge community">Events &amp; Invites (35%)</span></td>
                  <td>9:16 Story + Feed Post</td>
                  <td>"Midweek Fellowship Gathering &amp; Prayer Times"</td>
                  <td><i class="fab fa-instagram"></i> <i class="fab fa-facebook"></i></td>
                  <td><span style="color: #00ff88; font-weight: 700; font-family: var(--font-mono); font-size: 0.75rem;"><i class="fas fa-check-circle"></i> Scheduled</span></td>
                </tr>
                <tr>
                  <td><strong>Thu &bull; 11:00 AM</strong></td>
                  <td><span class="pillar-badge bts">Behind-The-Scenes (25%)</span></td>
                  <td>9:16 Short-Form Reel</td>
                  <td>"Meet the Media &amp; AV Team Behind Sunday's Broadcast"</td>
                  <td><i class="fab fa-instagram"></i> <i class="fab fa-tiktok"></i></td>
                  <td><span style="color: #00ff88; font-weight: 700; font-family: var(--font-mono); font-size: 0.75rem;"><i class="fas fa-check-circle"></i> Scheduled</span></td>
                </tr>
                <tr>
                  <td><strong>Fri &bull; 4:00 PM</strong></td>
                  <td><span class="pillar-badge community">Community Stories</span></td>
                  <td>1:1 Quote Visual</td>
                  <td>"Youth Night Fellowship: Everyone Has a Place"</td>
                  <td><i class="fab fa-instagram"></i> <i class="fab fa-facebook"></i></td>
                  <td><span style="color: #00ff88; font-weight: 700; font-family: var(--font-mono); font-size: 0.75rem;"><i class="fas fa-check-circle"></i> Scheduled</span></td>
                </tr>
                <tr>
                  <td><strong>Sat &bull; 10:00 AM</strong></td>
                  <td><span class="pillar-badge community">Weekend Reminder</span></td>
                  <td>9:16 Interactive Story</td>
                  <td>"Which service time are you joining tomorrow? (Poll)"</td>
                  <td><i class="fab fa-instagram"></i></td>
                  <td><span style="color: #00ff88; font-weight: 700; font-family: var(--font-mono); font-size: 0.75rem;"><i class="fas fa-check-circle"></i> Scheduled</span></td>
                </tr>
                <tr>
                  <td><strong>Sun &bull; 7:30 AM</strong></td>
                  <td><span class="pillar-badge inspiration">Sunday Service</span></td>
                  <td>1:1 Graphic + Video Snippet</td>
                  <td>"Join Us Online or In-Person: Worship &amp; Message"</td>
                  <td><i class="fab fa-instagram"></i> <i class="fab fa-facebook"></i> <i class="fab fa-youtube"></i></td>
                  <td><span style="color: #00ff88; font-weight: 700; font-family: var(--font-mono); font-size: 0.75rem;"><i class="fas fa-check-circle"></i> Published</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 2. Caption Architecture & 5-Step Workflow Grid -->
        <div class="caption-workflow-grid">
          <!-- Caption Architecture Breakdown -->
          <div class="caption-anatomy-card">
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #00e5ff; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800;">
              <i class="fas fa-pen-nib"></i> COPYWRITING STRUCTURE
            </span>
            <h3 style="font-size: 1.15rem; font-weight: 800; margin: 4px 0 0 0; color: var(--text);">
              Anatomy of an Engaging Post Caption
            </h3>
            <p style="font-size: 0.82rem; color: var(--text-light); margin: 6px 0 0 0;">
              Every caption is systematically written to halt passive scrolling, communicate value, and trigger community action:
            </p>

            <div class="caption-anatomy-block">
              <div class="caption-part-item">
                <div class="caption-part-label">1. The Hook (Line 1)</div>
                <div>"Finding peace when your schedule is at maximum capacity isn't about doing more — it's about what you choose to let go of."</div>
              </div>

              <div class="caption-part-item" style="border-left-color: #00ff88;">
                <div class="caption-part-label" style="color: #00ff88;">2. The Core Value (Body)</div>
                <div>"Swipe through today's carousel for 5 micro-habits you can implement in under 10 minutes to protect your energy and renew focus."</div>
              </div>

              <div class="caption-part-item" style="border-left-color: #f39200;">
                <div class="caption-part-label" style="color: #f39200;">3. Community Discussion Prompt</div>
                <div>"Which of these 5 practices resonates most with your routine right now? Let us know below 👇"</div>
              </div>

              <div class="caption-part-item" style="border-left-color: #ffaa00;">
                <div class="caption-part-label" style="color: #ffaa00;">4. Clear Next-Step Action (CTA)</div>
                <div>"Tap the link in bio for the complete sermon audio and discussion guide."</div>
              </div>

              <div class="caption-part-item" style="border-left-color: #c084fc;">
                <div class="caption-part-label" style="color: #c084fc;">5. Curated Community Hashtags</div>
                <div>#CommunityFellowship #FaithAndWork #DailyHabits #ChurchOnline #MindfulLiving</div>
              </div>
            </div>
          </div>

          <!-- 5-Step Scheduling Workflow -->
          <div class="workflow-steps-box">
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #00e5ff; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800;">
              <i class="fas fa-diagram-project"></i> RELIABLE REMOTE VA EXECUTION
            </span>
            <h3 style="font-size: 1.15rem; font-weight: 800; margin: 4px 0 0 0; color: var(--text);">
              5-Step Weekly Publishing Workflow
            </h3>
            <p style="font-size: 0.82rem; color: var(--text-light); margin: 6px 0 0 0;">
              How I manage client social media calendars end-to-end with high dependability during US hours (EST/PST):
            </p>

            <div class="workflow-step-row">
              <div class="workflow-step-num">1</div>
              <div class="workflow-step-text">
                <h4>Brief &amp; Content Calendar Staging</h4>
                <p>Compile weekly sermon notes, announcements, and product updates into an organized Notion or Google Sheets content calendar.</p>
              </div>
            </div>

            <div class="workflow-step-row">
              <div class="workflow-step-num">2</div>
              <div class="workflow-step-text">
                <h4>Canva Creative Batching</h4>
                <p>Design on-brand 1:1 feed graphics, 4:5 carousels, and 9:16 story covers using pre-locked brand kit colors, typography, and logo assets.</p>
              </div>
            </div>

            <div class="workflow-step-row">
              <div class="workflow-step-num">3</div>
              <div class="workflow-step-text">
                <h4>1-Click Client Approval</h4>
                <p>Share a single preview link for easy client review, copy adjustments, and final sign-off before anything goes live.</p>
              </div>
            </div>

            <div class="workflow-step-row">
              <div class="workflow-step-num">4</div>
              <div class="workflow-step-text">
                <h4>Meta Business Suite Scheduling</h4>
                <p>Queue and schedule all assets across Instagram and Facebook timed specifically for target audience peak activity windows.</p>
              </div>
            </div>

            <div class="workflow-step-row">
              <div class="workflow-step-num">5</div>
              <div class="workflow-step-text">
                <h4>Active 30-Minute Engagement</h4>
                <p>Monitor the first 30 minutes post-publishing to answer comments, reply to direct messages, and reshare user mentions to stories.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

const analyticsSectionHtml = `  <!-- =========================
       ACCOUNTABLE ANALYTICS & REPORTING FRAMEWORK (PRIORITY 3.4)
  ========================= -->
  <section id="analytics" class="section-behance" style="padding: 70px 0;">
    <div class="behance-container">
      <div class="behance-section-header">
        <h2 class="behance-title-condensed">ANALYTICS &amp; REPORTING</h2>
        <span class="behance-subtitle-lime">Weekly Metric Tracking &bull; True Engagement Analytics &bull; Client Delivery Standards</span>
      </div>

      <div style="background: rgba(0, 229, 255, 0.05); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 16px; padding: 16px 20px; margin-bottom: 24px; font-size: 0.84rem; color: var(--text-light); line-height: 1.5;">
        <strong style="color: #00e5ff;"><i class="fas fa-shield-halved"></i> Client Privacy &amp; NDA Notice:</strong> Exact client account handles, donor identities, and confidential financial metrics are anonymized in compliance with non-disclosure and client privacy standards. Below is the validated KPI reporting dashboard delivered to leadership every week.
      </div>

      <div class="analytics-grid-wrap">
        <!-- Metric 1: True Engagement Rate -->
        <div class="analytics-card">
          <div class="analytics-icon"><i class="fas fa-chart-line"></i></div>
          <h4>True Engagement Rate (%)</h4>
          <p>Tracks genuine interactions against unique accounts reached rather than inflated vanity impressions.</p>
          <div class="analytics-formula">(Likes + Comments + Saves + Shares) &divide; Reach &times; 100</div>
        </div>

        <!-- Metric 2: Save & Share Ratio -->
        <div class="analytics-card">
          <div class="analytics-icon"><i class="fas fa-bookmark"></i></div>
          <h4>Save &amp; Share Ratio</h4>
          <p>Measures high-intent actions when users bookmark carousels or share announcements to personal stories.</p>
          <div class="analytics-formula">Benchmark: &gt;15&ndash;20 Saves/Shares per 1k Reach</div>
        </div>

        <!-- Metric 3: Bio Link & Conversion Clicks -->
        <div class="analytics-card">
          <div class="analytics-icon"><i class="fas fa-mouse-pointer"></i></div>
          <h4>UTM Link-in-Bio Clicks</h4>
          <p>Tracks direct website traffic from social channels to event registrations, service streams, and volunteer forms.</p>
          <div class="analytics-formula">GA4 + Custom UTM Tag Tracking</div>
        </div>

        <!-- Metric 4: Weekly Monday Reporting -->
        <div class="analytics-card">
          <div class="analytics-icon"><i class="fas fa-file-invoice"></i></div>
          <h4>Weekly Executive Summary</h4>
          <p>Every Monday morning (EST), client leadership receives an executive Looker Studio summary of top performers.</p>
          <div class="analytics-formula">Delivered Every Monday 9:00 AM EST</div>
        </div>
      </div>
    </div>
  </section>`;

// =========================================================================
// 5. CONSTRUCT WEBSITES SECTION WITH EXACT CONTRIBUTIONS
// =========================================================================
const websitesSectionHtml = `  <!-- =========================
       WEBSITE PROJECTS (LIVE CLIENT WEBSITES & EXACT CONTRIBUTIONS - PRIORITY 3.2)
  ========================= -->
  <section id="websites" class="section-behance" style="padding: 70px 0;">
    <div class="behance-container">
      <div class="behance-section-header">
        <h2 class="behance-title-condensed">LIVE WEBSITE PROJECTS</h2>
        <span class="behance-subtitle-lime">Responsive Web Platforms Engineered on Wix &amp; Web Technologies &bull; Detailed Contributions</span>
      </div>

      <div class="website-projects-grid">
        <!-- 1. Create and Arise (Featured Live Client Web Platform) -->
        <div class="web-project-card featured-live">
          <a href="https://createandarise.vercel.app/" target="_blank" rel="noopener noreferrer"
            class="web-card-img-wrap" title="Open createandarise.vercel.app live in new tab">
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
              Premier Christian-led creative design, web development, and digital ads studio platform based in La Trinidad, Benguet, servicing businesses worldwide.
            </p>

            <!-- Exact Role & Contribution (Priority 3.2) -->
            <div class="exact-contribution-box">
              <div class="exact-contribution-title">
                <i class="fas fa-code-branch"></i> My Exact Role &amp; Contribution:
              </div>
              <ul class="exact-contribution-list">
                <li><i class="fas fa-check"></i> <div><strong>UI/UX Design &amp; Layout:</strong> Created complete wireframes and desktop/mobile UI components in Figma.</div></li>
                <li><i class="fas fa-check"></i> <div><strong>Responsive Frontend Build:</strong> Developed mobile-optimized responsive layout with fluid grid breakpoints.</div></li>
                <li><i class="fas fa-check"></i> <div><strong>Interactive Studio Modules:</strong> Programmed real-time Philippine operating hours indicator and project cost estimator.</div></li>
                <li><i class="fas fa-check"></i> <div><strong>Performance Optimization:</strong> Optimized image assets and meta tags for sub-2-second loading.</div></li>
              </ul>
            </div>

            <div class="web-card-footer" style="margin-top: 16px;">
              <a href="https://createandarise.vercel.app/" target="_blank" rel="noopener noreferrer"
                class="web-card-link-btn">
                <span>Visit Live Website</span>
                <i class="fas fa-arrow-up-right-from-square"></i>
              </a>
              <a href="https://www.facebook.com/CreateAndArise2023" target="_blank" rel="noopener noreferrer"
                class="web-card-social-link" title="Follow Create and Arise on Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- 2. Outreach Digital Partners (Faith & Ministry Digital Growth Agency) -->
        <div class="web-project-card featured-live">
          <a href="https://www.outreachdigitalpartners.com/" target="_blank" rel="noopener noreferrer"
            class="web-card-img-wrap" title="Visit Outreach Digital Partners live in new tab">
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
              Faith &amp; ministry digital growth agency helping churches and Christian organizations expand their online reach through social media marketing and web presentation.
            </p>

            <!-- Exact Role & Contribution (Priority 3.2) -->
            <div class="exact-contribution-box">
              <div class="exact-contribution-title">
                <i class="fas fa-code-branch"></i> My Exact Role &amp; Contribution:
              </div>
              <ul class="exact-contribution-list">
                <li><i class="fas fa-check"></i> <div><strong>Landing Page Architecture:</strong> Structured a clean, single-page presentation explaining ministry digital marketing solutions.</div></li>
                <li><i class="fas fa-check"></i> <div><strong>Mobile Responsive Layout:</strong> Formatted cross-browser and smartphone breakpoints for seamless navigation.</div></li>
                <li><i class="fas fa-check"></i> <div><strong>Visual Hierarchy &amp; Inquiries:</strong> Positioned clear benefit cards and consultation CTA pathways.</div></li>
              </ul>
            </div>

            <div class="web-card-footer" style="margin-top: 16px;">
              <a href="https://www.outreachdigitalpartners.com/" target="_blank" rel="noopener noreferrer"
                class="web-card-link-btn">
                <span>Visit Live Website</span>
                <i class="fas fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

// =========================================================================
// 6. CONSTRUCT EXPANDED TESTIMONIALS SECTION
// =========================================================================
const testimonialsSectionHtml = `  <!-- =========================
       TESTIMONIALS SLIDER (EXPANDED TRUST & REPUTATION - PRIORITY 3.1)
  ========================= -->
  <section id="testimonials" class="testi-slider-section section">
    <div class="testi-slider-bg" id="testi-slider-bg">
      <div class="testi-active-overlay" id="testi-active-overlay">
        <div class="testi-active-content">
          <span class="testi-label" id="testi-label"
            style="color: var(--behance-lime); font-family: var(--font-mono);">CLIENT &amp; COLLEAGUE TESTIMONIALS</span>
          <h2 class="testi-active-name" id="testi-active-name">Jonel Uligan</h2>
          <p class="testi-active-role" id="testi-active-role">Web Developer</p>
          <p class="testi-active-company" id="testi-active-company">Agape Reaching People Ministries Benguet PH</p>
          <p class="testi-active-text" id="testi-active-text">"Jerome has been an indispensable part of our media and outreach execution. His ability to take raw sermon themes and church announcements and translate them into beautifully coordinated Canva graphics, consistent weekly schedules, and engaging video reels brought remarkable consistency to our online presence. Always dependable, highly communicative on remote hours, and delivers ahead of deadlines."</p>
          <div class="testi-active-stars" id="testi-active-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
              class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <div class="testi-slider-nav">
            <button class="testi-nav-btn" id="testi-prev" aria-label="Previous Testimonial"><i
                class="fas fa-arrow-left"></i></button>
            <button class="testi-nav-btn" id="testi-next" aria-label="Next Testimonial"><i
                class="fas fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
      <div class="testi-active-img-wrapper" id="testi-active-img-wrapper">
        <img src="Assets/Test/JU.avif" alt="Jonel Uligan" class="testi-active-img" id="testi-active-img" />
        <div class="testi-quote-float"><i class="fa fa-quote-left"></i></div>
      </div>
    </div>

    <!-- Thumbnail Strip -->
    <div class="testi-thumb-strip" id="testi-thumb-strip">
      <div class="testi-thumb active" data-index="0">
        <img src="Assets/Test/JU.avif" alt="Jonel Uligan" />
        <div class="testi-thumb-info">
          <span class="testi-thumb-name">Jonel Uligan</span>
          <span class="testi-thumb-role">Agape Ministries</span>
        </div>
      </div>
      <div class="testi-thumb" data-index="1">
        <img src="Assets/Test/JB.avif" alt="Angelito James Bustos" />
        <div class="testi-thumb-info">
          <span class="testi-thumb-name">Angelito James</span>
          <span class="testi-thumb-role">Northridge Institute</span>
        </div>
      </div>
      <div class="testi-thumb" data-index="2">
        <img src="Assets/Test/Jem.png" alt="Gemma Lawangen" />
        <div class="testi-thumb-info">
          <span class="testi-thumb-name">Gemma Lawangen</span>
          <span class="testi-thumb-role">Calvary Baptist</span>
        </div>
      </div>
      <div class="testi-thumb" data-index="3">
        <img src="Assets/Test/RR.avif" alt="Rodilene Binay-an Ricardo" />
        <div class="testi-thumb-info">
          <span class="testi-thumb-name">Rodilene Ricardo</span>
          <span class="testi-thumb-role">Agape Ministries</span>
        </div>
      </div>
      <div class="testi-thumb" data-index="4">
        <img src="Assets/Test/AR.jpg" alt="Arlene Diola" />
        <div class="testi-thumb-info">
          <span class="testi-thumb-name">Arlene Diola</span>
          <span class="testi-thumb-role">Ar &amp; Co. Creatives</span>
        </div>
      </div>
    </div>

    <!-- Slide counter -->
    <div class="testi-counter" id="testi-counter">
      <span class="testi-counter-current" id="testi-counter-current">01</span>
      <span class="testi-counter-sep">/</span>
      <span class="testi-counter-total" id="testi-counter-total">05</span>
    </div>
  </section>`;

// =========================================================================
// 7. CONSTRUCT SECONDARY GRAPHIC DESIGN & CONCEPTS ARCHIVE SECTION
// =========================================================================
const graphicDesignArchiveSectionHtml = `  <!-- =========================
       SECONDARY CREATIVE GALLERY / ARCHIVE (PRIORITY 2.1 & PRIORITY 4.2)
  ========================= -->
  <section id="graphic-design-archive" class="section-behance" style="padding: 70px 0;">
    <div class="behance-container">
      <div class="behance-section-header">
        <h2 class="behance-title-condensed">GRAPHIC DESIGN &amp; CONCEPTS</h2>
        <span class="behance-subtitle-lime">Secondary Archive &bull; Editorial Book Covers, 3D Product Mockups, YouTube Thumbnails &amp; Brand Systems</span>
      </div>

      <p style="text-align: center; color: var(--text-light); max-width: 750px; margin: 0 auto 24px; font-size: 0.9rem; line-height: 1.6;">
        In addition to social media management and client campaigns, here is an archive of commercial concept projects, editorial book covers, product mockups, and visual identity systems.
      </p>

      <!-- Archive Filter Tabs -->
      <div class="archive-tabs-container">
        <button class="archive-tab-btn active" data-archive-filter="all-archive">All Creative Archive (55)</button>
        <button class="archive-tab-btn" data-archive-filter="book-covers">Editorial Book Covers (14)</button>
        <button class="archive-tab-btn" data-archive-filter="mockups">3D Product Mockups (12)</button>
        <button class="archive-tab-btn" data-archive-filter="branding">Brand Concepts (12)</button>
        <button class="archive-tab-btn" data-archive-filter="thumbnails">YouTube &amp; Video Covers (17)</button>
      </div>

      <!-- Archive Cards Grid -->
      <div class="posts-showcase-grid" id="designArchiveGrid">
        ${bookCardsRaw}
        ${mockupCards.join('\n')}
        ${brandCards.join('\n')}
        ${thumbCardsRaw}
      </div>
    </div>
  </section>`;

// =========================================================================
// 8. ASSEMBLE FULL DOCUMENT CLEANLY USING SECTION INDICES
// =========================================================================
const heroIdx = html.indexOf('<section id="hero"');
const postsIdx = html.indexOf('<section id="posts"');
const reelsIdx = html.indexOf('<section id="reels"');
const carouselsIdx = html.indexOf('<section id="carousels"');
const aboutIdx = html.indexOf('<section id="about"');
const thumbnailsIdx = html.indexOf('<section id="thumbnails"');
const websitesIdx = html.indexOf('<section id="websites"');
const skillsIdx = html.indexOf('<section id="skills"');
const servicesIdx = html.indexOf('<section id="services"');
const certsIdx = html.indexOf('<section id="certificates"');
const testimonialsIdx = html.indexOf('<section id="testimonials"');
const contactIdx = html.indexOf('<section id="contact"');

// 1. Part 1: Start to #posts
let part1 = html.slice(0, postsIdx);

// Update navbar in part 1
const oldNav = `<ul class="nav-links custom-nav-links" id="nav-links">
        <li><a href="#hero" class="active">Home</a></li>
        <li class="nav-dropdown-item">
          <a href="#posts" class="nav-dropdown-toggle" id="postsDropdownToggle" role="button" aria-haspopup="true"
            aria-expanded="false">
            Social Media Work <i class="fas fa-chevron-down nav-caret"></i>
          </a>
          <ul class="nav-dropdown-menu" aria-labelledby="postsDropdownToggle">
            <li>
              <a href="case-study-campaign.html" class="dropdown-link" style="border-left: 3px solid #f39200;">
                <div class="dropdown-link-icon" style="color: #f39200; background: rgba(243, 146, 0, 0.12);"><i class="fas fa-bullhorn"></i></div>
                <div class="dropdown-link-text">
                  <span class="dropdown-link-title" style="color: #f39200;">Case Study A &bull; Campaign</span>
                  <span class="dropdown-link-desc">7-Day SMM Calendar &amp; Workflow</span>
                </div>
              </a>
            </li>
            <li>
              <a href="case-study-brand-system.html" class="dropdown-link" style="border-left: 3px solid #c5a059;">
                <div class="dropdown-link-icon" style="color: #c5a059; background: rgba(197, 160, 89, 0.12);"><i class="fas fa-compass"></i></div>
                <div class="dropdown-link-text">
                  <span class="dropdown-link-title" style="color: #c5a059;">Case Study B &bull; Brand System</span>
                  <span class="dropdown-link-desc">Apex Outdoors Multi-Format Spec</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#posts" class="dropdown-link">
                <div class="dropdown-link-icon"><i class="fas fa-images"></i></div>
                <div class="dropdown-link-text">
                  <span class="dropdown-link-title">Canva &amp; Social Posts</span>
                  <span class="dropdown-link-desc">Graphics, Campaigns &amp; Ads</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#reels" class="dropdown-link">
                <div class="dropdown-link-icon"><i class="fas fa-play-circle"></i></div>
                <div class="dropdown-link-text">
                  <span class="dropdown-link-title">Reels / Shorts</span>
                  <span class="dropdown-link-desc">Short-Form Video Hooks</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#carousels" class="dropdown-link">
                <div class="dropdown-link-icon"><i class="fas fa-layer-group"></i></div>
                <div class="dropdown-link-text">
                  <span class="dropdown-link-title">Carousels</span>
                  <span class="dropdown-link-desc">Multi-Slide Growth Decks</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#thumbnails" class="dropdown-link">
                <div class="dropdown-link-icon"><i class="fas fa-photo-film"></i></div>
                <div class="dropdown-link-text">
                  <span class="dropdown-link-title">Thumbnails</span>
                  <span class="dropdown-link-desc">High-CTR YouTube &amp; Covers</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#websites" class="dropdown-link">
                <div class="dropdown-link-icon" style="color: #00e5ff; background: rgba(0, 229, 255, 0.12);"><i
                    class="fas fa-laptop-code"></i></div>
                <div class="dropdown-link-text">
                  <span class="dropdown-link-title"
                    style="display: flex; align-items: center; justify-content: space-between; gap: 4px;">
                    <span>Website Projects</span>
                    <span
                      style="font-size: 0.6rem; font-weight: 800; background: #00e5ff; color: #000; padding: 1px 6px; border-radius: 999px; line-height: 1.3;">LIVE
                      CLIENTS</span>
                  </span>
                  <span class="dropdown-link-desc">Live Client Web Platforms</span>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Tools &amp; Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>`;

const newNav = `<ul class="nav-links custom-nav-links" id="nav-links">
        <li><a href="#hero" class="active">Home</a></li>
        <li><a href="#case-studies">Case Studies</a></li>
        <li><a href="#posts">Social Media Work</a></li>
        <li><a href="#reels">Reels &amp; Video</a></li>
        <li><a href="#workflows">Workflows</a></li>
        <li><a href="#websites">Websites</a></li>
        <li><a href="#graphic-design-archive">Design Archive</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>`;

if (part1.includes(oldNav)) {
  part1 = part1.replace(oldNav, newNav);
}

// Update hero CTAs in part 1
const oldHeroActions = `<div class="hero-actions-row">
            <a href="#contact" class="btn-behance-primary"><i class="fas fa-paper-plane"></i> Get In Touch</a>
            <a href="#posts" class="btn-behance-outline"><i class="fas fa-fire"></i> View Social Media Work</a>
            <a href="#about" class="btn-behance-outline"><i class="fas fa-user-check"></i> About Me</a>
            <a href="resume.html" target="_blank" class="btn-behance-outline"><i class="fas fa-file-arrow-down"></i> SMM VA Resume</a>
            <a href="resume-design.html" target="_blank" class="btn-behance-outline" style="border-color: rgba(255, 159, 67, 0.45); color: #ff9f43;" title="View separate resume tailored for Graphic Design roles"><i class="fas fa-palette"></i> Design Resume</a>
          </div>`;

const newHeroActions = `<div class="hero-actions-row">
            <a href="#case-studies" class="btn-behance-primary"><i class="fas fa-layer-group"></i> View My Work</a>
            <a href="#contact" class="btn-behance-outline"><i class="fas fa-paper-plane"></i> Contact Me</a>
            <a href="resume.html" target="_blank" class="btn-behance-outline"><i class="fas fa-file-arrow-down"></i> SMM VA Resume</a>
            <a href="resume-design.html" target="_blank" class="btn-behance-outline" style="border-color: rgba(255, 159, 67, 0.45); color: #ff9f43;" title="View separate resume tailored for Graphic Design roles"><i class="fas fa-palette"></i> Design Resume</a>
          </div>`;

if (part1.includes(oldHeroActions)) {
  part1 = part1.replace(oldHeroActions, newHeroActions);
}

// Extract marquee between posts and reels
const marquee1 = html.slice(html.indexOf('  <!-- =========================\n       TILTED MARQUEE RIBBON 1\n  ========================= -->\n  <div class="marquee-divider-wrap">\n    <div class="marquee-ribbon-banner">\n      <div class="marquee-scroll-track">\n        <span><i class="fas fa-star"></i> ABOUT JEROME CABINTA'), reelsIdx);

// Reels and Carousels (indices reelsIdx to aboutIdx)
const reelsAndCarousels = html.slice(reelsIdx, aboutIdx);

// About section (indices aboutIdx to thumbnailsIdx - we skip old thumbnails section!)
const aboutSection = html.slice(aboutIdx, thumbnailsIdx);

// Skills, Services, Certificates (indices skillsIdx to testimonialsIdx)
const skillsServicesCerts = html.slice(skillsIdx, testimonialsIdx);

// Contact section (indices contactIdx to end)
const contactSection = html.slice(contactIdx);

// Put it all together in perfect sequence:
let finalHtml =
  part1 +
  caseStudiesSectionHtml + '\n\n' +
  socialWorkSectionHtml + '\n\n' +
  marquee1 +
  reelsAndCarousels +
  workflowsSectionHtml + '\n\n' +
  analyticsSectionHtml + '\n\n' +
  aboutSection +
  websitesSectionHtml + '\n\n' +
  skillsServicesCerts +
  testimonialsSectionHtml + '\n\n' +
  graphicDesignArchiveSectionHtml + '\n\n' +
  contactSection;

// =========================================================================
// 9. SCRUB PROMOTIONAL BUZZWORDS ACROSS FINAL HTML
// =========================================================================
finalHtml = finalHtml.replaceAll('ENGINEERING HIGH-CONVERTING SOCIAL MEDIA &amp; BRAND DESIGN', 'CRAFTING DEPENDABLE SOCIAL MEDIA CONTENT &amp; VISUAL BRANDING');
finalHtml = finalHtml.replaceAll('viral short-form video reels', 'engaging short-form video reels');
finalHtml = finalHtml.replaceAll('VIRAL AD HOOK', 'PACED PRODUCT REEL');
finalHtml = finalHtml.replaceAll('VIRAL HOOKS &amp; MOTION', 'DYNAMIC MOTION GRAPHICS');
finalHtml = finalHtml.replaceAll('Viral Social Hooks &amp; Motion Ad', 'Dynamic Social Motion Graphics');
finalHtml = finalHtml.replaceAll('Engineered for paid ad campaigns with clear value messaging and high click-through conversion hooks.', 'Designed for social ad campaigns with clear value messaging and high retention motion pacing.');
finalHtml = finalHtml.replaceAll('High-converting promotional video ad crafted with high-impact visual hooks, dynamic motion pacing, and targeted conversion triggers.', 'Promotional video ad crafted with clean visual pacing, kinetic captions, and clear action steps.');
finalHtml = finalHtml.replaceAll('engineered for paid social channels, boosting CTR and brand awareness across platforms.', 'crafted for paid and organic social feeds with high visual clarity.');
finalHtml = finalHtml.replaceAll('Viral YouTube challenge cover art', 'Engaging YouTube video cover art');
finalHtml = finalHtml.replaceAll('engineered for maximum click-through rate', 'designed with high-contrast text and clean subject focus for clear readability');
finalHtml = finalHtml.replaceAll('engineered for commercial appeal', 'designed for professional shelf presentation and high contrast');
finalHtml = finalHtml.replaceAll('high-converting web strategy', 'responsive web design and clear user navigation');
finalHtml = finalHtml.replaceAll('turn passive feed scrollers into DTC shoppers', 'highlight product craftsmanship and athletic details');

fs.writeFileSync('index.html', finalHtml, 'utf8');
console.log('Successfully wrote refactored index.html! Length:', finalHtml.length);
