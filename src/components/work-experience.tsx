import { memo } from "react";
import { EXPERIENCES } from "@/constants";
import { ExperienceItem } from "@/types";
import { getRandomLayoutTransform } from "@/utils/font";

const WorkExperience = () => {
  return (
    <section>
      <header style={getRandomLayoutTransform(2, 8, -1.2, 1.2)}>
        <h2>Work Experience</h2>
      </header>

      <div style={getRandomLayoutTransform(2, 6, -0.6, 0.6)}>
        {EXPERIENCES.map((exp: ExperienceItem, index: number) => (
          <article key={index} style={getRandomLayoutTransform(2, 10, -0.9, 0.9)}>
            <header>
              <div>
                <h3>{exp.role}</h3>
                <p>{exp.organization}</p>
                <p>{exp.title}</p>
              </div>
              <time>
                {exp.start} - {exp.end} ({exp.period}{" "}
                {exp.period === 1 ? "month" : "months"})
              </time>
            </header>

            <div style={getRandomLayoutTransform(2, 6, -0.6, 0.6)}>
              <div style={getRandomLayoutTransform(2, 4, -0.5, 0.5)}>
                <h4>Key Highlights</h4>
                <ul>
                  {exp.description.map((step: string, idx: number) => (
                    <li key={idx}>
                      <p>• {step}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.skills.length > 0 && (
                <div style={getRandomLayoutTransform(2, 4, -0.5, 0.5)}>
                  <h4>Technologies</h4>
                  <ul>
                    {exp.skills.map((skill: string, idx: number) => (
                      <li key={idx}>
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