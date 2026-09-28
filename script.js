// =========================================
// جمعية شباب ادوطالب وادبيگفاين للتنمية
// Professional Interactive JavaScript
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initParticles();
    initCounters();
    initDomainFilter();
    initLightbox();
    initFAQ();
    initCopyToast();
    initContactForm();
    initSmoothScroll();
    initScrollAnimations();
    initBackToTop();
});

// =========================================
// NAVBAR & MOBILE MENU
// =========================================

function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const links = navLinks.querySelectorAll('a');

    // Sticky / Scrolled Navbar
    const updateNavbar = () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', updateNavbar);
    updateNavbar();

    // Mobile menu toggle
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    const toggleMenu = (open) => {
        const isOpen = open !== undefined ? open : !navToggle.classList.contains('active');
        navToggle.classList.toggle('active', isOpen);
        navLinks.classList.toggle('active', isOpen);
        overlay.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    navToggle.addEventListener('click', () => toggleMenu());
    overlay.addEventListener('click', () => toggleMenu(false));

    links.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 180;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                links.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// =========================================
// PARTICLES IN HERO
// =========================================

function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 35;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.setProperty('--duration', `${3 + Math.random() * 5}s`);
        particle.style.setProperty('--delay', `${Math.random() * 4}s`);

        const size = 2 + Math.random() * 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        container.appendChild(particle);
    }
}

// =========================================
// COUNTER ANIMATIONS
// =========================================

function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    let hasRun = false;

    const runCounters = () => {
        if (hasRun) return;
        hasRun = true;

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 1800;
            const stepTime = 20;
            const totalSteps = duration / stepTime;
            const stepIncrement = target / totalSteps;
            let current = 0;

            const timer = setInterval(() => {
                current += stepIncrement;
                if (current >= target) {
                    counter.textContent = target === 30 ? '30+' : target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, stepTime);
        });
    };

    const heroStats = document.querySelector('.hero-stats');
    if (!heroStats) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(heroStats);
}

// =========================================
// DOMAIN CATEGORY FILTER
// =========================================

function initDomainFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const domainCards = document.querySelectorAll('.domain-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            domainCards.forEach(card => {
                const cardDomain = card.getAttribute('data-domain');
                if (filterValue === 'all' || filterValue === cardDomain) {
                    card.classList.remove('hidden');
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(15px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// =========================================
// GALLERY LIGHTBOX MODAL
// =========================================

function initLightbox() {
    const modal = document.getElementById('lightboxModal');
    const backdrop = document.getElementById('lightboxBackdrop');
    const closeBtn = document.getElementById('lightboxClose');
    const imgEl = document.getElementById('lightboxImg');
    const titleEl = document.getElementById('lightboxTitle');
    const descEl = document.getElementById('lightboxDesc');
    const galleryCards = document.querySelectorAll('.gallery-card');

    if (!modal) return;

    const openModal = (imgSrc, title, desc) => {
        imgEl.src = imgSrc;
        titleEl.textContent = title;
        descEl.textContent = desc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    galleryCards.forEach(card => {
        card.addEventListener('click', () => {
            const src = card.getAttribute('data-img');
            const title = card.getAttribute('data-title');
            const desc = card.getAttribute('data-desc');
            openModal(src, title, desc);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// =========================================
// FAQ ACCORDION
// =========================================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close other items
            faqItems.forEach(i => i.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// =========================================
// TOAST NOTIFICATIONS & COPY CLICKS
// =========================================

function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const msg = document.getElementById('toastMessage');
    if (!toast || !msg) return;

    msg.textContent = message;
    toast.classList.add('active');

    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

function initCopyToast() {
    const phoneCard = document.getElementById('phoneCopyCard');
    const emailCard = document.getElementById('emailCopyCard');

    if (phoneCard) {
        phoneCard.addEventListener('click', () => {
            navigator.clipboard.writeText('+212600000000').then(() => {
                showToast('تم نسخ رقم الهاتف والواتساب بنجاح!');
            }).catch(() => {
                showToast('رقم الهاتف: +212 6XX-XXXXXX');
            });
        });
    }

    if (emailCard) {
        emailCard.addEventListener('click', () => {
            navigator.clipboard.writeText('contact@jam3ia-adoutaleb.ma').then(() => {
                showToast('تم نسخ البريد الإلكتروني بنجاح!');
            }).catch(() => {
                showToast('البريد: contact@jam3ia-adoutaleb.ma');
            });
        });
    }
}

// =========================================
// CONTACT FORM SUBMISSION
// =========================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = form.querySelector('.btn-submit');
        const originalContent = btn.innerHTML;

        btn.innerHTML = `
            <span>جاري المعالجة والإرسال...</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;animation:spin 1s linear infinite">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
        `;
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = `
                <span>تم إرسال رسالتك بنجاح ✓</span>
            `;
            btn.style.background = 'linear-gradient(135deg, #2E7D32, #43A047)';

            showToast('شكراً لتواصلكم! تم استلام رسالتكم بنجاح.');

            setTimeout(() => {
                btn.innerHTML = originalContent;
                btn.disabled = false;
                btn.style.background = '';
                form.reset();
            }, 3000);
        }, 1200);
    });
}

// =========================================
// SMOOTH SCROLLING
// =========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// =========================================
// SCROLL ANIMATIONS (INTERSECTION OBSERVER)
// =========================================

function initScrollAnimations() {
    const animateSelectors = [
        '.about-card',
        '.domain-card',
        '.roadmap-step',
        '.vision-card',
        '.value-item',
        '.gallery-card',
        '.faq-item',
        '.contact-info-card',
        '.contact-form',
        '.section-header'
    ];

    animateSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, index) => {
            el.classList.add('animate-on-scroll');
            const delay = Math.min((index % 6) + 1, 6);
            el.classList.add(`delay-${delay}`);
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// =========================================
// BACK TO TOP
// =========================================

function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Spin keyframe style
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
