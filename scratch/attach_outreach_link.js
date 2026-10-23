const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const oldCardRegex = /<!-- 4\. Outreach Digital Partners -->[\s\S]*?<!-- 5\. VEmpire Luxury Watches -->/;

const newCard = `<!-- 4. Outreach Digital Partners -->
        <div class="web-project-card">
          <div class="web-card-img-wrap">
            <img src="Assets/Website/3.png" alt="Outreach Digital Partners Web Platform" loading="lazy" />
            <div class="web-card-overlay">
              <a href="https://www.outreachdigitalpartners.com/" target="_blank" rel="noopener noreferrer" class="web-card-overlay-btn" title="Visit Outreach Digital Partners live in new tab">
                <i class="fas fa-arrow-up-right-from-square"></i> Open Live Website
              </a>
            </div>
            <span class="web-card-badge-live"><span class="pulse-dot"></span> LIVE SITE</span>
          </div>
          <div class="web-card-content">
            <div class="web-card-tag-row">
              <span class="web-card-cat-tag tag-cyan">AGENCY / DIGITAL STRATEGY</span>
              <span class="web-card-domain">outreachdigitalpartners.com</span>
            </div>
            <h3 class="web-card-title">Outreach Digital Partners</h3>
            <p class="web-card-desc">
              Faith &amp; ministry digital growth agency helping churches and organizations expand their online reach through social media marketing, content creation, and high-converting web strategy.
            </p>
            <div class="web-card-footer">
              <a href="https://www.outreachdigitalpartners.com/" target="_blank" rel="noopener noreferrer" class="web-card-link-btn">
                <span>Visit Live Website</span>
                <i class="fas fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- 5. VEmpire Luxury Watches -->`;

if (oldCardRegex.test(html)) {
  html = html.replace(oldCardRegex, newCard);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('✓ Successfully attached live link to Outreach Digital Partners in index.html!');
} else {
  console.error('❌ Could not match old card regex');
}
