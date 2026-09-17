import { memo } from "react";
import { EXPERIENCES } from "@/constants";
import { ExperienceItem } from "@/types";

const WorkExperience = () => {
  console.log('work-experience.tsx rendered!');
  return (
    <section>
      <header className="scroll-section w-full text-center">
        <h2>Work Experience</h2>
      </header>

      <div className="w-full max-w-4xl mx-auto flex flex-col gap-8 lg:gap-12">
        {EXPERIENCES.map((exp: ExperienceItem, index: number) => (
          <article
            key={index}
            className="scroll-section flex flex-col gap-4 py-4"
          >
            <header className="flex flex-col lg:flex-row justify-between items-start gap-2">
              <div className="flex flex-col gap-1">
                <h3>{exp.role}</h3>
                <p className="font-sans font-semibold text-slate-800 dark:text-slate-200">
                  {exp.organization}
                </p>
                <p className="font-sans font-medium text-slate-600 dark:text-slate-400 mt-0.5">
                  {exp.title}
                </p>
              </div>
              <time>
                {exp.start} - {exp.end} ({exp.period}{" "}
                {exp.period === 1 ? "month" : "months"})
              </time>
            </header>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="font-sans font-bold text-caption tracking-wider text-accent-primary">
                  Key Highlights
                </h4>
                <ul className="flex flex-col gap-2">
                  {exp.description.map((step: string, idx: number) => (
                    <li key={idx}>
                      <p>• {step}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.skills.length > 0 && (
                <div className="flex flex-col gap-2">
                  <h4 className="font-sans font-bold text-caption tracking-wider text-accent-primary">
                    Technologies
                  </h4>
                  <ul className="flex flex-wrap gap-2.5">
                    {exp.skills.map((skill: string, idx: number) => (
                      <li key={idx}>
                        <span className="badge">{skill}</span>
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