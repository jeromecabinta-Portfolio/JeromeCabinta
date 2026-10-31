const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// =========================================================================
// 1. WORKFLOWS SECTION (#workflows)
// Sample Content Calendar, Caption Breakdown, 5-Step Scheduling Workflow
// =========================================================================
const workflowsSectionHtml = `
  <!-- =========================
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

// =========================================================================
// 2. ANALYTICS & REPORTING SECTION (#analytics)
// Transparent KPI framework, Looker Studio / Meta Insights reporting
// =========================================================================
const analyticsSectionHtml = `
  <!-- =========================
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
// 3. ENHANCE WEBSITES SECTION (#websites)
// Add explicit "My Exact Role & Contribution"
// =========================================================================
const oldWebsitesStart = html.indexOf('<section id="websites"');
const oldWebsitesEnd = html.indexOf('<!-- =========================\n       TOOLS & SKILLS');

const newWebsitesSectionHtml = `  <!-- =========================
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
// 4. SECONDARY CREATIVE GALLERY / ARCHIVE (#graphic-design-archive)
// Priority 2.1 & Priority 4.2: Move book covers, mockups, brand concepts into secondary archive
// =========================================================================

// Extract brand cards, mockup cards, book cards
const brandCards = fs.readFileSync('index.html.bak2', 'utf8').match(/<!-- Brand Campaign Post \d+ -->[\s\S]*?(?=(?:<!-- Brand Campaign Post \d+ -->|<!-- Church Ad 1 -->))/g) || [];
const mockupCards = fs.readFileSync('index.html.bak2', 'utf8').match(/<!-- Mockup Post \d+ -->[\s\S]*?(?=(?:<!-- Mockup Post \d+ -->|<!-- Book Cover 1 -->))/g) || [];
const bookCards = fs.readFileSync('index.html.bak2', 'utf8').match(/<!-- Book Cover \d+ -->[\s\S]*?(?=(?:<!-- Book Cover \d+ -->|<\/div>\s*<\/div>\s*<\/section>\s*<!-- =========================\s*TILTED MARQUEE RIBBON 1))/g) || [];

console.log('Archive components: Brand:', brandCards.length, 'Mockups:', mockupCards.length, 'Books:', bookCards.length);

const graphicDesignArchiveSectionHtml = `
  <!-- =========================
       SECONDARY CREATIVE GALLERY / ARCHIVE (PRIORITY 2.1 & PRIORITY 4.2)
  ========================= -->
  <section id="graphic-design-archive" class="section-behance" style="padding: 70px 0;">
    <div class="behance-container">
      <div class="behance-section-header">
        <h2 class="behance-title-condensed">GRAPHIC DESIGN &amp; CONCEPTS</h2>
        <span class="behance-subtitle-lime">Secondary Archive &bull; Editorial Book Covers, 3D Mockups &amp; Brand Systems</span>
      </div>

      <p style="text-align: center; color: var(--text-light); max-width: 750px; margin: 0 auto 24px; font-size: 0.9rem; line-height: 1.6;">
        In addition to social media management and client campaigns, here is an archive of commercial concept projects, editorial book covers, product mockups, and visual identity systems.
      </p>

      <!-- Archive Filter Tabs -->
      <div class="archive-tabs-container">
        <button class="archive-tab-btn active" data-archive-filter="all-archive">All Creative Archive (38)</button>
        <button class="archive-tab-btn" data-archive-filter="book-covers">Editorial Book Covers (14)</button>
        <button class="archive-tab-btn" data-archive-filter="mockups">3D Product Mockups (12)</button>
        <button class="archive-tab-btn" data-archive-filter="branding">Brand Concepts (12)</button>
      </div>

      <!-- Archive Cards Grid -->
      <div class="posts-showcase-grid" id="designArchiveGrid">
        ${bookCards.join('\n')}
        ${mockupCards.join('\n')}
        ${brandCards.join('\n')}
      </div>
    </div>
  </section>`;

// =========================================================================
// 5. UPDATE TESTIMONIALS SLIDER IN INDEX.HTML (Jonel, Angelito, Gemma, Rodilene, Arlene)
// =========================================================================
const oldTestiStart = html.indexOf('<section id="testimonials"');
const oldTestiEnd = html.indexOf('<!-- =========================\n       TILTED MARQUEE RIBBON 3');

const newTestimonialsSectionHtml = `  <!-- =========================
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
// ASSEMBLE SECTIONS INTO HTML
// =========================================================================

