// ============================================
// PRAGYA VALLEY ACADEMY - CENTRAL CONFIGURATION
// ============================================
// Edit this file to customize all content across the website
// Changes here will automatically update all pages
// ============================================

const CONFIG = {
    // ============================================
    // SCHOOL/INSTITUTE INFORMATION
    // ============================================
    school: {
        name: "Pragya Valley Academy",
        shortName: "PVA",
        tagline: "Excellence in Higher Secondary Education",
        established: "1998",
        affiliation: "AHSEC (Code: 18007)",
        board: "AHSEC",
        
        // Contact Information
        contact: {
            phone: "+91 70000 00000",
            phone2: "+91 70001 00001",
            email: "info@pragyavalley.edu.in",
            email2: "admissions@pragyavalley.edu.in",
            whatsapp: "917000000000", // Without + sign
        },
        
        // Location
        location: {
            address: "G.S. Road, Guwahati",
            city: "Guwahati",
            state: "Assam",
            pincode: "781005",
            landmark: "Near GMCH",
            googleMapsUrl: "https://goo.gl/maps/your-map-link",
        },
        
        // Social Media Links
        social: {
            facebook: "https://facebook.com/pragyavalley",
            instagram: "https://instagram.com/pragyavalley",
            youtube: "https://youtube.com/pragyavalley",
            linkedin: "https://linkedin.com/school/pragyavalley",
            twitter: "https://twitter.com/pragyavalley",
        },
        
        // SEO Settings
        seo: {
            keywords: "AHSEC college Assam, best higher secondary institute, Arts stream Assam, Science stream, Commerce coaching, board exam preparation, top college Guwahati",
            googleAnalyticsId: "UA-XXXXX-Y", // Add your Google Analytics ID
        },
    },

    // ============================================
    // LOGOS & BRANDING
    // ============================================
    logos: {
        // Main Logo - Use Google Drive links or hosted URLs
        main: "https://drive.google.com/uc?export=view&id=YOUR_LOGO_ID",
        favicon: "https://drive.google.com/uc?export=view&id=YOUR_FAVICON_ID",
        whiteLogo: "https://drive.google.com/uc?export=view&id=YOUR_WHITE_LOGO_ID", // For footer/dark backgrounds
        icon: "https://drive.google.com/uc?export=view&id=YOUR_ICON_ID", // Square icon
        
        // Trust Badges
        trustBadges: [
            "https://drive.google.com/uc?export=view&id=BADGE_1_ID", // ISO Certified
            "https://drive.google.com/uc?export=view&id=BADGE_2_ID", // Best Institute Award
            "https://drive.google.com/uc?export=view&id=BADGE_3_ID", // AHSEC Affiliated
        ],
    },

    // ============================================
    // LEADERSHIP TEAM
    // ============================================
    leadership: {
        director: {
            name: "Dr. Ranjan Bora",
            designation: "Founder & Director",
            qualification: "Ph.D. in Education",
            experience: "30+ years",
            photo: "https://randomuser.me/api/portraits/men/42.jpg",
            message: "Education is not just about passing exams; it's about building character and creating responsible citizens.",
            email: "director@pragyavalley.edu.in",
        },
        
        principal: {
            name: "Prof. Minakshi Devi",
            designation: "Principal",
            qualification: "M.A., M.Phil in Economics",
            experience: "22+ years",
            photo: "https://randomuser.me/api/portraits/women/68.jpg",
            message: "We focus on holistic development of every student, preparing them for life beyond textbooks.",
            email: "principal@pragyavalley.edu.in",
        },
        
        academicDirector: {
            name: "Dr. Naba Kalita",
            designation: "Academic Director",
            qualification: "Ph.D. in Chemistry",
            experience: "20+ years",
            photo: "https://randomuser.me/api/portraits/men/75.jpg",
            email: "academic@pragyavalley.edu.in",
        },
        
        // Full leadership team for about page
        team: [
            {
                name: "Dr. Ranjan Bora",
                position: "Founder & Chairman",
                qualification: "Ph.D. in Education, 30+ years",
                photo: "https://randomuser.me/api/portraits/men/42.jpg",
                description: "Recipient of 'Best Educator Award' 2020",
                linkedin: "#",
                email: "director@pragyavalley.edu.in",
            },
            {
                name: "Prof. Minakshi Devi",
                position: "Principal",
                qualification: "M.A., M.Phil, 22+ years",
                photo: "https://randomuser.me/api/portraits/women/68.jpg",
                description: "Former AHSEC board member",
                linkedin: "#",
                email: "principal@pragyavalley.edu.in",
            },
            {
                name: "Dr. Naba Kalita",
                position: "Academic Director",
                qualification: "Ph.D. Chemistry, 20+ years",
                photo: "https://randomuser.me/api/portraits/men/75.jpg",
                description: "Curriculum developer for Science",
                linkedin: "#",
                email: "academic@pragyavalley.edu.in",
            },
        ],
    },

    // ============================================
    // FACULTY MEMBERS
    // ============================================
    faculty: [
        // Arts Faculty
        {
            name: "Dr. Ranjan Bora",
            subject: "Physics HOD",
            qualification: "Ph.D. - IIT Guwahati",
            experience: "20+ years",
            photo: "https://randomuser.me/api/portraits/men/42.jpg",
            stream: "science",
            email: "ranjan.bora@pragyavalley.edu.in",
            linkedin: "#",
        },
        {
            name: "Prof. Minakshi Devi",
            subject: "Economics Expert",
            qualification: "M.A., M.Phil",
            experience: "15+ years",
            photo: "https://randomuser.me/api/portraits/women/68.jpg",
            stream: "arts",
            email: "minakshi.devi@pragyavalley.edu.in",
            linkedin: "#",
        },
        {
            name: "Dr. Naba Kalita",
            subject: "Chemistry HOD",
            qualification: "Ph.D. - Gauhati University",
            experience: "18+ years",
            photo: "https://randomuser.me/api/portraits/men/75.jpg",
            stream: "science",
            email: "naba.kalita@pragyavalley.edu.in",
            linkedin: "#",
        },
        {
            name: "Prof. Rita Sharma",
            subject: "Accountancy Expert",
            qualification: "M.Com, CA (Inter)",
            experience: "12+ years",
            photo: "https://randomuser.me/api/portraits/women/33.jpg",
            stream: "commerce",
            email: "rita.sharma@pragyavalley.edu.in",
            linkedin: "#",
        },
        {
            name: "Dr. Anil Das",
            subject: "Political Science",
            qualification: "Ph.D. - DU",
            experience: "15+ years",
            photo: "https://randomuser.me/api/portraits/men/52.jpg",
            stream: "arts",
            email: "anil.das@pragyavalley.edu.in",
        },
        {
            name: "Prof. Sangeeta Bora",
            subject: "Education",
            qualification: "M.Ed, NET",
            experience: "12+ years",
            photo: "https://randomuser.me/api/portraits/women/44.jpg",
            stream: "arts",
            email: "sangeeta.bora@pragyavalley.edu.in",
        },
        {
            name: "Dr. Kamal Nath",
            subject: "Mathematics",
            qualification: "Ph.D. - IITG",
            experience: "16+ years",
            photo: "https://randomuser.me/api/portraits/men/62.jpg",
            stream: "science",
            email: "kamal.nath@pragyavalley.edu.in",
        },
        {
            name: "Prof. Rima Das",
            subject: "Biology",
            qualification: "M.Sc, NET",
            experience: "10+ years",
            photo: "https://randomuser.me/api/portraits/women/55.jpg",
            stream: "science",
            email: "rima.das@pragyavalley.edu.in",
        },
        {
            name: "CA Rajesh Agarwal",
            subject: "Accountancy",
            qualification: "CA, M.Com",
            experience: "14+ years",
            photo: "https://randomuser.me/api/portraits/men/22.jpg",
            stream: "commerce",
            email: "rajesh.agarwal@pragyavalley.edu.in",
        },
        {
            name: "Prof. Bikash Sharma",
            subject: "Business Studies",
            qualification: "MBA, NET",
            experience: "11+ years",
            photo: "https://randomuser.me/api/portraits/men/32.jpg",
            stream: "commerce",
            email: "bikash.sharma@pragyavalley.edu.in",
        },
    ],

    // ============================================
    // STUDENT ACHIEVEMENTS / TOPPERS
    // ============================================
    toppers: {
        arts: [
            {
                name: "Priya Sharma",
                year: 2024,
                percentage: 94.5,
                rank: "1st Rank - Political Science",
                photo: "https://randomuser.me/api/portraits/women/44.jpg",
                successLine: "Topped AHSEC in Political Science",
                currentStudy: "Delhi University",
            },
            {
                name: "Rahul Das",
                year: 2024,
                percentage: 92.8,
                rank: "State Rank 3 - Education",
                photo: "https://randomuser.me/api/portraits/men/32.jpg",
                successLine: "Excellence in Education",
                currentStudy: "Gauhati University",
            },
            {
                name: "Anjali Bora",
                year: 2023,
                percentage: 93.2,
                rank: "Best in Assamese",
                photo: "https://randomuser.me/api/portraits/women/68.jpg",
                successLine: "Best in Assamese Literature",
                currentStudy: "Cotton University",
            },
            {
                name: "Meera Das",
                year: 2023,
                percentage: 91.5,
                rank: "State Rank 5 - History",
                photo: "https://randomuser.me/api/portraits/women/33.jpg",
                successLine: "Excellence in History",
            },
            {
                name: "Arjun Bora",
                year: 2022,
                percentage: 94.2,
                rank: "State Rank 2 - Economics",
                photo: "https://randomuser.me/api/portraits/men/62.jpg",
                successLine: "Now at Delhi University",
            },
        ],
        
        science: [
            {
                name: "Arun Kalita",
                year: 2024,
                percentage: 96.2,
                rank: "1st Rank - Mathematics",
                photo: "https://randomuser.me/api/portraits/men/52.jpg",
                successLine: "Perfect Score in Mathematics",
                currentStudy: "IIT Guwahati",
            },
            {
                name: "Maya Devi",
                year: 2024,
                percentage: 95.4,
                rank: "State Topper - Biology",
                photo: "https://randomuser.me/api/portraits/women/22.jpg",
                successLine: "Selected for NEET",
                currentStudy: "GMCH",
            },
            {
                name: "Rohan Sharma",
                year: 2023,
                percentage: 94.8,
                rank: "JEE Advanced Qualified",
                photo: "https://randomuser.me/api/portraits/men/75.jpg",
                successLine: "Selected for IIT",
                currentStudy: "IIT Bombay",
            },
            {
                name: "Priyanka Bora",
                year: 2023,
                percentage: 95.2,
                rank: "NEET Qualified",
                photo: "https://randomuser.me/api/portraits/women/45.jpg",
                successLine: "MBBS at GMCH",
            },
            {
                name: "Bikash Das",
                year: 2022,
                percentage: 96.8,
                rank: "State Rank 1",
                photo: "https://randomuser.me/api/portraits/men/22.jpg",
                successLine: "Now at IIT Bombay",
            },
        ],
        
        commerce: [
            {
                name: "Kavita Agarwal",
                year: 2024,
                percentage: 95.8,
                rank: "1st Rank - Accountancy",
                photo: "https://randomuser.me/api/portraits/women/33.jpg",
                successLine: "Best in Accountancy",
                currentStudy: "SRCC",
            },
            {
                name: "Vikash Jalan",
                year: 2024,
                percentage: 94.2,
                rank: "State Rank 2 - Business Studies",
                photo: "https://randomuser.me/api/portraits/men/62.jpg",
                successLine: "Excellence in Commerce",
                currentStudy: "CA Foundation",
            },
            {
                name: "Priyanka Das",
                year: 2023,
                percentage: 93.6,
                rank: "Gold Medalist - Economics",
                photo: "https://randomuser.me/api/portraits/women/55.jpg",
                successLine: "Now at SRCC",
            },
            {
                name: "Rahul Kedia",
                year: 2023,
                percentage: 94.5,
                rank: "CA Foundation",
                photo: "https://randomuser.me/api/portraits/men/42.jpg",
                successLine: "Cleared CA Foundation",
            },
            {
                name: "Sneha Agarwal",
                year: 2022,
                percentage: 96.2,
                rank: "State Rank 1",
                photo: "https://randomuser.me/api/portraits/women/28.jpg",
                successLine: "Now at LSR Delhi",
            },
        ],
    },

    // ============================================
    // TESTIMONIALS
    // ============================================
    testimonials: [
        {
            name: "Mrs. Bora",
            role: "Parent of Priyanka Bora",
            stream: "Arts 2024",
            photo: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            text: "My daughter secured 94% in Arts stream. The teachers here genuinely care about each student's progress and provide individual attention. The mentoring program made all the difference.",
        },
        {
            name: "Arun Kalita",
            role: "Student",
            stream: "Science 2024",
            photo: "https://randomuser.me/api/portraits/men/52.jpg",
            rating: 5,
            text: "The mentoring program helped me crack NEET. The teachers went above and beyond to ensure we understood every concept. The regular tests and doubt-clearing sessions were extremely helpful.",
        },
        {
            name: "Mr. Agarwal",
            role: "Parent of Kavita Agarwal",
            stream: "Commerce 2024",
            photo: "https://randomuser.me/api/portraits/men/62.jpg",
            rating: 5,
            text: "Best decision we made for our son's commerce education. Excellent faculty and infrastructure. The CA foundation coaching integrated with the curriculum saved us time and money.",
        },
        {
            name: "Rahul Das",
            role: "Student",
            stream: "Arts 2023",
            photo: "https://randomuser.me/api/portraits/men/22.jpg",
            rating: 5,
            text: "The teachers at Pragya Valley don't just teach, they mentor. My confidence grew tremendously. The career guidance cell helped me choose the right path for civil services.",
        },
    ],

    // ============================================
    // NOTICES & ANNOUNCEMENTS
    // ============================================
    notices: [
        {
            id: 1,
            title: "Admission Open 2025-26",
            date: "2025-01-15",
            category: "Admission",
            description: "Applications are now open for Arts, Science & Commerce streams. Limited seats available.",
            pdfUrl: "https://drive.google.com/uc?export=download&id=YOUR_NOTICE_PDF_ID",
            isImportant: true,
        },
        {
            id: 2,
            title: "AHSEC Exam Schedule 2025",
            date: "2025-02-01",
            category: "Examination",
            description: "AHSEC practical exam schedule for Class 12 has been released.",
            pdfUrl: "https://drive.google.com/uc?export=download&id=YOUR_EXAM_SCHEDULE_ID",
            isImportant: true,
        },
        {
            id: 3,
            title: "Parent-Teacher Meeting",
            date: "2025-02-15",
            category: "Event",
            description: "Parent-Teacher meeting for Class 11 students on February 15, 2025.",
            pdfUrl: "https://drive.google.com/uc?export=download&id=YOUR_PTM_NOTICE_ID",
            isImportant: false,
        },
        {
            id: 4,
            title: "Scholarship Test",
            date: "2025-03-01",
            category: "Scholarship",
            description: "Scholarship test for meritorious students on March 1, 2025.",
            pdfUrl: "https://drive.google.com/uc?export=download&id=YOUR_SCHOLARSHIP_ID",
            isImportant: true,
        },
    ],

    // ============================================
    // GALLERY IMAGES
    // ============================================
    gallery: {
        campus: [
            {
                url: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Main Building",
                description: "Our 5-acre campus in Guwahati",
            },
            {
                url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Smart Classroom",
                description: "Digital learning environment",
            },
            {
                url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Central Library",
                description: "10,000+ books and journals",
            },
            {
                url: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Science Lab",
                description: "Fully equipped laboratories",
            },
        ],
        
        events: [
            {
                url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Annual Day 2024",
                description: "Cultural celebrations",
            },
            {
                url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Sports Day",
                description: "Annual sports competition",
            },
            {
                url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Workshop",
                description: "Career guidance session",
            },
        ],
        
        classrooms: [
            {
                url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Smart Class",
                description: "Digital teaching aids",
            },
            {
                url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Computer Lab",
                description: "100+ latest systems",
            },
        ],
        
        achievements: [
            {
                url: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Award Ceremony",
                description: "Toppers 2024",
            },
            {
                url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Scholarship Winners",
                description: "Merit scholarship recipients",
            },
        ],
    },

    // ============================================
    // DOCUMENTS & DOWNLOADS
    // ============================================
    documents: {
        prospectus: "https://drive.google.com/uc?export=download&id=YOUR_PROSPECTUS_ID",
        applicationForm: "https://drive.google.com/uc?export=download&id=YOUR_APPLICATION_FORM_ID",
        brochure: "https://drive.google.com/uc?export=download&id=YOUR_BROCHURE_ID",
        
        syllabus: {
            arts: "https://drive.google.com/uc?export=download&id=YOUR_ARTS_SYLLABUS_ID",
            science: "https://drive.google.com/uc?export=download&id=YOUR_SCIENCE_SYLLABUS_ID",
            commerce: "https://drive.google.com/uc?export=download&id=YOUR_COMMERCE_SYLLABUS_ID",
        },
        
        results: {
            arts2024: "https://drive.google.com/uc?export=download&id=YOUR_ARTS_RESULTS_ID",
            science2024: "https://drive.google.com/uc?export=download&id=YOUR_SCIENCE_RESULTS_ID",
            commerce2024: "https://drive.google.com/uc?export=download&id=YOUR_COMMERCE_RESULTS_ID",
        },
    },

    // ============================================
    // STATISTICS
    // ============================================
    stats: {
        yearsOfExcellence: 25,
        alumniCount: 5000,
        facultyCount: 50,
        passPercentage: 95,
        studentsCount: 1500,
        classrooms: 30,
        labs: 5,
        libraryBooks: 10000,
    },

    // ============================================
    // PROGRAMS INFORMATION
    // ============================================
    programs: {
        arts: {
            name: "Arts Stream",
            icon: "fas fa-palette",
            description: "Political Science, Education, Economics, History, Assamese, English",
            subjects: ["Political Science", "Education", "Economics", "History", "Assamese", "English"],
            eligibility: "Passed Class 10 from any recognized board with 40% aggregate",
            duration: "2 Years",
            fee: "Contact for fee structure",
            careerOptions: ["Civil Services", "Law", "Teaching", "Journalism", "Archaeology"],
            successRate: 94,
        },
        science: {
            name: "Science Stream",
            icon: "fas fa-flask",
            description: "Physics, Chemistry, Mathematics, Biology, Computer Science",
            subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science", "English"],
            eligibility: "Passed Class 10 with 75% in Science & Mathematics",
            duration: "2 Years",
            fee: "Contact for fee structure",
            careerOptions: ["Medical", "Engineering", "Research", "Computer Science", "Biotechnology"],
            successRate: 96,
        },
        commerce: {
            name: "Commerce Stream",
            icon: "fas fa-chart-bar",
            description: "Accountancy, Business Studies, Economics, Mathematics, IT",
            subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "IT", "English"],
            eligibility: "Passed Class 10 with 60% aggregate, Mathematics preferred",
            duration: "2 Years",
            fee: "Contact for fee structure",
            careerOptions: ["Chartered Accountant", "Company Secretary", "Investment Banking", "Finance", "MBA"],
            successRate: 95,
        },
    },

    // ============================================
    // ADMISSION INFORMATION
    // ============================================
    admission: {
        currentSession: "2025-26",
        applicationFee: "₹500",
        lastDate: "March 31, 2025",
        
        seatsAvailable: {
            arts: 40,
            science: 45,
            commerce: 30,
        },
        
        process: [
            "Fill online application form",
            "Upload required documents",
            "Pay application fee",
            "Appear for entrance test (if applicable)",
            "Counseling and seat allotment",
            "Fee payment and admission confirmation",
        ],
        
        documents: [
            "Class 10 Marksheet",
            "Class 10 Pass Certificate",
            "Transfer Certificate",
            "Character Certificate",
            "Passport size photographs",
            "Caste certificate (if applicable)",
        ],
        
        fees: {
            arts: "₹25,000 per year",
            science: "₹35,000 per year",
            commerce: "₹30,000 per year",
        },
    },

    // ============================================
    // GOOGLE FORMS EMBED LINKS
    // ============================================
    googleForms: {
        admissionEnquiry: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true",
        contactForm: "https://docs.google.com/forms/d/e/YOUR_CONTACT_FORM_ID/viewform?embedded=true",
        feedbackForm: "https://docs.google.com/forms/d/e/YOUR_FEEDBACK_FORM_ID/viewform?embedded=true",
        careerForm: "https://docs.google.com/forms/d/e/YOUR_CAREER_FORM_ID/viewform?embedded=true",
    },

    // ============================================
    // SOCIAL MEDIA FEED (Optional)
    // ============================================
    socialFeed: {
        facebook: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpragyavalley&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true",
        instagram: "https://www.instagram.com/pragyavalley/embed",
    },

    // ============================================
    // WEBSITE THEME COLORS (for easy customization)
    // ============================================
    theme: {
        primary: "#2A4B7C",
        secondary: "#E67E22",
        accent: "#27AE60",
        background: "#F8FAFC",
        textDark: "#1E293B",
        textLight: "#64748B",
    },
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}