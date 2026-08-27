/* THEME INITIALIZATION (Runs immediately to prevent flash) */
(function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  /* MOBILE NAV */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("show");
    });

    const dropdownToggles = navLinks.querySelectorAll(".nav-dropdown-toggle");
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", (e) => {
        const parent = toggle.closest(".nav-dropdown-item");
        if (parent) {
          e.preventDefault();
          e.stopPropagation();
          parent.classList.toggle("open");
        }
      });
    });

    navLinks.querySelectorAll("a:not(.nav-dropdown-toggle)").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("show");
        const openDropdowns = navLinks.querySelectorAll(".nav-dropdown-item.open");
        openDropdowns.forEach(d => d.classList.remove("open"));

        const targetFilter = link.getAttribute("data-switch-filter");
        if (targetFilter) {
          const filterBtn = document.querySelector(`.filter-tab-btn[data-filter="${targetFilter}"]`);
          if (filterBtn) {
            filterBtn.click();
          }
        }
      });
    });

    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove("active");
        navLinks.classList.remove("show");
        const openDropdowns = navLinks.querySelectorAll(".nav-dropdown-item.open");
        openDropdowns.forEach(d => d.classList.remove("open"));
      }
    });
  }

  /* DARK / LIGHT MODE TOGGLE */
  const themeToggle = document.getElementById("theme-toggle");

  function syncThemeToggle() {
    const isDark = document.body.classList.contains("dark");
    if (themeToggle) {
      themeToggle.textContent = isDark ? "☀️" : "🌙";
      themeToggle.setAttribute("title", isDark ? "Switch to Light Mode" : "Switch to Dark Mode");
      themeToggle.setAttribute("aria-label", isDark ? "Switch to Light Mode" : "Switch to Dark Mode");
    }
  }

  if (themeToggle) {
    syncThemeToggle();

    themeToggle.addEventListener("click", () => {
      document.body.classList.add("theme-transitioning");
      document.body.classList.toggle("dark");
      const currentIsDark = document.body.classList.contains("dark");
      localStorage.setItem("theme", currentIsDark ? "dark" : "light");
      syncThemeToggle();
      setTimeout(() => {
        document.body.classList.remove("theme-transitioning");
      }, 350);
    });
  }

  /* SCROLL ANIMATION */
  const animatedElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .skills-category, .category-title, .testimonial-card, .info-card, .soft-skills-box, .contact-box, .service-card"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  animatedElements.forEach(el => observer.observe(el));

  /* =========================
   RESULTS COUNTER ANIMATION
========================= */
  const counters = document.querySelectorAll(".counter");

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const updateCounter = () => {
          const increment = target / 60;

          if (count < target) {
            count += increment;
            counter.textContent = Math.floor(count);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };

        updateCounter();
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  /* =========================
     HERO IMAGE CAROUSEL
  ========================= */
  const heroSlides = document.querySelectorAll(".hero-slide");
  const heroDots = document.querySelectorAll(".hero-dot");
  const heroPrev = document.getElementById("heroPrev");
  const heroNext = document.getElementById("heroNext");

  if (heroSlides.length > 0) {
    let heroIndex = 0;

    function showHeroSlide(index) {
      heroSlides.forEach(slide => slide.classList.remove("active"));
      heroDots.forEach(dot => dot.classList.remove("active"));

      if (heroSlides[index]) heroSlides[index].classList.add("active");
      if (heroDots[index]) heroDots[index].classList.add("active");
    }

    if (heroPrev) {
      heroPrev.addEventListener("click", () => {
        heroIndex = (heroIndex - 1 + heroSlides.length) % heroSlides.length;
        showHeroSlide(heroIndex);
      });
    }

    if (heroNext) {
      heroNext.addEventListener("click", () => {
        heroIndex = (heroIndex + 1) % heroSlides.length;
        showHeroSlide(heroIndex);
      });
    }

    heroDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        heroIndex = index;
        showHeroSlide(heroIndex);
      });
    });

    // Optional auto-slide every 4.5 seconds
    setInterval(() => {
      heroIndex = (heroIndex + 1) % heroSlides.length;
      showHeroSlide(heroIndex);
    }, 4500);
  }

  /* =========================
     ABOUT IMAGE CAROUSEL
  ========================= */
  const aboutSlides = document.querySelectorAll(".about-slide");
  const aboutDots = document.querySelectorAll(".about-dot");
  const aboutPrev = document.getElementById("aboutPrev");
  const aboutNext = document.getElementById("aboutNext");

  let aboutIndex = 0;

  function showAboutSlide(index) {
    if (aboutSlides.length === 0) return;
    aboutSlides.forEach(slide => slide.classList.remove("active"));
    aboutDots.forEach(dot => dot.classList.remove("active"));

    if (aboutSlides[index]) aboutSlides[index].classList.add("active");
    if (aboutDots[index]) aboutDots[index].classList.add("active");
  }

  if (aboutSlides.length > 0) {
    if (aboutPrev) {
      aboutPrev.addEventListener("click", () => {
        aboutIndex = (aboutIndex - 1 + aboutSlides.length) % aboutSlides.length;
        showAboutSlide(aboutIndex);
      });
    }

    if (aboutNext) {
      aboutNext.addEventListener("click", () => {
        aboutIndex = (aboutIndex + 1) % aboutSlides.length;
        showAboutSlide(aboutIndex);
      });
    }

    aboutDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        aboutIndex = index;
        showAboutSlide(aboutIndex);
      });
    });

    // Optional auto-slide every 4 seconds
    setInterval(() => {
      if (aboutSlides.length > 0) {
        aboutIndex = (aboutIndex + 1) % aboutSlides.length;
        showAboutSlide(aboutIndex);
      }
    }, 4000);
  }

  /* =========================
     CERTIFICATE CAROUSEL
  ========================= */
  const cerSlides = document.querySelectorAll(".cer-slide");
  const cerDots = document.querySelectorAll(".cer-dot");
  const cerPrev = document.getElementById("cerPrev");
  const cerNext = document.getElementById("cerNext");

  let cerIndex = 0;

  function showCerSlide(index) {
    cerSlides.forEach(slide => slide.classList.remove("active"));
    cerDots.forEach(dot => dot.classList.remove("active"));

    if (cerSlides[index]) {
      cerSlides[index].classList.add("active");
    }

    if (cerDots[index]) {
      cerDots[index].classList.add("active");
    }
  }

  if (cerSlides.length > 0 && cerPrev && cerNext) {
    cerPrev.addEventListener("click", () => {
      cerIndex = (cerIndex - 1 + cerSlides.length) % cerSlides.length;
      showCerSlide(cerIndex);
    });

    cerNext.addEventListener("click", () => {
      cerIndex = (cerIndex + 1) % cerSlides.length;
      showCerSlide(cerIndex);
    });

    cerDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        cerIndex = index;
        showCerSlide(cerIndex);
      });
    });

    setInterval(() => {
      cerIndex = (cerIndex + 1) % cerSlides.length;
      showCerSlide(cerIndex);
    }, 4000);
  }

  /* =========================
     PROJECT MODAL + SLIDER
  ========================= */
  const modal = document.getElementById("project-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const closeModal = document.querySelector(".close");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");
  const dotsContainer = document.getElementById("slider-dots");
  const imageScroll = document.getElementById("modal-image-scroll");
  const modalLink = document.getElementById("modal-link");

  if (modal && prevBtn && nextBtn && closeModal) {
    let currentImages = [];
    let currentLinks = [];
    let currentIndex = 0;
    let isWebsiteProject = false;

    function renderDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = "";

      if (currentImages.length > 8) {
        dotsContainer.innerHTML = `<span class="compact-counter">${String(currentIndex + 1).padStart(2, '0')} / ${String(currentImages.length).padStart(2, '0')}</span>`;
        return;
      }

      currentImages.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === currentIndex) dot.classList.add("active");
        dot.addEventListener("click", () => {
          currentIndex = index;
          updateModalImage();
        });
        dotsContainer.appendChild(dot);
      });
    }

    function getYouTubeVideoId(url) {
      const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([a-zA-Z0-9_-]{11})/);
      return match ? match[1] : null;
    }

    function isYouTubeUrl(url) {
      return Boolean(getYouTubeVideoId(url));
    }

    function stopCurrentMedia() {
      const existingVideo = imageScroll.querySelector("video");
      if (existingVideo) {
        existingVideo.pause();
        existingVideo.src = "";
      }
    }

    function updateModalImage() {
      if (!currentImages.length || !imageScroll) return;

      stopCurrentMedia();

      const currentMedia = currentImages[currentIndex];
      const videoId = isYouTubeUrl(currentMedia) ? getYouTubeVideoId(currentMedia) : null;
      const isLocalVideo = currentMedia.toLowerCase().endsWith('.mp4') ||
        currentMedia.toLowerCase().endsWith('.webm') ||
        currentMedia.toLowerCase().endsWith('.mov');

      imageScroll.innerHTML = "";

      if (videoId) {
        // YouTube thumbnail card — opens video in new tab (works from file:// origin)
        const card = document.createElement("a");
        card.href = currentMedia;
        card.target = "_blank";
        card.rel = "noopener";
        card.className = "yt-thumb-card";

        const thumb = document.createElement("img");
        thumb.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        thumb.alt = "YouTube Video Thumbnail";
        thumb.onerror = function () {
          this.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        };

        const overlay = document.createElement("div");
        overlay.className = "yt-play-overlay";
        overlay.innerHTML = `
          <div class="yt-play-btn">
            <svg viewBox="0 0 68 48" width="68" height="48">
              <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#ff0000"/>
              <path d="M45 24 27 14v20" fill="#fff"/>
            </svg>
          </div>
          <span class="yt-watch-label">Watch on YouTube</span>`;

        card.appendChild(thumb);
        card.appendChild(overlay);
        imageScroll.appendChild(card);
      } else if (isLocalVideo) {
        const video = document.createElement("video");
        video.src = currentMedia;
        video.controls = true;
        video.autoplay = true;
        video.className = "modal-video";
        imageScroll.appendChild(video);
      } else {
        const link = document.createElement("a");
        const targetUrl = isWebsiteProject && currentLinks[currentIndex] ? currentLinks[currentIndex] : currentMedia;
        link.href = targetUrl;
        link.target = "_blank";
        link.rel = "noopener";
        link.title = isWebsiteProject && currentLinks[currentIndex] ? "Visit Website" : "Click to view full image";
        link.style.cursor = "pointer";

        const img = document.createElement("img");
        img.src = currentMedia;
        img.alt = `Project Image ${currentIndex + 1}`;
        img.id = "modal-img";

        link.appendChild(img);
        imageScroll.appendChild(link);
      }

      renderDots();
      imageScroll.scrollTop = 0;
      imageScroll.scrollLeft = 0;
    }

    document.querySelectorAll(".view-project").forEach(button => {
      button.addEventListener("click", (e) => {
        const btn = e.currentTarget;
        const title = btn.dataset.title || "";
        const desc = btn.dataset.description || "";
        const images = btn.dataset.images || "";
        const videos = btn.dataset.video || "";
        const links = btn.dataset.links || "";

        const imgList = images.split(",").map(img => img.trim()).filter(img => img !== "");
        const vidList = videos.split(",").map(vid => vid.trim()).filter(vid => vid !== "");

        // Combine them: Videos first for the video project
        currentImages = [...vidList, ...imgList];
        currentLinks = links.split(",").map(link => link.trim()).filter(link => link !== "");
        currentIndex = 0;

        if (modalTitle) modalTitle.textContent = title;
        if (modalDesc) modalDesc.textContent = desc;
        isWebsiteProject = title.toLowerCase().includes("website");

        updateModalImage();

        // Hide arrows if only one image
        if (currentImages.length <= 1) {
          prevBtn.style.display = "none";
          nextBtn.style.display = "none";
          if (dotsContainer) dotsContainer.style.display = "none";
        } else {
          prevBtn.style.display = "flex";
          nextBtn.style.display = "flex";
          if (dotsContainer) dotsContainer.style.display = "flex";
        }

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      });
    });



    prevBtn.addEventListener("click", () => {
      if (!currentImages.length) return;
      currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
      updateModalImage();
    });

    nextBtn.addEventListener("click", () => {
      if (!currentImages.length) return;
      currentIndex = (currentIndex + 1) % currentImages.length;
      updateModalImage();
    });

    closeModal.addEventListener("click", () => {
      stopCurrentMedia();
      modal.style.display = "none";
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        stopCurrentMedia();
        modal.style.display = "none";
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });

    document.addEventListener("keydown", (e) => {
      if (modal.style.display === "block" || modal.classList.contains("active")) {
        if (e.key === "Escape") {
          stopCurrentMedia();
          modal.style.display = "none";
          modal.classList.remove("active");
          document.body.style.overflow = "auto";
        }
        if (e.key === "ArrowRight" && currentImages.length) {
          currentIndex = (currentIndex + 1) % currentImages.length;
          updateModalImage();
        }
        if (e.key === "ArrowLeft" && currentImages.length) {
          currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
          updateModalImage();
        }
      }
    });
  }

  /* =========================
     INTERACTIVE 3D TILT EFFECT
  ========================= */
  const tiltCards = document.querySelectorAll(".skill-card, .project-card, .info-card, .cs-card, .main-img-wrapper, .contact-image-wrapper, .contact-link-card");

  tiltCards.forEach(card => {
    card.classList.add("tilt-element");

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = centerY > 0 ? ((y - centerY) / centerY) * -12 : 0;
      const rotateY = centerX > 0 ? ((x - centerX) / centerX) * 12 : 0;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      card.style.transition = "transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
      card.style.transition = "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    });
  });

  /* =========================
     MAGNETIC BUTTONS
  ========================= */
  const magneticElements = document.querySelectorAll(".btn, .nav-pill, .theme-toggle");

  magneticElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const h = rect.width / 2;
      const v = rect.height / 2;
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - v;

      el.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
      el.style.transition = "transform 0.1s ease";
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = `translate(0px, 0px)`;
      el.style.transition = "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    });
  });

  /* =========================
     SCROLL PROGRESS & BACK TO TOP
  ========================= */
  const scrollProgress = document.getElementById("scroll-progress");
  const backToTop = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    // Scroll Progress
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    if (scrollProgress) {
      scrollProgress.style.width = scrolled + "%";
    }

    // Back to Top Visibility
    if (backToTop) {
      if (winScroll > 500) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    }
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* ==========================================================================
     BENGUET REELS INTERACTIVE PLAYER ENGINE
     ========================================================================== */
  const reelsWrapper = document.getElementById("reels-view-wrapper");
  const gridWrapper = document.getElementById("grid-view-wrapper");
  const btnReelsView = document.getElementById("btn-reels-view");
  const btnGridView = document.getElementById("btn-grid-view");

  if (reelsWrapper && gridWrapper && btnReelsView && btnGridView) {

    // Reels Player State
    const slides = document.querySelectorAll(".reel-slide");
    const progressSegments = document.querySelectorAll(".progress-bar-segment");
    const totalSlides = slides.length;
    let currentReelIndex = 0;
    let progressTimer = null;
    let progressPercent = 0;
    let isSliderPaused = false;
    let isMuted = true;

    const slideDuration = 6000; // 6 seconds per slide
    const progressInterval = 30; // update progress every 30ms

    // Sidebar Action states
    const slideLikesCount = [12842, 9410, 15124, 8931, 22409, 18742, 11218, 7604];
    const slideLikesState = Array(totalSlides).fill(false);

    const slideSavesCount = [1420, 895, 1980, 942, 3405, 2390, 1245, 680];
    const slideSavesState = Array(totalSlides).fill(false);

    // Comments Database per slide
    const slideCommentsData = {
      0: [
        { name: "benguet_wanderer", text: "Fresh strawberries at La Trinidad are a must-try! Best experience ever.", time: "2h ago" },
        { name: "highland_soul", text: "Cool mountain breeze and red strawberries. Missing home so much!", time: "5h ago" },
        { name: "baguio_native", text: "Always picking fresh strawberries every weekend. Pure joy!", time: "1d ago" }
      ],
      1: [
        { name: "igorot_proud", text: "Proud Cordilleran here! Beautiful display of our traditional weaves and dances.", time: "1h ago" },
        { name: "culture_hunter", text: "The gong music in the highlands is hauntingly beautiful.", time: "4h ago" }
      ],
      2: [
        { name: "stobosa_local", text: "Welcome to our colorful neighborhood! Representing unity and art.", time: "30m ago" },
        { name: "color_splash", text: "This mural is massive. Pictures don't do it justice!", time: "3h ago" }
      ],
      3: [
        { name: "coffee_connoisseur", text: "Benguet Arabica is hands down the best coffee in the Philippines.", time: "3h ago" },
        { name: "warm_morning", text: "Nothing beats a steaming cup of Atok blend in the freezing fog.", time: "6h ago" }
      ],
      4: [
        { name: "sea_of_clouds", text: "Reaching Pulag's summit at dawn feels like stepping onto another planet.", time: "15m ago" },
        { name: "milkyway_gazer", text: "The night sky at Camp 2 is filled with billions of stars. Magical!", time: "8h ago" }
      ],
      5: [
        { name: "blossom_fairy", text: "Northern Blossom is absolutely stunning. Cabbage roses look surreal!", time: "1h ago" },
        { name: "flower_power", text: "A piece of heaven in Atok. The scenic backdrop is spectacular.", time: "4h ago" }
      ],
      6: [
        { name: "halsema_driver", text: "7,400 feet above sea level. Driving along the highway here is spectacular.", time: "3h ago" },
        { name: "winter_chills", text: "I remember the frost on the cabbages during December. Super cold!", time: "1d ago" }
      ],
      7: [
        { name: "organic_eats", text: "Thank you to the hard-working farmers of Benguet! The freshest veggies.", time: "4h ago" },
        { name: "trading_post_chef", text: "We get all our greens from the La Trinidad Trading Post. High quality!", time: "9h ago" }
      ]
    };

    // UI Elements
    const screenArea = document.querySelector(".iphone-screen");
    const playToggle = document.getElementById("reel-play-toggle");
    const soundToggle = document.getElementById("reel-sound-toggle");
    const fullscreenToggle = document.getElementById("reel-fullscreen-toggle");
    const arrowLeft = document.getElementById("reel-arrow-left");
    const arrowRight = document.getElementById("reel-arrow-right");
    const tapLeft = document.getElementById("reel-tap-left");
    const tapRight = document.getElementById("reel-tap-right");

    const glowAura = document.querySelector(".reels-glow-aura");
    const audioDisc = document.getElementById("audio-disc-container");

    const likeButton = document.getElementById("action-like");
    const likeCountEl = document.getElementById("like-count");
    const commentButton = document.getElementById("action-comment");
    const commentCountEl = document.getElementById("comment-count");
    const saveButton = document.getElementById("action-save");
    const saveCountEl = document.getElementById("save-count");
    const shareButton = document.getElementById("action-share");
    const toastNotification = document.getElementById("reels-toast-notification");

    const capLoc = document.getElementById("cap-loc");
    const capTitle = document.getElementById("cap-title");
    const capTagline = document.getElementById("cap-tagline");
    const capDescPrev = document.getElementById("cap-desc-prev");
    const btnExpandSheet = document.getElementById("btn-expand-sheet");

    const detailSheet = document.getElementById("detail-sheet");
    const btnCloseSheet = document.getElementById("btn-close-sheet");
    const sheetLoc = document.getElementById("sheet-loc");
    const sheetTitle = document.getElementById("sheet-title-text");
    const sheetTagline = document.getElementById("sheet-tagline-text");
    const sheetBody = document.getElementById("sheet-body-content");
    const sheetTags = document.getElementById("sheet-tags-content");

    const commentsSheet = document.getElementById("comments-sheet");
    const btnCloseComments = document.getElementById("btn-close-comments");
    const commentsNumText = document.getElementById("comments-num-text");
    const commentsContainer = document.getElementById("comments-container");
    const newCommentInput = document.getElementById("new-comment-input");
    const btnSubmitComment = document.getElementById("btn-submit-comment");

    // Dynamic Island camera interaction
    const notchCamera = document.querySelector(".iphone-notch .camera");

    // Dynamic Island Pulse effect
    function pulseDynamicIsland() {
      const notch = document.querySelector(".iphone-notch");
      if (notch) {
        notch.style.transform = "translateX(-50%) scale(1.05)";
        notch.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.2)";
        notch.style.transition = "transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.15s ease";

        setTimeout(() => {
          notch.style.transform = "translateX(-50%) scale(1)";
          notch.style.boxShadow = "none";
        }, 180);
      }
    }

    // View Switcher logic
    btnReelsView.addEventListener("click", () => {
      btnGridView.classList.remove("active");
      btnReelsView.classList.add("active");
      gridWrapper.classList.remove("active");
      reelsWrapper.classList.add("active");
      // Resume slider
      isSliderPaused = false;
      startProgressTimer();
      pulseDynamicIsland();
    });

    btnGridView.addEventListener("click", () => {
      btnReelsView.classList.remove("active");
      btnGridView.classList.add("active");
      reelsWrapper.classList.remove("active");
      gridWrapper.classList.add("active");
      // Pause slider
      isSliderPaused = true;
      stopProgressTimer();
      stopHighlandSynth();
    });

    // Helper: format numbers like 12842 -> "12.8K"
    function formatCount(num) {
      return (num >= 1000) ? (num / 1000).toFixed(1) + 'K' : num;
    }

    // Dynamic Aura Gradient Colors
    const auraColors = [
      "radial-gradient(circle, rgba(239, 68, 68, 0.22) 0%, rgba(244, 63, 94, 0.08) 60%, transparent 100%)", // Strawberry
      "radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(217, 119, 6, 0.08) 60%, transparent 100%)", // Igorot
      "radial-gradient(circle, rgba(59, 130, 246, 0.22) 0%, rgba(16, 185, 129, 0.08) 60%, transparent 100%)", // Stobosa
      "radial-gradient(circle, rgba(120, 53, 4, 0.22) 0%, rgba(180, 83, 9, 0.08) 60%, transparent 100%)",   // Coffee
      "radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(139, 92, 246, 0.08) 60%, transparent 100%)", // Pulag
      "radial-gradient(circle, rgba(236, 72, 153, 0.22) 0%, rgba(244, 63, 94, 0.08) 60%, transparent 100%)", // Blossom
      "radial-gradient(circle, rgba(59, 130, 246, 0.22) 0%, rgba(147, 197, 253, 0.08) 60%, transparent 100%)", // Atok Point
      "radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(34, 197, 94, 0.08) 60%, transparent 100%)"   // Vegs
    ];

    // Web Audio highland synthesizer engine
    let audioCtx = null;
    let windDroneNode = null;
    let windGain = null;
    let bellIntervalTimer = null;

    function initHighlandSynth() {
      if (audioCtx) return;
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();

      // 1. Wind ambient drone
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const lowpass = audioCtx.createBiquadFilter();
      windGain = audioCtx.createGain();

      osc1.type = "sawtooth";
      osc1.frequency.value = 65.41; // C2

      osc2.type = "triangle";
      osc2.frequency.value = 98.00; // G2

      lowpass.type = "lowpass";
      lowpass.frequency.value = 140;
      lowpass.Q.value = 3.0;

      windGain.gain.setValueAtTime(0, audioCtx.currentTime);
      windGain.gain.linearRampToValueAtTime(0.18, audioCtx.currentTime + 2.0); // smooth fade-in

      // Sweep filter frequency slowly to mimic dynamic wind
      const lfo = audioCtx.createOscillator();
      const lfoGain = audioCtx.createGain();
      lfo.frequency.value = 0.08; // very slow, 12 seconds per sweep
      lfoGain.gain.value = 50; // swing between 90Hz and 190Hz

      lfo.connect(lfoGain);
      lfoGain.connect(lowpass.frequency);

      osc1.connect(lowpass);
      osc2.connect(lowpass);
      lowpass.connect(windGain);
      windGain.connect(audioCtx.destination);

      osc1.start();
      osc2.start();
      lfo.start();

      windDroneNode = { osc1, osc2, lfo, lowpass };

      // 2. Start random pentatonic chimes
      startRandomBells();
    }

    function stopHighlandSynth() {
      if (windGain && audioCtx) {
        windGain.gain.setValueAtTime(windGain.gain.value, audioCtx.currentTime);
        windGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.5); // quick fade-out
        setTimeout(() => {
          try {
            if (windDroneNode) {
              windDroneNode.osc1.stop();
              windDroneNode.osc2.stop();
              windDroneNode.lfo.stop();
            }
            audioCtx.close();
          } catch (e) { }
          audioCtx = null;
          windDroneNode = null;
          windGain = null;
          clearInterval(bellIntervalTimer);
          bellIntervalTimer = null;
        }, 600);
      }
    }

    function startRandomBells() {
      clearInterval(bellIntervalTimer);
      bellIntervalTimer = setInterval(() => {
        if (isSliderPaused) return; // pause chimes when slider is paused
        triggerPentatonicBell();
      }, Math.random() * 2000 + 2500); // every 2.5 to 4.5 seconds
    }

    function triggerPentatonicBell() {
      if (!audioCtx) return;
      const pentatonicScale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99]; // C4 to G5 pentatonic scale
      const randomFreq = pentatonicScale[Math.floor(Math.random() * pentatonicScale.length)];

      const osc = audioCtx.createOscillator();
      const bellGain = audioCtx.createGain();
      const delay = audioCtx.createDelay();
      const feedback = audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.value = randomFreq;

      bellGain.gain.setValueAtTime(0, audioCtx.currentTime);
      bellGain.gain.linearRampToValueAtTime(0.06, audioCtx.currentTime + 0.02); // quick attack
      bellGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 2.5); // long decay

      // Add a soft delay / echo effect
      delay.delayTime.value = 0.35;
      feedback.gain.value = 0.3; // fade out echo

      delay.connect(feedback);
      feedback.connect(delay);

      osc.connect(bellGain);
      bellGain.connect(audioCtx.destination);

      // Connect delay path
      bellGain.connect(delay);
      delay.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 2.6);
    }

    function triggerChimeFeedback() {
      if (!audioCtx) return;
      // Double chime on interaction
      const frequencies = [880.00, 1046.50]; // A5 and C6 chimes

      frequencies.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        osc.type = "sine";
        osc.frequency.value = freq;

        const startTime = audioCtx.currentTime + (index * 0.08);
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.05, startTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.6);

        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.65);
      });
    }

    // Render Comments Board
    function renderCommentsList(slideIndex) {
      commentsContainer.innerHTML = "";
      const comments = slideCommentsData[slideIndex] || [];

      comments.forEach(comment => {
        const item = document.createElement("div");
        item.className = "comment-item";

        // Define avatars dynamically
        let avatar = "Assets/About/Me.01.png";
        if (comment.name === "benguet_wanderer") avatar = "Assets/About/Me.01.png";
        else if (comment.name !== "you") avatar = "Assets/About/Me.01.png"; // Fallback to avatar

        item.innerHTML = `
          <img src="${avatar}" alt="${comment.name}" class="commenter-avatar">
          <div class="comment-details">
            <span class="commenter-name">${comment.name}</span>
            <p class="comment-text">${comment.text}</p>
            <span class="comment-time">${comment.time}</span>
          </div>
        `;
        commentsContainer.appendChild(item);
      });
      commentsContainer.scrollTop = commentsContainer.scrollHeight;
    }

    // Active Slide logic
    function showSlide(index) {
      currentReelIndex = index;

      // Toggle slides visibility
      slides.forEach(slide => slide.classList.remove("active"));
      slides[index].classList.add("active");

      // Update segmented progress bar widths
      progressSegments.forEach((segment, i) => {
        const fill = segment.querySelector(".fill");
        if (i < index) {
          fill.style.width = "100%";
        } else if (i > index) {
          fill.style.width = "0%";
        }
      });

      // Retrieve metadata from data attributes
      const slideEl = slides[index];
      const title = slideEl.getAttribute("data-title");
      const tagline = slideEl.getAttribute("data-tagline");
      const location = slideEl.getAttribute("data-location");
      const story = slideEl.getAttribute("data-story");
      const tagsStr = slideEl.getAttribute("data-tags") || "";
      const tags = tagsStr.split(" ").filter(t => t.startsWith("#"));

      // Update Screen Text & Captions
      capLoc.textContent = location;
      capTitle.textContent = title;
      capTagline.textContent = tagline;
      capDescPrev.textContent = story.substring(0, 50) + "...";
      document.querySelector(".slide-num").textContent = `${index + 1} / ${totalSlides}`;

      // Update Bottom story sheet details
      sheetLoc.textContent = location;
      sheetTitle.textContent = title;
      sheetTagline.textContent = tagline;
      sheetBody.textContent = story;

      // Update sheet hashtags
      sheetTags.innerHTML = "";
      tags.forEach(tag => {
        const span = document.createElement("span");
        span.textContent = tag;
        sheetTags.appendChild(span);
      });

      // Update Dynamic Glow
      if (glowAura) {
        glowAura.style.background = auraColors[index] || auraColors[0];
      }

      // Update Sidebar Likes Counter & active state
      if (slideLikesState[index]) {
        likeButton.classList.add("active");
      } else {
        likeButton.classList.remove("active");
      }
      likeCountEl.textContent = formatCount(slideLikesCount[index] + (slideLikesState[index] ? 1 : 0));

      // Update Sidebar Saves Counter & active state
      if (slideSavesState[index]) {
        saveButton.classList.add("active");
        saveButton.classList.add("saved");
      } else {
        saveButton.classList.remove("active");
        saveButton.classList.remove("saved");
      }
      saveCountEl.textContent = formatCount(slideSavesCount[index] + (slideSavesState[index] ? 1 : 0));

      // Update Comments counters
      const commentsCount = slideCommentsData[index].length;
      commentCountEl.textContent = commentsCount;
      commentsNumText.textContent = commentsCount;

      // Update Comments list if opened
      renderCommentsList(index);
    }

    // Auto-advance Timer Logic
    function startProgressTimer() {
      stopProgressTimer();
      if (isSliderPaused) return;

      progressTimer = setInterval(() => {
        if (!isSliderPaused) {
          progressPercent += (progressInterval / slideDuration) * 100;
          if (progressPercent >= 100) {
            progressPercent = 0;
            const nextIndex = (currentReelIndex + 1) % totalSlides;
            showSlide(nextIndex);
          } else {
            // Update fill width of active slide segment
            const activeFill = progressSegments[currentReelIndex].querySelector(".fill");
            if (activeFill) {
              activeFill.style.width = progressPercent + "%";
            }
          }
        }
      }, progressInterval);

      // Update spinning record
      audioDisc.classList.remove("paused");
    }

    function stopProgressTimer() {
      if (progressTimer) {
        clearInterval(progressTimer);
        progressTimer = null;
      }
      audioDisc.classList.add("paused");
    }

    // Jump to Slide by Segment Click
    progressSegments.forEach((segment, i) => {
      segment.addEventListener("click", (e) => {
        e.stopPropagation();
        progressPercent = 0;
        showSlide(i);
        startProgressTimer();
        pulseDynamicIsland();
      });
    });

    // Sound toggle chimes and visualizer
    soundToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (isMuted) {
        isMuted = false;
        soundToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        soundToggle.setAttribute("title", "Mute Sound");
        initHighlandSynth();
        triggerChimeFeedback();
      } else {
        isMuted = true;
        soundToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        soundToggle.setAttribute("title", "Unmute Sound");
        stopHighlandSynth();
      }
    });

    // Play/Pause button
    playToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (isSliderPaused) {
        isSliderPaused = false;
        playToggle.innerHTML = '<i class="fas fa-pause"></i>';
        playToggle.setAttribute("title", "Pause Slider");
        startProgressTimer();
        pulseDynamicIsland();
      } else {
        isSliderPaused = true;
        playToggle.innerHTML = '<i class="fas fa-play"></i>';
        playToggle.setAttribute("title", "Play Slider");
        stopProgressTimer();
      }
    });

    // Tap Zones & Arrows navigation
    function navigateNext(e) {
      if (e) e.stopPropagation();
      progressPercent = 0;
      showSlide((currentReelIndex + 1) % totalSlides);
      startProgressTimer();
      pulseDynamicIsland();
    }

    function navigatePrev(e) {
      if (e) e.stopPropagation();
      progressPercent = 0;
      showSlide((currentReelIndex - 1 + totalSlides) % totalSlides);
      startProgressTimer();
      pulseDynamicIsland();
    }

    tapRight.addEventListener("click", navigateNext);
    arrowRight.addEventListener("click", navigateNext);
    tapLeft.addEventListener("click", navigatePrev);
    arrowLeft.addEventListener("click", navigatePrev);

    // Sidebar Interactions
    likeButton.addEventListener("click", (e) => {
      e.stopPropagation();
      const state = !slideLikesState[currentReelIndex];
      slideLikesState[currentReelIndex] = state;

      if (state) {
        likeButton.classList.add("active");
        triggerChimeFeedback();
        // Camera flash effect on notch
        if (notchCamera) {
          notchCamera.style.background = "#fff";
          notchCamera.style.boxShadow = "0 0 10px #fff, 0 0 20px #6394ff";
          setTimeout(() => {
            notchCamera.style.background = "#09090b";
            notchCamera.style.boxShadow = "inset 0 0 2px rgba(255,255,255,0.4)";
          }, 150);
        }
      } else {
        likeButton.classList.remove("active");
      }

      likeCountEl.textContent = formatCount(slideLikesCount[currentReelIndex] + (state ? 1 : 0));
    });

    saveButton.addEventListener("click", (e) => {
      e.stopPropagation();
      const state = !slideSavesState[currentReelIndex];
      slideSavesState[currentReelIndex] = state;

      if (state) {
        saveButton.classList.add("active");
        saveButton.classList.add("saved");
        triggerChimeFeedback();

        // Spin bookmark
        const icon = saveButton.querySelector("i");
        icon.style.transform = "rotate(360deg)";
        icon.style.transition = "transform 0.4s ease";
        setTimeout(() => {
          icon.style.transform = "none";
          icon.style.transition = "none";
        }, 400);
      } else {
        saveButton.classList.remove("active");
        saveButton.classList.remove("saved");
      }

      saveCountEl.textContent = formatCount(slideSavesCount[currentReelIndex] + (state ? 1 : 0));
    });

    // Comment board open/close
    commentButton.addEventListener("click", (e) => {
      e.stopPropagation();
      commentsSheet.classList.add("open");
      detailSheet.classList.remove("open"); // close other sheet

      // Pause slider
      isSliderPaused = true;
      stopProgressTimer();
      playToggle.innerHTML = '<i class="fas fa-play"></i>';
    });

    btnCloseComments.addEventListener("click", (e) => {
      e.stopPropagation();
      commentsSheet.classList.remove("open");

      // Resume slider
      isSliderPaused = false;
      playToggle.innerHTML = '<i class="fas fa-pause"></i>';
      startProgressTimer();
    });

    // Comment submission
    function postComment() {
      const text = newCommentInput.value.trim();
      if (!text) return;

      slideCommentsData[currentReelIndex].push({
        name: "you",
        text: text,
        time: "Just now"
      });

      newCommentInput.value = "";
      renderCommentsList(currentReelIndex);

      const newLen = slideCommentsData[currentReelIndex].length;
      commentCountEl.textContent = newLen;
      commentsNumText.textContent = newLen;

      triggerChimeFeedback();
    }

    btnSubmitComment.addEventListener("click", (e) => {
      e.stopPropagation();
      postComment();
    });

    newCommentInput.addEventListener("keydown", (e) => {
      e.stopPropagation(); // prevent global keyboard listeners
      if (e.key === "Enter") {
        postComment();
      }
    });

    // Expandable Story Sheet Drawer
    btnExpandSheet.addEventListener("click", (e) => {
      e.stopPropagation();
      detailSheet.classList.add("open");
      commentsSheet.classList.remove("open"); // close other sheet

      // Pause slider
      isSliderPaused = true;
      stopProgressTimer();
      playToggle.innerHTML = '<i class="fas fa-play"></i>';
    });

    btnCloseSheet.addEventListener("click", (e) => {
      e.stopPropagation();
      detailSheet.classList.remove("open");

      // Resume slider
      isSliderPaused = false;
      playToggle.innerHTML = '<i class="fas fa-pause"></i>';
      startProgressTimer();
    });

    // Drag-down handle bar to close sheet
    const handleBar = document.querySelector(".sheet-handle-bar");
    let touchStartY = 0;

    handleBar.addEventListener("touchstart", (e) => {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    handleBar.addEventListener("touchmove", (e) => {
      const touchY = e.touches[0].clientY;
      const diffY = touchY - touchStartY;
      if (diffY > 50) {
        detailSheet.classList.remove("open");
        isSliderPaused = false;
        playToggle.innerHTML = '<i class="fas fa-pause"></i>';
        startProgressTimer();
      }
    }, { passive: true });

    // Copy to Clipboard & Deep linking
    shareButton.addEventListener("click", (e) => {
      e.stopPropagation();

      // Create deep link URL using the active slide index
      const deepLink = window.location.origin + window.location.pathname + "?slide=" + currentReelIndex;

      navigator.clipboard.writeText(deepLink).then(() => {
        toastNotification.classList.add("show");
        triggerChimeFeedback();

        setTimeout(() => {
          toastNotification.classList.remove("show");
        }, 2200);
      });
    });

    // Pause on Hover (Desktop)
    screenArea.addEventListener("mouseenter", () => {
      if (!detailSheet.classList.contains("open") && !commentsSheet.classList.contains("open") && !playToggle.innerHTML.includes("play")) {
        isSliderPaused = true;
        stopProgressTimer();
      }
    });

    screenArea.addEventListener("mouseleave", () => {
      if (!detailSheet.classList.contains("open") && !commentsSheet.classList.contains("open") && !playToggle.innerHTML.includes("play")) {
        isSliderPaused = false;
        startProgressTimer();
      }
    });

    // Pause on Press & Hold (Mobile Touch support)
    screenArea.addEventListener("touchstart", () => {
      if (!detailSheet.classList.contains("open") && !commentsSheet.classList.contains("open") && !playToggle.innerHTML.includes("play")) {
        isSliderPaused = true;
        stopProgressTimer();
      }
    }, { passive: true });

    screenArea.addEventListener("touchend", () => {
      if (!detailSheet.classList.contains("open") && !commentsSheet.classList.contains("open") && !playToggle.innerHTML.includes("play")) {
        isSliderPaused = false;
        startProgressTimer();
      }
    }, { passive: true });

    /* ==========================================================================
       FULLSCREEN THEATER MODE SWITCH
       ========================================================================== */
    fullscreenToggle.addEventListener("click", (e) => {
      e.stopPropagation();

      if (reelsWrapper.classList.contains("fullscreen-mode")) {
        reelsWrapper.classList.remove("fullscreen-mode");
        fullscreenToggle.innerHTML = '<i class="fas fa-expand"></i>';
        fullscreenToggle.setAttribute("title", "Enter Theater Mode");
        document.body.style.overflow = "auto";
      } else {
        reelsWrapper.classList.add("fullscreen-mode");
        fullscreenToggle.innerHTML = '<i class="fas fa-compress"></i>';
        fullscreenToggle.setAttribute("title", "Exit Theater Mode");
        document.body.style.overflow = "hidden";
        pulseDynamicIsland();
      }
    });

    // Close fullscreen on ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (reelsWrapper.classList.contains("fullscreen-mode")) {
          reelsWrapper.classList.remove("fullscreen-mode");
          fullscreenToggle.innerHTML = '<i class="fas fa-expand"></i>';
          document.body.style.overflow = "auto";
        }
      }
    });

    // Deep-linking URL routing on initial load
    const urlParams = new URLSearchParams(window.location.search);
    let startSlideIndex = parseInt(urlParams.get("slide")) || 0;
    if (startSlideIndex < 0 || startSlideIndex >= totalSlides) {
      startSlideIndex = 0;
    }

    // Initial active slide setup
    showSlide(startSlideIndex);
    startProgressTimer();
  }

  /* ==========================================================================
     SCALE BRAND & REVENUE CONTACT FORM & COPY EMAIL
     ========================================================================== */
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      const email = "jeromecabinta7@gmail.com";
      const setCopiedState = () => {
        const btnText = copyEmailBtn.querySelector(".btn-text") || copyEmailBtn;
        const originalHtml = btnText.innerHTML;
        copyEmailBtn.classList.add("copied");
        btnText.innerHTML = "Copied! ✓";
        setTimeout(() => {
          copyEmailBtn.classList.remove("copied");
          btnText.innerHTML = originalHtml;
        }, 2200);
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email)
          .then(setCopiedState)
          .catch(() => {
            fallbackCopy();
          });
      } else {
        fallbackCopy();
      }

      function fallbackCopy() {
        try {
          const tempInput = document.createElement("textarea");
          tempInput.value = email;
          tempInput.style.position = "fixed";
          tempInput.style.left = "-9999px";
          tempInput.style.top = "-9999px";
          document.body.appendChild(tempInput);
          tempInput.focus();
          tempInput.select();
          document.execCommand("copy");
          document.body.removeChild(tempInput);
        } catch (err) { }
        setCopiedState();
      }
    });
  }

  const growthProposalForm = document.getElementById("growthProposalForm");
  const proposalFeedback = document.getElementById("proposalFeedback");
  const submitProposalBtn = document.getElementById("submitProposalBtn");

  if (growthProposalForm) {
    growthProposalForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("clientName") ? document.getElementById("clientName").value.trim() : "";
      const email = document.getElementById("clientEmail") ? document.getElementById("clientEmail").value.trim() : "";
      const goals = document.getElementById("clientHandlesGoals") ? document.getElementById("clientHandlesGoals").value.trim() : "";

      if (!name || !email || !goals) {
        if (proposalFeedback) {
          proposalFeedback.className = "proposal-feedback error";
          proposalFeedback.textContent = "Please fill in all fields.";
        }
        return;
      }

      if (submitProposalBtn) {
        submitProposalBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Preparing Brief...</span>';
        submitProposalBtn.disabled = true;
      }

      // Build mailto link to immediately launch user's email client
      const subject = encodeURIComponent(`Growth Proposal Request from ${name}`);
      const body = encodeURIComponent(
        `Hi Jerome,\n\nI would like to request a Social Media Growth Audit and strategy roadmap.\n\n` +
        `Name & Brand: ${name}\n` +
        `Email: ${email}\n\n` +
        `Handles & Goals:\n${goals}\n\n` +
        `Looking forward to hearing from you within 24 hours!`
      );
      const mailtoUrl = `mailto:jeromecabinta7@gmail.com?subject=${subject}&body=${body}`;

      setTimeout(() => {
        window.location.href = mailtoUrl;

        if (proposalFeedback) {
          proposalFeedback.className = "proposal-feedback success";
          proposalFeedback.innerHTML = '✨ Brief submitted! Opening email client...';
        }

        if (submitProposalBtn) {
          submitProposalBtn.innerHTML = '<i class="fas fa-check"></i> <span>Brief Sent!</span>';
          submitProposalBtn.disabled = false;
        }

        growthProposalForm.reset();

        setTimeout(() => {
          if (submitProposalBtn) {
            submitProposalBtn.innerHTML = '<i class="fas fa-paper-plane"></i> <span>Submit Growth Brief</span>';
          }
          if (proposalFeedback) {
            proposalFeedback.textContent = '';
          }
        }, 5000);
      }, 700);
    });
  }

  /* ==========================================================================
     NAVBAR ACTIVE SCROLLSPY & SMOOTH SCROLL
     ========================================================================== */
  const sections = document.querySelectorAll("section[id]");
  const navAnchorLinks = document.querySelectorAll(".nav-links a[href^='#']");

  if (sections.length > 0 && navAnchorLinks.length > 0) {
    function highlightNavOnScroll() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const navOffset = 160;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - navOffset;
        const sectionId = current.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navAnchorLinks.forEach((link) => {
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });

      if (scrollY < 150 && navAnchorLinks[0]) {
        navAnchorLinks.forEach(l => l.classList.remove("active"));
        navAnchorLinks[0].classList.add("active");
      }
    }

    window.addEventListener("scroll", highlightNavOnScroll, { passive: true });
    highlightNavOnScroll();
  }

  // Smooth scroll handler for all in-page anchor links including Home & Brand Logo
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;

      if (href === "#hero") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (history.pushState) {
          history.pushState(null, null, " ");
        }
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navOffset = 70;
        const targetPos = target.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop) - navOffset;
        window.scrollTo({ top: targetPos, behavior: "smooth" });
        if (history.pushState) {
          history.pushState(null, null, href);
        }
      }
    });
  });

  // Ensure page resets to top on initial page load if hash is empty or #hero
  if (window.location.hash === "" || window.location.hash === "#hero") {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }

  /* ==========================================================================
     TESTIMONIAL SLIDER ENGINE
     ========================================================================== */
  const testiBg = document.getElementById("testi-slider-bg");
  if (testiBg) {
    const testimonials = [
      {
        name: "Jonel Uligan",
        role: "Web Developer",
        company: "Agape Reaching People Ministries Benguet PH",
        text: '"Thank you Jerome for your commitment and enthusiasm for the work. All the best!"',
        img: "Assets/Test/JU.avif",
        stars: 5
      },
      {
        name: "Angelito James Bustos",
        role: "School Administrative",
        company: "Northridge Institute of Business and Technology Inc. - Baguio",
        text: '"Jerome is one of the most dedicated and reliable employees I\'ve worked with. He is proactive in addressing issues, always coming up with creative and effective solutions."',
        img: "Assets/Test/JB.avif",
        stars: 5
      },
      {
        name: "Arlene Diola",
        role: "Graphics Designer",
        company: "Ar & Co. Rock Creatives",
        text: '"Thank you, Jerome, for your dedication and creative energy. Your attention to detail and collaborative spirit truly made a difference."',
        img: "Assets/Test/AR.jpg",
        stars: 5
      },
      {
        name: "Rodilene Binay-an Ricardo",
        role: "MPSP Coordinator",
        company: "Agape Reaching People Ministries Benguet PH",
        text: '"Thank you, Jerome, for your dedication and creative energy. Your attention to detail and collaborative spirit truly made a difference."',
        img: "Assets/Test/RR.avif",
        stars: 5
      },
      {
        name: "Gemma Lawangen",
        role: "Social Media Manager",
        company: "Calvary Baptist Church of Baguio City Inc.",
        text: '"Jerome is a reliable and creative team player. He consistently delivers high-quality work and brings fresh ideas to every project."',
        img: "Assets/Test/Jem.png",
        stars: 5
      }
    ];

    let currentTestiIndex = 0;
    let isTestiAnimating = false;

    const activeName = document.getElementById("testi-active-name");
    const activeRole = document.getElementById("testi-active-role");
    const activeCompany = document.getElementById("testi-active-company");
    const activeText = document.getElementById("testi-active-text");
    const activeStars = document.getElementById("testi-active-stars");
    const activeImg = document.getElementById("testi-active-img");
    const activeImgWrapper = document.getElementById("testi-active-img-wrapper");
    const thumbStrip = document.getElementById("testi-thumb-strip");
    const thumbs = thumbStrip ? thumbStrip.querySelectorAll(".testi-thumb") : [];
    const prevBtn = document.getElementById("testi-prev");
    const nextBtn = document.getElementById("testi-next");
    const counterCurrent = document.getElementById("testi-counter-current");
    const label = document.getElementById("testi-label");

    function padIndex(i) {
      return String(i + 1).padStart(2, "0");
    }

    function generateStars(count) {
      return Array.from({ length: count }, () => '<i class="fas fa-star"></i>').join("");
    }

    function animateContentOut() {
      const elements = [label, activeName, activeRole, activeCompany, activeText, activeStars].filter(Boolean);
      elements.forEach((el, i) => {
        el.style.transition = `all 0.35s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.04}s`;
        el.style.opacity = "0";
        el.style.transform = "translateY(25px)";
        el.style.filter = "blur(8px)";
      });
    }

    function animateContentIn() {
      const elements = [label, activeName, activeRole, activeCompany, activeText, activeStars].filter(Boolean);
      elements.forEach(el => {
        el.style.transition = "none";
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.filter = "blur(12px)";
      });

      if (label) void label.offsetWidth;

      elements.forEach((el, i) => {
        setTimeout(() => {
          el.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s`;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          el.style.filter = "blur(0px)";
        }, 50);
      });
    }

    function animateImageTransition(newSrc, newAlt) {
      if (!activeImgWrapper || !activeImg) return;
      activeImgWrapper.style.transition = "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
      activeImgWrapper.style.transform = "scale(0.85)";
      activeImgWrapper.style.opacity = "0";

      setTimeout(() => {
        activeImg.src = newSrc;
        activeImg.alt = newAlt;
        activeImgWrapper.style.transition = "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)";
        activeImgWrapper.style.transform = "scale(1)";
        activeImgWrapper.style.opacity = "1";
      }, 400);
    }

    function updateThumbs(newIndex) {
      thumbs.forEach((t, i) => {
        const isActive = i === newIndex;
        t.classList.toggle("active", isActive);
        const offset = i - newIndex;
        t.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${Math.abs(offset) * 0.05}s`;
      });

      // Update thumbnail pill container scroll directly without window scroll
      if (thumbStrip && thumbs[newIndex] && thumbStrip.scrollWidth > thumbStrip.clientWidth) {
        const activeThumb = thumbs[newIndex];
        const targetLeft = activeThumb.offsetLeft - (thumbStrip.clientWidth / 2) + (activeThumb.clientWidth / 2);
        thumbStrip.scrollLeft = targetLeft;
      }
    }

    let autoSlide = null;
    let isTestiVisible = false;

    function resetAutoSlide() {
      if (autoSlide) clearInterval(autoSlide);
      if (!isTestiVisible) return;
      autoSlide = setInterval(() => {
        const newIndex = (currentTestiIndex + 1) % testimonials.length;
        goToTestiSlide(newIndex);
      }, 6000);
    }

    function goToTestiSlide(newIndex) {
      if (isTestiAnimating || newIndex === currentTestiIndex) return;
      isTestiAnimating = true;

      const data = testimonials[newIndex];
      animateContentOut();
      animateImageTransition(data.img, data.name);
      updateThumbs(newIndex);

      setTimeout(() => {
        if (activeName) activeName.textContent = data.name;
        if (activeRole) activeRole.textContent = data.role;
        if (activeCompany) activeCompany.textContent = data.company;
        if (activeText) activeText.textContent = data.text;
        if (activeStars) activeStars.innerHTML = generateStars(data.stars);
        if (counterCurrent) counterCurrent.textContent = padIndex(newIndex);

        animateContentIn();
        currentTestiIndex = newIndex;
        resetAutoSlide();

        setTimeout(() => {
          isTestiAnimating = false;
        }, 600);
      }, 400);
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const newIndex = (currentTestiIndex - 1 + testimonials.length) % testimonials.length;
        goToTestiSlide(newIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const newIndex = (currentTestiIndex + 1) % testimonials.length;
        goToTestiSlide(newIndex);
      });
    }

    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const idx = parseInt(thumb.dataset.index);
        goToTestiSlide(idx);
      });
    });

    // Touch Swipe Gesture Support for Mobile
    let touchStartX = 0;
    let touchEndX = 0;

    testiBg.addEventListener("touchstart", (e) => {
      if (e.changedTouches && e.changedTouches.length > 0) {
        touchStartX = e.changedTouches[0].screenX;
      }
    }, { passive: true });

    testiBg.addEventListener("touchend", (e) => {
      if (e.changedTouches && e.changedTouches.length > 0) {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 40) {
          if (diff < 0) {
            // Swipe Left -> Next
            const newIndex = (currentTestiIndex + 1) % testimonials.length;
            goToTestiSlide(newIndex);
          } else {
            // Swipe Right -> Prev
            const newIndex = (currentTestiIndex - 1 + testimonials.length) % testimonials.length;
            goToTestiSlide(newIndex);
          }
        }
      }
    }, { passive: true });

    const testiSection = document.querySelector(".testi-slider-section");
    if (testiSection && "IntersectionObserver" in window) {
      const testiObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isTestiVisible = entry.isIntersecting;
          if (isTestiVisible) {
            resetAutoSlide();
          } else {
            if (autoSlide) clearInterval(autoSlide);
          }
        });
      }, { threshold: 0.15 });

      testiObserver.observe(testiSection);
    } else {
      isTestiVisible = true;
      resetAutoSlide();
    }

    if (testiSection) {
      testiSection.addEventListener("mouseenter", () => {
        if (autoSlide) clearInterval(autoSlide);
      });
      testiSection.addEventListener("mouseleave", () => resetAutoSlide());
    }

    animateContentIn();
  }

  /* ==========================================================================
     BEHANCE 2026 INTERACTIVE HANDLERS
     ========================================================================== */

  /* 1. SINGLE POST FILTER TABS */
  const filterBtns = document.querySelectorAll(".filter-tab-btn");
  const postCards = document.querySelectorAll(".post-card-behance");

  if (filterBtns.length > 0 && postCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filterValue = btn.getAttribute("data-filter");

        postCards.forEach(card => {
          const category = card.getAttribute("data-category");
          if (filterValue === "all" || category === filterValue || (category && category.split(" ").includes(filterValue))) {
            card.style.display = "flex";
            card.style.opacity = "0";
            card.style.transform = "translateY(15px)";
            setTimeout(() => {
              card.style.transition = "all 0.35s ease";
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, 30);
          } else {
            card.style.display = "none";
          }
        });
      });
    });

    // Trigger the active filter on page load
    const initialActiveBtn = document.querySelector(".filter-tab-btn.active") || filterBtns[0];
    if (initialActiveBtn) {
      initialActiveBtn.click();
    }
  }

  /* 2. INTERACTIVE MULTI-SLIDE CAROUSELS (With Button, Dot & Touch Swipe Support) */
  const carouselDecks = document.querySelectorAll(".carousel-deck-card");
  carouselDecks.forEach(deck => {
    const slides = deck.querySelectorAll(".carousel-slide-item");
    const dots = deck.querySelectorAll(".carousel-dot-indicator");
    const prevBtn = deck.querySelector(".prev-btn");
    const nextBtn = deck.querySelector(".next-btn");
    const currentSlideSpan = deck.querySelector(".current-slide");
    const stageWrap = deck.querySelector(".carousel-stage-wrap");
    let currentIndex = 0;

    function updateSlide(index) {
      slides.forEach(s => s.classList.remove("active"));
      dots.forEach(d => d.classList.remove("active"));
      if (slides[index]) slides[index].classList.add("active");
      if (dots[index]) dots[index].classList.add("active");
      if (currentSlideSpan) currentSlideSpan.textContent = index + 1;
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide(currentIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide(currentIndex);
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        currentIndex = idx;
        updateSlide(currentIndex);
      });
    });

    // Touch Swipe Navigation for Mobile and Tablet
    if (stageWrap) {
      let touchStartX = 0;
      let touchStartY = 0;

      stageWrap.addEventListener("touchstart", (e) => {
        if (e.touches && e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
        }
      }, { passive: true });

      stageWrap.addEventListener("touchend", (e) => {
        if (e.changedTouches && e.changedTouches.length === 1) {
          const touchEndX = e.changedTouches[0].clientX;
          const touchEndY = e.changedTouches[0].clientY;
          const diffX = touchEndX - touchStartX;
          const diffY = touchEndY - touchStartY;

          // Only trigger if horizontal swipe is dominant
          if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX < 0) {
              currentIndex = (currentIndex + 1) % slides.length;
            } else {
              currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            }
            updateSlide(currentIndex);
          }
        }
      }, { passive: true });
    }
  });

  /* 3. VIDEO MODAL PLAYER */
  const videoModal = document.getElementById("videoModal");
  const videoModalClose = document.getElementById("videoModalClose");
  const videoContainer = document.getElementById("videoModalContainer");
  const videoModalTitle = document.getElementById("videoModalTitle");

  document.querySelectorAll(".open-video-modal").forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const videoSrc = trigger.getAttribute("data-video-src");
      const title = trigger.getAttribute("data-title") || "Video Showcase";
      if (!videoSrc) return;

      if (videoModalTitle) videoModalTitle.textContent = title;
      if (videoContainer) videoContainer.innerHTML = "";

      const modalContent = videoModal ? videoModal.querySelector(".modal-content") : null;
      const isVertical = videoSrc.includes("Assets/Reels/") || videoSrc.includes("/Shoes/") || trigger.closest(".reel-card-behance");

      if (videoSrc.includes("youtube.com") || videoSrc.includes("youtu.be")) {
        if (videoContainer) {
          videoContainer.style.aspectRatio = "16 / 9";
          videoContainer.style.maxHeight = "none";
        }
        if (modalContent) modalContent.style.maxWidth = "800px";

        let embedUrl = videoSrc;
        if (videoSrc.includes("watch?v=")) {
          embedUrl = videoSrc.replace("watch?v=", "embed/");
        } else if (videoSrc.includes("youtu.be/")) {
          embedUrl = videoSrc.replace("youtu.be/", "www.youtube.com/embed/");
        }
        if (!embedUrl.includes("autoplay=1")) {
          embedUrl += (embedUrl.includes("?") ? "&" : "?") + "autoplay=1";
        }
        if (videoContainer) {
          videoContainer.innerHTML = `<iframe src="${embedUrl}" style="width:100%; height:100%; border:none;" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        }
      } else {
        if (videoContainer) {
          if (isVertical) {
            videoContainer.style.aspectRatio = "9 / 16";
            videoContainer.style.maxHeight = "72vh";
            if (modalContent) modalContent.style.maxWidth = "440px";
          } else {
            videoContainer.style.aspectRatio = "16 / 9";
            videoContainer.style.maxHeight = "none";
            if (modalContent) modalContent.style.maxWidth = "800px";
          }
          videoContainer.innerHTML = `<video src="${videoSrc}" controls autoplay playsinline style="width:100%; height:100%; object-fit:contain; background:#000;"></video>`;
        }
      }

      if (videoModal) {
        videoModal.style.display = "flex";
        videoModal.classList.add("active");
      }
    });
  });

  if (videoModalClose && videoModal) {
    videoModalClose.addEventListener("click", () => {
      videoModal.style.display = "none";
      videoModal.classList.remove("active");
      if (videoContainer) videoContainer.innerHTML = "";
    });
  }

  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) {
        videoModal.style.display = "none";
        videoModal.classList.remove("active");
        if (videoContainer) videoContainer.innerHTML = "";
      }
    });
  }

  /* Reel Card Hover Video Playback & Card Click */
  document.querySelectorAll(".reel-card-behance").forEach(card => {
    const video = card.querySelector("video");
    const overlay = card.querySelector(".open-video-modal");

    if (video) {
      card.addEventListener("mouseenter", () => {
        video.play().catch(() => { });
      });

      card.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
      });
    }

    card.addEventListener("click", (e) => {
      if (e.target.closest(".open-video-modal")) return; // Let overlay handler fire naturally
      if (overlay) overlay.click();
    });
  });

  /* 4. LIGHTBOX FOR POSTS, THUMBNAILS, CERTIFICATES & STORIES */
  const mainModal = document.getElementById("project-modal");
  const modalTitleElement = document.getElementById("modal-title");
  const modalDescElement = document.getElementById("modal-desc");
  const imageScrollContainer = document.getElementById("modal-image-scroll");
  const sliderPrevBtn = document.querySelector(".slider-btn.prev");
  const sliderNextBtn = document.querySelector(".slider-btn.next");
  const sliderDotsContainer = document.getElementById("slider-dots");

  document.querySelectorAll(".post-card-behance, .open-lightbox, .certificate-card-behance").forEach(card => {
    card.addEventListener("click", (e) => {
      // Don't open if clicked on video trigger
      if (e.target.closest(".open-video-modal")) return;

      const img = card.getAttribute("data-img") || (card.querySelector("img") ? card.querySelector("img").src : "");
      const title = card.getAttribute("data-title") || (card.querySelector(".post-card-title") ? card.querySelector(".post-card-title").textContent : "") || "Verified Credential";
      const desc = card.getAttribute("data-desc") || "";

      if (!img || !mainModal || !imageScrollContainer) return;

      // Hide multi-image slider navigation controls for single image view
      if (sliderPrevBtn) sliderPrevBtn.style.display = "none";
      if (sliderNextBtn) sliderNextBtn.style.display = "none";
      if (sliderDotsContainer) {
        sliderDotsContainer.innerHTML = "";
        sliderDotsContainer.style.display = "none";
      }

      // Populate preview image cleanly
      imageScrollContainer.innerHTML = "";
      const linkWrapper = document.createElement("a");
      linkWrapper.href = img;
      linkWrapper.target = "_blank";
      linkWrapper.rel = "noopener";
      linkWrapper.title = "Click to view full resolution image";
      linkWrapper.style.cursor = "zoom-in";
      linkWrapper.style.display = "block";
      linkWrapper.style.width = "100%";

      const imageElem = document.createElement("img");
      imageElem.src = img;
      imageElem.alt = title;
      imageElem.id = "modal-img";
      imageElem.style.width = "100%";
      imageElem.style.maxHeight = "72vh";
      imageElem.style.objectFit = "contain";
      imageElem.style.display = "block";
      imageElem.style.margin = "0 auto";

      linkWrapper.appendChild(imageElem);
      imageScrollContainer.appendChild(linkWrapper);

      if (modalTitleElement) modalTitleElement.textContent = title;
      if (modalDescElement) modalDescElement.textContent = desc;

      mainModal.style.display = "block";
      mainModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  /* 5. APPRECIATE PROJECT BUTTON */
  const appreciateBtn = document.getElementById("appreciateBtn");
  const appreciateCount = document.getElementById("appreciateCount");
  if (appreciateBtn && appreciateCount) {
    let appreciated = false;
    appreciateBtn.addEventListener("click", () => {
      if (!appreciated) {
        let count = parseInt(appreciateCount.textContent.replace(/,/g, "")) || 1482;
        count += 1;
        appreciateCount.textContent = count.toLocaleString();
        appreciateBtn.style.background = "var(--behance-lime)";
        appreciateBtn.style.color = "#000000";
        appreciateBtn.innerHTML = `<i class="fas fa-thumbs-up"></i> <span>Appreciated!</span> <span style="background: rgba(0,0,0,0.15); padding: 2px 8px; border-radius: 999px; font-size: 0.8rem;">${count.toLocaleString()}</span>`;
        appreciated = true;
      }
    });
  }

});
