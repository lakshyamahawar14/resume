import { memo } from "react";
import { INTERESTS, EDUCATION, SKILLS } from "@/constants";
import { SkillGroup } from "@/types";

const Background = () => {
  return (
    <section className="w-full max-w-5xl px-4 py-8 lg:p-16 flex flex-col justify-center gap-12 lg:gap-16">
      <div className="scroll-section w-full pb-6 lg:pb-8 text-center">
        <h2 className="text-slate-900 dark:text-slate-100 text-title font-extrabold tracking-tight break-words font-sans">
          Background
        </h2>
      </div>

      <div className="scroll-section flex flex-col gap-5">
        <h3 className="text-accent-primary text-item-title font-bold tracking-tight font-sans">
          Area of Interest
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {INTERESTS.map((interest, index) => (
            <div key={index} className="w-auto flex">
              <span className="font-medium px-2.5 py-1 bg-white dark:bg-bg-primary border border-slate-200 dark:border-border-primary text-slate-800 dark:text-slate-200 text-caption rounded-md shadow-xs font-sans">
                {interest}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-section flex flex-col gap-5">
        <h3 className="text-accent-primary text-item-title font-bold tracking-tight font-sans">
          Education
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              className="w-full flex flex-col justify-between py-2"
            >
              <div className="flex flex-col gap-2">
                <h4 className="text-accent-primary text-item-title font-bold break-words font-sans">
                  {edu.examination}
                </h4>
                <p className="text-slate-800 dark:text-slate-200 text-body font-semibold leading-snug break-words font-sans">
                  {edu.institution}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-caption font-medium break-words font-sans">
                  {edu.year}
                </p>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-caption font-normal break-words mt-5 pt-3 border-t border-slate-200 dark:border-border-primary font-sans">
                <span>
                  {edu.score[edu.score.length - 1] === "%"
                    ? "Percentage: "
                    : "CGPA: "}
                  <span className="font-bold text-slate-900 dark:text-slate-100">{edu.score}</span>
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-section flex flex-col gap-5">
        <h3 className="text-accent-primary text-item-title font-bold tracking-tight font-sans">
          Skills
        </h3>
        <div className="w-full flex flex-col gap-8 py-2">
          {SKILLS.map((skill: SkillGroup, index: number) => (
            <div key={index} className="flex flex-col gap-3.5">
              <h4 className="text-accent-subtle text-caption font-bold tracking-wide font-sans">
                {skill.name}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {skill.values.map((val: string, idx: number) => (
                  <span
                    key={`${index}-${idx}`}
                    className="font-medium px-2.5 py-1 bg-white dark:bg-bg-primary border border-slate-200 dark:border-border-primary text-slate-800 dark:text-slate-200 text-caption rounded-md shadow-xs font-sans"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Background);