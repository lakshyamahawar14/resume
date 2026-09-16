import { EducationItem, ExperienceItem, ProjectItem, SkillGroup, SocialLinkItem } from "@/types";

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    icon: "Github",
    name: "GitHub",
    route: "https://github.com/lakshyamahawar14",
  },
  {
    icon: "Linkedin",
    name: "LinkedIn",
    route: "https://www.linkedin.com/in/lakshya-mahawar-099788209/",
  },
];

export const INTERESTS: string[] = [
  "Competitive Programming",
  "Web Development",
  "Web Scraping",
  "Data Structures & Algorithms",
  "Machine Learning",
];

export const EDUCATION: EducationItem[] = [
  {
    year: 2024,
    examination: "B.Tech (ECE)",
    institution: "Indian Institute of Technology, Roorkee",
    score: "7.348",
  },
  {
    year: 2020,
    examination: "Intermediate (Class XII)",
    institution: "D S Science Academy, Gangapur City (RBSE)",
    score: "96.4%",
  },
];

export const SKILLS: SkillGroup[] = [
  {
    name: "Languages",
    values: [
      "C++",
      "JavaScript",
      "TypeScript",
      "Python",
      "ABAP",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    name: "Frameworks & Libraries",
    values: [
      "Next.js",
      "React",
      "Node.js",
      "TailwindCSS",
      "Express.js",
      "RESTful APIs",
      "OData",
      "Recoil",
      "Redux",
      "Zustand",
      "SAP UI5",
    ],
  },
  {
    name: "Cloud, DevOps & Databases",
    values: [
      "PostgreSQL",
      "Supabase",
      "HANA DB",
      "AWS EC2",
      "Render",
      "Vercel",
      "Firebase",
      "Docker",
      "Git",
      "GitHub",
      "Azure DevOps (ADO)",
    ],
  },
  {
    name: "Emerging Tech & Enterprise (SAP)",
    values: [
      "Generative AI",
      "Large Language Models (LLMs)",
      "Prompt Engineering",
      "SAP BTP",
      "CAP",
      "CDS Views",
      "S/4HANA RISE",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    start: "Aug 2024",
    end: "Present",
    period: 24,
    role: "SAP Fiori Developer",
    organization: "V3iT Consulting Pvt. Ltd.",
    details: {
      title: "Enterprise S/4HANA Cloud RISE & Fiori Application Migration",
      description: [
        "Converted over 80 ABAP program-based SQ01 queries to Analytical Core Data Service (CDS) Views.",
        "Converted CDS Views to Fiori Elements List apps on Business Application Studio (BAS) using Python and AI automation pipeline.",
        "Performed SPAU, SPDD, and SPAU_ENH reconciliations for the latest S/4HANA Cloud RISE system migration.",
        "Created Python script using Playwright to automate the task of adding over 2000 catalogs and tiles, saving hundreds of hours.",
        "Solved ad-hoc problems while migrating an old 2021 S/4HANA system to the latest 2025 S/4HANA Cloud with RISE system.",
        "Provided technical implementation guidelines for business functions related to Supply Chain Management (SCM) projects.",
        "Created technical specifications, ADO testing steps, and quick reference documents, and tested the Fiori apps from frontend to backend.",
        "Automated the task of creating User-Specific manuals for User Acceptance Testing (UAT) using Python.",
      ],
    },
    tools: [
      "SAP Fiori",
      "Python",
      "AI Automation",
      "SAP BTP",
      "CAP",
      "CDS Views",
      "S/4HANA RISE",
      "Playwright",
      "ADO",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    start: "Aug 2026",
    end: "Sep 2026",
    period: 1,
    imageSrc: "/images/chessrevss.avif",
    details: {
      title: "ChessRev - Free Chess.com games review",
      description: [
        "Created a web app using NextJS and tailwind to analyze Chess.com games for free using Stockfish 18 Lite.",
        "It has features like importing recent games of a profile on Chess.com, adding any game from PGN or url of any Chess.com game.",
        "It displays the top engine lines at each move, shows the move classification and a coach commentary based on the tactics of the position.",
        "The Stockfish code runs on the client side while the classification and commentary logic runs on server side using NextJS Edge runtime."
      ],
    },
    tools: ["NodeJS", "NextJS", "TailwindCSS", "Stockfish 18 Lite", "Zustand"],
    link: "https://chessrev.vercel.app/",
  },
  {
    start: "January 2026",
    end: "February 2026",
    period: 2,
    details: {
      title: "VLR Duel Game",
      description: [
        "Created a WebSocket-based real-time 1v1 multiplayer game using Next.js, Tailwind CSS, Supabase Realtime, and Python.",
        "Implemented Login and User Management, Matchmaking Logic, Game Logic, and Score Calculation logic from scratch.",
        "Added database-level restrictions to avoid Race Conditions, Real-time and Low-latency database updates.",
      ],
    },
    tools: [
      "Next.js",
      "PostgreSQL",
      "Supabase",
      "Python",
      "WebSockets",
      "Tailwind CSS",
    ],
  },
  {
    start: "May 2023",
    end: "June 2023",
    period: 1,
    details: {
      title: "Cognitive Therapy Chatbot",
      description: [
        "Designed a fully functional web application containing a Chatbot trained to provide mental health-specific guidance using React, Firebase, Tailwind CSS, and the OpenAI API. Deployed the application to AWS EC2 Lambda instance with PM2 NPM package.",
        "Created a recommendation engine using Python, which recommends articles and blogs by analyzing the user conversation.",
        "Implemented community forum page with Post, Comment, Upvote, Downvote, Edit, and Delete functionalities from scratch.",
        "Created a web scraper using Python to scrape the latest news, blogs, articles, and content within 1000ms.",
      ],
    },
    tools: [
      "React",
      "Python",
      "Node.js",
      "Firebase",
      "AWS EC2",
      "Tailwind CSS",
      "OpenAI API",
    ],
  },
  {
    start: "January 2023",
    end: "April 2023",
    period: 4,
    imageSrc: "/images/mazeaiwebss.avif",
    details: {
      title: "Dynamic Maze Generation Game",
      description: [
        "Developed a Python-based maze game capable of generating mazes of desired size and difficulty (level), analyzing their difficulty and solving them.",
        "Kruskal's algorithm was used to generate the maze data.",
        "Machine learning models like Logistic regression and SVM were used to predict the difficulty of the generated mazes.",
        "PyGame library was used to create the graphical interface for the game.",
      ],
    },
    tools: [
      "Python",
      "Scikit-learn",
      "Numpy",
      "Pandas",
      "Pygame",
      "Graphs",
      "Algorithms",
    ],
    link: "https://maze-ai-web.vercel.app/",
  },
  {
    start: "October 2022",
    end: "November 2022",
    period: 1,
    details: {
      title: "Clustering Queries For Enhanced Customer Support",
      description: [
        "Utilized NLTK library in Python for processing of customer queries dataset.",
        "KMeans and GMM algorithms were used to cluster queries of similar types.",
      ],
    },
    tools: ["Python", "NLTK", "NLP", "Clustering", "Sentiment Analysis"],
  },
];