/* ============================================
   VISA KLUB — Shared Scripts
   ============================================ */

   (function () {
    'use strict';
  
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
    /* ===== PAGE LOADER ===== */
    document.body.classList.add('loading');
    window.addEventListener('load', () => {
      const loader = document.getElementById('pageLoader');
      if (loader) {
        setTimeout(() => {
          loader.classList.add('hidden');
          document.body.classList.remove('loading');
        }, 500);
      }
    });
  
    /* ===== STICKY HEADER ===== */
    const header = document.getElementById('header');
    function updateHeader() {
      if (!header) return;
      if (window.scrollY > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  
    /* ===== MOBILE MENU ===== */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
      document.querySelectorAll('.has-dropdown > .nav-link').forEach((link) => {
        link.addEventListener('click', (e) => {
          if (window.innerWidth <= 900) {
            e.preventDefault();
            link.parentElement.classList.toggle('open');
          }
        });
      });
      navLinks.querySelectorAll('a:not(.has-dropdown > .nav-link)').forEach((link) => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
        });
      });
      document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
        }
      });
    }
  
    /* ===== SMOOTH SCROLL ===== */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href.length < 2) return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = 80;
          const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
      });
    });
  
    /* ===== HERO SLIDESHOW (7 COUNTRIES) ===== */
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    if (slides.length > 0) {
      let currentSlide = 0;
      let slideInterval;
  
      function goToSlide(index) {
        slides.forEach((s, i) => s.classList.toggle('active', i === index));
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        currentSlide = index;
      }
  
      function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
      }
  
      function startSlideshow() {
        if (prefersReducedMotion) return;
        slideInterval = setInterval(nextSlide, 5000);
      }
  
      function stopSlideshow() {
        clearInterval(slideInterval);
      }
  
      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          goToSlide(i);
          stopSlideshow();
          startSlideshow();
        });
      });
  
      startSlideshow();
  
      // Pause when user hovers over hero content (optional)
      const heroSection = document.querySelector('.hero');
      if (heroSection) {
        heroSection.addEventListener('mouseenter', stopSlideshow);
        heroSection.addEventListener('mouseleave', startSlideshow);
      }
    }
  
    /* ===== SCROLL REVEAL ===== */
    if (!prefersReducedMotion) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
      );
      document.querySelectorAll('.reveal-up, .stagger-grid > *').forEach((el) => revealObserver.observe(el));
    } else {
      document.querySelectorAll('.reveal-up, .stagger-grid > *').forEach((el) => el.classList.add('revealed'));
    }
  
    /* ===== COUNTERS ===== */
    function animateCounter(el, target, duration = 1600) {
      const start = performance.now();
      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
      }
      requestAnimationFrame(update);
    }
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const c = entry.target;
            const target = parseInt(c.dataset.target, 10);
            if (!isNaN(target) && !c.dataset.animated) {
              c.dataset.animated = 'true';
              animateCounter(c, target);
            }
            counterObserver.unobserve(c);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('.counter').forEach((c) => counterObserver.observe(c));
  
    /* ===== COURSE MODE TOGGLE ===== */
    const modeButtons = document.querySelectorAll('.mode-btn');
    const courseItems = document.querySelectorAll('.course-item');
    if (modeButtons.length && courseItems.length) {
      modeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const mode = btn.dataset.mode;
          modeButtons.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          courseItems.forEach((item) => {
            const modes = item.dataset.mode || '';
            const matches = mode === 'all' || modes.includes(mode);
            if (matches) {
              item.classList.remove('hidden');
              item.classList.remove('fade-in');
              void item.offsetWidth;
              item.classList.add('fade-in');
            } else {
              item.classList.add('hidden');
            }
          });
        });
      });
    }
  
    /* ===== FAQ ACCORDION ===== */
    document.querySelectorAll('.faq-question').forEach((q) => {
      q.addEventListener('click', () => {
        const item = q.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach((f) => f.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    });
  
    /* ===== TESTIMONIAL CAROUSEL ===== */
    const track = document.getElementById('testimonialTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    if (track && prevBtn && nextBtn && dotsContainer) {
      const slides2 = track.querySelectorAll('.testimonial-slide');
      const total = slides2.length;
      let current = 0;
      let autoPlayTimer = null;
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      }
      const dots2 = dotsContainer.querySelectorAll('.carousel-dot');
      function goTo(i) {
        if (i < 0) i = total - 1;
        if (i >= total) i = 0;
        current = i;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots2.forEach((d, idx) => d.classList.toggle('active', idx === current));
      }
      function next() { goTo(current + 1); }
      function prev() { goTo(current - 1); }
      nextBtn.addEventListener('click', () => { next(); resetAuto(); });
      prevBtn.addEventListener('click', () => { prev(); resetAuto(); });
      function startAuto() { if (!prefersReducedMotion) autoPlayTimer = setInterval(next, 6000); }
      function resetAuto() { clearInterval(autoPlayTimer); startAuto(); }
      const carousel = document.getElementById('testimonialCarousel');
      if (carousel) {
        carousel.addEventListener('mouseenter', () => clearInterval(autoPlayTimer));
        carousel.addEventListener('mouseleave', startAuto);
        let tx = 0, ex = 0;
        carousel.addEventListener('touchstart', (e) => { tx = e.changedTouches[0].screenX; }, { passive: true });
        carousel.addEventListener('touchend', (e) => {
          ex = e.changedTouches[0].screenX;
          const diff = tx - ex;
          if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); resetAuto(); }
        }, { passive: true });
      }
      startAuto();
    }
  
    /* ===== TIMELINE ===== */
    const timeline = document.getElementById('timeline');
    const timelineProgress = document.getElementById('timelineProgress');
    const timelineSteps = document.querySelectorAll('.timeline-step');
    if (timeline && timelineProgress) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => { timelineProgress.style.width = '100%'; }, 200);
            timelineSteps.forEach((s, i) => setTimeout(() => s.classList.add('active'), 300 + i * 200));
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25 });
      obs.observe(timeline);
    }
  
    /* ===== SCROLL TO TOP ===== */
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 500) scrollTopBtn.classList.add('visible');
        else scrollTopBtn.classList.remove('visible');
      }, { passive: true });
      scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
  
    /* ===== PARALLAX ===== */
    if (!prefersReducedMotion && window.innerWidth > 900) {
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            parallaxElements.forEach((el) => {
              const speed = parseFloat(el.dataset.parallax) || 0.1;
              const rect = el.getBoundingClientRect();
              const distance = (rect.top + rect.height / 2) - window.innerHeight / 2;
              if (Math.abs(distance) < window.innerHeight) {
                el.style.transform = `translateY(${distance * speed}px)`;
              }
            });
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    }
  
    /* ===== FORM SUBMIT ===== */
    window.handleFormSubmit = function (event) {
      event.preventDefault();
      const form = event.target;
      const successDiv = document.getElementById('formSuccess');
      const requiredFields = form.querySelectorAll('[required]');
      let valid = true;
      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#D9233E';
          field.style.animation = 'shake 0.4s';
          setTimeout(() => {
            field.style.animation = '';
            field.style.borderColor = '';
          }, 500);
        }
      });
      if (!valid) return;
      const submitBtn = form.querySelector('button[type="submit"]');
      const orig = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
      submitBtn.disabled = true;
      setTimeout(() => {
        form.style.display = 'none';
        if (successDiv) successDiv.classList.add('show');
      }, 1000);
    };
  
    const shakeStyle = document.createElement('style');
    shakeStyle.textContent = `@keyframes shake {
      0%, 100% { transform: translateX(0); }
      20% { transform: translateX(-6px); }
      40% { transform: translateX(6px); }
      60% { transform: translateX(-4px); }
      80% { transform: translateX(4px); }
    }`;
    document.head.appendChild(shakeStyle);
  
    /* ===== CARD TILT ===== */
    if (!prefersReducedMotion && window.innerWidth > 1024) {
      document.querySelectorAll('.destination-card, .course-card, .university-card').forEach((card) => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const rx = (y / rect.height) * -4;
          const ry = (x / rect.width) * 4;
          card.style.transform = `translateY(-8px) perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
      });
    }
  
    /* ===== ACTIVE NAV LINK ===== */
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPath) link.classList.add('active');
    });
  
    /* ===== LAZY LOAD IMAGES ===== */
    if ('loading' in HTMLImageElement.prototype) {
      document.querySelectorAll('img').forEach((img) => {
        if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
      });
    }
  
    /* ===== UNIVERSITY FILTER ===== */
    const filterCountry = document.getElementById('filterCountry');
    const filterDegree = document.getElementById('filterDegree');
    const filterField = document.getElementById('filterField');
    const universityCards = document.querySelectorAll('.university-card[data-country]');
    if (filterCountry && universityCards.length) {
      function applyFilters() {
        const country = filterCountry.value;
        const degree = filterDegree ? filterDegree.value : '';
        const field = filterField ? filterField.value : '';
        universityCards.forEach((card) => {
          const matchCountry = !country || card.dataset.country === country;
          const matchDegree = !degree || card.dataset.degree === degree;
          const matchField = !field || card.dataset.field === field;
          card.style.display = (matchCountry && matchDegree && matchField) ? '' : 'none';
        });
      }
      filterCountry.addEventListener('change', applyFilters);
      if (filterDegree) filterDegree.addEventListener('change', applyFilters);
      if (filterField) filterField.addEventListener('change', applyFilters);
    }
  })();