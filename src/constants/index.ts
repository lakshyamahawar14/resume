export interface ItemDetail {
  title: string;
  description: string[];
}

export interface ExperienceItem {
  start: string;
  end: string;
  period: number;
  role: string;
  organization: string;
  score?: string;
  details: ItemDetail;
  tools?: string[];
}

export interface ProjectItem {
  start: string;
  end: string;
  period: number;
  organization: string;
  details: ItemDetail;
  tools?: string[];
  link?: string;
  imageSrc?: string;
}

export interface EducationItem {
  year: number;
  examination: string;
  institution: string;
  score: string;
}

export interface SkillValue {
  name: string;
  proficiency: "Beginner" | "Intermediate" | "Advanced";
}

export interface SkillGroup {
  name: string;
  values: SkillValue[];
}

export interface SocialLinkItem {
  icon: string;
  name: string;
  route: string;
}

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
  {
    icon: "Instagram",
    name: "Instagram",
    route: "https://www.instagram.com/freaky.lakshya/",
  },
  {
    icon: "Code2",
    name: "LeetCode",
    route: "https://leetcode.com/lakshyamahawar14/",
  },
  {
    icon: "Keyboard",
    name: "10FastFingers",
    route: "https://10fastfingers.com/user/2769484/",
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
    name: "Computer Languages",
    values: [
      { name: "C++", proficiency: "Advanced" },
      { name: "Python", proficiency: "Intermediate" },
      { name: "Java", proficiency: "Beginner" },
      { name: "JavaScript", proficiency: "Intermediate" },
      { name: "TypeScript", proficiency: "Intermediate" },
      { name: "ABAP", proficiency: "Intermediate" },
      { name: "SQL", proficiency: "Intermediate" },
    ],
  },
  {
    name: "Software Packages",
    values: [
      { name: "Git", proficiency: "Intermediate" },
      { name: "GitHub", proficiency: "Intermediate" },
      { name: "VS Code", proficiency: "Advanced" },
      { name: "Docker", proficiency: "Beginner" },
      { name: "MATLAB", proficiency: "Beginner" },
      { name: "LTspice", proficiency: "Beginner" },
    ],
  },
  {
    name: "Additional Courses",
    values: [
      {
        name: "Fundamentals of Object-Oriented Programming",
        proficiency: "Advanced",
      },
      { name: "Data Structures", proficiency: "Advanced" },
      {
        name: "Data Mining for Business Intelligence",
        proficiency: "Intermediate",
      },
      {
        name: "Machine Learning in Semiconductor Industry",
        proficiency: "Intermediate",
      },
      { name: "Probability and Statistics", proficiency: "Advanced" },
    ],
  },
  {
    name: "Languages Known",
    values: [
      { name: "Hindi", proficiency: "Advanced" },
      { name: "English", proficiency: "Advanced" },
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

export const INTERNSHIPS: ExperienceItem[] = [
  {
    start: "May 2023",
    end: "June 2023",
    period: 1,
    role: "Web Developer",
    organization: "IIT Roorkee",
    score: "7.348",
    details: {
      title: "Cognitive Therapy Chatbot Using Prompt Learning",
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
      "PM2",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    start: "January 2026",
    end: "February 2026",
    period: 2,
    organization: "Self Project",
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
    organization: "IIT Roorkee",
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
    organization: "IIT Roorkee",
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
      "Backtracking",
    ],
    link: "https://maze-ai.netlify.app/",
  },
  {
    start: "July 2022",
    end: "July 2022",
    period: 1,
    organization: "Self Project",
    details: {
      title: "Visual React Tool",
      description: [
        "Created a web application to generate code for ReactJS applications by joining blueprints (set of predefined components) visually.",
        "Frontend was created using Svelte framework and OpenAI API was used in the backend.",
      ],
    },
    tools: ["SvelteKit", "NodeJS", "GPT-3.5", "ChatGPT"],
    link: "https://visual-react.vercel.app/",
  },
  {
    start: "Dec 2021",
    end: "Dec 2021",
    period: 1,
    organization: "Self Project",
    details: {
      title: "Questa Web",
      description: [
        "It's a question paper making website where its users can put questions and get a PDF generated.",
        "This is made using NextJS and HTML2PDF API is used for PDF generation.",
      ],
    },
    tools: ["NextJS", "HTML2PDF"],
    link: "https://questaweb.vercel.app/",
  },
  {
    start: "October 2022",
    end: "November 2022",
    period: 1,
    organization: "IIT Roorkee",
    details: {
      title: "Clustering Queries For Enhanced Customer Support",
      description: [
        "Utilized NLTK library in Python for processing of customer queries dataset.",
        "KMeans and GMM algorithms were used to cluster queries of similar types.",
      ],
    },
    tools: ["Python", "NLTK", "NLP", "Clustering", "Sentiment Analysis"],
  },
  {
    start: "June 2021",
    end: "July 2021",
    period: 2,
    organization: "IIT Roorkee",
    details: {
      title: "A Hardware Architecture Design For Realtime Gaussian Filter",
      description: [
        "Wrote a Python program to convert the JPG and PNG image formats to bitmap file format.",
        "Wrote a MATLAB program to convert data of bitmap file format to Hexadecimal data for the ease of computation.",
      ],
    },
    tools: ["MATLAB", "Python", "Image Processing"],
  },
];