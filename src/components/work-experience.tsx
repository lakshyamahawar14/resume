import { memo } from "react";
import { EXPERIENCES } from "@/constants";
import { ExperienceItem } from "@/types";

const WorkExperience = () => {
  return (
    <section className="w-full max-w-5xl px-4 py-8 lg:p-16 flex flex-col justify-center gap-10 lg:gap-14">
      <div className="scroll-section w-full pb-6 lg:pb-8 text-center">
        <h2 className="text-slate-900 dark:text-slate-100 text-title font-extrabold tracking-tight break-words font-sans">
          Work Experience
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-12 lg:gap-16 my-2 w-full">
        {EXPERIENCES.map((exp: ExperienceItem, index: number) => (
          <div
            key={index}
            className="scroll-section w-full flex flex-col gap-5 text-left py-2"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-3">
              <div className="flex flex-col text-left gap-1">
                {exp.role && (
                  <h3 className="text-accent-primary text-item-title font-bold break-words font-sans">
                    {exp.role}
                  </h3>
                )}
                {exp.organization && (
                  <p className="text-slate-800 dark:text-slate-200 text-body font-semibold break-words font-sans">
                    {exp.organization}
                  </p>
                )}
                {exp.details.title && (
                  <h4 className="text-slate-600 dark:text-slate-400 text-body font-medium break-words mt-0.5 font-sans">
                    {exp.details.title}
                  </h4>
                )}
              </div>
              <span className="py-1 bg-transparent text-slate-600 dark:text-slate-400 text-caption font-medium shrink-0 font-sans">
                {exp.start} - {exp.end} ({exp.period}{" "}
                {exp.period === 1 ? "month" : "months"})
              </span>
            </div>

            <div className="flex flex-col gap-5 w-full">
              <div className="flex flex-col gap-3 text-left">
                <p className="text-accent-subtle text-caption font-bold tracking-wider font-sans">
                  Key Highlights
                </p>
                <div className="flex flex-col gap-3">
                  {exp.details.description.map((step: string, idx: number) => (
                    <p
                      key={idx}
                      className="text-slate-600 dark:text-slate-300 text-body leading-relaxed text-left font-editorial"
                    >
                      • {step}
                    </p>
                  ))}
                </div>
              </div>

              {exp.tools && (
                <div className="flex flex-col text-left pt-2">
                  <p className="text-accent-subtle text-caption font-bold tracking-wider mb-3 font-sans">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {exp.tools.map((tool: string, idx: number) => (
                      <span
                        key={idx}
                        className="font-medium px-2.5 py-1 bg-white dark:bg-bg-primary border border-slate-200 dark:border-border-primary text-slate-800 dark:text-slate-200 text-caption rounded-md shadow-xs font-sans"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(WorkExperience);