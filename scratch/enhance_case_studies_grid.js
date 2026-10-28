const fs = require('fs');

// 1. UPDATE script.js
let scriptJs = fs.readFileSync('script.js', 'utf8');

// Add grid-case-studies-active toggle on filter button click
const targetFilterLogic = `        postCards.forEach(card => {`;
const newFilterLogic = `        const postsGridElem = document.getElementById("postsGrid");
        if (postsGridElem) {
          postsGridElem.classList.toggle("grid-case-studies-active", filterValue === "case-studies");
        }

        postCards.forEach(card => {`;

if (scriptJs.includes(targetFilterLogic) && !scriptJs.includes('grid-case-studies-active')) {
  scriptJs = scriptJs.replace(targetFilterLogic, newFilterLogic);
  console.log('Added grid-case-studies-active toggle to script.js');
}

// Add navigation redirect if clicking on case study card
const targetClickGuard = `if (e.target.closest(".open-video-modal") || e.target.closest("a") || e.target.closest(".post-card-cs-btn") || e.target.closest(".glass-play-btn")) return;`;
const newClickGuard = `if (e.target.closest(".open-video-modal") || e.target.closest("a") || e.target.closest(".post-card-cs-btn") || e.target.closest(".glass-play-btn")) return;

      if (card.getAttribute("data-category") === "case-studies") {
        const csLink = card.querySelector(".post-card-cs-btn");
        if (csLink) {
          window.location.href = csLink.href;
          return;
        }
      }`;

if (scriptJs.includes(targetClickGuard) && !scriptJs.includes('card.getAttribute("data-category") === "case-studies"')) {
  scriptJs = scriptJs.replace(targetClickGuard, newClickGuard);
  console.log('Added direct card navigation for case-studies in script.js');
}

fs.writeFileSync('script.js', scriptJs, 'utf8');

// 2. UPDATE style.css
let styleCss = fs.readFileSync('style.css', 'utf8');

const extraGridCss = `
/* 2-column layout when Case Studies tab is active */
.posts-showcase-grid.grid-case-studies-active {
  grid-template-columns: repeat(2, 1fr) !important;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  gap: 28px;
}

@media (max-width: 850px) {
  .posts-showcase-grid.grid-case-studies-active {
    grid-template-columns: 1fr !important;
  }
}
`;

if (!styleCss.includes('.posts-showcase-grid.grid-case-studies-active')) {
  styleCss += extraGridCss;
  fs.writeFileSync('style.css', styleCss, 'utf8');
  console.log('Added grid-case-studies-active CSS to style.css');
}
