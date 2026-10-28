const fs = require('fs');

let content = fs.readFileSync('case-study-campaign.html', 'utf8');

// Add lightbox modal HTML before footer
const footerTarget = `  <!-- FOOTER -->`;
const lightboxModalHtml = `  <!-- LIGHTBOX MODAL -->
  <div class="cs-lightbox" id="csLightbox" style="position: fixed; inset: 0; background: rgba(0, 0, 0, 0.92); backdrop-filter: blur(12px); z-index: 99999; display: flex; align-items: center; justify-content: center; padding: 20px; opacity: 0; pointer-events: none; transition: opacity 0.25s ease;">
    <div style="background: var(--cs-slate); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 20px; max-width: 820px; width: 100%; overflow: hidden; box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8); position: relative;">
      <button id="csLightboxClose" style="position: absolute; top: 16px; right: 16px; width: 40px; height: 40px; border-radius: 50%; background: rgba(0, 0, 0, 0.6); border: 1px solid rgba(255, 255, 255, 0.2); color: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.2rem; z-index: 10;">&times;</button>
      <div style="background: #090b0e; display: flex; align-items: center; justify-content: center; padding: 30px; min-height: 420px;">
        <img id="csLightboxImg" src="" alt="Campaign Asset" style="max-width: 100%; max-height: 60vh; object-fit: contain; border-radius: 8px;" />
      </div>
      <div style="padding: 24px 30px; background: rgba(22, 23, 27, 0.95); border-top: 1px solid rgba(255, 255, 255, 0.08);">
        <h3 id="csLightboxTitle" style="font-size: 1.3rem; font-weight: 800; margin: 0 0 6px; color: #fff;">Asset Title</h3>
        <p id="csLightboxCta" style="font-size: 0.85rem; color: var(--cs-orange); margin: 0; font-family: monospace;">Call to Action</p>
      </div>
    </div>
  </div>\n\n  ` + footerTarget;

if (!content.includes('id="csLightbox"')) {
  content = content.replace(footerTarget, lightboxModalHtml);
}

// Add script before </body>
const scriptTarget = `  <script src="script.js"></script>`;
const scriptReplacement = `  <script src="script.js"></script>
  <script>
    (function () {
      const lightbox = document.getElementById("csLightbox");
      const lightboxImg = document.getElementById("csLightboxImg");
      const lightboxTitle = document.getElementById("csLightboxTitle");
      const lightboxCta = document.getElementById("csLightboxCta");
      const closeBtn = document.getElementById("csLightboxClose");

      const cards = document.querySelectorAll(".cs-post-card");
      cards.forEach(card => {
        card.style.cursor = "pointer";
        card.addEventListener("click", () => {
          const img = card.querySelector(".cs-post-img-wrap img");
          const title = card.querySelector(".cs-post-title");
          const cta = card.querySelector(".cs-post-cta span");

          if (img && title) {
            lightboxImg.src = img.src;
            lightboxTitle.textContent = title.textContent;
            lightboxCta.textContent = cta ? cta.textContent : "";
            lightbox.style.opacity = "1";
            lightbox.style.pointerEvents = "auto";
            document.body.style.overflow = "hidden";
          }
        });
      });

      function closeLightbox() {
        lightbox.style.opacity = "0";
        lightbox.style.pointerEvents = "none";
        document.body.style.overflow = "";
      }

      if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
      if (lightbox) {
        lightbox.addEventListener("click", (e) => {
          if (e.target === lightbox) closeLightbox();
        });
      }

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox && lightbox.style.opacity === "1") {
          closeLightbox();
        }
      });
    })();
  </script>`;

if (!content.includes('id="csLightboxImg"')) {
  content = content.replace(scriptTarget, scriptReplacement);
}

fs.writeFileSync('case-study-campaign.html', content, 'utf8');
console.log('Added lightbox to case-study-campaign.html');
