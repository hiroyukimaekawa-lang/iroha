document.addEventListener('DOMContentLoaded', () => {
    
    /* -----------------------------------------------
       Intersection Observer for Fade-in Animations
    ----------------------------------------------- */
    const textFadeIns = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    textFadeIns.forEach(fader => {
        appearOnScroll.observe(fader);
    });


    /* -----------------------------------------------
       Navigation Active State (Scroll Spy)
    ----------------------------------------------- */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.vertical-nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Offset for visual comfort
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    /* -----------------------------------------------
       Mobile Navigation Toggle
    ----------------------------------------------- */
    const toggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');


    toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        // Simple animation for hamburger icon could be added here
    });

    // Close menu when link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
        });
    });

    /* -----------------------------------------------
       Smooth Scroll for Anchor Links (Safari/Legacy Support)
    ----------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    /* -----------------------------------------------
       Loading (Simple remove)
    ----------------------------------------------- */
    // Simulating load time for effect, then removing
    setTimeout(() => {
        const loader = document.getElementById('loading');
        if(loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }, 1000); // 1 second initial load "wait" for emphasis
});
