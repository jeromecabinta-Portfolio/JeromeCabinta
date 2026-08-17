/* THEME INITIALIZATION (Runs immediately to prevent flash) */
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

document.addEventListener("DOMContentLoaded", () => {
  /* MOBILE NAV */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("show");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("show");
      });
    });
  }

  /* DARK MODE */
  const themeToggle = document.getElementById("theme-toggle");

  /* SYNC TOGGLE ICON */
  if (themeToggle) {
    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️" : "🌙";

    themeToggle.addEventListener("click", () => {
      document.body.classList.add("theme-transitioning");
      document.body.classList.toggle("dark");
      const currentIsDark = document.body.classList.contains("dark");
      themeToggle.textContent = currentIsDark ? "☀️" : "🌙";
      localStorage.setItem("theme", currentIsDark ? "dark" : "light");
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
  const modalVisitBtn = document.getElementById("modal-visit-btn");

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
        thumb.onerror = function() {
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

      const activeLink = currentLinks[currentIndex] || currentLinks[0];
      if (activeLink && modalVisitBtn) {
        modalVisitBtn.href = activeLink;
        modalVisitBtn.style.display = "inline-flex";
        if (activeLink.endsWith(".html")) {
          modalVisitBtn.innerHTML = `<i class="fas fa-external-link-alt"></i> View Full Gallery Page`;
          modalVisitBtn.target = "_self";
        } else {
          modalVisitBtn.innerHTML = `<i class="fas fa-external-link-alt"></i> Visit Website`;
          modalVisitBtn.target = "_blank";
        }
      } else if (modalVisitBtn) {
        modalVisitBtn.style.display = "none";
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
      document.body.style.overflow = "auto";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        stopCurrentMedia();
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });

    document.addEventListener("keydown", (e) => {
      if (modal.style.display === "block") {
        if (e.key === "Escape") {
          stopCurrentMedia();
          modal.style.display = "none";
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
          } catch(e) {}
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
    }, {passive: true});
    
    handleBar.addEventListener("touchmove", (e) => {
      const touchY = e.touches[0].clientY;
      const diffY = touchY - touchStartY;
      if (diffY > 50) {
        detailSheet.classList.remove("open");
        isSliderPaused = false;
        playToggle.innerHTML = '<i class="fas fa-pause"></i>';
        startProgressTimer();
      }
    }, {passive: true});

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
    }, {passive: true});

    screenArea.addEventListener("touchend", () => {
      if (!detailSheet.classList.contains("open") && !commentsSheet.classList.contains("open") && !playToggle.innerHTML.includes("play")) {
        isSliderPaused = false;
        startProgressTimer();
      }
    }, {passive: true});

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

});