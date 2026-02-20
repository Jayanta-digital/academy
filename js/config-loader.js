// ============================================
// CONFIG LOADER - Use this to load config in HTML files
// ============================================

// Function to load config and update page content
function loadConfig() {
    // Update school name everywhere
    updateTextContent('[data-school-name]', CONFIG.school.name);
    updateTextContent('[data-school-tagline]', CONFIG.school.tagline);
    
    // Update contact info
    updateTextContent('[data-phone]', CONFIG.school.contact.phone);
    updateTextContent('[data-phone2]', CONFIG.school.contact.phone2);
    updateTextContent('[data-email]', CONFIG.school.contact.email);
    updateTextContent('[data-email2]', CONFIG.school.contact.email2);
    
    // Update address
    updateTextContent('[data-address]', CONFIG.school.location.address);
    updateTextContent('[data-city]', CONFIG.school.location.city);
    updateTextContent('[data-state]', CONFIG.school.location.state);
    updateTextContent('[data-pincode]', CONFIG.school.location.pincode);
    
    // Update logos
    updateImageSource('[data-logo-main]', CONFIG.logos.main);
    updateImageSource('[data-logo-white]', CONFIG.logos.whiteLogo);
    updateImageSource('[data-favicon]', CONFIG.logos.favicon);
    
    // Update leadership photos
    updateImageSource('[data-director-photo]', CONFIG.leadership.director.photo);
    updateTextContent('[data-director-name]', CONFIG.leadership.director.name);
    updateTextContent('[data-director-designation]', CONFIG.leadership.director.designation);
    
    updateImageSource('[data-principal-photo]', CONFIG.leadership.principal.photo);
    updateTextContent('[data-principal-name]', CONFIG.leadership.principal.name);
    
    // Update stats
    updateTextContent('[data-years-excellence]', CONFIG.stats.yearsOfExcellence);
    updateTextContent('[data-alumni-count]', CONFIG.stats.alumniCount);
    updateTextContent('[data-faculty-count]', CONFIG.stats.facultyCount);
    updateTextContent('[data-pass-percentage]', CONFIG.stats.passPercentage);
    
    // Update notices
    updateNotices();
    
    // Update faculty grid
    updateFacultyGrid();
    
    // Update toppers sliders
    updateToppersSliders();
    
    // Update testimonials
    updateTestimonials();
    
    // Update gallery
    updateGallery();
}

// Helper function to update text content
function updateTextContent(selector, value) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.textContent = value;
    });
}

// Helper function to update image source
function updateImageSource(selector, value) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.src = value;
    });
}

// Helper function to update multiple attributes
function updateAttributes(selector, attributes) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        Object.keys(attributes).forEach(attr => {
            element.setAttribute(attr, attributes[attr]);
        });
    });
}

// Update notices section
function updateNotices() {
    const noticeContainer = document.querySelector('[data-notices]');
    if (!noticeContainer) return;
    
    let html = '';
    CONFIG.notices.forEach(notice => {
        html += `
            <div class="notice-item ${notice.isImportant ? 'important' : ''}">
                <div class="notice-date">${notice.date}</div>
                <h4>${notice.title}</h4>
                <p>${notice.description}</p>
                ${notice.pdfUrl ? `<a href="${notice.pdfUrl}" class="notice-download" download><i class="fas fa-download"></i> Download</a>` : ''}
            </div>
        `;
    });
    noticeContainer.innerHTML = html;
}

// Update faculty grid
function updateFacultyGrid() {
    const facultyContainer = document.querySelector('[data-faculty-grid]');
    if (!facultyContainer) return;
    
    let html = '';
    CONFIG.faculty.forEach(faculty => {
        html += `
            <div class="faculty-card" data-aos="fade-up">
                <div class="faculty-image">
                    <img src="${faculty.photo}" alt="${faculty.name}">
                    <div class="faculty-social">
                        ${faculty.linkedin ? `<a href="${faculty.linkedin}"><i class="fab fa-linkedin-in"></i></a>` : ''}
                        ${faculty.email ? `<a href="mailto:${faculty.email}"><i class="fas fa-envelope"></i></a>` : ''}
                    </div>
                </div>
                <div class="faculty-info">
                    <h3>${faculty.name}</h3>
                    <p class="faculty-subject">${faculty.subject}</p>
                    <p class="faculty-qualification">${faculty.qualification}, ${faculty.experience}</p>
                </div>
            </div>
        `;
    });
    facultyContainer.innerHTML = html;
}

// Update toppers sliders
function updateToppersSliders() {
    // Arts toppers
    updateTopperSlider('arts-toppers', CONFIG.toppers.arts);
    updateTopperSlider('science-toppers', CONFIG.toppers.science);
    updateTopperSlider('commerce-toppers', CONFIG.toppers.commerce);
}

function updateTopperSlider(containerId, toppers) {
    const container = document.querySelector(`[data-${containerId}]`);
    if (!container) return;
    
    let html = '';
    toppers.forEach(topper => {
        html += `
            <div class="swiper-slide">
                <div class="achievement-card">
                    <div class="student-photo">
                        <img src="${topper.photo}" alt="${topper.name}">
                    </div>
                    <h3>${topper.name}</h3>
                    <p class="stream-label">${topper.stream || ''} | ${topper.year}</p>
                    <div class="percentage">${topper.percentage}%</div>
                    <p class="rank">${topper.rank}</p>
                    <p class="success-line">"${topper.successLine}"</p>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// Update testimonials
function updateTestimonials() {
    const testimonialContainer = document.querySelector('[data-testimonials]');
    if (!testimonialContainer) return;
    
    let html = '';
    CONFIG.testimonials.forEach(testimonial => {
        html += `
            <div class="swiper-slide">
                <div class="testimonial-card">
                    <div class="testimonial-rating">
                        ${Array(testimonial.rating).fill('<i class="fas fa-star"></i>').join('')}
                    </div>
                    <p>"${testimonial.text}"</p>
                    <div class="testimonial-author">
                        <img src="${testimonial.photo}" alt="${testimonial.name}">
                        <div>
                            <h4>${testimonial.name}</h4>
                            <p>${testimonial.role}, ${testimonial.stream}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    testimonialContainer.innerHTML = html;
}

// Update gallery
function updateGallery() {
    // Campus gallery
    updateGalleryCategory('campus-gallery', CONFIG.gallery.campus);
    updateGalleryCategory('events-gallery', CONFIG.gallery.events);
    updateGalleryCategory('classrooms-gallery', CONFIG.gallery.classrooms);
    updateGalleryCategory('achievements-gallery', CONFIG.gallery.achievements);
}

function updateGalleryCategory(containerId, items) {
    const container = document.querySelector(`[data-${containerId}]`);
    if (!container) return;
    
    let html = '';
    items.forEach(item => {
        html += `
            <div class="gallery-item">
                <img src="${item.url}" alt="${item.title}" loading="lazy">
                <div class="gallery-overlay">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// Load config when DOM is ready
document.addEventListener('DOMContentLoaded', loadConfig);