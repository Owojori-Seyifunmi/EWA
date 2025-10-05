document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.links');
    const link = document.querySelectorAll('.link');

    navToggle.addEventListener('click', function() {
        links.classList.toggle('show-links');

    });

    link.forEach(item => {
        item.addEventListener('click', function() {
            links.classList.remove('show-links');
        });
    });
});


// PROMISE SECTION

        document.addEventListener('DOMContentLoaded', function() {
        // Floating shapes generation
        const shapesContainer = document.querySelector('.floating-shapes');
        const shapeTypes = ['circle', 'rect', 'triangle'];
        const colors = ['rgba(170, 139, 72, 0.3)', 'rgba(170, 139, 72, 0.3)', 'rgba(170, 139, 72, 0.3)'];

        for (let i = 0; i < 8; i++) {
            const shape = document.createElement('div');
            shape.className = `floating-shape ${shapeTypes[Math.floor(Math.random() * shapeTypes.length)]}`;
            shape.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            shape.style.width = `${Math.random() * 100 + 50}px`;
            shape.style.height = shape.style.width;
            shape.style.left = `${Math.random() * 100}%`;
            shape.style.top = `${Math.random() * 100}%`;
            shape.style.animationDuration = `${Math.random() * 30 + 20}s`;
            shape.style.animationDelay = `${Math.random() * 5}s`;
            shapesContainer.appendChild(shape);
        }

        // Scroll-triggered animations
        const animateOnScroll = (elements, className) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(className);
                    }
                });
            }, { threshold: 0.1 });

            elements.forEach(el => observer.observe(el));
        };

        // Animate title parts
        animateOnScroll(document.querySelectorAll('.title-part'), 'animate');
        animateOnScroll(document.querySelectorAll('.title-arrow'), 'animate');

        // Animate cards with staggered delay
        const cards = document.querySelectorAll('.problem-card, .promise-card');
        cards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.2}s`;
        });
        animateOnScroll(cards, 'animate');

        // Animate the moving dot
        const dot = document.querySelector('.moving-dot');
        const path = document.querySelector('.dash-line');
        const pathLength = path.getTotalLength();
        let progress = 0;
        const speed = 0.5;

        function animateDot() {
            progress = (progress + speed) % pathLength;
            const point = path.getPointAtLength(progress);
            dot.setAttribute('cx', point.x);
            dot.setAttribute('cy', point.y);
            requestAnimationFrame(animateDot);
        }

        animateDot();
    });


    // SIX STEPS SECTION

document.addEventListener('DOMContentLoaded', function() {
    // Floating shapes generation
    const shapesContainer = document.querySelector('.six-steps .floating-shapes');
    const shapeTypes = ['circle', 'rect', 'triangle'];
    const colors = ['rgba(170, 139, 72, 0.2)', 'rgba(170, 139, 72, 0.2)', 'rgba(170, 139, 72, 0.2)'];

    for (let i = 0; i < 12; i++) {
        const shape = document.createElement('div');
        shape.className = `floating-shape ${shapeTypes[Math.floor(Math.random() * shapeTypes.length)]}`;
        shape.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        shape.style.width = `${Math.random() * 80 + 30}px`;
        shape.style.height = shape.style.width;
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;
        shape.style.animationDuration = `${Math.random() * 40 + 20}s`;
        shape.style.animationDelay = `${Math.random() * 5}s`;
        shapesContainer.appendChild(shape);
    }

    // Scroll-triggered animations
    const animateOnScroll = (elements, className) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(className);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => observer.observe(el));
    };

    // Animate step cards with staggered delay
    const stepCards = document.querySelectorAll('.step-card');
    stepCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    animateOnScroll(stepCards, 'animate');

    // Animate section header
    animateOnScroll(document.querySelectorAll('.section-title, .section-subtitle'), 'animate');

    // Card hover effects
    stepCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// PROGRAMS PATHWAYS

document.addEventListener('DOMContentLoaded', function() {
    const pathwayCards = document.querySelectorAll('.pathway-card');
    const progressFill = document.querySelector('.progress-fill');

    pathwayCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (this.classList.contains('beginner')) {
                progressFill.style.width = '33.33%';
            } else if (this.classList.contains('intermediate')) {
                progressFill.style.width = '66.66%';
            } else if (this.classList.contains('advanced')) {
                progressFill.style.width = '100%';
            }
        });

        card.addEventListener('mouseleave', function() {
            progressFill.style.width = '33.33%';
        });
    });
});


// Programme Tab Functionality
const tabButtons = document.querySelectorAll('.tab-button');
const programmeDays = document.querySelectorAll('.programme-day');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and days
        tabButtons.forEach(btn => btn.classList.remove('active'));
        programmeDays.forEach(day => day.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Show corresponding day content
        const dayId = button.getAttribute('data-day');
        document.getElementById(dayId).classList.add('active');
    });
});













// Paste this at the end of index.html (inside the page that is loaded into the iframe)

(function(){
  function getDocHeight(){
    const body = document.body;
    const html = document.documentElement;
    return Math.max(
      body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight
    );
  }

  function sendHeight(){
    const height = getDocHeight();
    // send to parent window (the GHL page)
    parent.postMessage({ type: 'setHeight', height: height }, '*');
  }

  // 1) Send on load, and again slightly later
  window.addEventListener('load', function(){
    sendHeight();
    setTimeout(sendHeight, 150);   // after assets finish
    setTimeout(sendHeight, 600);
  });

  // 2) Fire when images load (images changing size can change height)
  Array.from(document.images).forEach(img => {
    if (!img.complete) {
      img.addEventListener('load', sendHeight);
      img.addEventListener('error', sendHeight);
    }
  });

  // 3) Observe DOM changes (JS-inserted content, lazy-loading, etc.)
  const mo = new MutationObserver(() => sendHeight());
  mo.observe(document.documentElement || document.body, { childList: true, subtree: true, attributes: true, characterData: true });

  // 4) Fallback periodic check until size stabilizes
  let last = 0, sameCount = 0;
  const ping = setInterval(() => {
    const h = getDocHeight();
    parent.postMessage({ type: 'setHeight', height: h }, '*');
    if (h === last) {
      sameCount++;
      if (sameCount > 10) clearInterval(ping);
    } else {
      sameCount = 0;
      last = h;
    }
  }, 300);
})();

