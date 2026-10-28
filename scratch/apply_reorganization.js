const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

console.log('Original index.html length:', html.length);

// 1. Update Title & Meta in index.html
html = html.replace(
  /<title>.*?<\/title>/,
  '<title>Jerome Cabinta | Social Media VA — Content Creation, Canva &amp; Scheduling</title>'
);

html = html.replace(
  /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
  '<meta name="description" content="Portfolio of Jerome Cabinta — Social Media VA specializing in Content Creation, Canva graphics, and Social Media Scheduling. Available for US remote hours (EST/PST)." />'
);

// 2. Update Navbar Brand Subtitle
html = html.replace(
  /<span class="nav-brand-sub">[^<]*<\/span>/,
  '<span class="nav-brand-sub">SOCIAL MEDIA VA</span>'
);

// 3. Update Navbar Links Order: Home -> Social Media Work -> About -> Tools & Skills -> Services -> Contact
const oldNavLinks = `<ul class="nav-links custom-nav-links" id="nav-links">
        <li><a href="#hero" class="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li class="nav-dropdown-item">
          <a href="#posts" class="nav-dropdown-toggle" id="postsDropdownToggle" role="button" aria-haspopup="true"
            aria-expanded="false">
            Posts <i class="fas fa-chevron-down nav-caret"></i>
          </a>
          <ul class="nav-dropdown-menu" aria-labelledby="postsDropdownToggle">
            <li>
              <a href="#posts" class="dropdown-link">
                <div class="dropdown-link-icon"><i class="fas fa-images"></i></div>
                <div class="dropdown-link-text">
                  <span class="dropdown-link-title">Single Posts</span>
                  <span class="dropdown-link-desc">Brand Campaigns &amp; Ads</span>
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
        <li><a href="#skills">Tools &amp; Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>`;

