export interface ProjectItem {
  id: number;
  projectNo: string;
  students: string[];
  studentNames: string;
  rollNumbers: string;
  project: string;
  category: string;
  description: string;
  github: string;
  live: string;
  hasLiveHost: boolean;
  previewTheme: string;
  tags: string[];
  submitted: boolean;
}

export function getProceduralPreviewSvg(theme: string, projectNo: string, projectTitle: string, submitted: boolean): string {
  if (!submitted) {
    const unsubmittedSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 250" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#141416"/>
        <rect x="5%" y="5%" width="90%" height="90%" rx="12" fill="none" stroke="rgba(255,100,100,0.3)" stroke-width="1.5" stroke-dasharray="8 8"/>
        <circle cx="50%" cy="40%" r="35" fill="rgba(255,50,50,0.1)"/>
        <text x="50%" y="43%" text-anchor="middle" fill="#ff4d4d" font-family="sans-serif" font-size="28">!</text>
        <text x="50%" y="70%" text-anchor="middle" fill="#ff6666" font-family="sans-serif" font-size="14" font-weight="bold" letter-spacing="1">NO REPOSITORY SUBMITTED</text>
        <text x="50%" y="83%" text-anchor="middle" fill="#888888" font-family="monospace" font-size="11">TEAM PROJECT // NO. ${projectNo}</text>
      </svg>
    `;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(unsubmittedSvg)}`;
  }

  const themes: Record<string, string> = {
    "cyan-nodes": `
      <rect width="100%" height="100%" fill="#08080a"/>
      <circle cx="50%" cy="50%" r="40%" fill="url(#grad-${projectNo})" />
      <path d="M 40,60 L 120,100 L 220,50 L 320,120 L 400,70" stroke="#00f0ff" stroke-width="2" fill="none" stroke-dasharray="4 4" opacity="0.6"/>
      <circle cx="120" cy="100" r="6" fill="#00f0ff"/>
      <circle cx="220" cy="50" r="8" fill="#ffffff"/>
      <circle cx="320" cy="120" r="5" fill="#00f0ff"/>
      <text x="50%" y="85%" text-anchor="middle" fill="#00f0ff" font-family="sans-serif" font-size="12" letter-spacing="2">TEAM PROJECT // NO. ${projectNo}</text>
    `,
    "purple-mesh": `
      <rect width="100%" height="100%" fill="#0b0812"/>
      <path d="M 0 100 Q 150 20 300 100 T 600 100" stroke="#7000ff" stroke-width="3" fill="none" opacity="0.7"/>
      <path d="M 0 130 Q 150 50 300 130 T 600 130" stroke="#3a86ff" stroke-width="2" fill="none" opacity="0.5"/>
      <text x="50%" y="85%" text-anchor="middle" fill="#7000ff" font-family="sans-serif" font-size="12" letter-spacing="2">TEAM PROJECT // NO. ${projectNo}</text>
    `,
    "dark-terminal": `
      <rect width="100%" height="100%" fill="#09090b"/>
      <rect x="20" y="20" width="90%" height="75%" rx="8" fill="#121216" stroke="#25252e" stroke-width="1"/>
      <circle cx="40" cy="38" r="4" fill="#ff5f56"/>
      <circle cx="54" cy="38" r="4" fill="#ffbd2e"/>
      <circle cx="68" cy="38" r="4" fill="#27c93f"/>
      <text x="35" y="75" fill="#00ff66" font-family="monospace" font-size="11">$ git clone team_project_${projectNo}</text>
      <text x="35" y="100" fill="#ffffff" font-family="monospace" font-size="11">&gt; REPOSITORY DEPLOYED [OK]</text>
    `,
    "neon-grid": `
      <rect width="100%" height="100%" fill="#05000a"/>
      <g stroke="rgba(255,0,128,0.25)" stroke-width="1">
        <line x1="0" y1="50" x2="500" y2="50"/>
        <line x1="0" y1="100" x2="500" y2="100"/>
        <line x1="0" y1="150" x2="500" y2="150"/>
        <line x1="100" y1="0" x2="100" y2="300"/>
        <line x1="250" y1="0" x2="250" y2="300"/>
      </g>
      <polygon points="250,40 330,160 170,160" fill="none" stroke="#ff007f" stroke-width="2"/>
    `,
    "wave-lines": `
      <rect width="100%" height="100%" fill="#030a10"/>
      <path d="M 10 100 C 80 20, 120 180, 200 100 S 300 20, 400 100" stroke="#00f0ff" stroke-width="3" fill="none"/>
      <path d="M 10 120 C 80 40, 120 200, 200 120 S 300 40, 400 120" stroke="#0088ff" stroke-width="2" fill="none" opacity="0.6"/>
      <text x="50%" y="85%" text-anchor="middle" fill="#00f0ff" font-family="sans-serif" font-size="12">TEAM PROJECT // NO. ${projectNo}</text>
    `,
    "silver-wireframe": `
      <rect width="100%" height="100%" fill="#0a0a0c"/>
      <rect x="25%" y="20%" width="50%" height="60%" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="6 6"/>
      <circle cx="50%" cy="50%" r="30" fill="none" stroke="#ffffff" stroke-width="2"/>
    `
  };

  const defaultSvg = `
    <rect width="100%" height="100%" fill="#0e0e12"/>
    <circle cx="50%" cy="45%" r="45" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
    <polygon points="50%,30% 60%,55% 40%,55%" fill="rgba(255,255,255,0.15)" stroke="#ffffff" stroke-width="1"/>
    <text x="50%" y="85%" text-anchor="middle" fill="#888888" font-family="monospace" font-size="12" letter-spacing="1">PROJECT // NO. ${projectNo}</text>
  `;

  const bodyContent = themes[theme] || defaultSvg;

  const svgData = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 250" width="100%" height="100%">
      <defs>
        <radialGradient id="grad-${projectNo}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
      </defs>
      ${bodyContent}
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgData)}`;
}

// 25 Combined Projects representing all 50 students paired 2-by-2
export const projects: ProjectItem[] = [
  {
    id: 1,
    projectNo: "01",
    students: ["ABHIRAMI AJITH (Roll 01)", "ASHAMS BABY ABRAHAM (Roll 50)"],
    studentNames: "ABHIRAMI AJITH & ASHAMS BABY ABRAHAM",
    rollNumbers: "Roll 01 & Roll 50",
    project: "EventWave",
    category: "EVENT MANAGEMENT",
    description: "A full-stack event management and registration portal for discovering and hosting live college events.",
    github: "https://github.com/abhiramiajith2123-ctrl/EventWave",
    live: "https://campus-event-wave.vercel.app/",
    hasLiveHost: true,
    previewTheme: "cyan-nodes",
    tags: ["Submitted", "Vercel Live", "Full Stack", "HTML5", "CSS3", "JavaScript"],
    submitted: true
  },
  {
    id: 2,
    projectNo: "02",
    students: ["ABHISHEK M KUMAR (Roll 02)", "ADERSH RAJEEV (Roll 49)"],
    studentNames: "ABHISHEK M KUMAR & ADERSH RAJEEV",
    rollNumbers: "Roll 02 & Roll 49",
    project: "Hotel Booking System",
    category: "BOOKING SYSTEM",
    description: "Online hotel reservation platform for checking room availability, luxury amenities, and managing customer bookings.",
    github: "https://github.com/abhicollege098-art/HOTEL-BOOKING2",
    live: "",
    hasLiveHost: false,
    previewTheme: "purple-mesh",
    tags: ["Submitted", "Code Repo Only", "Full Stack", "HTML5", "CSS3"],
    submitted: true
  },
  {
    id: 3,
    projectNo: "03",
    students: ["ADHITHYAN MANOJ (Roll 03)", "JAIS JOJEN (Roll 48)"],
    studentNames: "ADHITHYAN MANOJ & JAIS JOJEN",
    rollNumbers: "Roll 03 & Roll 48",
    project: "Bus Booking System",
    category: "TRANSPORTATION",
    description: "Centralized bus ticket reservation platform with route selection, seat layout picker, and passenger ticket details.",
    github: "https://github.com/adhithyan-manoj/collegeprojectfullstack",
    live: "https://collegeprojectfullstack.vercel.app/",
    hasLiveHost: true,
    previewTheme: "dark-terminal",
    tags: ["Submitted", "Vercel Live", "Full Stack", "HTML5", "JavaScript"],
    submitted: true
  },
  {
    id: 4,
    projectNo: "04",
    students: ["AFEYA (Roll 04)", "JISHNU KS (Roll 47)"],
    studentNames: "AFEYA & JISHNU KS",
    rollNumbers: "Roll 04 & Roll 47",
    project: "Hotel Centre Management System (HCMS)",
    category: "MANAGEMENT SYSTEM",
    description: "Hotel administrative management portal for managing guest checking, staff allocation, room status, and billing.",
    github: "https://github.com/KSJISHNU/HCMS",
    live: "",
    hasLiveHost: false,
    previewTheme: "neon-grid",
    tags: ["Submitted", "Code Repo Only", "Full Stack", "PHP", "MySQL"],
    submitted: true
  },
  {
    id: 5,
    projectNo: "05",
    students: ["AFNAN MOHAMMED P FASSAL (Roll 05)", "LALITHAMBIKA P NAIR (Roll 46)"],
    studentNames: "AFNAN MOHAMMED P FASSAL & LALITHAMBIKA P NAIR",
    rollNumbers: "Roll 05 & Roll 46",
    project: "ArtisanConnect",
    category: "ARTISAN & MARKETPLACE",
    description: "ArtisanConnect platform empowering local artisans and craftsmen to list handmade products, showcase artwork, and connect directly with buyers.",
    github: "https://github.com/afnanmpf/artistconnect",
    live: "https://artisanconnect-elet.vercel.app/",
    hasLiveHost: true,
    previewTheme: "cyan-nodes",
    tags: ["Submitted", "Vercel Live", "Full Stack", "JavaScript", "HTML/CSS"],
    submitted: true
  },
  {
    id: 6,
    projectNo: "06",
    students: ["ALAN DEEPU (Roll 06)", "JESWIN JACOB (Roll 45)"],
    studentNames: "ALAN DEEPU & JESWIN JACOB",
    rollNumbers: "Roll 06 & Roll 45",
    project: "Hostel Mess Management System",
    category: "CAMPUS SYSTEM",
    description: "Hostel dining hall mess management application for tracking meal counts, monthly billing, and menu schedules.",
    github: "https://github.com/alandeepu77/hostelmess",
    live: "",
    hasLiveHost: false,
    previewTheme: "wave-lines",
    tags: ["Submitted", "Code Repo Only", "Full Stack", "Database"],
    submitted: true
  },
  {
    id: 7,
    projectNo: "07",
    students: ["ALWIN ANTONY (Roll 07)", "SOJO JOSEPH THOMAS (Roll 44)"],
    studentNames: "ALWIN ANTONY & SOJO JOSEPH THOMAS",
    rollNumbers: "Roll 07 & Roll 44",
    project: "Student Management System",
    category: "EDUCATIONAL",
    description: "Comprehensive student records portal for managing academic profiles, course enrollment, and attendance records.",
    github: "https://github.com/alw3611/student-management-system",
    live: "",
    hasLiveHost: false,
    previewTheme: "cyan-nodes",
    tags: ["Submitted", "Code Repo Only", "Full Stack", "CRUD"],
    submitted: true
  },
  {
    id: 8,
    projectNo: "08",
    students: ["ANN ANNA JOSE (Roll 08)", "SHAUN S THOMAS (Roll 43)"],
    studentNames: "ANN ANNA JOSE & SHAUN S THOMAS",
    rollNumbers: "Roll 08 & Roll 43",
    project: "Employee Management System",
    category: "HR & ENTERPRISE",
    description: "Enterprise HR administration portal for managing staff payroll profiles, attendance logs, and performance metrics.",
    github: "https://github.com/shaunsthomas/employee-management-syste",
    live: "",
    hasLiveHost: false,
    previewTheme: "purple-mesh",
    tags: ["Submitted", "Code Repo Only", "Full Stack", "HR Portal"],
    submitted: true
  },
  {
    id: 9,
    projectNo: "09",
    students: ["ANNA ANN JOSEPH (Roll 09)", "SEBAN SONY (Roll 42)"],
    studentNames: "ANNA ANN JOSEPH & SEBAN SONY",
    rollNumbers: "Roll 09 & Roll 42",
    project: "Library Management System",
    category: "MANAGEMENT SYSTEM",
    description: "Digital library cataloguing system for searching books, tracking issues/returns, and managing member memberships.",
    github: "https://github.com/sebansony18-sudo/libraryos",
    live: "https://libraryos-pink.vercel.app/",
    hasLiveHost: true,
    previewTheme: "dark-terminal",
    tags: ["Submitted", "Vercel Live", "Full Stack", "Library DB"],
    submitted: true
  },
  {
    id: 10,
    projectNo: "10",
    students: ["ANTONY B. AMPATTU (Roll 10)", "SARANG L (Roll 41)"],
    studentNames: "ANTONY B. AMPATTU & SARANG L",
    rollNumbers: "Roll 10 & Roll 41",
    project: "Gold Loan Management System",
    category: "FINANCIAL",
    description: "Financial loan processing web application for gold appraisal, interest rate calculation, and customer pledge accounts.",
    github: "https://github.com/ampattuantony-dotcom/Gold-Loan-Management-System",
    live: "https://gold-loan-management-system.onrender.com/",
    hasLiveHost: true,
    previewTheme: "neon-grid",
    tags: ["Submitted", "Render Live", "Finance UI", "Full Stack"],
    submitted: true
  },
  {
    id: 11,
    projectNo: "11",
    students: ["AROMAL SREEKUMAR (Roll 11)", "SANOOP THOMAS (Roll 40)"],
    studentNames: "AROMAL SREEKUMAR & SANOOP THOMAS",
    rollNumbers: "Roll 11 & Roll 40",
    project: "Habit Tracker",
    category: "PRODUCTIVITY",
    description: "Personal productivity web application for creating daily habits, setting completion goals, and visualizing streak charts.",
    github: "https://github.com/awromal/habitTracker",
    live: "https://habit-tracker-lfeq.onrender.com/",
    hasLiveHost: true,
    previewTheme: "silver-wireframe",
    tags: ["Submitted", "Render Live", "Full Stack", "LocalStorage"],
    submitted: true
  },
  {
    id: 12,
    projectNo: "12",
    students: ["ARYA LAKSHMY O A (Roll 12)", "RINO VARGHESE MATHEW (Roll 39)"],
    studentNames: "ARYA LAKSHMY O A & RINO VARGHESE MATHEW",
    rollNumbers: "Roll 12 & Roll 39",
    project: "Cinebook - Movie Booking",
    category: "ENTERTAINMENT",
    description: "Online movie theatre ticket reservation web platform featuring live seat selection layout and showtime schedules.",
    github: "https://github.com/rinomathew107/cinebokk",
    live: "",
    hasLiveHost: false,
    previewTheme: "wave-lines",
    tags: ["Submitted", "Code Repo Only", "Movie Booking", "Full Stack"],
    submitted: true
  },
  {
    id: 13,
    projectNo: "13",
    students: ["ARYA SANTHOSH (Roll 13)", "RIJIN JOHNSON (Roll 38)"],
    studentNames: "ARYA SANTHOSH & RIJIN JOHNSON",
    rollNumbers: "Roll 13 & Roll 38",
    project: "SKILL SWAP",
    category: "COMMUNITY PLATFORM",
    description: "Peer learning skill exchange network connecting students to trade programming, design, and language skills.",
    github: "https://github.com/rijinpunthala007-dot/SKILL_SWAP",
    live: "https://skill-swap-gamma-henna.vercel.app/",
    hasLiveHost: true,
    previewTheme: "cyan-nodes",
    tags: ["Submitted", "Vercel Live", "Full Stack", "Community"],
    submitted: true
  },
  {
    id: 14,
    projectNo: "14",
    students: ["ASWIN BIJU (Roll 14)", "RIHAN MUHAMMED SANEER (Roll 37)"],
    studentNames: "ASWIN BIJU & RIHAN MUHAMMED SANEER",
    rollNumbers: "Roll 14 & Roll 37",
    project: "Organ Donation Management System",
    category: "HEALTHCARE",
    description: "LifeLink emergency donor portal mapping organ availability, hospital request matching, and blood donor registrations.",
    github: "https://github.com/rihanms0077-dot/LifieLink_Organ_Donation_System",
    live: "",
    hasLiveHost: false,
    previewTheme: "purple-mesh",
    tags: ["Submitted", "Code Repo Only", "Healthcare", "Full Stack"],
    submitted: true
  },
  {
    id: 15,
    projectNo: "15",
    students: ["ATHUL K (Roll 15)", "PRANAV R KURUP (Roll 36)"],
    studentNames: "ATHUL K & PRANAV R KURUP",
    rollNumbers: "Roll 15 & Roll 36",
    project: "Borrow Hub",
    category: "SHARING ECONOMY",
    description: "Community tool and resource sharing network allowing neighbors to lend, borrow, and track shared household items.",
    github: "https://github.com/pranavrkurup/borrowhub",
    live: "https://theborrowhub.vercel.app/",
    hasLiveHost: true,
    previewTheme: "dark-terminal",
    tags: ["Submitted", "Vercel Live", "Full Stack", "Web App"],
    submitted: true
  },
  {
    id: 16,
    projectNo: "16",
    students: ["ATHUL KRISHNAN M (Roll 16)", "PIUSH SHAJI (Roll 35)"],
    studentNames: "ATHUL KRISHNAN M & PIUSH SHAJI",
    rollNumbers: "Roll 16 & Roll 35",
    project: "SB SkillHub Course Registration",
    category: "COURSE REGISTRATION",
    description: "SB SkillHub course registration platform for discovering online skill programs, student course enrollments, and user registration.",
    github: "https://github.com/Athhull/sbskill-hub-coures-registarion",
    live: "https://sb-skillhub-registration.vercel.app/",
    hasLiveHost: true,
    previewTheme: "cyan-nodes",
    tags: ["Submitted", "Vercel Live", "Full Stack", "JavaScript"],
    submitted: true
  },
  {
    id: 17,
    projectNo: "17",
    students: ["DEVIKA SURESH (Roll 17)", "NIRENJEN K SUKU (Roll 34)"],
    studentNames: "DEVIKA SURESH & NIRENJEN K SUKU",
    rollNumbers: "Roll 17 & Roll 34",
    project: "Cab Booking System",
    category: "TRANSPORTATION",
    description: "On-demand city cab reservation web portal for calculating ride fares, selecting pickup locations, and driver routing.",
    github: "https://github.com/n1rnjn/cab_booking",
    live: "https://n1rnjn.github.io/cab_booking/",
    hasLiveHost: true,
    previewTheme: "silver-wireframe",
    tags: ["Submitted", "GitHub Pages", "Cab Booking", "Full Stack"],
    submitted: true
  },
  {
    id: 18,
    projectNo: "18",
    students: ["FIYA MARIYAM CHACKOCHAN (Roll 18)", "MELVIN THOMAS (Roll 33)"],
    studentNames: "FIYA MARIYAM CHACKOCHAN & MELVIN THOMAS",
    rollNumbers: "Roll 18 & Roll 33",
    project: "NO PROJECT SUBMITTED",
    category: "UNSUBMITTED",
    description: "No GitHub repository link or project title submitted in the assignment sheet.",
    github: "",
    live: "",
    hasLiveHost: false,
    previewTheme: "wave-lines",
    tags: ["Not Submitted", "Pending Repo"],
    submitted: false
  },
  {
    id: 19,
    projectNo: "19",
    students: ["GEO JOHN CHANDY (Roll 19)", "MELVIN MARTIN (Roll 32)"],
    studentNames: "GEO JOHN CHANDY & MELVIN MARTIN",
    rollNumbers: "Roll 19 & Roll 32",
    project: "Music Club Management System",
    category: "MANAGEMENT SYSTEM",
    description: "Centralized club operations portal for managing music club memberships, audition submissions, gig setlists, rehearsal attendance, and sound gear inventory.",
    github: "https://github.com/geojohnch/musicclubmanagementsystem",
    live: "https://musicclubmanagementsystem.onrender.com/",
    hasLiveHost: true,
    previewTheme: "wave-lines",
    tags: ["Submitted", "Render Live", "Music Club", "Full Stack", "TypeScript"],
    submitted: true
  },
  {
    id: 20,
    projectNo: "20",
    students: ["GOKULKRISHNAN C (Roll 20)", "MEENU S BABU (Roll 31)"],
    studentNames: "GOKULKRISHNAN C & MEENU S BABU",
    rollNumbers: "Roll 20 & Roll 31",
    project: "Employee Leave Management System",
    category: "HR & ENTERPRISE",
    description: "Corporate leave application portal for tracking employee vacation balances, manager approvals, and department calendars.",
    github: "https://github.com/meenusbabu13-ship-it/employee-leave-management",
    live: "https://employee-leave-management-delta.vercel.app/",
    hasLiveHost: true,
    previewTheme: "purple-mesh",
    tags: ["Submitted", "Vercel Live", "HR Portal", "Full Stack"],
    submitted: true
  },
  {
    id: 21,
    projectNo: "21",
    students: ["HARIKRISHNAN U (Roll 21)", "MEBY MANOJ (Roll 30)"],
    studentNames: "HARIKRISHNAN U & MEBY MANOJ",
    rollNumbers: "Roll 21 & Roll 30",
    project: "Billing System",
    category: "RETAIL & COMMERCE",
    description: "Retail point of sale invoice and billing web app for calculating tax subtotals, printing bills, and item inventories.",
    github: "https://github.com/harikrishnanforwork-byte/Billing-system",
    live: "https://billing-system-jet-tau.vercel.app/",
    hasLiveHost: true,
    previewTheme: "dark-terminal",
    tags: ["Submitted", "Vercel Live", "Billing UI", "Full Stack"],
    submitted: true
  },
  {
    id: 22,
    projectNo: "22",
    students: ["JERIN BENNY (Roll 22)", "JOVINO V JOSE (Roll 29)"],
    studentNames: "JERIN BENNY & JOVINO V JOSE",
    rollNumbers: "Roll 22 & Roll 29",
    project: "Medical Store Management",
    category: "HEALTHCARE & PHARMACY",
    description: "Pharmacy inventory system managing medicine batches, expiry tracking, prescription billing, and supplier logs.",
    github: "https://github.com/jerinbenny83-cmyk/medical-store-management",
    live: "",
    hasLiveHost: false,
    previewTheme: "neon-grid",
    tags: ["Submitted", "Code Repo Only", "Pharmacy DB", "Full Stack"],
    submitted: true
  },
  {
    id: 23,
    projectNo: "23",
    students: ["JEROME JOSHI (Roll 23)", "JOSEPH BIJU (Roll 28)"],
    studentNames: "JEROME JOSHI & JOSEPH BIJU",
    rollNumbers: "Roll 23 & Roll 28",
    project: "Hospital Management System",
    category: "HEALTHCARE",
    description: "Hospital information system for scheduling doctor consultations, patient registration, and bed allocation records.",
    github: "https://github.com/Josephbiju16/Hospital-management-system",
    live: "https://hospital-management-system-portal.vercel.app/",
    hasLiveHost: true,
    previewTheme: "silver-wireframe",
    tags: ["Submitted", "Vercel Live", "Healthcare", "Full Stack"],
    submitted: true
  },
  {
    id: 24,
    projectNo: "24",
    students: ["JESVIN JAMESON (Roll 24)", "JOHNSON JOSEPH (Roll 27)"],
    studentNames: "JESVIN JAMESON & JOHNSON JOSEPH",
    rollNumbers: "Roll 24 & Roll 27",
    project: "Inventory Management",
    category: "MANAGEMENT SYSTEM",
    description: "Warehouse stock control portal tracking product quantities, reorder alerts, supplier invoices, and dispatch receipts.",
    github: "https://github.com/johnsonjoseph10865/main-inventory-management",
    live: "https://main-inventory-management.vercel.app/",
    hasLiveHost: true,
    previewTheme: "wave-lines",
    tags: ["Submitted", "Vercel Live", "Inventory DB", "Full Stack"],
    submitted: true
  },
  {
    id: 25,
    projectNo: "25",
    students: ["JOEL JOSEPH (Roll 25)", "JOHN J (Roll 26)"],
    studentNames: "JOEL JOSEPH & JOHN J",
    rollNumbers: "Roll 25 & Roll 26",
    project: "ATS Resume Analysis",
    category: "AI & RECRUITMENT",
    description: "Applicant Tracking System resume scanner evaluating CV keyword density, formatting match, and job description fit.",
    github: "https://github.com/johnjoji2006/ATS-Resume-Analysis",
    live: "https://ai-resume-score-system.onrender.com/",
    hasLiveHost: true,
    previewTheme: "cyan-nodes",
    tags: ["Submitted", "Render Live", "ATS Parser", "Full Stack"],
    submitted: true
  }
];
