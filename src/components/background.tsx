import { memo } from "react";
import { INTERESTS, EDUCATION, SKILLS } from "@/constants";
import { EducationItem, InterestItem, SkillCategoryItem } from "@/types";
import { getRandomLayoutTransform } from "@/utils/font";

const Background = () => {
  return (
    <section>
      <header style={getRandomLayoutTransform(2, 8, -1.2, 1.2)}>
        <h2>Background</h2>
      </header>

      <div style={getRandomLayoutTransform(2, 6, -0.6, 0.6)}>
        <article style={getRandomLayoutTransform(2, 10, -0.9, 0.9)}>
          <h3>Area of Interest</h3>
          <ul style={getRandomLayoutTransform(2, 6, -0.6, 0.6)}>
            {INTERESTS.map((interest: InterestItem, index: number) => (
              <li key={index}>
                <span>{interest.name}</span>
              </li>
            ))}
          </ul>
        </article>

        <article style={getRandomLayoutTransform(2, 10, -0.8, 0.8)}>
          <h3>Education</h3>
          <div style={getRandomLayoutTransform(2, 6, -0.6, 0.6)}>
            {EDUCATION.map((edu: EducationItem, index: number) => (
              <div key={index} style={getRandomLayoutTransform(2, 8, -0.7, 0.7)}>
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

        <article style={getRandomLayoutTransform(2, 10, -0.8, 0.8)}>
          <h3>Skills</h3>
          <div style={getRandomLayoutTransform(2, 6, -0.6, 0.6)}>
            {SKILLS.map((group: SkillCategoryItem, index: number) => (
              <div key={index} style={getRandomLayoutTransform(2, 8, -0.7, 0.7)}>
                <h4>{group.title}</h4>
                <ul style={getRandomLayoutTransform(2, 4, -0.5, 0.5)}>
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