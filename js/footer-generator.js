// ============================================
// FOOTER GENERATOR - Automatically builds footer from config
// No need to edit HTML files!
// ============================================

class FooterGenerator {
    constructor(config) {
        this.config = config;
        this.init();
    }
    
    init() {
        // Generate footer when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.generateFooter());
        } else {
            this.generateFooter();
        }
    }
    
    generateFooter() {
        const footer = document.querySelector('footer');
        if (!footer) return;
        
        // Clear existing footer content
        footer.innerHTML = '';
        
        // Build new footer
        const container = document.createElement('div');
        container.className = 'container';
        
        // Add footer grid
        container.appendChild(this.buildFooterGrid());
        
        // Add footer bottom
        container.appendChild(this.buildFooterBottom());
        
        footer.appendChild(container);
        
        // Initialize visitor counter if enabled
        if (this.config.visitorCounter?.enabled) {
            this.initVisitorCounter();
        }
    }
    
    buildFooterGrid() {
        const grid = document.createElement('div');
        grid.className = 'footer-grid';
        
        // About Column
        if (this.config.school) {
            grid.appendChild(this.buildAboutColumn());
        }
        
        // Quick Links Column
        if (this.config.footer?.showQuickLinks) {
            grid.appendChild(this.buildQuickLinksColumn());
        }
        
        // Programs Column
        if (this.config.footer?.showPrograms) {
            grid.appendChild(this.buildProgramsColumn());
        }
        
        // Contact Column
        if (this.config.footer?.showContactInfo) {
            grid.appendChild(this.buildContactColumn());
        }
        
        return grid;
    }
    
    buildAboutColumn() {
        const col = document.createElement('div');
        col.className = 'footer-col';
        
        // Logo
        const logo = document.createElement('a');
        logo.href = 'index.html';
        logo.className = 'footer-logo';
        logo.innerHTML = `<span>${this.config.school.name || 'Pragya'}<span>${this.config.school.shortName?.replace('Pragya', '') || 'Valley'}</span></span>`;
        col.appendChild(logo);
        
        // Description
        const desc = document.createElement('p');
        desc.setAttribute('data-school-tagline', '');
        desc.textContent = this.config.school.tagline || 'Assam\'s premier higher secondary institute affiliated to AHSEC.';
        col.appendChild(desc);
        
        // Social Links
        if (this.config.footer?.showSocialLinks && this.config.footer.socialLinks) {
            const socialDiv = document.createElement('div');
            socialDiv.className = 'social-links';
            
            this.config.footer.socialLinks.forEach(link => {
                if (link.enabled) {
                    const a = document.createElement('a');
                    a.href = link.url;
                    a.target = '_blank';
                    a.setAttribute('aria-label', link.platform);
                    a.innerHTML = `<i class="${link.icon}"></i>`;
                    socialDiv.appendChild(a);
                }
            });
            
            col.appendChild(socialDiv);
        }
        
        return col;
    }
    
    buildQuickLinksColumn() {
        const col = document.createElement('div');
        col.className = 'footer-col';
        
        const title = document.createElement('h3');
        title.textContent = 'Quick Links';
        col.appendChild(title);
        
        const ul = document.createElement('ul');
        const links = [
            { text: 'About Us', url: 'about.html' },
            { text: 'Programs', url: 'programs.html' },
            { text: 'Faculty', url: 'faculty.html' },
            { text: 'Results', url: 'results.html' },
            { text: 'Admission', url: 'admission.html' }
        ];
        
        links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.text;
            li.appendChild(a);
            ul.appendChild(li);
        });
        
        col.appendChild(ul);
        return col;
    }
    
    buildProgramsColumn() {
        const col = document.createElement('div');
        col.className = 'footer-col';
        
        const title = document.createElement('h3');
        title.textContent = 'Programs';
        col.appendChild(title);
        
        const ul = document.createElement('ul');
        const links = [
            { text: 'Arts Stream', url: 'arts.html' },
            { text: 'Science Stream', url: 'science.html' },
            { text: 'Commerce Stream', url: 'commerce.html' }
        ];
        
        links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.text;
            li.appendChild(a);
            ul.appendChild(li);
        });
        
        col.appendChild(ul);
        return col;
    }
    
    buildContactColumn() {
        const col = document.createElement('div');
        col.className = 'footer-col';
        
        const title = document.createElement('h3');
        title.textContent = 'Contact Info';
        col.appendChild(title);
        
        const ul = document.createElement('ul');
        ul.className = 'contact-info';
        
        // Address
        const addressLi = document.createElement('li');
        addressLi.innerHTML = `<i class="fas fa-map-marker-alt"></i> <span data-address>${this.config.school.location?.address || 'G.S. Road'}</span>, <span data-city>${this.config.school.location?.city || 'Guwahati'}</span>, <span data-state>${this.config.school.location?.state || 'Assam'}</span> - <span data-pincode>${this.config.school.location?.pincode || '781005'}</span>`;
        ul.appendChild(addressLi);
        
        // Phone
        const phoneLi = document.createElement('li');
        phoneLi.innerHTML = `<i class="fas fa-phone"></i> <a href="tel:${this.config.school.contact?.phone?.replace(/\s/g, '') || '+917000000000'}" data-phone>${this.config.school.contact?.phone || '+91 70000 00000'}</a>`;
        ul.appendChild(phoneLi);
        
        // Email
        const emailLi = document.createElement('li');
        emailLi.innerHTML = `<i class="fas fa-envelope"></i> <a href="mailto:${this.config.school.contact?.email || 'info@pragyavalley.edu.in'}" data-email>${this.config.school.contact?.email || 'info@pragyavalley.edu.in'}</a>`;
        ul.appendChild(emailLi);
        
        // Hours
        const hoursLi = document.createElement('li');
        hoursLi.innerHTML = `<i class="fas fa-clock"></i> Mon-Sat: 8AM - 6PM`;
        ul.appendChild(hoursLi);
        
        col.appendChild(ul);
        return col;
    }
    
    buildFooterBottom() {
        const bottom = document.createElement('div');
        bottom.className = 'footer-bottom';
        
        const content = document.createElement('div');
        content.className = 'footer-bottom-content';
        
        // Visitor Counter
        if (this.config.footer?.showVisitorCounter && this.config.visitorCounter?.enabled) {
            content.appendChild(this.buildVisitorCounter());
        }
        
        // Copyright
        content.appendChild(this.buildCopyright());
        
        // Developer Credit
        if (this.config.footer?.showDeveloper && this.config.developer?.enabled) {
            content.appendChild(this.buildDeveloperCredit());
        }
        
        bottom.appendChild(content);
        return bottom;
    }
    
    buildVisitorCounter() {
        const counter = document.createElement('div');
        counter.className = 'visitor-counter';
        
        if (this.config.visitorCounter.style?.glowEffect) {
            counter.style.animation = 'glow 2s infinite alternate';
        }
        
        if (this.config.visitorCounter.style?.background) {
            counter.style.background = this.config.visitorCounter.style.background;
        }
        
        counter.innerHTML = `
            <i class="${this.config.visitorCounter.icon || 'fas fa-eye'}" style="color: ${this.config.visitorCounter.style?.accentColor || '#E67E22'};"></i>
            <span>${this.config.visitorCounter.label || 'Total Visitors:'} </span>
            <span id="visitor-count">${this.config.visitorCounter.initialCount?.toLocaleString() || '12,457'}</span>
        `;
        
        return counter;
    }
    
    buildCopyright() {
        const copyright = document.createElement('div');
        copyright.className = 'copyright-text';
        
        const year = this.config.footer?.copyright?.showYear ? new Date().getFullYear() : '2025';
        const schoolName = this.config.school?.name || 'Pragya Valley Academy';
        const rights = this.config.footer?.copyright?.text || 'All rights reserved.';
        const affiliation = this.config.school?.affiliation || 'Affiliated to AHSEC (Code: 18007)';
        
        let html = `<p>&copy; ${year} <span data-school-name>${schoolName}</span>. ${rights} | ${affiliation}`;
        
        if (this.config.footer?.copyright?.showPrivacyPolicy) {
            html += ` | <a href="privacy.html">Privacy Policy</a>`;
        }
        
        if (this.config.footer?.copyright?.showTermsOfUse) {
            html += ` | <a href="terms.html">Terms of Use</a>`;
        }
        
        html += `</p>`;
        
        copyright.innerHTML = html;
        return copyright;
    }
    
    buildDeveloperCredit() {
        const dev = document.createElement('div');
        dev.className = 'developed-by';
        
        const devConfig = this.config.developer;
        const emailLink = `mailto:${devConfig.email}?subject=${encodeURIComponent(devConfig.subject)}&body=${encodeURIComponent(devConfig.message)}`;
        
        const btn = document.createElement('a');
        btn.href = emailLink;
        btn.className = 'dev-btn';
        btn.setAttribute('data-dev-btn', '');
        
        // Apply styles
        if (devConfig.style) {
            btn.style.background = devConfig.style.background;
            btn.style.color = devConfig.style.color;
            btn.style.borderColor = devConfig.style.borderColor;
        }
        
        btn.innerHTML = `
            <i class="${devConfig.buttonIcon}" style="color: ${devConfig.style?.hoverColor || '#E67E22'};"></i> 
            ${devConfig.buttonText}
        `;
        
        dev.appendChild(btn);
        return dev;
    }
    
    initVisitorCounter() {
        const visitorElement = document.getElementById('visitor-count');
        if (!visitorElement) return;
        
        const config = this.config.visitorCounter;
        let count = config.initialCount || 12457;
        
        // Check storage method
        if (config.storageMethod === 'localStorage') {
            const stored = localStorage.getItem('visitorCount');
            if (stored) {
                count = parseInt(stored) + 1;
            }
            localStorage.setItem('visitorCount', count);
        }
        
        // Animate if enabled
        if (config.animation) {
            this.animateValue(visitorElement, 0, count, config.animationDuration || 2000);
        } else {
            visitorElement.textContent = count.toLocaleString();
        }
    }
    
    animateValue(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 10);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 10);
    }
}

// Initialize footer generator
document.addEventListener('DOMContentLoaded', () => {
    if (typeof CONFIG !== 'undefined') {
        new FooterGenerator(CONFIG);
    }
});