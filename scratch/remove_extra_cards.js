const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace the grid content to contain only Create and Arise and Outreach Digital Partners
const oldGridRegex = /<div class="website-projects-grid">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;

const newSection = `<div class="website-projects-grid">
        <!-- 1. Create and Arise (Featured Live Client Web Platform) -->
        <div class="web-project-card featured-live">
          <div class="web-card-img-wrap">
            <img src="Assets/Website/create-and-arise.png" alt="Create and Arise Live Web Platform" loading="lazy" />
            <div class="web-card-overlay">
              <a href="https://createandarise.vercel.app/" target="_blank" rel="noopener noreferrer" class="web-card-overlay-btn" title="Open createandarise.vercel.app live in new tab">
                <i class="fas fa-arrow-up-right-from-square"></i> Open Live Website
              </a>
            </div>
            <span class="web-card-badge-live"><span class="pulse-dot"></span> LIVE WEB</span>
          </div>
          <div class="web-card-content">
            <div class="web-card-tag-row">
              <span class="web-card-cat-tag client">PHILIPPINE CLIENT &bull; LIVE</span>
              <span class="web-card-domain">createandarise.vercel.app</span>
            </div>
            <h3 class="web-card-title">Create and Arise</h3>
            <p class="web-card-desc">
              Purpose-driven creative design, web development &amp; digital ads studio platform based in La Trinidad, Benguet. Full-stack web application featuring real-time PHT studio status, interactive quote calculator &amp; service catalog.
            </p>
            <div class="web-card-footer">
              <a href="https://createandarise.vercel.app/" target="_blank" rel="noopener noreferrer" class="web-card-link-btn">
                <span>Visit Live Website</span>
                <i class="fas fa-arrow-up-right-from-square"></i>
              </a>
              <a href="https://www.facebook.com/CreateAndArise2023" target="_blank" rel="noopener noreferrer" class="web-card-social-link" title="Follow Create and Arise on Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- 2. Outreach Digital Partners (Faith & Ministry Digital Growth Agency) -->
        <div class="web-project-card featured-live">
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
      </div>
    </div>
  </section>`;

if (oldGridRegex.test(html)) {
  html = html.replace(oldGridRegex, newSection);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('✓ Successfully removed the 3 concept cards and kept only Create and Arise & Outreach Digital Partners!');
} else {
  console.error('❌ Could not match oldGridRegex in index.html');
}
