import { memo } from "react";
import { INTERESTS, EDUCATION, SKILLS } from "@/constants";
import { EducationItem, InterestItem, SkillCategoryItem } from "@/types";

const Background = () => {
  console.log('background.tsx rendered!');
  return (
    <section>
      <header className="scroll-section w-full text-center">
        <h2>Background</h2>
      </header>

      <div className="w-full max-w-4xl mx-auto flex flex-col gap-8 lg:gap-10">
        <article className="scroll-section flex flex-col gap-3">
          <h3>Area of Interest</h3>
          <ul className="flex flex-wrap gap-2.5">
            {INTERESTS.map((interest: InterestItem, index: number) => (
              <li key={index}>
                <span className="badge">{interest.name}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="scroll-section flex flex-col gap-3">
          <h3>Education</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {EDUCATION.map((edu: EducationItem, index: number) => (
              <div key={index} className="flex flex-col justify-between py-2">
                <div className="flex flex-col gap-1.5">
                  <h3>{edu.title}</h3>
                  <p className="font-sans font-semibold text-slate-800 dark:text-slate-200">
                    {edu.subtitle}
                  </p>
                  <time>{edu.year}</time>
                </div>
                <footer className="mt-4 pt-3 border-t border-slate-200 dark:border-border-primary">
                  <span className="font-sans text-caption text-slate-600 dark:text-slate-400">
                    {edu.score.endsWith("%") ? "Percentage: " : "CGPA: "}
                    <strong className="font-bold text-slate-900 dark:text-slate-100">
                      {edu.score}
                    </strong>
                  </span>
                </footer>
              </div>
            ))}
          </div>
        </article>

        <article className="scroll-section flex flex-col gap-3">
          <h3>Skills</h3>
          <div className="flex flex-col gap-5 py-2">
            {SKILLS.map((group: SkillCategoryItem, index: number) => (
              <div key={index} className="flex flex-col gap-2">
                <h4>{group.title}</h4>
                <ul className="flex flex-wrap gap-2.5">
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