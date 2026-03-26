import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

// Configuration for Master Layout
const CONFIG = {
    scrollDuration: 1.5,
    revealDuration: 1.0,
    typingSpeed: 100,
    typingDelay: 2000,
}

// Data for Dynamic Typing Effect in Hero
const TITLES = [
    "Cloud Engineer",
    "Full-Stack Developer",
    "AWS Specialist",
    "Creative Technologist"
];

const initializeEngine = () => {
    console.log("%c Cosmic Obsidian Master Portfolio Initializing...", "color: #06b6d4; font-weight: bold; font-size: 1.2rem;");

    try {
        gsap.registerPlugin(ScrollTrigger);
        document.documentElement.classList.add('js-loaded');

        // 1. Core: Smooth Scrolling Engine (Lenis)
        const lenis = new Lenis({
            duration: CONFIG.scrollDuration,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 2,
        });

        // Sync Lenis with GSAP ScrollTrigger precisely
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        // 2. Custom Cursor Subsystem
        const cursor = document.getElementById('cursor');
        const follower = document.getElementById('cursor-follower');
        
        // Detect if device is hover-capable (desktop)
        if (cursor && follower && window.matchMedia("(hover: hover)").matches) {
            
            let mouseX = 0, mouseY = 0;
            let followerX = 0, followerY = 0;
            
            const renderCursor = () => {
                // Smooth follow physics
                followerX += (mouseX - followerX) * 0.15;
                followerY += (mouseY - followerY) * 0.15;
                
                cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
                follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
                
                requestAnimationFrame(renderCursor);
            };
            requestAnimationFrame(renderCursor);

            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            // Interactive state handlers
            const interactables = document.querySelectorAll('.interactable, a, button, .tag');
            interactables.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    follower.style.width = '60px';
                    follower.style.height = '60px';
                    follower.style.backgroundColor = 'rgba(6, 182, 212, 0.15)'; // Cyan tint
                    follower.style.borderColor = 'rgba(6, 182, 212, 0.6)';
                });
                el.addEventListener('mouseleave', () => {
                    follower.style.width = '36px';
                    follower.style.height = '36px';
                    follower.style.backgroundColor = 'transparent';
                    follower.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                });
            });
        }

        // 3. UI: Scroll Progress Bar
        lenis.on('scroll', ({ progress }) => {
            const bar = document.getElementById('scroll-progress');
            if (bar) bar.style.width = `${progress * 100}%`;
        });
        
        // 4. UI: Navigation Active State Sync
        const sections = document.querySelectorAll('.section, .hero');
        const navLinks = document.querySelectorAll('.nav a');
        
        const updateNav = () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', updateNav);
        
        // Handle Anchor Links with Lenis 
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId && targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        lenis.scrollTo(targetElement, {
                             duration: 1.5,
                             easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                        }); 
                    }
                }
            });
        });

        // 5. Parallax Background Orbs
        if (window.matchMedia("(min-width: 768px)").matches) {
            window.addEventListener('mousemove', (e) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 30;
                const y = (e.clientY / window.innerHeight - 0.5) * 30;

                gsap.to(".orb-primary", { x: x, y: y, duration: 2, ease: "power2.out" });
                gsap.to(".orb-secondary", { x: -x, y: -y, duration: 2.5, ease: "power2.out" });
                gsap.to(".orb-tertiary", { x: x * 0.5, y: -y * 0.5, duration: 3, ease: "power2.out" });
            });
        }

        // 6. Dynamic Typing Effect (Hero)
        const titleElement = document.querySelector('.dynamic-title');
        if (titleElement) {
            let titleIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            const type = () => {
                const currentTitle = TITLES[titleIndex];
                
                if (isDeleting) {
                    titleElement.textContent = currentTitle.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    titleElement.textContent = currentTitle.substring(0, charIndex + 1);
                    charIndex++;
                }

                let typeSpeed = CONFIG.typingSpeed;
                if (isDeleting) typeSpeed /= 2;

                if (!isDeleting && charIndex === currentTitle.length) {
                    typeSpeed = CONFIG.typingDelay;
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    titleIndex = (titleIndex + 1) % TITLES.length;
                    typeSpeed = 500;
                }

                setTimeout(type, typeSpeed);
            };
            
            // Start typing after initial load animations
            setTimeout(type, 1500); 
        }

        // 7. Reveal Animations (Initial Load)
        const heroTl = gsap.timeline({ delay: 0.2 });
        heroTl.to(".fade-up", {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 1,
            ease: "power3.out"
        });

        // 8. GSAP ScrollTrigger Reveals (For all 15 sections)
        const revealCards = gsap.utils.toArray('.reveal-card');
        revealCards.forEach((card) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                y: 0,
                scale: 1,
                opacity: 1,
                duration: CONFIG.revealDuration,
                ease: "power3.out"
            });
        });

        const revealTexts = gsap.utils.toArray('.reveal-text');
        revealTexts.forEach((text) => {
            gsap.to(text, {
                scrollTrigger: {
                    trigger: text,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            });
        });
        
        // 9. Lightbox Subsystem (For Gallery)
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const closeBtn = document.querySelector('.lightbox-close');
        const galleryItems = document.querySelectorAll('.masonry-item');
        
        if (lightbox && galleryItems.length > 0) {
            galleryItems.forEach(item => {
                item.addEventListener('click', () => {
                    const img = item.querySelector('img');
                    const caption = item.querySelector('.item-overlay span').textContent;
                    const type = item.getAttribute('data-type');
                    
                    lightboxImg.src = img.src;
                    lightboxCaption.innerHTML = `<strong>${type}:</strong> ${caption}`;
                    lightbox.classList.add('active');
                    
                    // Pause scrolling when lightbox is open
                    lenis.stop(); 
                });
            });
            
            const closeLightbox = () => {
                lightbox.classList.remove('active');
                setTimeout(() => { lightboxImg.src = ''; }, 300); // clear after fade out
                lenis.start(); // Resume scrolling
            };
            
            closeBtn.addEventListener('click', closeLightbox);
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) closeLightbox();
            });
        }

        console.log("%c All Systems Operational. Ready for recruiters.", "color: #10b981; font-weight: bold;");

    } catch (err) {
        console.error("%c Critical Subsystem Failure. Booting SAFE MODE.", "color: #ef4444; font-weight: bold;", err);
    }
};

// Application Lifecycle Event Hook
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEngine);
} else {
    initializeEngine();
}

// Contact Form Handler Simulation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const rawText = btn.innerHTML; // using innerHTML incase of icons
        
        btn.textContent = 'Transmitting Data...';
        btn.style.opacity = '0.7';
        btn.disabled = true;
        btn.style.cursor = 'wait';

        // Simulate network request
        setTimeout(() => {
            btn.innerHTML = 'Signal Received. <i class="fa-solid fa-check"></i>';
            btn.style.background = 'var(--accent-emerald)';
            btn.style.color = '#fff';
            btn.style.opacity = '1';
            btn.style.cursor = 'none';
            contactForm.reset();
            
            setTimeout(() => {
                btn.innerHTML = rawText;
                btn.style.background = '';
                btn.style.color = '';
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
}
