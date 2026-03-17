/* ============================================
   PERSONAL TECH WEBSITE - MAIN JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ===========================
  // TYPING EFFECT
  // ===========================
  const typingElement = document.getElementById('typing-text');
  const phrases = [
    'IoT Engineer & Maker',
    'AI/ML Researcher',
    'Open Source Contributor',
    'Tech Content Creator',
    'Embedded Systems Enthusiast'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  if (typingElement) {
    typeEffect();
  }

  // ===========================
  // NAVBAR SCROLL BEHAVIOR
  // ===========================
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function handleNavScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll);

  // ===========================
  // ACTIVE SECTION HIGHLIGHTING
  // ===========================
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);

  // ===========================
  // MOBILE MENU
  // ===========================
  const hamburger = document.querySelector('.nav-hamburger');
  const navMenu = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu on link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // ===========================
  // SCROLL ANIMATIONS (Intersection Observer)
  // ===========================
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));

  // ===========================
  // FILTER TABS (Projects & Articles)
  // ===========================
  document.querySelectorAll('.filter-tabs').forEach(tabContainer => {
    const tabs = tabContainer.querySelectorAll('.filter-tab');
    const targetSection = tabContainer.closest('section');
    const cards = targetSection ? targetSection.querySelectorAll('[data-category]') : [];

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');

        // Filter cards
        cards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = '';
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });

  // ===========================
  // CONTACT FORM VALIDATION
  // ===========================
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Clear previous errors
      contactForm.querySelectorAll('.form-error').forEach(err => {
        err.classList.remove('visible');
      });
      contactForm.querySelectorAll('.error').forEach(input => {
        input.classList.remove('error');
      });

      // Validate name
      const nameInput = document.getElementById('contact-name');
      if (nameInput && nameInput.value.trim().length < 2) {
        showError(nameInput, 'Please enter your name (at least 2 characters)');
        isValid = false;
      }

      // Validate email
      const emailInput = document.getElementById('contact-email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput && !emailRegex.test(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
      }

      // Validate subject
      const subjectInput = document.getElementById('contact-subject');
      if (subjectInput && subjectInput.value.trim().length < 3) {
        showError(subjectInput, 'Please enter a subject');
        isValid = false;
      }

      // Validate message
      const messageInput = document.getElementById('contact-message');
      if (messageInput && messageInput.value.trim().length < 10) {
        showError(messageInput, 'Message must be at least 10 characters');
        isValid = false;
      }

      if (isValid) {
        // Show success message
        const successMsg = document.querySelector('.form-success');
        if (successMsg) {
          successMsg.classList.add('visible');
          contactForm.reset();

          // Hide success after 5 seconds
          setTimeout(() => {
            successMsg.classList.remove('visible');
          }, 5000);
        }
      }
    });
  }

  function showError(input, message) {
    input.classList.add('error');
    const errorEl = input.parentElement.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add('visible');
    }
  }

  // ===========================
  // SMOOTH SCROLL FOR ALL ANCHOR LINKS
  // ===========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ===========================
  // COUNTER ANIMATION FOR STATS
  // ===========================
  const statNumbers = document.querySelectorAll('.hero-stat .number');

  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    function update() {
      current += step;
      if (current >= target) {
        element.textContent = target + suffix;
        return;
      }
      element.textContent = Math.floor(current) + suffix;
      requestAnimationFrame(update);
    }

    update();
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => statsObserver.observe(stat));

  // ===========================
  // VIDEO CARD CLICK HANDLER
  // ===========================
  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
      const url = card.getAttribute('data-video-url');
      if (url) {
        window.open(url, '_blank');
      }
    });
    card.style.cursor = 'pointer';
  });

  // ===========================
  // PARALLAX EFFECT ON HERO
  // ===========================
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const heroGrid = heroSection.querySelector('.hero-grid-pattern');
      if (heroGrid && scrolled < window.innerHeight) {
        heroGrid.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    });
  }

});
