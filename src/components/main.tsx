import { memo } from "react";
import Personal from "./personal";
import Background from "./background";
import WorkExperience from "./work-experience";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => {
  return (
    <main>
      <Personal />
      <Background />
      <WorkExperience />
      <Projects />
      <Resume />
    </main>
  );
};

export default memo(Main);