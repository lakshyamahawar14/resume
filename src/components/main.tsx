import { memo } from "react";
import Personal from "./personal";
import Background from "./background";
import WorkExperience from "./work-experience";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => {
  console.log('main.tsx rendered!');
  return (
    <main className="w-full flex flex-col items-center gap-12 lg:gap-20">
      <Personal />
      <Background />
      <WorkExperience />
      <Projects />
      <Resume />
    </main>
  );
};

export default memo(Main);