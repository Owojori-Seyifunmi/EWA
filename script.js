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


// Manage program signups and calendar integration
document.addEventListener('DOMContentLoaded', function() {
    // Calendar modal functionality
    const modal = document.getElementById('calendarModal');
    const signupButtons = document.querySelectorAll('[data-signup]');
    const closeModal = document.querySelector('.close-modal');
    
    // Open modal when clicking signup buttons
    signupButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const programId = this.getAttribute('data-signup');
            modal.style.display = 'block';
            // Here you would track which program they're signing up for
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Calendar option buttons
    const calendarOptions = document.querySelectorAll('.calendar-option');
    calendarOptions.forEach(option => {
        option.addEventListener('click', function() {
            const calendarType = this.getAttribute('data-calendar');
            // Implement calendar integration based on type
            alert(`Adding to ${calendarType} calendar - this would integrate with real calendar APIs`);
            modal.style.display = 'none';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Countdown to next session (example functionality)
    function updateCountdowns() {
        document.querySelectorAll('.program-card').forEach(card => {
            const nextDate = card.querySelector('.program-dates li')?.textContent;
            if (nextDate) {
                // Implement actual countdown logic here
                const countdownElement = document.createElement('div');
                countdownElement.className = 'countdown';
                countdownElement.textContent = `Starts in 3 days 12:45:22`;
                card.querySelector('.program-cta').prepend(countdownElement);
            }
        });
    }
    
    updateCountdowns();
});