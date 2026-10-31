const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// 1. Verify exact strings to match
const heroActionsOld = `<div class="hero-actions-row">
            <a href="#contact" class="btn-behance-primary"><i class="fas fa-paper-plane"></i> Get In Touch</a>
            <a href="#posts" class="btn-behance-outline"><i class="fas fa-fire"></i> View Social Media Work</a>
            <a href="#about" class="btn-behance-outline"><i class="fas fa-user-check"></i> About Me</a>
            <a href="resume.html" target="_blank" class="btn-behance-outline"><i class="fas fa-file-arrow-down"></i> SMM VA Resume</a>
            <a href="resume-design.html" target="_blank" class="btn-behance-outline" style="border-color: rgba(255, 159, 67, 0.45); color: #ff9f43;" title="View separate resume tailored for Graphic Design roles"><i class="fas fa-palette"></i> Design Resume</a>
          </div>`;

console.log('heroActionsOld found:', html.includes(heroActionsOld));

// 2. Find #posts boundaries
const postsStartMarker = '  <!-- =========================\n       SOCIAL MEDIA WORK (INCLUDES CASE STUDIES, CANVA CREATIVES & SCHEDULING)\n  ========================= -->\n  <section id="posts"';
const postsEndMarker = '  <!-- =========================\n       TILTED MARQUEE RIBBON 1';

const pStart = html.indexOf(postsStartMarker);
const pEnd = html.indexOf(postsEndMarker);

console.log('pStart:', pStart, 'pEnd:', pEnd);

// 3. Find #carousels end and #about start
const carouselsEndMarker = '  <!-- =========================\n       ABOUT ME (BEHANCE BENTO STYLE)';
const cEnd = html.indexOf(carouselsEndMarker);
console.log('cEnd (#about start):', cEnd);

// 4. Find #websites start and end
const webStart = html.indexOf('  <!-- =========================\n       WEBSITE PROJECTS (LIVE CLIENT WEBSITES & PLATFORMS - FULLY RESPONSIVE)\n  ========================= -->\n  <section id="websites"');
const webEnd = html.indexOf('  <!-- =========================\n       TOOLS & SKILLS (MATCHING RESUME)\n  ========================= -->\n  <section id="skills"');
console.log('webStart:', webStart, 'webEnd:', webEnd);

// 5. Find #testimonials start and end
const testiStart = html.indexOf('  <!-- =========================\n       TESTIMONIALS SLIDER\n  ========================= -->\n  <section id="testimonials"');
const testiEnd = html.indexOf('  <!-- =========================\n       TILTED MARQUEE RIBBON 3');
console.log('testiStart:', testiStart, 'testiEnd:', testiEnd);

// 6. Find #thumbnails start and end
const thumbStart = html.indexOf('  <!-- =========================\n       THUMBNAIL SHOWCASE (YOUTUBE & COVERS)\n  ========================= -->\n  <section id="thumbnails"');
const thumbEnd = html.indexOf('  <!-- =========================\n       WEBSITE PROJECTS (LIVE CLIENT WEBSITES & PLATFORMS - FULLY RESPONSIVE)');
console.log('thumbStart:', thumbStart, 'thumbEnd:', thumbEnd);

