/* js/components.js */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Calculate relative path depth dynamically from body attribute
    const depthAttr = document.body.getAttribute('data-page-depth');
    const depth = parseInt(depthAttr || '0', 10);
    const rel = '../'.repeat(depth);

    // 1.5 Inject Favicon dynamically
    let faviconLink = document.querySelector("link[rel~='icon']");
    if (!faviconLink) {
        faviconLink = document.createElement('link');
        faviconLink.rel = 'icon';
        faviconLink.type = 'image/svg+xml';
        faviconLink.href = `${rel}assets/brand/logo.svg`;
        document.head.appendChild(faviconLink);
    }

    // 2. Render Header Component
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.outerHTML = `
        <header class="site-header" id="site-header">
            <!-- Top Quick Info Bar -->
            <div class="top-bar">
                <div class="container top-bar-content">
                    <div class="top-bar-contact">
                        <a href="tel:+919876543210"><i class="fa-solid fa-phone"></i> +91 98765 43210</a>
                        <a href="mailto:info@aadharshilaschool.edu.in"><i class="fa-solid fa-envelope"></i> info@aadharshilaschool.edu.in</a>
                    </div>
                    <div class="top-bar-links">
                        <a href="${rel}about/cbse-disclosure.html"><i class="fa-solid fa-file-shield"></i> CBSE Mandated Disclosure</a>
                        <span>|</span>
                        <a href="${rel}resources/parent-circulars.html">Parent Circulars</a>
                        <span>|</span>
                        <a href="${rel}contact/index.html#careers">Careers</a>
                    </div>
                </div>
            </div>

            <!-- Primary Navigation Bar -->
            <div class="container">
                <nav class="navbar" aria-label="Main Navigation">
                    <!-- Logo Block (Rendering SVG Logo) -->
                    <a href="${rel}index.html" class="logo-container">
                        <img src="${rel}assets/brand/logo.svg" alt="Aadharshila The School Logo" style="height: auto; max-height: 72px; max-width: 320px; display: block;">
                    </a>

                    <!-- Desktop Navigation Menu -->
                    <ul class="nav-menu">
                        <li class="nav-item">
                            <a href="${rel}index.html" class="nav-link">Home</a>
                        </li>
                        
                        <li class="nav-item">
                            <a href="${rel}about/index.html" class="nav-link">About Us <i class="fa-solid fa-chevron-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item"><a href="${rel}about/index.html">Our Story & Heritage</a></li>
                                <li class="dropdown-item"><a href="${rel}about/message-director.html">Director's Message</a></li>
                                <li class="dropdown-item"><a href="${rel}about/message-principal.html">Principal's Message</a></li>
                                <li class="dropdown-item"><a href="${rel}about/vision-mission.html">Vision, Mission & Values</a></li>
                                <li class="dropdown-item"><a href="${rel}about/leadership.html">Leadership & Governance</a></li>
                                <li class="dropdown-item"><a href="${rel}about/cbse-disclosure.html">CBSE Disclosures</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a href="${rel}academics/index.html" class="nav-link">Academics <i class="fa-solid fa-chevron-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item"><a href="${rel}academics/index.html">Curriculum Framework</a></li>
                                <li class="dropdown-item"><a href="${rel}academics/foundational.html">Foundational Stage (Nursery-KG)</a></li>
                                <li class="dropdown-item"><a href="${rel}academics/primary.html">Primary Wing (Grades 1-5)</a></li>
                                <li class="dropdown-item"><a href="${rel}academics/middle.html">Middle Wing (Grades 6-8)</a></li>
                                <li class="dropdown-item"><a href="${rel}academics/senior.html">Senior Secondary (Grades 9-12)</a></li>
                                <li class="dropdown-item"><a href="${rel}academics/assessment.html">Assessment Policy</a></li>
                                <li class="dropdown-item"><a href="${rel}academics/career-guidance.html">Placements & Counseling</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a href="${rel}admissions/index.html" class="nav-link">Admissions <i class="fa-solid fa-chevron-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item"><a href="${rel}admissions/index.html">Process & Guidelines</a></li>
                                <li class="dropdown-item"><a href="${rel}admissions/fees.html">Fee Structure & Policies</a></li>
                                <li class="dropdown-item"><a href="${rel}admissions/enquiry.html">Online Enquiry Form</a></li>
                                <li class="dropdown-item"><a href="${rel}admissions/faq.html">Admissions FAQ</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a href="${rel}campus-life/index.html" class="nav-link">Campus Life <i class="fa-solid fa-chevron-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item"><a href="${rel}campus-life/index.html">Overview</a></li>
                                <li class="dropdown-item"><a href="${rel}campus-life/sports.html">Sports & Athletics</a></li>
                                <li class="dropdown-item"><a href="${rel}campus-life/arts.html">Visual & Performing Arts</a></li>
                                <li class="dropdown-item"><a href="${rel}campus-life/clubs.html">Clubs & Societies</a></li>
                                <li class="dropdown-item"><a href="${rel}campus-life/leadership.html">Student Leadership</a></li>
                                <li class="dropdown-item"><a href="${rel}campus-life/wellness.html">Student Wellness</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a href="${rel}infrastructure/index.html" class="nav-link">Infrastructure <i class="fa-solid fa-chevron-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item"><a href="${rel}infrastructure/index.html">Overview</a></li>
                                <li class="dropdown-item"><a href="${rel}infrastructure/labs.html">Robotics & STEM Labs</a></li>
                                <li class="dropdown-item"><a href="${rel}infrastructure/library.html">Resource Centre (Library)</a></li>
                                <li class="dropdown-item"><a href="${rel}infrastructure/sports-facilities.html">Sports Complexes</a></li>
                                <li class="dropdown-item"><a href="${rel}infrastructure/safety-transport.html">Transport & Safety</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a href="${rel}gallery/index.html" class="nav-link">Gallery</a>
                        </li>

                        <li class="nav-item">
                            <a href="${rel}news/index.html" class="nav-link">News & Events</a>
                        </li>

                        <li class="nav-item">
                            <a href="${rel}contact/index.html" class="nav-link">Contact</a>
                        </li>
                    </ul>

                    <!-- Admissions CTA -->
                    <div class="nav-cta">
                        <a href="${rel}admissions/enquiry.html" class="btn btn-primary btn-sm">
                            Admissions Open 2026-27 <i class="fa-solid fa-paper-plane"></i>
                        </a>
                    </div>

                    <!-- Mobile Toggle -->
                    <button class="menu-toggle" id="menu-toggle" aria-label="Toggle Mobile Menu">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </nav>
            </div>
        </header>

        <!-- Slide-out Mobile Drawer -->
        <div class="drawer-overlay" id="drawer-overlay"></div>
        <div class="mobile-drawer" id="mobile-drawer">
            <div class="drawer-header">
                <a href="${rel}index.html" class="logo-container">
                    <img src="${rel}assets/brand/logo.svg" alt="Aadharshila The School Logo" style="height: auto; max-height: 45px; max-width: 180px;">
                </a>
                <button class="drawer-close" id="drawer-close"><i class="fa-solid fa-xmark"></i></button>
            </div>
            
            <ul class="drawer-menu">
                <li class="drawer-item">
                    <a href="${rel}index.html" class="drawer-link">Home</a>
                </li>
                
                <li class="drawer-item">
                    <a href="#" class="drawer-link has-submenu">About Us <i class="fa-solid fa-chevron-down"></i></a>
                    <ul class="drawer-dropdown">
                        <li><a href="${rel}about/index.html">Our Story & Heritage</a></li>
                        <li><a href="${rel}about/message-director.html">Director's Message</a></li>
                        <li><a href="${rel}about/message-principal.html">Principal's Message</a></li>
                        <li><a href="${rel}about/vision-mission.html">Vision, Mission & Values</a></li>
                        <li><a href="${rel}about/leadership.html">Leadership & Governance</a></li>
                        <li><a href="${rel}about/cbse-disclosure.html">CBSE Disclosures</a></li>
                    </ul>
                </li>

                <li class="drawer-item">
                    <a href="#" class="drawer-link has-submenu">Academics <i class="fa-solid fa-chevron-down"></i></a>
                    <ul class="drawer-dropdown">
                        <li><a href="${rel}academics/index.html">Curriculum Framework</a></li>
                        <li><a href="${rel}academics/foundational.html">Foundational Stage</a></li>
                        <li><a href="${rel}academics/primary.html">Primary Wing</a></li>
                        <li><a href="${rel}academics/middle.html">Middle Wing</a></li>
                        <li><a href="${rel}academics/senior.html">Senior Secondary</a></li>
                        <li><a href="${rel}academics/assessment.html">Assessment Policy</a></li>
                        <li><a href="${rel}academics/career-guidance.html">Placements & Counseling</a></li>
                    </ul>
                </li>

                <li class="drawer-item">
                    <a href="#" class="drawer-link has-submenu">Admissions <i class="fa-solid fa-chevron-down"></i></a>
                    <ul class="drawer-dropdown">
                        <li><a href="${rel}admissions/index.html">Process & Guidelines</a></li>
                        <li><a href="${rel}admissions/fees.html">Fee Structure & Policies</a></li>
                        <li><a href="${rel}admissions/enquiry.html">Online Enquiry Form</a></li>
                        <li><a href="${rel}admissions/faq.html">Admissions FAQ</a></li>
                    </ul>
                </li>

                <li class="drawer-item">
                    <a href="#" class="drawer-link has-submenu">Campus Life <i class="fa-solid fa-chevron-down"></i></a>
                    <ul class="drawer-dropdown">
                        <li><a href="${rel}campus-life/index.html">Overview</a></li>
                        <li><a href="${rel}campus-life/sports.html">Sports & Athletics</a></li>
                        <li><a href="${rel}campus-life/arts.html">Visual & Performing Arts</a></li>
                        <li><a href="${rel}campus-life/clubs.html">Clubs & Societies</a></li>
                        <li><a href="${rel}campus-life/leadership.html">Student Leadership</a></li>
                        <li><a href="${rel}campus-life/wellness.html">Student Wellness</a></li>
                    </ul>
                </li>

                <li class="drawer-item">
                    <a href="#" class="drawer-link has-submenu">Infrastructure <i class="fa-solid fa-chevron-down"></i></a>
                    <ul class="drawer-dropdown">
                        <li><a href="${rel}infrastructure/index.html">Overview</a></li>
                        <li><a href="${rel}infrastructure/labs.html">Robotics & STEM Labs</a></li>
                        <li><a href="${rel}infrastructure/library.html">Resource Centre (Library)</a></li>
                        <li><a href="${rel}infrastructure/sports-facilities.html">Sports Complexes</a></li>
                        <li><a href="${rel}infrastructure/safety-transport.html">Transport & Safety</a></li>
                    </ul>
                </li>

                <li class="drawer-item">
                    <a href="${rel}gallery/index.html" class="drawer-link">Gallery</a>
                </li>

                <li class="drawer-item">
                    <a href="${rel}news/index.html" class="drawer-link">News & Events</a>
                </li>

                <li class="drawer-item">
                    <a href="${rel}contact/index.html" class="drawer-link">Contact</a>
                </li>
            </ul>

            <div style="margin-top: var(--space-8);">
                <a href="${rel}admissions/enquiry.html" class="btn btn-primary" style="width: 100%;">Apply Online</a>
            </div>
        </div>
        `;
    }

    // 3. Render Footer Component
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="footer-top">
                    <!-- Brand Info -->
                    <div class="footer-brand">
                        <div class="footer-logo-box">
                            <img src="${rel}assets/brand/logo.svg" alt="Aadharshila The School Logo" style="height: auto; max-height: 65px; max-width: 280px; filter: brightness(0) invert(1);">
                        </div>
                        <p>Affiliated with CBSE. Nurturing innovative thinking, structural design concepts, and character building in a nature-aligned global school environment.</p>
                        <p style="font-size: 11px; font-style: italic; color: var(--color-secondary); margin-top: 10px;">"Hand in hand, we learn..."</p>
                        <ul class="social-links">
                            <li><a href="#" class="social-icon" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#" class="social-icon" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#" class="social-icon" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a></li>
                            <li><a href="#" class="social-icon" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>

                    <!-- Academic Links -->
                    <div class="footer-column">
                        <h4>Academics</h4>
                        <ul class="footer-links">
                            <li><a href="${rel}academics/index.html">Curriculum Framework</a></li>
                            <li><a href="${rel}academics/foundational.html">Foundational Stage</a></li>
                            <li><a href="${rel}academics/primary.html">Primary School</a></li>
                            <li><a href="${rel}academics/middle.html">Middle School</a></li>
                            <li><a href="${rel}academics/senior.html">Senior Secondary</a></li>
                            <li><a href="${rel}alumni/index.html">Alumni Placements</a></li>
                        </ul>
                    </div>

                    <!-- Quick Navigation Links -->
                    <div class="footer-column">
                        <h4>Quick Links</h4>
                        <ul class="footer-links">
                            <li><a href="${rel}about/index.html">About Our School</a></li>
                            <li><a href="${rel}admissions/index.html">Admission Details</a></li>
                            <li><a href="${rel}infrastructure/index.html">Campus Amenities</a></li>
                            <li><a href="${rel}gallery/index.html">School Gallery</a></li>
                            <li><a href="${rel}resources/parent-circulars.html">Parent Resources</a></li>
                            <li><a href="${rel}about/cbse-disclosure.html">CBSE Public Disclosure</a></li>
                        </ul>
                    </div>

                    <!-- Contact Details -->
                    <div class="footer-column">
                        <h4>Contact Us</h4>
                        <ul class="footer-contact-info">
                            <li>
                                <i class="fa-solid fa-location-dot"></i>
                                <span>Aadharshila Campus, Education Valley, Sector 12, New Delhi, Pin - 110075</span>
                            </li>
                            <li>
                                <i class="fa-solid fa-phone"></i>
                                <span>+91 98765 43210<br>011-2345678</span>
                            </li>
                            <li>
                                <i class="fa-solid fa-envelope"></i>
                                <span>info@aadharshilaschool.edu.in<br>admissions@aadharshilaschool.edu.in</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Footer Bottom Copy Bar -->
            <div class="footer-bottom">
                <div class="container footer-bottom-content">
                    <span>&copy; 2026 Aadharshila The School. All Rights Reserved. (Demo Version)</span>
                    <div class="footer-bottom-links">
                        <a href="#" style="color: rgba(255,255,255,0.4); margin-right: 15px;">Privacy Policy</a>
                        <a href="#" style="color: rgba(255,255,255,0.4);">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }

    // 4. Inject Floating CTA Panel dynamically
    const floatingCtaHtml = `
    <a href="${rel}admissions/enquiry.html" class="floating-enquiry-btn reveal-on-scroll animate-fade-up" aria-label="Enquire Now">
        <i class="fa-solid fa-paper-plane"></i>
        <span>Enquire Now</span>
    </a>
    `;
    document.body.insertAdjacentHTML('beforeend', floatingCtaHtml);
});
