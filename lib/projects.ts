export const projectsData = [
  {
    slug: "internlink-platform",
    id: "01",
    title: "INTERNLINK PLATFORM",
    category: "Full Stack Web Application",
    shortDesc: "A dedicated platform bridging the gap between students seeking experience and SMEs offering internships.",
    image: "/internlink.png", 
    tools: ["Python", "Flask", "Vanilla JS", "Chart.js", "Cloud SQL", "REST APIs"],
    duration: "4 weeks",
    roles: "Full Stack Developer",
    summary: "Developed 'InternLink', a comprehensive discovery portal featuring dual user flows for students and SMEs. The system includes an algorithmic skill-based matching engine, real-time application tracking, and interactive data visualization dashboards using Chart.js. The backend is driven by a custom Flask REST API, which I recently migrated from local SQLite to a scalable Cloud Database architecture.",
    
    // NEW: Added URLs for the buttons
    githubUrl: "https://github.com/charleswereangoye/internlink-project-team-8-c2.git", 
    demoUrl: "https://internlink-project-team-8-c2.netlify.app",
    
    nextProjectSlug: "personal-portfolio",
    nextProjectTitle: "PERSONAL PORTFOLIO"
  },
  {
    slug: "personal-portfolio",
    id: "02",
    title: "PERSONAL PORTFOLIO",
    category: "Frontend / UI Design",
    shortDesc: "A minimalist, Awwwards-inspired developer portfolio featuring smooth scroll and dynamic theming.",
    image: "/portfolio.png",
    tools: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Lenis"],
    duration: "2 weeks",
    roles: "Frontend Developer & Designer",
    summary: "Designed and developed a highly interactive personal portfolio to showcase my projects and technical skills. The site leverages Next.js and Tailwind CSS for a performant foundation, enhanced with Framer Motion for cinematic page reveals and Lenis for buttery-smooth momentum scrolling. It features dynamic routing for project case studies and a custom-built light/dark theme toggle.",
    
    // NEW: Added URLs for the buttons
    githubUrl: "https://github.com/charleswereangoye/my_portfolio.git",
    demoUrl: "https://charleswereangoye.dev",
    
    nextProjectSlug: "trading-journal",
    nextProjectTitle: "TRADING JOURNAL"
  },
  {
    slug: "trading-journal",
    id: "03",
    title: "TRADING JOURNAL",
    category: "Personal Project / Full Stack",
    shortDesc: "A custom web application built to log, analyze, and review forex trading performance.",
    image: "/journal.png",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    duration: "Ongoing",
    roles: "Full Stack Developer & UI Designer",
    summary: "As an active Forex trader, I realized that most premium trading journal platforms are prohibitively expensive. To solve this, I am building my own custom full-stack application. It allows me to log trades, identify market patterns—specifically utilizing Smart Money Concepts—and maintain disciplined trading psychology. The interface is currently in development, with the UI heavily inspired by high-end, modern data dashboards found on Dribbble.",
    
    // NEW: Added URLs for the buttons
    githubUrl: "https://github.com/charleswereangoye/tradescope.git",
    demoUrl: "", // Left blank since it is still in development
    
    nextProjectSlug: "internlink-platform",
    nextProjectTitle: "INTERNLINK PLATFORM"
  }
];