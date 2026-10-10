import { memo } from "react";
import { INTERESTS, EDUCATION, SKILLS } from "@/constants";
import { EducationItem, InterestItem, SkillCategoryItem } from "@/types";

const Background = () => {
  console.log('background.tsx rendered!');
  return (
    <section>
      <header className="w-full text-center mb-6">
        <h2>Background</h2>
      </header>

      <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 lg:gap-8">
        <article className="flex flex-col gap-2.5">
          <h3>Area of Interest</h3>
          <ul className="flex flex-wrap gap-2">
            {INTERESTS.map((interest: InterestItem, index: number) => (
              <li key={index}>
                <span className="badge">{interest.name}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="flex flex-col gap-2.5">
          <h3>Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {EDUCATION.map((edu: EducationItem, index: number) => (
              <div key={index} className="flex flex-col justify-between py-1">
                <div className="flex flex-col gap-1">
                  <h4>{edu.title}</h4>
                  <p className="font-sans font-semibold">
                    {edu.subtitle}
                  </p>
                  <time>{edu.year}</time>
                </div>
                <footer className="mt-3 pt-2.5 border-t">
                  <span className="font-sans text-caption">
                    {edu.score.endsWith("%") ? "Percentage: " : "CGPA: "}
                    <strong className="font-bold">
                      {edu.score}
                    </strong>
                  </span>
                </footer>
              </div>
            ))}
          </div>
        </article>

        <article className="flex flex-col gap-2.5">
          <h3>Skills</h3>
          <div className="flex flex-col gap-4 py-1">
            {SKILLS.map((group: SkillCategoryItem, index: number) => (
              <div key={index} className="flex flex-col gap-1.5">
                <h4>{group.title}</h4>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill: string, idx: number) => (
                    <li key={idx}>
                      <span className="badge">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default memo(Background);