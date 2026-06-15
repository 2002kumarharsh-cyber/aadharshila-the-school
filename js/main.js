/* js/main.js */

// 1. Global Image Error Fallback Handler
// Handles missing images by adding '.has-failed' class to display the custom styled placeholder
window.handleImageError = function(imgElement) {
    const wrapper = imgElement.closest('.image-wrapper');
    if (wrapper) {
        wrapper.classList.add('has-failed');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 2. Setup Sticky Header Behavior
    const header = document.getElementById('site-header');
    const stickyThreshold = 100;
    
    handleStickyHeader();

    window.addEventListener('scroll', () => {
        handleStickyHeader();
    });

    function handleStickyHeader() {
        if (!header) return;
        
        if (window.scrollY > stickyThreshold) {
            header.classList.add('is-sticky');
            document.body.style.paddingTop = `${header.offsetHeight}px`;
        } else {
            header.classList.remove('is-sticky');
            document.body.style.paddingTop = '0px';
        }
    }

    // 3. Setup Mobile Menu Drawer Controls
    document.addEventListener('click', (e) => {
        const toggleBtn = e.target.closest('#menu-toggle');
        const closeBtn = e.target.closest('#drawer-close');
        const overlay = document.getElementById('drawer-overlay');
        const drawer = document.getElementById('mobile-drawer');

        // Open Drawer
        if (toggleBtn) {
            e.preventDefault();
            if (drawer && overlay) {
                drawer.classList.add('is-open');
                overlay.classList.add('is-active');
                document.body.style.overflow = 'hidden';
            }
        }

        // Close Drawer
        if (closeBtn || e.target === overlay) {
            e.preventDefault();
            if (drawer && overlay) {
                drawer.classList.remove('is-open');
                overlay.classList.remove('is-active');
                document.body.style.overflow = '';
            }
        }

        // Mobile Dropdown Accordion Toggle
        const submenuTrigger = e.target.closest('.drawer-link.has-submenu');
        if (submenuTrigger) {
            e.preventDefault();
            const parentLi = submenuTrigger.parentElement;
            const dropdown = parentLi.querySelector('.drawer-dropdown');
            const icon = submenuTrigger.querySelector('i');

            if (dropdown) {
                const isActive = dropdown.classList.contains('is-active');
                
                if (isActive) {
                    dropdown.classList.remove('is-active');
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    dropdown.classList.add('is-active');
                    icon.style.transform = 'rotate(180deg)';
                }
            }
        }
    });

    // 4. FAQ Accordion Controls
    document.addEventListener('click', (e) => {
        const accHeader = e.target.closest('.accordion-header');
        if (accHeader) {
            e.preventDefault();
            const item = accHeader.parentElement;
            const content = item.querySelector('.accordion-content');
            const isActive = item.classList.contains('is-active');

            // Close other items in the same accordion group
            const parentAccordion = item.closest('.accordion');
            if (parentAccordion) {
                parentAccordion.querySelectorAll('.accordion-item').forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('is-active');
                        const otherContent = otherItem.querySelector('.accordion-content');
                        if (otherContent) otherContent.style.maxHeight = '0px';
                    }
                });
            }

            if (isActive) {
                item.classList.remove('is-active');
                if (content) content.style.maxHeight = '0px';
            } else {
                item.classList.add('is-active');
                if (content) content.style.maxHeight = content.scrollHeight + 'px';
            }
        }
    });

    // 5. Gallery Filtering Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            filterButtons.forEach(otherBtn => otherBtn.classList.remove('is-active'));
            btn.classList.add('is-active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const itemCat = item.getAttribute('data-category');
                if (filterValue === 'all' || itemCat === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 6. Gallery Lightbox Modal Controls
    let activeIndex = 0;
    const visibleGalleryItems = () => Array.from(document.querySelectorAll('.gallery-item')).filter(item => item.style.display !== 'none');

    document.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (item) {
            e.preventDefault();
            
            let lightbox = document.getElementById('lightbox-modal');
            if (!lightbox) {
                createLightboxHTML();
                lightbox = document.getElementById('lightbox-modal');
            }

            const items = visibleGalleryItems();
            activeIndex = items.indexOf(item);
            showLightboxItem(item);
        }

        // Close Lightbox triggers
        const lightbox = document.getElementById('lightbox-modal');
        if (e.target.closest('.lightbox-close') || (lightbox && e.target === lightbox)) {
            e.preventDefault();
            if (lightbox) {
                lightbox.classList.remove('is-active');
                document.body.style.overflow = '';
            }
        }

        // Navigation triggers
        if (e.target.closest('.lightbox-prev')) {
            e.preventDefault();
            const items = visibleGalleryItems();
            if (items.length > 0) {
                activeIndex = (activeIndex - 1 + items.length) % items.length;
                showLightboxItem(items[activeIndex]);
            }
        }

        if (e.target.closest('.lightbox-next')) {
            e.preventDefault();
            const items = visibleGalleryItems();
            if (items.length > 0) {
                activeIndex = (activeIndex + 1) % items.length;
                showLightboxItem(items[activeIndex]);
            }
        }
    });

    function showLightboxItem(item) {
        const img = item.querySelector('.gallery-item-img') || item.querySelector('.managed-image');
        const title = item.querySelector('.gallery-item-title') || item.querySelector('.image-label') || item.querySelector('h3');
        const lightboxModal = document.getElementById('lightbox-modal');
        const lImg = document.getElementById('lightbox-img');
        const lCap = document.getElementById('lightbox-caption');

        if (img && lightboxModal && lImg) {
            lImg.src = img.src || '';
            if (lCap) {
                lCap.textContent = title ? title.textContent : 'Gallery Image';
            }
            lightboxModal.classList.add('is-active');
            document.body.style.overflow = 'hidden';
        }
    }

    function createLightboxHTML() {
        const html = `
        <div class="lightbox-modal" id="lightbox-modal">
            <div class="lightbox-content">
                <button class="lightbox-close" aria-label="Close Lightbox"><i class="fa-solid fa-xmark"></i></button>
                <button class="lightbox-nav lightbox-prev" aria-label="Previous image"><i class="fa-solid fa-chevron-left"></i></button>
                <img src="" alt="Enlarged campus event snapshot" class="lightbox-img" id="lightbox-img">
                <div class="lightbox-caption" id="lightbox-caption">Gallery Image</div>
                <button class="lightbox-nav lightbox-next" aria-label="Next image"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
        `;
        document.body.insertAdjacentHTML('beforeend', html);
    }

    // 7. Subtle Scroll Reveal triggers on page load
    const animElements = document.querySelectorAll('.placeholder-card, .section h2, .grid > div, .timeline-item');
    
    // Intersection Observer for scroll animations
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-up');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animElements.forEach(el => {
            el.classList.add('reveal-on-scroll');
            observer.observe(el);
        });
    } else {
        // Fallback for older browsers
        animElements.forEach(el => el.classList.add('animate-fade-up'));
    }
});
