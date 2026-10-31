const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// =========================================================================
// 1. UPDATE NAVBAR (Clear separation of portfolios)
// =========================================================================
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

if (html.includes(oldNav)) {
  html = html.replace(oldNav, newNav);
  console.log('1. Updated navbar navigation links');
} else {
  console.log('1. WARNING: Could not find exact oldNav');
}

// =========================================================================
// 2. HERO CALLS TO ACTION (Priority 2.4: Clear "View My Work" & "Contact Me")
// =========================================================================
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

if (html.includes(oldHeroActions)) {
  html = html.replace(oldHeroActions, newHeroActions);
  console.log('2. Updated Hero CTAs to "View My Work" and "Contact Me"');
} else {
  console.log('2. WARNING: Could not find exact oldHeroActions');
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Saved preliminary changes to index.html');