// Insert #workflows and #analytics right after #carousels
const carouselsEnd = html.indexOf('</section>\n\n  <!-- =========================\n       ABOUT ME (BEHANCE BENTO STYLE)');
if (carouselsEnd !== -1) {
  html = html.slice(0, carouselsEnd + 10) + '\n\n' + workflowsSectionHtml + '\n\n' + analyticsSectionHtml + '\n\n' + html.slice(carouselsEnd + 10);
  console.log('Inserted #workflows and #analytics after #carousels');
} else {
  console.log('WARNING: Could not find carouselsEnd marker');
}

// Replace #websites
if (oldWebsitesStart !== -1 && oldWebsitesEnd !== -1) {
  html = html.slice(0, oldWebsitesStart) + newWebsitesSectionHtml + '\n\n' + html.slice(oldWebsitesEnd);
  console.log('Replaced #websites with updated version with exact contributions');
}

// Insert #graphic-design-archive after testimonials
const testiIndex = html.indexOf('<!-- =========================\n       TESTIMONIALS SLIDER');
if (testiIndex !== -1) {
  // Replace testimonials section
  const nextMarquee = html.indexOf('<!-- =========================\n       TILTED MARQUEE RIBBON 3');
  html = html.slice(0, testiIndex) + newTestimonialsSectionHtml + '\n\n' + graphicDesignArchiveSectionHtml + '\n\n' + html.slice(nextMarquee);
  console.log('Updated testimonials and inserted #graphic-design-archive');
}

// =========================================================================
// SCRUB PROMOTIONAL BUZZWORDS ACROSS HTML
// =========================================================================
html = html.replaceAll('ENGINEERING HIGH-CONVERTING SOCIAL MEDIA &amp; BRAND DESIGN', 'CRAFTING DEPENDABLE SOCIAL MEDIA CONTENT &amp; VISUAL BRANDING');
html = html.replaceAll('viral short-form video reels', 'engaging short-form video reels');
html = html.replaceAll('VIRAL AD HOOK', 'PACED PRODUCT REEL');
html = html.replaceAll('VIRAL HOOKS &amp; MOTION', 'DYNAMIC MOTION GRAPHICS');
html = html.replaceAll('Viral Social Hooks &amp; Motion Ad', 'Dynamic Social Motion Graphics');
html = html.replaceAll('Engineered for paid ad campaigns with clear value messaging and high click-through conversion hooks.', 'Designed for social ad campaigns with clear value messaging and high retention motion pacing.');
html = html.replaceAll('High-converting promotional video ad crafted with high-impact visual hooks, dynamic motion pacing, and targeted conversion triggers.', 'Promotional video ad crafted with clean visual pacing, kinetic captions, and clear action steps.');
html = html.replaceAll('engineered for paid social channels, boosting CTR and brand awareness across platforms.', 'crafted for paid and organic social feeds with high visual clarity.');
html = html.replaceAll('Viral YouTube challenge cover art', 'Engaging YouTube video cover art');
html = html.replaceAll('engineered for maximum click-through rate', 'designed with high-contrast text and clean subject focus for clear readability');
html = html.replaceAll('engineered for commercial appeal', 'designed for professional shelf presentation and high contrast');
html = html.replaceAll('high-converting web strategy', 'responsive web design and clear user navigation');
html = html.replaceAll('turn passive feed scrollers into DTC shoppers', 'highlight product craftsmanship and athletic details');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully completed full HTML update.');

