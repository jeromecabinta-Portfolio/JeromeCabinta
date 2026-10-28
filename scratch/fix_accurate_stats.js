const fs = require('fs');
const path = require('path');

// ==========================================
// 1. UPDATE index.html
// ==========================================
const indexPath = path.join(__dirname, '..', 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

// Hero stat cards
const oldHeroStats = `<div class="hero-stats-row" style="grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));">
            <div class="hero-stat-card">
              <div class="hero-stat-number counter" data-target="450" data-prefix="+" data-suffix="%">+450%</div>
              <div class="hero-stat-label">Organic Engagement Growth</div>
            </div>
            <div class="hero-stat-card">
              <div class="hero-stat-number">1.2M+</div>
              <div class="hero-stat-label">Organic Video Views</div>
            </div>
            <div class="hero-stat-card">
              <div class="hero-stat-number counter" data-target="12" data-suffix="+">12+</div>
              <div class="hero-stat-label">Responsive Client Websites</div>
            </div>
            <div class="hero-stat-card">
              <div class="hero-stat-number">3+ Yrs</div>
              <div class="hero-stat-label">Professional Experience</div>
            </div>
          </div>`;

const newHeroStats = `<div class="hero-stats-row" style="grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));">
            <div class="hero-stat-card">
              <div class="hero-stat-number counter" data-target="20" data-prefix="+" data-suffix="%">+20%</div>
              <div class="hero-stat-label">Est. Engagement Growth</div>
            </div>
            <div class="hero-stat-card">
              <div class="hero-stat-number">2</div>
              <div class="hero-stat-label">Core Work Roles</div>
            </div>
            <div class="hero-stat-card">
              <div class="hero-stat-number counter" data-target="2" data-suffix="+">2+</div>
              <div class="hero-stat-label">Responsive Wix Websites</div>
            </div>
            <div class="hero-stat-card">
              <div class="hero-stat-number">3+ Yrs</div>
              <div class="hero-stat-label">Professional Experience</div>
            </div>
          </div>`;

if (indexHtml.includes(oldHeroStats)) {
  indexHtml = indexHtml.replace(oldHeroStats, newHeroStats);
  console.log('Updated hero stat cards in index.html');
} else {
  console.log('Warning: oldHeroStats exact match not found in index.html');
}

// Superpower Landing Page & Web Design in About
indexHtml = indexHtml.replace(
  `12+ responsive Wix and Figma client web architectures engineered for mobile UX and high conversion\n                  rates.`,
  `2+ responsive Wix websites and Figma web architectures engineered for clean mobile UX and clear presentation.`
);

// Agape bullets in About
const oldAgapeBullets = `<ul class="timeline-bullet-list">
                  <li>Drove <strong>+450% peak organic engagement</strong> on viral campaigns and sustained
                    <strong>+20%</strong> monthly community growth</li>
                  <li>Generated <strong>1.2M+ organic video views</strong> across short-form reels and visual social
                    assets</li>
                  <li>Created high-converting visual posts strengthening brand reach across platforms</li>
                  <li>Managed full weekly content calendars and community audience interaction</li>
                </ul>`;

const newAgapeBullets = `<ul class="timeline-bullet-list">
                  <li>Helped grow social media engagement by an estimated <strong>20%</strong> through consistent content strategies</li>
                  <li>Created engaging visual content and social media graphics strengthening brand reach across platforms</li>
                  <li>Managed full weekly content calendars, publishing workflows, and community audience interaction</li>
                  <li>Maintained brand consistency across multi-channel social campaigns</li>
                </ul>`;

if (indexHtml.includes(oldAgapeBullets)) {
  indexHtml = indexHtml.replace(oldAgapeBullets, newAgapeBullets);
  console.log('Updated Agape bullets in index.html');
}

// Northridge 12+ responsive Wix websites in About
indexHtml = indexHtml.replace(
  `<li>Designed and developed <strong>12+ responsive Wix websites</strong>, reducing load time by 35% and\n                    increasing mobile conversions by 25%</li>`,
  `<li>Designed and developed <strong>2+ responsive Wix websites</strong> to improve brand presentation and user experience</li>`
);

// Skills section superpower 12+
indexHtml = indexHtml.replace(
  `<p>12+ responsive Wix and Figma websites engineered for fast load times (-35%) and mobile conversions\n              (+25%).</p>`,
  `<p>2+ responsive Wix and Figma websites engineered for clean mobile UX and clear content presentation.</p>`
);

// Skills section analytics +450%
indexHtml = indexHtml.replace(
  `<p>Performance tracking, KPI reporting, and data-driven optimizations driving +450% campaign reach.</p>`,
  `<p>Performance tracking, KPI reporting, and data-driven optimizations to support consistent audience growth.</p>`
);

// Services results strip
const oldResultsStrip = `<div class="results-strip-stats">
          <div class="results-stat-item">
            <span class="results-stat-val">+450%</span>
            <span class="results-stat-lbl">Peak Engagement Growth</span>
          </div>
          <div class="results-stat-sep">&bull;</div>
          <div class="results-stat-item">
            <span class="results-stat-val">1.2M+</span>
            <span class="results-stat-lbl">Organic Video Views</span>
          </div>
          <div class="results-stat-sep">&bull;</div>
          <div class="results-stat-item">
            <span class="results-stat-val">12+</span>
            <span class="results-stat-lbl">Responsive Client Websites</span>
          </div>
          <div class="results-stat-sep">&bull;</div>
          <div class="results-stat-item">
            <span class="results-stat-val">+20%</span>
            <span class="results-stat-lbl">Sustained Community Growth</span>
          </div>
        </div>`;

const newResultsStrip = `<div class="results-strip-stats">
          <div class="results-stat-item">
            <span class="results-stat-val">+20%</span>
            <span class="results-stat-lbl">Est. Engagement Growth</span>
          </div>
          <div class="results-stat-sep">&bull;</div>
          <div class="results-stat-item">
            <span class="results-stat-val">2</span>
            <span class="results-stat-lbl">Core Work Roles</span>
          </div>
          <div class="results-stat-sep">&bull;</div>
          <div class="results-stat-item">
            <span class="results-stat-val">2+</span>
            <span class="results-stat-lbl">Responsive Wix Websites</span>
          </div>
          <div class="results-stat-sep">&bull;</div>
          <div class="results-stat-item">
            <span class="results-stat-val">3+ Yrs</span>
            <span class="results-stat-lbl">Hands-On Experience</span>
          </div>
        </div>`;

if (indexHtml.includes(oldResultsStrip)) {
  indexHtml = indexHtml.replace(oldResultsStrip, newResultsStrip);
  console.log('Updated results strip in index.html');
}

fs.writeFileSync(indexPath, indexHtml, 'utf8');


// ==========================================
// 2. UPDATE resume.html
// ==========================================
const resumePath = path.join(__dirname, '..', 'resume.html');
let resumeHtml = fs.readFileSync(resumePath, 'utf8');

const oldResumeAgape = `<ul class="resume-list">
          <li>Drove <strong>+450% peak organic engagement</strong> on viral campaigns and sustained
            <strong>+20%</strong> monthly community growth</li>
          <li>Generated <strong>1.2M+ organic video views</strong> across short-form reels and visual social assets</li>
          <li>Created high-converting visual posts strengthening brand presence across platforms</li>
          <li>Managed end-to-end content calendars, audience interactions, and weekly performance reporting</li>
        </ul>`;

const newResumeAgape = `<ul class="resume-list">
          <li>Helped grow social media engagement by an estimated <strong>20%</strong> through consistent content strategies and regular publishing</li>
          <li>Created engaging visual content and promotional graphics strengthening brand presence across platforms</li>
          <li>Managed end-to-end content calendars, audience interactions, and weekly performance reporting</li>
          <li>Maintained visual brand consistency across Instagram, Facebook, and video feeds</li>
        </ul>`;

if (resumeHtml.includes(oldResumeAgape)) {
  resumeHtml = resumeHtml.replace(oldResumeAgape, newResumeAgape);
  console.log('Updated Agape in resume.html');
}

resumeHtml = resumeHtml.replace(
  `<li>Designed and launched <strong>12+ responsive Wix websites</strong>, reducing load time by 35% and\n            increasing mobile conversions by 25%</li>`,
  `<li>Designed and developed <strong>2+ responsive Wix websites</strong> to improve brand presentation and user experience</li>`
);

fs.writeFileSync(resumePath, resumeHtml, 'utf8');


// ==========================================
// 3. UPDATE resume-design.html
// ==========================================
const designResumePath = path.join(__dirname, '..', 'resume-design.html');
let designResumeHtml = fs.readFileSync(designResumePath, 'utf8');

designResumeHtml = designResumeHtml.replace(
  `Proven track record producing viral visual assets, complete brand campaign packages, and 12+ responsive web architectures.`,
  `Proven track record delivering cohesive brand packages, high-converting promotional assets, and 2+ responsive Wix websites.`
);

designResumeHtml = designResumeHtml.replace(
  `<li>Designed high-converting visual campaign assets that drove <strong>+450% peak engagement</strong> and sustained <strong>+20%</strong> monthly audience growth</li>\n          <li>Engineered creative visual storytelling resulting in <strong>1.2M+ organic views</strong> across video reels and social graphics</li>`,
  `<li>Designed engaging visual campaign assets and social media graphics that helped grow engagement by an estimated <strong>20%</strong></li>\n          <li>Created creative visual storytelling, sermon series graphics, event posters, and carousel layouts</li>`
);

designResumeHtml = designResumeHtml.replace(
  `<li>Designed and launched <strong>12+ responsive Wix websites</strong>, cutting load times by 35% and increasing mobile conversions by 25%</li>`,
  `<li>Designed and launched <strong>2+ responsive Wix websites</strong>, improving mobile UX and navigation structure</li>`
);

fs.writeFileSync(designResumePath, designResumeHtml, 'utf8');


// ==========================================
// 4. UPDATE story.html
// ==========================================
const storyPath = path.join(__dirname, '..', 'story.html');
let storyHtml = fs.readFileSync(storyPath, 'utf8');

storyHtml = storyHtml.replace(
  `multi-week content planning, viral reels (1.2M+ views), Klaviyo/Mailchimp automated flows, 12+ responsive Wix websites, and performance analytics.`,
  `multi-week content planning, engaging visual posts, Klaviyo/Mailchimp automated flows, 2+ responsive Wix websites, and performance analytics.`
);

fs.writeFileSync(storyPath, storyHtml, 'utf8');

console.log('All stats successfully updated to accurate values across all files!');