const newNavLinks = `<ul class="nav-links custom-nav-links" id="nav-links">
        <li><a href="#hero" class="active">Home</a></li>
        <li class="nav-dropdown-item">
          <a href="#posts" class="nav-dropdown-toggle" id="postsDropdownToggle" role="button" aria-haspopup="true"
            aria-expanded="false">
            Social Media Work <i class="fas fa-chevron-down nav-caret"></i>
          </a>
          <ul class="nav-dropdown-menu" aria-labelledby="postsDropdownToggle">
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

if (html.includes(oldNavLinks)) {
  html = html.replace(oldNavLinks, newNavLinks);
  console.log('Navbar links updated to put Social Media Work first.');
} else {
  console.log('Warning: oldNavLinks exact match not found');
}

// 4. Update Hero Brand Pill
html = html.replace(
  /<span class="hero-brand-pill-title">[\s\S]*?<\/span>/,
  '<span class="hero-brand-pill-title">Jerome Cabinta &mdash; Social Media VA | Content Creation, Canva &amp; Scheduling</span>'
);

// 5. Update Tag Badge Strip
const oldTagBadges = `<div class="tag-badge-strip">
            <span class="behance-tag-badge"><i class="fab fa-figma"></i> FIGMA</span>
            <span class="behance-tag-badge"><i class="fas fa-palette"></i> CANVA</span>
            <span class="behance-tag-badge"><i class="fas fa-image"></i> ADOBE PHOTOSHOP</span>
            <span class="behance-tag-badge"><i class="fas fa-laptop-code"></i> WIX.COM</span>
            <span class="behance-tag-badge"><i class="fas fa-briefcase"></i> GOOGLE WORKSPACE</span>
            <span class="behance-tag-badge"><i class="fab fa-slack"></i> SLACK</span>
            <span class="behance-tag-badge"><i class="fas fa-robot"></i> AI TOOLS</span>
          </div>`;

const newTagBadges = `<div class="tag-badge-strip">
            <span class="behance-tag-badge" style="background: rgba(0, 229, 255, 0.15); border-color: rgba(0, 229, 255, 0.4); color: #00e5ff;"><i class="fas fa-palette"></i> CANVA</span>
            <span class="behance-tag-badge" style="background: rgba(0, 255, 136, 0.15); border-color: rgba(0, 255, 136, 0.4); color: #00ff88;"><i class="fas fa-pen-nib"></i> CONTENT CREATION</span>
            <span class="behance-tag-badge" style="background: rgba(255, 170, 0, 0.15); border-color: rgba(255, 170, 0, 0.4); color: #ffaa00;"><i class="fas fa-calendar-alt"></i> SCHEDULING</span>
            <span class="behance-tag-badge"><i class="fab fa-figma"></i> FIGMA</span>
            <span class="behance-tag-badge"><i class="fas fa-image"></i> ADOBE PHOTOSHOP</span>
            <span class="behance-tag-badge"><i class="fab fa-slack"></i> SLACK</span>
            <span class="behance-tag-badge"><i class="fas fa-robot"></i> AI TOOLS</span>
          </div>`;

if (html.includes(oldTagBadges)) {
  html = html.replace(oldTagBadges, newTagBadges);
  console.log('Tag badges updated.');
}

// 6. Update Hero Title & Headline Tagline
const oldHeroTitle = `<h1 class="hero-title-main">
            JEROME CABINTA<br>
            <span class="title-accent">SOCIAL MEDIA PORTFOLIO</span>
          </h1>`;

const newHeroTitle = `<h1 class="hero-title-main">
            JEROME CABINTA<br>
            <span class="title-accent">SOCIAL MEDIA VA</span>
          </h1>
          <p class="hero-subheadline-pill" style="font-family: var(--font-mono); font-size: clamp(0.85rem, 1.8vw, 1.05rem); font-weight: 700; color: #00e5ff; letter-spacing: 0.05em; text-transform: uppercase; margin: -10px 0 16px 0; display: inline-flex; align-items: center; gap: 8px;">
            <i class="fas fa-check-circle" style="color: var(--behance-lime);"></i> Content Creation &bull; Canva &bull; Scheduling
          </p>`;

if (html.includes(oldHeroTitle)) {
  html = html.replace(oldHeroTitle, newHeroTitle);
  console.log('Hero title and subheadline updated.');
}

// 7. Update Figma cursor badge
html = html.replace(
  /Jerome Cabinta \(SMM &amp; Graphic Designer\)/g,
  'Jerome Cabinta (Social Media VA)'
);

// 8. Update Hero Action Buttons
const oldHeroActions = `<div class="hero-actions-row">
            <a href="#posts" class="btn-behance-primary">🔥 Explore Creative Showcase</a>
            <a href="#about" class="btn-behance-outline"><i class="fas fa-briefcase"></i> View Experience</a>
            <a href="resume.html" target="_blank" class="btn-behance-outline"><i class="fas fa-file-arrow-down"></i>
              Resume</a>
          </div>`;

const newHeroActions = `<div class="hero-actions-row">
            <a href="#posts" class="btn-behance-primary">🔥 View Social Media Work</a>
            <a href="#about" class="btn-behance-outline"><i class="fas fa-user-check"></i> About Me</a>
            <a href="resume.html" target="_blank" class="btn-behance-outline"><i class="fas fa-file-arrow-down"></i>
              SMM VA Resume</a>
            <a href="resume-design.html" target="_blank" class="btn-behance-outline" style="border-color: rgba(255, 159, 67, 0.45); color: #ff9f43;" title="View separate resume tailored for Graphic Design roles"><i class="fas fa-palette"></i>
              Design Resume</a>
          </div>`;

if (html.includes(oldHeroActions)) {
  html = html.replace(oldHeroActions, newHeroActions);
  console.log('Hero action buttons updated.');
}

// 9. Update Hero Floating Badge
html = html.replace(
  /<div class="hero-badge-subtitle">SMM &bull; GRAPHIC DESIGN &bull; WIX WEBSITES<\/div>/,
  '<div class="hero-badge-subtitle">CONTENT CREATION &bull; CANVA &bull; SCHEDULING</div>'
);

// 10. Update Tilted Marquee Ribbons
html = html.replace(
  /<div class="marquee-scroll-track">[\s\S]*?<\/div>/,
  `<div class="marquee-scroll-track">
        <span><i class="fas fa-star"></i> JEROME CABINTA <i class="fas fa-star"></i> SOCIAL MEDIA VA <i class="fas fa-star"></i> CONTENT CREATION, CANVA &amp; SCHEDULING <i class="fas fa-star"></i> 3+ YEARS PHILIPPINES EXPERIENCE <i class="fas fa-star"></i> AGAPE MINISTRIES +20% ENGAGEMENT <i class="fas fa-star"></i> US REMOTE (EST/PST) <i class="fas fa-star"></i> CANVA &bull; FIGMA &bull; PHOTOSHOP</span>
        <span><i class="fas fa-star"></i> JEROME CABINTA <i class="fas fa-star"></i> SOCIAL MEDIA VA <i class="fas fa-star"></i> CONTENT CREATION, CANVA &amp; SCHEDULING <i class="fas fa-star"></i> 3+ YEARS PHILIPPINES EXPERIENCE <i class="fas fa-star"></i> AGAPE MINISTRIES +20% ENGAGEMENT <i class="fas fa-star"></i> US REMOTE (EST/PST) <i class="fas fa-star"></i> CANVA &bull; FIGMA &bull; PHOTOSHOP</span>
      </div>`
);

// 11. REORDER SECTIONS: Move posts, reels, and carousels before about section!
// Identify the About section block:
const aboutHeaderComment = `  <!-- =========================\n       ABOUT SECTION (CHECKERBOARD CANVAS)\n  ========================= -->`;
const aboutStartTag = `<section id="about" class="checkerboard-canvas-wrapper">`;
const aboutEndIdx = html.indexOf('</section>', html.indexOf(aboutStartTag)) + '</section>'.length;
const aboutStartIdx = html.indexOf(aboutHeaderComment);
const aboutBlock = html.slice(aboutStartIdx, aboutEndIdx);

console.log('About block size:', aboutBlock.length);

// Identify the Showcase block (posts, reels, carousels):
const showcaseHeaderComment = `  <!-- =========================\n       SINGLE POST & BRAND POSTERS (DARK GRID)\n  ========================= -->`;
const carouselsTag = `<section id="carousels"`;
const carouselsEndIdx = html.indexOf('</section>', html.indexOf(carouselsTag)) + '</section>'.length;
const showcaseStartIdx = html.indexOf(showcaseHeaderComment);
let showcaseBlock = html.slice(showcaseStartIdx, carouselsEndIdx);

console.log('Showcase block size:', showcaseBlock.length);

// Update showcase header to "SOCIAL MEDIA WORK"
showcaseBlock = showcaseBlock.replace(
  `<!-- =========================\n       SINGLE POST & BRAND POSTERS (DARK GRID)\n  ========================= -->`,
  `<!-- =========================\n       SOCIAL MEDIA WORK (CONTENT CREATION, CANVA & SCHEDULING)\n  ========================= -->`
);

showcaseBlock = showcaseBlock.replace(
  `<h2 class="behance-title-condensed">SINGLE POST</h2>\n        <span class="behance-subtitle-lime">Instagram Posters, AI-Enhanced Art &amp; Brand Campaigns</span>`,
  `<h2 class="behance-title-condensed">SOCIAL MEDIA WORK</h2>\n        <span class="behance-subtitle-lime">Content Creation &bull; Canva Social Posts &bull; Campaign Creatives &bull; Scheduling</span>`
);

// Reassemble:
// Before about: prefix
const prefix = html.slice(0, aboutStartIdx);
// Between aboutEnd and showcaseStart
const gap = html.slice(aboutEndIdx, showcaseStartIdx); // (usually just whitespace / comments)
// After showcaseEnd: suffix
const suffix = html.slice(carouselsEndIdx);

// New order: prefix + showcaseBlock + "\n\n" + aboutBlock + suffix
html = prefix + showcaseBlock + '\n\n' + aboutBlock + suffix;

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully updated and reordered index.html. New length:', html.length);
