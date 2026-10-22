
import { memo } from "react";
import { INTERESTS, EDUCATION, SKILLS } from "@/constants";
import { EducationItem, InterestItem, SkillCategoryItem } from "@/types";

const Background = () => {
  return (
    <section>
      <header>
        <h2 className="text-center mt-3 py-3 font-bold bg-[moccasin] text-[teal]">Background</h2>
      </header>

      <div className="flex flex-col gap-2">
        <article className="bg-[navy] text-[white]">
          <h3 className="font-semibold">Area of Interest</h3>
          <ul className="grid grid-cols-2 gap-2">
            {INTERESTS.map((interest: InterestItem, index: number) => (
              <li key={index} className="border border-[pink]">
                <span>{interest.name}</span>
              </li>
            ))}
          </ul>
        </article>

        <article>
          <h3 className="text-center font-bold mt-3 py-3 bg-[crimson]">Education</h3>
          <div className="grid grid-cols-2 gap-2 bg-[purple] text-[white]">
            {EDUCATION.map((edu: EducationItem, index: number) => (
              <div key={index}>
                <div>
                  <h4>{edu.title}</h4>
                  <p>{edu.subtitle}</p>
                  <time>{edu.year}</time>
                </div>
                <footer>
                  <span>
                    {edu.score.endsWith("%") ? "Percentage: " : "CGPA: "}
                    <strong>{edu.score}</strong>
                  </span>
                </footer>
              </div>
            ))}
          </div>
        </article>

        <article>
          <h3 className="text-center font-bold mt-3 py-3 bg-[beige]">Skills</h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,125px),1fr))] gap-2 bg-[orange]">
            {SKILLS.map((group: SkillCategoryItem, index: number) => (
              <div key={index}>
                <h4>{group.title}</h4>
                <ul>
                  {group.skills.map((skill: string, idx: number) => (
                    <li key={idx}>
                      <span>{skill}</span>
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
