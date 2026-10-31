const fs = require('fs');

let js = fs.readFileSync('script.js', 'utf8');

// 1. Replace the testimonials array with the expanded authentic array in exact order
const oldTestiBlock = js.match(/const testimonials = \[[\s\S]*?\];/);
if (oldTestiBlock) {
  const newTestiBlock = `const testimonials = [
      {
        name: "Jonel Uligan",
        role: "Web Developer",
        company: "Agape Reaching People Ministries Benguet PH",
        text: '"Jerome has been an indispensable part of our media and outreach execution. His ability to take raw sermon themes and church announcements and translate them into beautifully coordinated Canva graphics, consistent weekly schedules, and engaging video reels brought remarkable consistency to our online presence. Always dependable, highly communicative on remote hours, and delivers ahead of deadlines."',
        img: "Assets/Test/JU.avif",
        stars: 5
      },
      {
        name: "Angelito James Bustos",
        role: "School Administrative",
        company: "Northridge Institute of Business and Technology Inc. - Baguio",
        text: '"Jerome is one of the most dedicated and reliable professionals I\\'ve worked with. In managing our digital visual assets and student outreach announcements, he was always proactive in addressing issues, creating clear structured layouts, and maintaining an organized archive of school promotional materials. A trustworthy talent who takes true ownership of his tasks."',
        img: "Assets/Test/JB.avif",
        stars: 5
      },
      {
        name: "Gemma Lawangen",
        role: "Social Media Manager",
        company: "Calvary Baptist Church of Baguio City Inc.",
        text: '"Working alongside Jerome on our weekly church campaigns and sermon series graphics has been fantastic. He consistently delivers high-quality social media flyers, service announcements, and event visuals that clearly resonate with our church family. His attention to brand guidelines, typography legibility on mobile, and prompt communication make collaboration seamless."',
        img: "Assets/Test/Jem.png",
        stars: 5
      },
      {
        name: "Rodilene Binay-an Ricardo",
        role: "MPSP Coordinator",
        company: "Agape Reaching People Ministries Benguet PH",
        text: '"Jerome brought tremendous structure to our ministry outreach and event promotions. His creative visual presentations and disciplined scheduling workflows helped our community care drives and ministry highlights reach more volunteers and families across the province. His humility, dedication, and attention to detail made a lasting difference."',
        img: "Assets/Test/RR.avif",
        stars: 5
      },
      {
        name: "Arlene Diola",
        role: "Graphic Designer & Creative Director",
        company: "Ar & Co. Rock Creatives",
        text: '"Jerome combines strong visual sensibility with dependable execution. Whether developing multi-format brand assets, digital mockups, or social media campaign collateral, his eye for color hierarchy and typography alignment is evident. He receives feedback with professionalism and executes revisions rapidly."',
        img: "Assets/Test/AR.jpg",
        stars: 5
      }
    ];`;
  js = js.replace(oldTestiBlock[0], newTestiBlock);
  console.log('Successfully replaced testimonials array in script.js');
} else {
  console.log('Warning: old testimonials array not found in script.js');
}

// 2. Add handlers for toggleSmmArchiveBtn and archive filter tabs if not already present
const newFeaturesCode = `
  /* =========================
     SMM ARCHIVE TOGGLE & SECONDARY DESIGN ARCHIVE TABS (PRIORITIES 2 & 4)
  ========================= */
  const toggleSmmBtn = document.getElementById("toggleSmmArchiveBtn");
  const smmGrid = document.getElementById("smmFullArchiveGrid");
  const archiveCaret = document.getElementById("archiveCaret");

  if (toggleSmmBtn && smmGrid) {
    toggleSmmBtn.addEventListener("click", () => {
      const isExpanded = smmGrid.style.display !== "none";
      if (isExpanded) {
        smmGrid.style.display = "none";
        toggleSmmBtn.setAttribute("aria-expanded", "false");
        toggleSmmBtn.querySelector("span").textContent = "View All 30+ Client Church & Event Ads";
        if (archiveCaret) archiveCaret.className = "fas fa-chevron-down";
      } else {
        smmGrid.style.display = "grid";
        toggleSmmBtn.setAttribute("aria-expanded", "true");
        toggleSmmBtn.querySelector("span").textContent = "Collapse Client Church & Event Ads";
        if (archiveCaret) archiveCaret.className = "fas fa-chevron-up";
      }
    });
  }

  // Secondary Design Archive Filter Tabs
  const archiveTabBtns = document.querySelectorAll(".archive-tab-btn");
  const designArchiveGrid = document.getElementById("designArchiveGrid");

  if (archiveTabBtns.length > 0 && designArchiveGrid) {
    const archiveCards = designArchiveGrid.querySelectorAll(".post-card-behance, .thumbnail-card-behance");

    archiveTabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        archiveTabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-archive-filter");

        archiveCards.forEach(card => {
          const cardCat = card.getAttribute("data-category") || "";
          const isThumb = card.classList.contains("thumbnail-card-behance") || cardCat.includes("thumbnails");

          if (filter === "all-archive") {
            card.style.display = "";
          } else if (filter === "thumbnails") {
            card.style.display = isThumb ? "" : "none";
          } else if (filter === "book-covers") {
            card.style.display = cardCat.includes("book-covers") ? "" : "none";
          } else if (filter === "mockups") {
            card.style.display = cardCat.includes("mockups") ? "" : "none";
          } else if (filter === "branding") {
            card.style.display = cardCat.includes("branding") ? "" : "none";
          } else {
            card.style.display = cardCat.includes(filter) ? "" : "none";
          }
        });
      });
    });
  }
`;

if (!js.includes('toggleSmmArchiveBtn')) {
  // Append right before closing of DOMContentLoaded / end of file
  const lastIndex = js.lastIndexOf('});');
  if (lastIndex !== -1) {
    js = js.slice(0, lastIndex) + newFeaturesCode + '\n' + js.slice(lastIndex);
    console.log('Appended SMM toggle and archive filter code inside DOMContentLoaded');
  } else {
    js += newFeaturesCode;
    console.log('Appended SMM toggle and archive filter code to end of script.js');
  }
}

fs.writeFileSync('script.js', js, 'utf8');
console.log('Successfully updated script.js! Length:', js.length);

