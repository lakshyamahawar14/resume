import { memo } from "react";
import { EXPERIENCES } from "@/constants";
import { ExperienceItem } from "@/types";

const WorkExperience = () => {
  return (
    <section>
      <header>
        <h2 className="text-center mt-3 py-3 font-bold bg-[cyan]">Work Experience</h2>
      </header>

      <div>
        {EXPERIENCES.map((exp: ExperienceItem, index: number) => (
          <article key={index}>
            <header className="flex flex-col bg-[darkgreen] text-[cornsilk]">
              <div className="flex justify-between gap-3">
                <h3>{exp.role}</h3>
                <p>{exp.organization}</p>
              </div>
              <time className="text-end text-[khaki]">
                {exp.start} - {exp.end} ({exp.period}{" "}
                {exp.period === 1 ? "month" : "months"})
              </time>
            </header>

            <div>
              <div>
                <h4 className="font-semibold bg-[brown] text-[yellow] p-2">Key Highlights</h4>
                <ul>
                  {exp.description.map((step: string, idx: number) => (
                    <li key={idx} className="bg-[goldenrod] border-1 border-[ivory]">
                      <p>• {step}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.skills.length > 0 && (
                <div>
                  <h4 className="font-semibold bg-[lemonchiffon]">Technologies</h4>
                  <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,125px),1fr))] gap-1">
                    {exp.skills.map((skill: string, idx: number) => (
                      <li key={idx} className="bg-[maroon] text-[white] rounded-sm pl-2 py-1">
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default memo(WorkExperience);