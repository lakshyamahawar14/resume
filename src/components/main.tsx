import Interests from "./interests";
import Education from "./education";
import Internships from "./internships";
import Projects from "./projects";
import Skills from "./skills";
import PORs from "./pors";
import Visitors from "./visitors";

const Main = () => {
  return (
    <div className="p-6 flex flex-col gap-4">
      <Interests />
      <Education />
      <Skills />
      <Internships />
      <Projects />
      <PORs />
      <Visitors />
    </div>
  );
};

export default Main;
