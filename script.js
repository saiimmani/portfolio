document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const submitButton = form.querySelector('button[type="submit"]');
  const nav = document.querySelector('nav');

  // Enhanced auto-hide navigation functionality with mobile optimization
  let lastScrollY = window.scrollY;
  let isScrolling = false;
  let hideTimeout;
  let isNavVisible = false;
  let isMobile = window.innerWidth <= 768;
  let touchStartY = 0;
  let isNavHovered = false;

  // Initially hide navigation
  nav.classList.add('nav-hidden');

  // Check if device is mobile/touch enabled
  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  const showNavigation = () => {
    if (!isNavVisible) {
      nav.classList.remove('nav-hidden');
      nav.classList.add('nav-visible');
      isNavVisible = true;
    }
    
    // Clear existing timeout
    clearTimeout(hideTimeout);
    
    // Auto-hide after different intervals based on device type
    const hideDelay = isTouchDevice() ? 4000 : 3000; // Longer on touch devices
    hideTimeout = setTimeout(() => {
      if (isNavVisible && !isNavHovered) {
        hideNavigation();
      }
    }, hideDelay);
  };

  const hideNavigation = () => {
    nav.classList.add('nav-hidden');
    nav.classList.remove('nav-visible');
    isNavVisible = false;
  };

  const handleNavVisibility = () => {
    const currentScrollY = window.scrollY;
    const scrollDifference = Math.abs(currentScrollY - lastScrollY);
    
    // Enhanced logic for mobile devices
    if (isMobile) {
      // Show nav when actively scrolling and past header (more sensitive on mobile)
      if (currentScrollY > 100 && scrollDifference > 3) {
        showNavigation();
      } else if (currentScrollY <= 80) {
        hideNavigation();
      }
    } else {
      // Desktop behavior
      if (currentScrollY > 150 && scrollDifference > 5) {
        showNavigation();
      } else if (currentScrollY <= 100) {
        hideNavigation();
      }
    }
    
    lastScrollY = currentScrollY;
    isScrolling = false;
  };

  const onScroll = () => {
    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(handleNavVisibility);
    }
  };

  // Enhanced mouse movement detection with mobile considerations
  const onMouseMove = (e) => {
    if (!isTouchDevice()) { // Only on non-touch devices
      const triggerZone = isMobile ? 100 : 80;
      if (e.clientY < triggerZone && window.scrollY > 100) {
        showNavigation();
      }
    }
  };

  // Touch-specific navigation triggers
  const onTouchStart = (e) => {
    touchStartY = e.touches[0].clientY;
  };

  const onTouchMove = (e) => {
    const touchY = e.touches[0].clientY;
    const touchDiff = touchStartY - touchY;
    
    // Show nav on upward swipe near top of screen
    if (touchY < 100 && touchDiff > 20 && window.scrollY > 100) {
      showNavigation();
    }
  };

  // Prevent auto-hide when hovering/touching navigation
  nav.addEventListener('mouseenter', () => {
    isNavHovered = true;
    clearTimeout(hideTimeout);
  });

  nav.addEventListener('mouseleave', () => {
    isNavHovered = false;
    if (isNavVisible) {
      const delay = isTouchDevice() ? 2000 : 1500;
      hideTimeout = setTimeout(() => {
        if (!isNavHovered) {
          hideNavigation();
        }
      }, delay);
    }
  });

  // Touch events for mobile
  nav.addEventListener('touchstart', () => {
    isNavHovered = true;
    clearTimeout(hideTimeout);
  });

  nav.addEventListener('touchend', () => {
    isNavHovered = false;
    if (isNavVisible) {
      hideTimeout = setTimeout(() => {
        if (!isNavHovered) {
          hideNavigation();
        }
      }, 3000);
    }
  });

  // Window resize handler
  const onResize = () => {
    isMobile = window.innerWidth <= 768;
  };

  // Add event listeners
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  
  if (!isTouchDevice()) {
    document.addEventListener('mousemove', onMouseMove, { passive: true });
  } else {
    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchmove', onTouchMove, { passive: true });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without triggering scroll
        history.pushState(null, null, targetId);
        
        // Hide navigation after clicking a link
        setTimeout(() => {
          nav.classList.add('nav-hidden');
          nav.classList.remove('nav-visible');
          isNavVisible = false;
        }, 500);
      }
    });
  });

  // Enhanced form handling
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    status.textContent = "📤 Sending your message...";
    status.classList.add("show");

    const formData = new FormData(form);
    const urlEncoded = new URLSearchParams(formData).toString();

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyjbvo7L0vonVx1DA14yFYVzJVl6TRnCAvks1r8Z9BaNi7fAm9jl3lqkGuR4iI7n8fD/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: urlEncoded,
      });

      const data = await response.json();
      
      if (data.result === "success") {
        status.textContent = "✅ Message sent successfully! I'll get back to you soon.";
        form.reset();
        
        // Hide status after 5 seconds
        setTimeout(() => {
          status.classList.remove("show");
          status.textContent = "Ready to send your message";
        }, 5000);
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      console.error("Fetch failed:", error);
      status.textContent = "❌ Failed to send message. Please try again or email me directly.";
      
      // Hide error after 7 seconds
      setTimeout(() => {
        status.classList.remove("show");
        status.textContent = "Ready to send your message";
      }, 7000);
    } finally {
      // Reset button state
      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    }
  });

  // Form validation feedback
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', validateField);
    input.addEventListener('input', clearErrors);
  });

  function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remove existing error styling
    field.classList.remove('error');
    
    // Validate based on field type
    if (field.hasAttribute('required') && !value) {
      showFieldError(field, 'This field is required');
    } else if (field.type === 'email' && value && !isValidEmail(value)) {
      showFieldError(field, 'Please enter a valid email address');
    }
  }

  function clearErrors(e) {
    const field = e.target;
    field.classList.remove('error');
    const errorMsg = field.parentNode.querySelector('.error-message');
    if (errorMsg) {
      errorMsg.remove();
    }
  }

  function showFieldError(field, message) {
    field.classList.add('error');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
      }
    });
  }, observerOptions);

  // Observe all sections for scroll animations
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  // Add loading animation to images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
  });

  // Keyboard navigation enhancement
  document.addEventListener('keydown', function(e) {
    // Close modals/dropdowns with Escape key
    if (e.key === 'Escape') {
      // Add any modal closing logic here if needed in the future
    }
  });

  // Focus management for accessibility
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  
  function trapFocus(element) {
    const focusableContent = element.querySelectorAll(focusableElements);
    const firstFocusableElement = focusableContent[0];
    const lastFocusableElement = focusableContent[focusableContent.length - 1];

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      }
    });
  }
});
