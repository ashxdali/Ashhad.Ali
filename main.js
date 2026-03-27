// AESTHETIC VANILLA JS ENGINE 
// No libraries. Just beautiful native code.

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Frosted Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Intersection Observer for Smooth Scroll-Reveal Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% visible
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Contact Form Holographic Processing Simulation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'Transmitting...';
            btn.style.opacity = '0.7';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = 'Signal Received <i class="fa-solid fa-check"></i>';
                btn.style.background = 'var(--accent-emerald)';
                btn.style.color = 'var(--bg-deep)';
                btn.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.4)';
                btn.style.opacity = '1';
                contactForm.reset();

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.style.color = '';
                    btn.style.boxShadow = '';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});
