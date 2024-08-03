import React from "react";
import Heading from "./heading";
import Card from "./card";

const projects = [
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
    imageSrc: "/images/maze_ai.png",
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
    imageSrc: "/images/visual_react.png",
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
    imageSrc: "/images/questa_web.png",
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

const Projects = () => {
  return (
    <div className="flex flex-col w-full">
      <Heading headingText={"Projects"} headingSize="small" />
      {projects.map((project, index) => (
        <Card
          key={index}
          start={project.start}
          end={project.end}
          period={project.period}
          organization={project.organization}
          details={project.details}
          tools={project.tools}
          link={project.link}
          imageSrc={project.imageSrc}
        />
      ))}
    </div>
  );
};

export default Projects;
