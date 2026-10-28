const fs = require('fs');

function updateResume(filename, isDesign) {
  let content = fs.readFileSync(filename, 'utf8');

  // Add top bar buttons
  const oldTopNav = `<a href="index.html" class="nav-btn nav-btn-back">
        <i class="fas fa-arrow-left"></i> Return to Portfolio
      </a>`;

  const newTopNav = `<a href="index.html" class="nav-btn nav-btn-back">
        <i class="fas fa-arrow-left"></i> Portfolio
      </a>
      <a href="case-study-campaign.html" class="nav-btn nav-btn-email" style="border-color: rgba(243, 146, 0, 0.5); color: #f39200;" title="View Case Study A: Social Media Campaign">
        <i class="fas fa-bullhorn"></i> Case Study A
      </a>
      <a href="case-study-brand-system.html" class="nav-btn nav-btn-email" style="border-color: rgba(197, 160, 89, 0.5); color: #c5a059;" title="View Case Study B: Brand Design System">
        <i class="fas fa-compass"></i> Case Study B
      </a>`;

  if (content.includes(oldTopNav)) {
    content = content.replace(oldTopNav, newTopNav);
  }

  // Add Case Studies section before Education
  const eduTarget = `<section>\n      <h2 class="section-title">EDUCATION</h2>`;
  const csSection = `<section>
      <h2 class="section-title">FEATURED CASE STUDIES</h2>
      <ul class="resume-list">
        <li><strong>Case Study A &bull; Social Media Campaign:</strong> 7-day social campaign playbook, 3 audience-aligned pillars, 8 sample posts with copy/CTAs, 1-week calendar table, and scheduling workflow. (<a href="case-study-campaign.html" target="_blank" style="color: #0066ff; text-decoration: underline; font-weight: 700;">Read Case Study A</a>)</li>
        <li><strong>Case Study B &bull; Brand Design System:</strong> Apex Outdoors visual identity spec, Alpine Olive design tokens, typography rules, and 16 multi-format social assets. (<a href="case-study-brand-system.html" target="_blank" style="color: #0066ff; text-decoration: underline; font-weight: 700;">Read Case Study B</a>)</li>
      </ul>
    </section>\n\n    ` + eduTarget;

  if (content.includes(eduTarget) && !content.includes('FEATURED CASE STUDIES')) {
    content = content.replace(eduTarget, csSection);
  }

  fs.writeFileSync(filename, content, 'utf8');
  console.log(`Updated ${filename}`);
}

updateResume('resume.html', false);
updateResume('resume-design.html', true);
