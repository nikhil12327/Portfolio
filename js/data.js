/**
 * Nikhil Bonigala - Portfolio Centralized Data Store
 * ==================================================
 * Easily customize and maintain all portfolio content in this single file.
 * Any update here automatically reflects across the entire website.
 */

const portfolioData = {
  // ==========================================
  // 1. PERSONAL INFORMATION & BRANDING
  // ==========================================
  personal: {
    name: "Nikhil Bonigala",
    shortName: "Nikhil",
    role: "Computer Science & AI Undergraduate at NIT Goa • Full-Stack & ML Developer",
    tagline: "Engineering intelligent full-stack platforms & machine learning systems.",
    bioShort: "Computer Science & Engineering undergraduate at NIT Goa specializing in full-stack web platforms and applied machine learning.",
    bioLong: `Computer Science & Engineering undergraduate at the National Institute of Technology, Goa. Experienced in developing full-stack production platforms with React, Vite, and Firebase, along with computer vision and machine learning models using TensorFlow.

Strong foundations in Data Structures & Algorithms (500+ LeetCode problems solved), Object-Oriented Design, and relational database architecture.`,
    location: "NIT Goa, India (IST / UTC+5:30)",
    status: "Open to Full-Time Software / AI Engineering Roles & Internships",
    phone: "+91-9100372514",
    email: "bonigalanikhil2@gmail.com",
    github: "https://github.com/nikhil12327",
    linkedin: "https://www.linkedin.com/in/nikhil-bonigala",
    leetcode: "https://leetcode.com",
    // Resume link: You can leave this as "assets/docs/Nikhil_Bonigala_Resume.pdf" (replaces on disk),
    // OR paste your direct Google Drive/Google Docs share link here. The download engine auto-fetches the latest PDF!
    resumeDownloadUrl: "https://docs.google.com/document/d/1q1xeTCOztxpm_AnzTQsnqNmJ3Bj2nHgO/edit?usp=sharing&ouid=108631009714974941711&rtpof=true&sd=true",
    avatarImage: "assets/images/profile-portrait.svg",
  },

  // ==========================================
  // 2. KEY METRICS & HIGHLIGHTS
  // ==========================================
  metrics: [
    {
      value: "NIT Goa",
      label: "B.Tech CSE",
      subtext: "Computer Science & Engineering"
    },
    {
      value: "500+",
      label: "LeetCode Solved",
      subtext: "Strong DSA & Problem Solving"
    },
    {
      value: "1st Prize",
      label: "Harit Manthan Hackathon",
      subtext: "Delhi Development Authority"
    },
    {
      value: "Full-Stack + ML",
      label: "Production Stack",
      subtext: "React, Firebase, Python, TensorFlow"
    }
  ],

  // ==========================================
  // 3. PROJECT CATEGORIES
  // ==========================================
  projectCategories: [
    { id: "all", name: "All Work" },
    { id: "fullstack", name: "Full-Stack & Web" },
    { id: "aiml", name: "AI, ML & Vision" },
    { id: "systems", name: "Software & Systems" },
    { id: "creative", name: "Video & Photography" }
  ],

  // ==========================================
  // 4. FEATURED CASE STUDIES & PROJECTS
  // ==========================================
  projects: [
    {
      id: "ridex-bike-taxi",
      title: "RIDEX — Real-Time Bike Taxi Booking Platform",
      category: "fullstack",
      categoryLabel: "Full-Stack Web & Cloud",
      year: "2026",
      badge: "Production Platform",
      shortDescription: "A multi-app ride hailing ecosystem featuring dedicated Customer, Rider, and Admin web applications with real-time Firestore synchronization, automated rider assignment, and wallet payments.",
      thumbnail: "assets/images/project-ridex.svg",
      featured: true,
      tags: ["React.js", "Vite", "Firebase Auth", "Firestore", "Tailwind CSS", "Cloud Hosting"],
      githubUrl: "https://github.com/nikhil12327",
      liveUrl: "",
      interactiveDemo: "ridex-simulator",
      caseStudy: {
        headline: "Architecting a Scalable Real-Time Ride Hailing Ecosystem with Multi-Role Management",
        overview: "Developed a comprehensive full-stack bike taxi platform for Voat Network comprising three synchronized web portals: a customer booking app, a rider dispatch interface, and a centralized admin analytics dashboard.",
        role: "Full Stack Developer Intern (Voat Network)",
        timeline: "June 2026",
        problem: "Coordinating dynamic ride requests, driver matching, instantaneous status telemetry, wallet transactions, and administrative oversight requires low-latency state synchronization without race conditions.",
        solution: "Engineered responsive client portals powered by Vite and React.js, wired to Cloud Firestore real-time snapshot listeners for sub-second ride status transitions, wallet deductions, and administrative KPI telemetry.",
        architecture: [
          "Customer Portal: Interactive location pick-up/drop selection, fare estimation, OTP verification, and in-app wallet balance deductions.",
          "Rider Portal: Incoming ride broadcast queue, one-tap ride acceptance/rejection, navigation telemetry, and earnings ledger.",
          "Admin Dashboard: Live ride monitoring, customer & rider onboarding verification, revenue metrics, and activity timeline audit logging.",
          "Cloud & Auth: Firebase Authentication with role-based security rules, Firestore ACID transactions, and automated Firebase Hosting deployment."
        ],
        keyFeatures: [
          "Real-time ride lifecycle management (Booking → Dispatch → Pickup → Drop → Settlement)",
          "Interactive Admin Dashboard with revenue analytics, KPI tracking, and user management",
          "Automated rider onboarding and document approval workflows",
          "Digital wallet management with transactional integrity and receipts"
        ],
        technologies: ["React.js", "Vite", "Tailwind CSS", "Firebase Authentication", "Cloud Firestore", "Firebase Hosting"],
        learnings: "Mastered real-time WebSocket/Firestore stream orchestration, multi-tenant role authorization, and performance-optimized React component architectures."
      }
    },
    {
      id: "stock-market-prediction-ml",
      title: "Intelligent Stock Prediction & Trading Analysis",
      category: "aiml",
      categoryLabel: "Machine Learning & Quantitative Finance",
      year: "2025",
      badge: "Machine Learning",
      shortDescription: "An end-to-end quantitative trading analysis pipeline utilizing machine learning algorithms and technical indicators to generate BUY/SELL signals with automated P&L evaluation.",
      thumbnail: "assets/images/project-stock.svg",
      featured: true,
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Financial Modeling"],
      githubUrl: "https://github.com/nikhil12327",
      liveUrl: "",
      interactiveDemo: "stock-simulator",
      caseStudy: {
        headline: "Data-Driven Algorithmic Trading with Machine Learning and Risk-Adjusted Evaluation",
        overview: "Designed an algorithmic financial analysis pipeline that extracts historical market OHLCV data, calculates multi-timeframe technical indicators, trains predictive ML models, and backtests automated trading strategies.",
        role: "Lead ML & Quantitative Developer",
        timeline: "Jan 2025 - Apr 2025",
        problem: "Financial time series data exhibits non-stationarity, noise, and high volatility, making naïve indicator trading prone to severe drawdowns and false signals.",
        solution: "Implemented feature engineering across moving averages (EMA 50/200), RSI, MACD, and Bollinger Bands, feeding vectorized Scikit-learn classification and regression models with walk-forward validation.",
        architecture: [
          "Data Ingestion & Cleaning: Time-series alignment and missing data interpolation in Pandas & NumPy.",
          "Feature Engineering: Technical indicator synthesis and trend momentum labeling.",
          "Backtesting Engine: Transaction simulation computing Sharpe Ratio, Win Rate, Profit Factor, and Maximum Drawdown.",
          "Visualization: Dynamic Equity Curve visualization and P&L distribution plotting with Matplotlib."
        ],
        keyFeatures: [
          "Automated BUY/SELL signal generation pipeline",
          "Comprehensive risk evaluation: Sharpe Ratio, Win Rate, Profit Factor, Max Drawdown",
          "Automated Profit & Loss analysis with cumulative equity curve rendering",
          "Modular architecture adaptable to equities, crypto, and index benchmarks"
        ],
        technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Time Series Analysis"],
        learnings: "Deepened practical understanding of quantitative risk metrics, preventing lookahead bias in backtests, and statistical feature engineering."
      }
    },
    {
      id: "deep-learning-image-classification",
      title: "Image Classification via Deep Learning (CNN)",
      category: "aiml",
      categoryLabel: "Deep Learning & Computer Vision",
      year: "2024",
      badge: "Deep Learning",
      shortDescription: "A high-accuracy multi-class image classification model architected with Convolutional Neural Networks (CNNs), automated image preprocessing, and OpenCV feature extraction.",
      thumbnail: "assets/images/project-cv.svg",
      featured: true,
      tags: ["Python", "TensorFlow/Keras", "OpenCV", "CNN", "NumPy", "Deep Learning"],
      githubUrl: "https://github.com/nikhil12327",
      liveUrl: "",
      interactiveDemo: "cv-filter",
      caseStudy: {
        headline: "Multi-Class Visual Recognition with Convolutional Neural Networks & OpenCV",
        overview: "Engineered an end-to-end computer vision workflow spanning image augmentation, normalization, deep convolutional neural network architecture design, hyperparameter tuning, and real-time inference.",
        role: "Deep Learning Developer",
        timeline: "Aug 2024 - Oct 2024",
        problem: "Variations in lighting, orientation, and background noise significantly degrade image classification accuracy in real-world scenarios.",
        solution: "Built a customized CNN architecture featuring convolutional layers, batch normalization, max pooling, dropout regularization, and dense classification layers trained with data augmentation pipelines.",
        architecture: [
          "Preprocessing & Augmentation: OpenCV & Keras ImageDataGenerator for rotation, zoom, shear, and color-space normalization.",
          "Model Architecture: Multi-layer Convolutional Neural Network with ReLU activations, Dropout, and Softmax classification.",
          "Evaluation & Inference: Confusion matrices, Precision/Recall metrics, and single-image batch inference test harness."
        ],
        keyFeatures: [
          "Multi-class image classification with high validation accuracy",
          "Automated image preprocessing, resizing, and normalization pipeline",
          "Robust model evaluation with ROC curves and confusion matrix diagnostics",
          "Lightweight inference engine capable of real-time prediction"
        ],
        technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "CNN Architectures"],
        learnings: "Mastered convolutional feature hierarchy, backpropagation optimization, and regularization strategies to combat overfitting."
      }
    },
    {
      id: "hospital-management-system",
      title: "Hospital Management & Database System",
      category: "systems",
      categoryLabel: "Database & Systems",
      year: "2024",
      badge: "Database Design",
      shortDescription: "A robust, multi-tiered database management system built with Java and MySQL to orchestrate patient triage, doctor scheduling, consultations, and automated billing workflows.",
      thumbnail: "assets/images/project-hospital.svg",
      featured: true,
      tags: ["Java", "MySQL", "JDBC", "Database Normalization", "OOP", "ACID Transactions"],
      githubUrl: "https://github.com/nikhil12327",
      liveUrl: "",
      caseStudy: {
        headline: "Streamlining Medical Administration with High-Integrity Relational Data Architecture",
        overview: "A normalized 3NF relational database schema in MySQL coupled with a Java desktop application utilizing JDBC. Features role-based access for Receptionists, Doctors, and Admin personnel with transactional safety.",
        role: "Lead Software & Database Developer",
        timeline: "4 Weeks",
        problem: "Managing medical records, appointments, and billing in silos causes administrative delays and inconsistent data.",
        solution: "Designed normalized tables with foreign key constraints, automated triggers for invoice generation, and indexing for sub-millisecond queries.",
        architecture: [
          "Data Layer: MySQL with foreign key constraints, triggers for automated billing calculations.",
          "Business Logic: Java service classes adhering to OOP and MVC design patterns.",
          "UI/Interaction: Clean desktop interface with structured form validations."
        ],
        keyFeatures: [
          "Role-based authentication & permissions matrix",
          "Automated billing calculation with tax, pharmacy, and bed-charge aggregates",
          "Doctor availability & appointment slot scheduling engine",
          "Transactional database rollbacks to prevent orphaned medical records"
        ],
        technologies: ["Java", "MySQL", "JDBC", "SQL Optimization", "Relational Modeling"],
        learnings: "Deepened expertise in relational integrity constraints, ACID transactions, and decoupled Java architecture."
      }
    },
    {
      id: "text-to-morse-engine",
      title: "Text to Morse Code & Audio Synthesizer",
      category: "systems",
      categoryLabel: "Algorithms & Audio",
      year: "2024",
      badge: "Algorithms & Audio",
      shortDescription: "An ultra-fast, bi-directional text and Morse code translation engine featuring real-time Web Audio sine wave synthesis, optical flash playback, and resilient input parsing.",
      thumbnail: "assets/images/project-morse.svg",
      featured: false,
      tags: ["Python", "Algorithms", "Audio Synthesis", "State Machine", "Clean Code"],
      githubUrl: "https://github.com/nikhil12327",
      liveUrl: "",
      interactiveDemo: "morse-synthesizer",
      caseStudy: {
        headline: "Bi-Directional Telecommunication Protocol with Mathematical Audio Generation",
        overview: "Modular encoding/decoding engine translating natural text into international Morse Code adhering to official ITU-R standards with real-time sine-wave audio synthesis.",
        role: "Developer",
        timeline: "1 Week",
        problem: "Irregular inputs and choppy acoustic durations in standard converters.",
        solution: "Implemented O(1) hash table lookup with smooth envelope attack/decay audio sine generation.",
        architecture: [
          "Lexical Parser: Tokenizes incoming strings, handling edge cases.",
          "Translation Engine: O(1) time-complexity mapping.",
          "Audio Synthesizer: Mathematical sine wave generation with millisecond-accurate timing."
        ],
        keyFeatures: [
          "Bi-directional translation (Text ⇄ Morse Code)",
          "Acoustic tone generator with customizable WPM",
          "Visual strobe / optical flash playback mode"
        ],
        technologies: ["Python", "Data Structures", "Audio Processing", "Unit Testing"],
        learnings: "Practiced test-driven development (TDD) and time-frequency signal synthesis principles."
      }
    },
    {
      id: "cinematic-brand-film",
      title: "Cinematic Reel & Visual Post-Production",
      category: "creative",
      categoryLabel: "Video Editing & Color Grading",
      year: "2025",
      badge: "Creative Direction",
      shortDescription: "A high-impact cinematic edit showcasing rhythm-driven cutting, sound design, and custom color grading in DaVinci Resolve.",
      thumbnail: "assets/images/project-video-reel.svg",
      featured: true,
      tags: ["DaVinci Resolve", "Color Grading", "Premiere Pro", "Sound Design", "Pacing"],
      githubUrl: "",
      liveUrl: "#video-showcase",
      interactiveDemo: "color-grade-toggle",
      caseStudy: {
        headline: "Crafting Narrative Momentum Through Rhythm, Color, and Acoustic Layering",
        overview: "Showcase of video post-production balancing tight rhythmic cuts with filmic color palettes, atmospheric sound effects, and seamless motion transitions.",
        role: "Director, Video Editor & Colorist",
        timeline: "2 Weeks",
        problem: "Maintaining viewer attention and emotional engagement across dynamic visual cuts.",
        solution: "Constructed non-linear narrative with beat-matching, custom foley layering, and 3-node color grading in DaVinci Resolve.",
        architecture: [
          "Assembly: Kinetic cutting adhering to emotional beats.",
          "Color Pipeline: DaVinci YRGB Color Managed Log-to-Rec.709 conversion.",
          "Sound: Multi-track audio engineering with spatial stereo imaging."
        ],
        keyFeatures: [
          "24fps cinematic filmic cadence",
          "Custom color contrast curve & highlight rolloff",
          "Layered sound design master"
        ],
        technologies: ["DaVinci Resolve Studio", "Adobe Premiere Pro", "After Effects"],
        learnings: "Mastered color-managed workflows, split-second narrative pacing, and acoustic dynamics."
      }
    }
  ],

  // ==========================================
  // 5. CERTIFICATIONS & ACCREDITATIONS
  // ==========================================
  certifications: [
    {
      id: "deloitte-tech",
      title: "Technology Job Simulation",
      issuer: "Deloitte",
      platform: "Forage",
      date: "January 15th, 2026",
      badge: "Verified Credential",
      description: "Completed practical simulation tasks in core software engineering, coding, and systems development verified by Deloitte.",
      skillsGained: ["Coding", "Software Development", "System Architecture", "Problem Solving"],
      credentialCode: "z2eDmvDMnyqMmBhrC",
      userVerificationCode: "6968f383b868aacca85b3268",
      thumbnail: "assets/images/cert-deloitte-tech.svg"
    },
    {
      id: "deloitte-data",
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      platform: "Forage",
      date: "January 20th, 2026",
      badge: "Verified Credential",
      description: "Completed practical simulation tasks in comprehensive data analysis and forensic technology verified by Deloitte.",
      skillsGained: ["Data Analysis", "Forensic Technology", "Business Intelligence", "Pattern Recognition"],
      credentialCode: "qhNs4A3LryTHbnrj4",
      userVerificationCode: "6968f383b868aacca85b3268",
      thumbnail: "assets/images/cert-deloitte-data.svg"
    }
  ],

  // ==========================================
  // 6. ACHIEVEMENTS & AWARDS
  // ==========================================
  achievements: [
    {
      title: "1st Prize — Harit Manthan National Hackathon",
      organization: "Delhi Development Authority (DDA)",
      year: "2024",
      badge: "National 1st Place",
      description: "Secured first prize in the national-level hackathon for developing an innovative technology solution evaluated on technical complexity, feasibility, and real-world impact."
    },
    {
      title: "500+ LeetCode Problems Solved",
      organization: "LeetCode Competitive Programming",
      year: "2024 - 2026",
      badge: "DSA Mastery",
      description: "Demonstrated deep mastery of Data Structures and Algorithms across Arrays, Trees, Dynamic Programming, Graphs, and System Design with clean, optimized code."
    },
    {
      title: "District Rank 18 — NTSE Level-1",
      organization: "National Talent Search Examination (NTSE)",
      year: "2021",
      badge: "Academic Honor",
      description: "Ranked 18th in the district in the prestigious national talent search assessment evaluating scholastic aptitude and reasoning."
    }
  ],

  // ==========================================
  // 7. VIDEO EDITING SHOWCASE ITEMS
  // ==========================================
  videoShowcase: [
    {
      id: "showcase-1",
      title: "Cinematic Showreel 2025",
      genre: "Showreel / Montage",
      duration: "01:24",
      software: "DaVinci Resolve • Premiere Pro",
      role: "Editor • Colorist • Sound Designer",
      description: "Fast-paced montage highlighting camera motion, visual rhythm, dynamic match cuts, and custom sound design.",
      thumbnail: "assets/images/video-thumb-1.svg",
      aspectRatio: "16:9",
      colorNotes: "Graded in DaVinci YRGB Color Managed. Kodachrome-inspired warm tones with deep charcoal shadow rolloff.",
      audioNotes: "12-layer soundscape featuring sub-bass drops, whoosh impacts, and environmental ambient foley.",
      workflowPillars: ["Color Management", "Pacing & Kinetic Cuts", "Sound Architecture", "Aspect Masking"]
    },
    {
      id: "showcase-2",
      title: "Short Film Narrative Cut",
      genre: "Cinematic Drama",
      duration: "03:15",
      software: "Premiere Pro • After Effects",
      role: "Lead Editor • Color Grading",
      description: "Pacing-focused dialogue edit balancing dramatic silences, reaction shots, and atmospheric tone.",
      thumbnail: "assets/images/video-thumb-2.svg",
      aspectRatio: "2.39:1 Anamorphic",
      colorNotes: "Low-key moody aesthetic with desaturated greens and soft skin luminance.",
      audioNotes: "Dialogue cleanup using spectral de-noise, subtle ambient room tone, and acoustic reverb matching.",
      workflowPillars: ["Dialogue Rhythm", "Reaction Timing", "Mood Grading", "Subtle Motion"]
    },
    {
      id: "showcase-3",
      title: "Dynamic Social & Product Teaser",
      genre: "Commercial / Social",
      duration: "00:45",
      software: "After Effects • DaVinci Resolve",
      role: "Motion Graphics • Sound Sync",
      description: "High-energy commercial cut with synchronized typography, speed ramps, and seamless masking transitions.",
      thumbnail: "assets/images/video-thumb-3.svg",
      aspectRatio: "9:16 / 16:9",
      colorNotes: "Vibrant high-contrast punch with sharp product highlights.",
      audioNotes: "Hyper-sync sound effects linked directly to frame-accurate kinetic transitions.",
      workflowPillars: ["Speed Ramping", "Audio-Visual Sync", "Typography", "Conversion Hook"]
    }
  ],

  // ==========================================
  // 8. PHOTOGRAPHY GALLERY
  // ==========================================
  photography: [
    {
      id: "photo-1",
      title: "Chiaroscuro Street Silhouette",
      category: "street",
      categoryName: "Street & Urban",
      location: "Metropolitan District",
      year: "2025",
      exif: {
        camera: "Mirrorless Pro",
        lens: "50mm f/1.8 Prime",
        aperture: "f/2.2",
        shutter: "1/800s",
        iso: "100",
        focalLength: "50mm"
      },
      image: "assets/images/photo-street-1.svg",
      aspect: "3:4",
      story: "A lone pedestrian walks through a sharp sliver of morning sunlight slicing through skyscrapers."
    },
    {
      id: "photo-2",
      title: "Monochrome Architectural Lines",
      category: "architecture",
      categoryName: "Architecture",
      location: "City Center",
      year: "2025",
      exif: {
        camera: "Mirrorless Pro",
        lens: "24-70mm f/2.8",
        aperture: "f/8.0",
        shutter: "1/250s",
        iso: "200",
        focalLength: "28mm"
      },
      image: "assets/images/photo-arch-1.svg",
      aspect: "16:9",
      story: "Geometric steel and glass beams intersecting in stark black and white contrast."
    },
    {
      id: "photo-3",
      title: "Golden Hour Cinematic Portrait",
      category: "portraits",
      categoryName: "Portraits",
      location: "Urban Rooftop",
      year: "2025",
      exif: {
        camera: "Mirrorless Pro",
        lens: "85mm f/1.4 Prime",
        aperture: "f/1.8",
        shutter: "1/1000s",
        iso: "100",
        focalLength: "85mm"
      },
      image: "assets/images/photo-portrait-1.svg",
      aspect: "3:4",
      story: "Warm backlighting highlighting subject contours with creamy bokeh depth of field."
    },
    {
      id: "photo-4",
      title: "Nocturnal Neon Reflections",
      category: "street",
      categoryName: "Street & Urban",
      location: "Downtown Alleys",
      year: "2024",
      exif: {
        camera: "Mirrorless Pro",
        lens: "35mm f/1.4",
        aperture: "f/1.4",
        shutter: "1/125s",
        iso: "800",
        focalLength: "35mm"
      },
      image: "assets/images/photo-street-2.svg",
      aspect: "4:3",
      story: "Rain-slicked asphalt reflecting vivid neon storefronts with deep indigo shadows."
    },
    {
      id: "photo-5",
      title: "Minimalist Mountain Mist",
      category: "landscape",
      categoryName: "Landscape & Nature",
      location: "Highland Ranges",
      year: "2024",
      exif: {
        camera: "Mirrorless Pro",
        lens: "70-200mm f/4.0",
        aperture: "f/5.6",
        shutter: "1/400s",
        iso: "100",
        focalLength: "135mm"
      },
      image: "assets/images/photo-nature-1.svg",
      aspect: "16:9",
      story: "Soft morning mist rolling over layered ridge lines under a subtle gradient sky."
    },
    {
      id: "photo-6",
      title: "Editorial Studio Framing",
      category: "editorial",
      categoryName: "Editorial",
      location: "Studio Loft",
      year: "2025",
      exif: {
        camera: "Mirrorless Pro",
        lens: "50mm f/1.8 Prime",
        aperture: "f/2.8",
        shutter: "1/200s",
        iso: "100",
        focalLength: "50mm"
      },
      image: "assets/images/photo-editorial-1.svg",
      aspect: "3:4",
      story: "Intentional styling and controlled directional softbox lighting for an editorial publication."
    }
  ],

  // ==========================================
  // 9. SKILLS MATRIX
  // ==========================================
  skills: {
    programming: [
      { name: "C & C++", level: "Advanced", desc: "Data Structures, Algorithms, Memory Management, Problem Solving" },
      { name: "Python", level: "Advanced", desc: "AI/ML, Deep Learning, Pandas, NumPy, Scikit-learn, OpenCV" },
      { name: "Java", level: "Proficient", desc: "Object-Oriented Programming, MVC, JDBC, Enterprise Systems" }
    ],
    webAndCloud: [
      { name: "React.js & Vite", level: "Advanced", desc: "Hooks, State Management, High-Performance SPA Architectures" },
      { name: "Tailwind CSS", level: "Advanced", desc: "Modern Responsive Utility Layouts, Design Systems" },
      { name: "Firebase Authentication", level: "Advanced", desc: "Multi-Role Auth, JWT, Security Rule Architecture" },
      { name: "Cloud Firestore", level: "Advanced", desc: "Real-Time Subscriptions, Document Modeling, ACID Transactions" },
      { name: "MySQL", level: "Proficient", desc: "Schema Normalization (3NF), Query Optimization, Triggers, Indexing" },
      { name: "Firebase Hosting & Git", level: "Advanced", desc: "CI/CD Deployment, Version Control, Pull Requests" }
    ],
    aimlAndVision: [
      { name: "TensorFlow & Keras", level: "Proficient", desc: "Convolutional Neural Networks (CNNs), Model Training & Evaluation" },
      { name: "Computer Vision (OpenCV)", level: "Proficient", desc: "Image Segmentation, Preprocessing, Feature Extraction" },
      { name: "Pandas & NumPy", level: "Advanced", desc: "High-Performance Matrix Operations & Time-Series Data Pipelines" },
      { name: "Scikit-Learn", level: "Proficient", desc: "Supervised/Unsupervised Learning, Regression, Backtesting" },
      { name: "Matplotlib", level: "Proficient", desc: "Quantitative Plotting, Performance Metrics, Equity Curves" }
    ],
    creativeMedia: [
      { name: "Piano (Keyboard)", level: "Passionate", desc: "Instrumental music, acoustic harmony, melodic structure" },
      { name: "Video Editing & Color Grading", level: "Advanced", desc: "DaVinci Resolve Studio, Premiere Pro, Rec.709 Color Management" },
      { name: "Photography & Composition", level: "Advanced", desc: "Portrait & Landscape Photography, RAW Lightroom Development" }
    ]
  },

  // ==========================================
  // 10. EXPERIENCE & EDUCATION TIMELINE
  // ==========================================
  experience: [
    {
      period: "June 2026",
      role: "Full Stack Developer Intern",
      organization: "Voat Network — RIDEX Bike Taxi Platform",
      badge: "Internship",
      description: "Developed a full-stack bike taxi booking platform with Customer, Rider, and Admin web applications using React.js, Vite, Firebase Authentication, Firestore, and Tailwind CSS.",
      highlights: [
        "Implemented real-time ride lifecycle management: ride booking, rider assignment, live ride status updates, wallet payments, and rider approval workflows",
        "Built an Admin Dashboard for live ride monitoring, customer and rider management, revenue analytics, KPI tracking, activity timeline, and search functionality",
        "Deployed production web applications using Firebase Hosting with zero-downtime CI/CD"
      ]
    },
    {
      period: "2023 - 2027",
      role: "B.Tech in Computer Science and Engineering",
      organization: "National Institute of Technology, Goa (NIT Goa)",
      badge: "Education",
      description: "Pursuing Bachelor of Technology in Computer Science & Engineering. Active leader in coding, hackathons, and technical projects.",
      highlights: [
        "Core coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Machine Learning",
        "1st Prize in national-level Harit Manthan Hackathon (Delhi Development Authority)",
        "500+ LeetCode problems solved demonstrating algorithmic mastery"
      ]
    },
    {
      period: "2021 - 2023",
      role: "Higher Secondary (Class XII) — 95.7%",
      organization: "Sri Chaitanya Junior College",
      badge: "Academic Excellence",
      description: "Completed Class XII Board Examinations with 95.7% distinction in Mathematics, Physics, and Chemistry.",
      highlights: [
        "Secured District Rank 18 in NTSE Level-1 (2021)",
        "Top-tier performance in national competitive engineering entrance tests"
      ]
    },
    {
      period: "2021",
      role: "Secondary School (Class X) — 99.0%",
      organization: "Sri Chaitanya High School",
      badge: "Academic Excellence",
      description: "Graduated Class X with a stellar 99.0% academic record.",
      highlights: [
        "Consistent academic rank 1 throughout secondary education"
      ]
    }
  ],

  // ==========================================
  // 11. FREELANCE SERVICES & VALUE PROPOSITION
  // ==========================================
  services: [
    {
      icon: "code",
      title: "Full-Stack Web Development",
      description: "Building fast, reactive web applications, interactive dashboards, and SaaS portals with React, Vite, Tailwind CSS, and Firebase/SQL backends.",
      deliverables: ["Custom Web Applications & Portals", "Real-Time Firebase / SQL Integration", "Responsive UI & Admin Dashboards"]
    },
    {
      icon: "cpu",
      title: "Machine Learning & Computer Vision",
      description: "Developing practical deep learning architectures, image recognition pipelines, and predictive analytics using Python, TensorFlow, and OpenCV.",
      deliverables: ["Convolutional Neural Networks (CNNs)", "Image Processing & Feature Extraction", "Time-Series Predictive Pipelines"]
    },
    {
      icon: "video",
      title: "Video Editing & Post-Production",
      description: "High-retention commercial cuts, pacing, sound design, and color grading in DaVinci Resolve Studio.",
      deliverables: ["Commercial Showreels & Promotional Cuts", "Color Grading in DaVinci Resolve", "Multi-Track Audio & Sound Sync"]
    },
    {
      icon: "camera",
      title: "Photography & Light Direction",
      description: "Still photography with prime lenses, natural light control, and precision RAW post-processing.",
      deliverables: ["High-Resolution Portraiture", "Architecture & Urban Studies", "Curated RAW Image Collections"]
    }
  ],

  // ==========================================
  // 12. SOCIAL & CONTACT LINKS
  // ==========================================
  socialLinks: [
    { name: "GitHub", url: "https://github.com/nikhil12327", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/nikhil-bonigala", icon: "linkedin" },
    { name: "Email", url: "mailto:bonigalanikhil2@gmail.com", icon: "mail" },
    { name: "Phone", url: "tel:+919100372514", icon: "phone" }
  ]
};

// Export for module systems or attach to window for standalone vanilla browser execution
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
} else if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
}
