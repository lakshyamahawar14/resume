import { memo } from "react";
import { EXPERIENCES } from "@/constants";
import { ExperienceItem } from "@/types";

const WorkExperience = () => {
  console.log('work-experience.tsx rendered!');
  return (
    <section>
      <header className="w-full text-center mb-6">
        <h2>Work Experience</h2>
      </header>

      <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 lg:gap-8">
        {EXPERIENCES.map((exp: ExperienceItem, index: number) => (
          <article
            key={index}
            className="flex flex-col gap-3 py-2"
          >
            <header className="flex flex-col sm:flex-row justify-between items-start gap-1.5">
              <div className="flex flex-col gap-0.5">
                <h3>{exp.role}</h3>
                <p className="font-sans font-semibold">
                  {exp.organization}
                </p>
                <p className="font-sans font-medium">
                  {exp.title}
                </p>
              </div>
              <time>
                {exp.start} - {exp.end} ({exp.period}{" "}
                {exp.period === 1 ? "month" : "months"})
              </time>
            </header>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <h4 className="font-sans font-bold text-caption tracking-wider">
                  Key Highlights
                </h4>
                <ul className="flex flex-col gap-1.5">
                  {exp.description.map((step: string, idx: number) => (
                    <li key={idx}>
                      <p>• {step}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.skills.length > 0 && (
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-sans font-bold text-caption tracking-wider">
                    Technologies
                  </h4>
                  <ul className="flex flex-wrap gap-2">
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