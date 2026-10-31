const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Insert #workflows and #analytics between #carousels and #about
const workflowsMarker = '<!-- =========================\n       ABOUT SECTION (CHECKERBOARD CANVAS)';
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
  </section>

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
  </section>
`;

if (html.includes(workflowsMarker)) {
  html = html.replace(workflowsMarker, workflowsSectionHtml + '\n\n' + workflowsMarker);
  console.log('Successfully inserted #workflows and #analytics');
} else {
  console.error('Could not find workflowsMarker');
}

fs.writeFileSync('index.html', html, 'utf8');

