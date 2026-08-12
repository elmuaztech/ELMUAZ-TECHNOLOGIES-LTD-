/**
 * Elmuaz Technologies LTD - Corporate Website Client Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });
    }

    // 2. Service Category Filter Tabs
    const serviceTabs = document.querySelectorAll('#serviceTabs .tab-btn');
    const serviceCards = document.querySelectorAll('#servicesGrid .service-card');

    if (serviceTabs.length && serviceCards.length) {
        serviceTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab button
                serviceTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const targetCategory = tab.getAttribute('data-category');

                // Filter cards
                serviceCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (targetCategory === 'all' || cardCategory === targetCategory) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // 3. Sector-Specific Systems Data & Interactive Switcher
    const systemsData = {
        school: {
            title: "🏫 School Management System",
            description: "A complete cloud and offline-capable school management platform designed for primary, secondary, and tertiary educational institutions.",
            features: [
                "Student Admissions & Enrollment",
                "Automated Gradebook & Report Cards",
                "Online Tuition & Fee Payment",
                "Parent & Student Self-Service Portals",
                "Teacher Class Rosters & Attendance",
                "Hostel & Transport Logistics Management"
            ]
        },
        hospital: {
            title: "🏥 Hospital & Clinic Management System",
            description: "An integrated Electronic Medical Records (EMR) and clinic workflow engine built to optimize patient care and administrative compliance.",
            features: [
                "Patient Registration & EMR History",
                "Doctor Appointment Scheduling",
                "Pharmacy Stock & Prescriptions",
                "Laboratory Diagnostics Reporting",
                "Billing, Insurance & Payment POS",
                "Multi-Department Access Control"
            ]
        },
        hotel: {
            title: "🏨 Hotel & Hospitality System",
            description: "All-in-one reservation and property management software designed for hotels, resorts, suites, and guest accommodation businesses.",
            features: [
                "Direct Booking Engine & Calendar",
                "Front Desk Check-in / Check-out",
                "Housekeeping & Room Status",
                "Dining & Room Service POS Billing",
                "Guest Billing & Financial Audits",
                "Staff Shift & Inventory Tracking"
            ]
        },
        pos: {
            title: "🛒 POS & Inventory Management System",
            description: "High-speed retail point-of-sale and multi-branch inventory tracking designed for supermarkets, stores, restaurants, and wholesalers.",
            features: [
                "Barcode Scanning & Receipt Printing",
                "Multi-Location Stock Transfers",
                "Low Stock & Expiry Date Alerts",
                "Daily Cashier Reconciliation Reports",
                "Customer Loyalty & Discount Codes",
                "Real-time Profit & Margin Analytics"
            ]
        },
        ecommerce: {
            title: "🛍️ E-Commerce & Online Store Solutions",
            description: "High-converting digital commerce systems with product catalogs, shopping carts, instant Nigerian & global payment gateway integration, and automated order fulfillment.",
            features: [
                "Paystack & Flutterwave Payment Gateways",
                "Product Variations & Stock Management",
                "Customer Accounts & Order History Tracking",
                "Discount Codes & Promotional Banners",
                "Automated Email / SMS Order Alerts",
                "Fast Mobile Checkout & Shipping Calculator"
            ]
        },
        erp: {
            title: "📊 Custom ERP & Business Management Software",
            description: "Enterprise operational software uniting multi-branch accounting, HR payroll, staff task delegation, procurement, and real-time business intelligence.",
            features: [
                "Multi-Currency Financial Accounting & Invoicing",
                "Employee Attendance, Leaves & Payroll Management",
                "Procurement & Vendor Supply Chain Pipelines",
                "Role-Based Access Control & Activity Audit Logs",
                "Custom Workflow Approvals & Automated Reporting",
                "Real-Time Executive KPI Analytics Dashboards"
            ]
        }
    };

    const systemsTabs = document.querySelectorAll('#systemsTabs .sys-tab-btn');
    const systemsContent = document.getElementById('systemsContent');

    function renderSystem(key) {
        const sys = systemsData[key];
        if (!sys || !systemsContent) return;

        systemsContent.innerHTML = `
            <div class="system-detail-grid">
                <div class="system-detail-content">
                    <h3>${sys.title}</h3>
                    <p>${sys.description}</p>
                    <a href="#calculator" class="btn btn-accent">Request System Demo</a>
                </div>
                <div class="feature-pill-list">
                    ${sys.features.map(f => `<div class="feature-pill">✓ ${f}</div>`).join('')}
                </div>
            </div>
        `;
    }

    if (systemsTabs.length) {
        systemsTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                systemsTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const sysKey = tab.getAttribute('data-system');
                renderSystem(sysKey);
            });
        });
        // Initial render
        renderSystem('school');
    }

    // 4. Detailed Modal Data for all 9 Services
    const serviceDetails = {
        "1": {
            title: "Software Development & Business Systems",
            subtitle: "Custom Web Applications, Automation & Enterprise Databases",
            body: `
                <p>At Elmuaz Technologies LTD, we build custom software that helps organizations eliminate repetitive manual tasks, digitize records, and accelerate business operations.</p>
                <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">Key Capabilities:</h4>
                <ul style="padding-left:20px; line-height:1.8;">
                    <li>Custom Web Applications built for your exact business logic.</li>
                    <li>Automated Workflow Engines & Executive Reporting Dashboards.</li>
                    <li>Scalable Relational & NoSQL Database Architecture.</li>
                    <li>Seamless API Integration with 3rd party payment gateways, SMS, and ERPs.</li>
                    <li>Ongoing technical updates, security patches, and cloud maintenance.</li>
                </ul>
            `
        },
        "2": {
            title: "Website Design & Development",
            subtitle: "Responsive, High-Converting & SEO-Optimized Web Presence",
            body: `
                <p>We craft stunning, modern websites engineered to showcase your brand value, capture qualified leads, and provide an effortless user experience on mobile and desktop.</p>
                <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">Website-Ready Options:</h4>
                <ul style="padding-left:20px; line-height:1.8;">
                    <li>Corporate Websites & High-Converting Landing Pages.</li>
                    <li>E-Commerce Platforms with Local & International Payment Gateways.</li>
                    <li>Portfolios, Corporate Blogs & Membership Portals.</li>
                    <li>Complete Website Redesigns & Speed Optimization.</li>
                    <li>Search Engine Optimization (SEO) & Analytics setup.</li>
                </ul>
            `
        },
        "3": {
            title: "Mobile Application Development",
            subtitle: "Intuitive iOS & Android Mobile Apps for Customers & Staff",
            body: `
                <p>We create engaging mobile applications that keep your services, products, and operational teams connected 24/7 across Apple iOS and Google Android platforms.</p>
                <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">Development Scope:</h4>
                <ul style="padding-left:20px; line-height:1.8;">
                    <li>Cross-Platform & Native Mobile App Planning.</li>
                    <li>User Flow Architecture & Interactive Prototypes.</li>
                    <li>Customer Self-Service Portals & In-App Payment processing.</li>
                    <li>Field Staff Mobile Dashboards & Push Notification Engines.</li>
                    <li>Google Play Store & Apple App Store Deployment.</li>
                </ul>
            `
        },
        "4": {
            title: "Sector-Specific Management Systems",
            subtitle: "Turnkey Platforms for Schools, Healthcare, Hospitality & Retail",
            body: `
                <p>Our sector systems bring together record management, transactions, staff roles, and analytics into one unified dashboard tailored to industry standards.</p>
                <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">System Modules:</h4>
                <ul style="padding-left:20px; line-height:1.8;">
                    <li>School Management: Admissions, Fee Payments & Report Cards.</li>
                    <li>Hospital EMR: Patient Records, Pharmacy Stock & Doctor Schedules.</li>
                    <li>Hotel PMS: Online Room Bookings, Housekeeping & Guest Folios.</li>
                    <li>POS & Inventory: Barcode scanning, Cashier reconciliation & Stock alerts.</li>
                </ul>
            `
        },
        "5": {
            title: "Artificial Intelligence & Automation",
            subtitle: "Smart AI Chatbots, Workflows & Data Analytics",
            body: `
                <p>We help businesses apply practical artificial intelligence to enhance productivity, speed up customer support, and extract meaningful insights from data.</p>
                <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">AI Capabilities:</h4>
                <ul style="padding-left:20px; line-height:1.8;">
                    <li>24/7 AI Customer Support Chatbots & Lead Capture.</li>
                    <li>Automated Document Processing & Data Extraction.</li>
                    <li>Prompt Strategy & Custom AI Tooling Integration.</li>
                    <li>Predictive Analytics for Business Decision Making.</li>
                </ul>
            `
        },
        "6": {
            title: "Cybersecurity & Cloud Solutions",
            subtitle: "Asset Protection, Secure Backups & Managed Cloud",
            body: `
                <p>Protect your critical business data and leverage cloud scalability with our end-to-end security and infrastructure services.</p>
                <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">Security Offerings:</h4>
                <ul style="padding-left:20px; line-height:1.8;">
                    <li>Cybersecurity Audits & Vulnerability Assessments.</li>
                    <li>Role-Based Access Control & Password Strategy.</li>
                    <li>Cloud Infrastructure Setup (AWS, Google Cloud, Azure).</li>
                    <li>Automated Daily Backups & Disaster Recovery Planning.</li>
                </ul>
            `
        },
        "7": {
            title: "Digital Presence & Creative Services",
            subtitle: "Branding, UI/UX Design, SEO & Digital Marketing",
            body: `
                <p>Elevate your market visibility with compelling creative design, visual assets, and targeted digital marketing campaigns.</p>
                <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">Creative Services:</h4>
                <ul style="padding-left:20px; line-height:1.8;">
                    <li>Brand Identity Design, Logo Guidelines & Marketing Collateral.</li>
                    <li>User Experience (UX) & User Interface (UI) Design.</li>
                    <li>Video Editing & Social Media Content Assets.</li>
                    <li>Digital Marketing Strategy & Campaign Management.</li>
                </ul>
            `
        },
        "8": {
            title: "Hosting, Domains & Technical Support",
            subtitle: "Dependable Cloud Hosting, Domain Management & Care",
            body: `
                <p>We manage the underlying servers, security certificates, and maintenance updates so your website and apps run smoothly 24/7/365.</p>
                <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">Infrastructure Services:</h4>
                <ul style="padding-left:20px; line-height:1.8;">
                    <li>Domain Name Registration & Corporate Email Configuration.</li>
                    <li>High-Speed Managed Web Hosting & SSL Certificates.</li>
                    <li>Routine Maintenance, Patching & Troubleshooting.</li>
                    <li>Server Uptime Monitoring & Performance Optimization.</li>
                </ul>
            `
        },
        "9": {
            title: "ICT Consultancy, Training & Capacity Building",
            subtitle: "Strategic Tech Advisory & Workforce Skill Development",
            body: `
                <p>Empower your team with modern digital skills and strategic technology guidance tailored for modern business environments.</p>
                <h4 style="margin-top:16px; margin-bottom:8px; color:var(--primary);">Training & Advisory:</h4>
                <ul style="padding-left:20px; line-height:1.8;">
                    <li>ICT & Digital Transformation Consulting.</li>
                    <li>Custom Software Implementation Staff Training.</li>
                    <li>Workshops, Seminars & Cybersecurity Awareness Sessions.</li>
                    <li>Digital Skills Capacity Building for Organizations.</li>
                </ul>
            `
        }
    };

    // Modal Control
    const serviceModal = document.getElementById('serviceModal');
    const modalBodyContent = document.getElementById('modalBodyContent');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalTriggers = document.querySelectorAll('.open-service-modal');

    function openModal(serviceId) {
        const data = serviceDetails[serviceId];
        if (!data || !serviceModal) return;

        modalBodyContent.innerHTML = `
            <h2 style="color:var(--primary); font-size:1.8rem; margin-bottom:6px;">${data.title}</h2>
            <h4 style="color:var(--accent); font-size:1.05rem; margin-bottom:20px;">${data.subtitle}</h4>
            <div>${data.body}</div>
            <div style="margin-top:30px; text-align:right;">
                <a href="#calculator" class="btn btn-accent" onclick="document.getElementById('serviceModal').close();">Request Service Quote &rarr;</a>
            </div>
        `;

        if (typeof serviceModal.showModal === 'function') {
            serviceModal.showModal();
        } else {
            serviceModal.style.display = 'block';
        }
    }

    modalTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const sid = btn.getAttribute('data-service');
            openModal(sid);
        });
    });

    if (closeModalBtn && serviceModal) {
        closeModalBtn.addEventListener('click', () => {
            if (typeof serviceModal.close === 'function') {
                serviceModal.close();
            } else {
                serviceModal.style.display = 'none';
            }
        });

        // Close on backdrop click
        serviceModal.addEventListener('click', (e) => {
            const rect = serviceModal.getBoundingClientRect();
            const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                serviceModal.close();
            }
        });
    }

    // 5. Interactive Quote Calculator
    const calculatorForm = document.getElementById('quoteCalculatorForm');
    const summaryText = document.getElementById('summaryText');
    const calcIndustry = document.getElementById('calcIndustry');
    const calcTimeline = document.getElementById('calcTimeline');
    const checkboxes = document.querySelectorAll('input[name="services"]');

    function updateCalculatorSummary() {
        if (!summaryText) return;

        const selectedServices = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        const industryVal = calcIndustry ? calcIndustry.value : 'Education';
        const timelineVal = calcTimeline ? calcTimeline.value : 'Standard';

        const serviceStr = selectedServices.length > 0 ? selectedServices.join(', ') : 'None Selected';

        summaryText.innerHTML = `<strong>Selected Services:</strong> ${serviceStr} | <strong>Sector:</strong> ${industryVal} | <strong>Timeline:</strong> ${timelineVal}`;
    }

    if (checkboxes.length) {
        checkboxes.forEach(cb => cb.addEventListener('change', updateCalculatorSummary));
    }
    if (calcIndustry) calcIndustry.addEventListener('change', updateCalculatorSummary);
    if (calcTimeline) calcTimeline.addEventListener('change', updateCalculatorSummary);

    if (calculatorForm) {
        calculatorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('calcName').value;
            showToast(`Thank you, ${name}! Your consultation request has been received. Our team will contact you shortly.`);
            calculatorForm.reset();
            updateCalculatorSummary();
        });
    }

    // 6. Direct Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            showToast(`Message sent successfully, ${name}! We will get back to you within 24 business hours.`);
            contactForm.reset();
        });
    }

    // 7. Toast Notification System
    function showToast(message) {
        const toast = document.getElementById('toastNotification');
        const toastMsg = document.getElementById('toastMessage');
        if (!toast || !toastMsg) return;

        toastMsg.textContent = message;
        toast.classList.remove('hidden');

        setTimeout(() => {
            toast.classList.add('hidden');
        }, 5000);
    }

    // 8. 7-Step Process Interactive Stepper Listener
    const processSteps = document.querySelectorAll('.process-step');
    if (processSteps.length) {
        processSteps.forEach(step => {
            step.addEventListener('click', () => {
                processSteps.forEach(s => s.classList.remove('active'));
                step.classList.add('active');
            });
        });
    }
});
