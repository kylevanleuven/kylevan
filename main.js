// ============================================
// Kyle Van Leuven — Personal Website
// ============================================

(function () {
    'use strict';

    // -- Navbar scroll effect --
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 10);
    });

    // -- Mobile menu toggle --
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');

    toggle.addEventListener('click', function () {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    // Close menu on link click
    menu.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            menu.classList.remove('active');
            toggle.classList.remove('active');
        });
    });

    // -- Scroll fade-in animations --
    var targets = document.querySelectorAll(
        '.service-card, .approach-step, .result-card, .about-content, .about-sidebar, .contact-content, .contact-form-wrapper'
    );

    targets.forEach(function (el) {
        el.classList.add('fade-in');
    });

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    targets.forEach(function (el) {
        observer.observe(el);
    });

    // -- Contact form (basic handler) --
    var form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var name = form.querySelector('#name').value.trim();
        var email = form.querySelector('#email').value.trim();
        var message = form.querySelector('#message').value.trim();

        if (!name || !email || !message) return;

        // Construct mailto fallback
        var subject = encodeURIComponent('Inquiry from ' + name);
        var body = encodeURIComponent(
            'Name: ' + name + '\nEmail: ' + email + '\n\n' + message
        );
        window.location.href = 'mailto:kyle@kylevan.com?subject=' + subject + '&body=' + body;
    });

    // -- Smooth scroll for anchor links --
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})();
