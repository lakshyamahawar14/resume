import Link from "next/link";
import {
  INTERESTS,
  EDUCATION,
  SKILLS,
  EXPERIENCES,
  INTERNSHIPS,
  PROJECTS,
  ExperienceItem,
  ProjectItem,
  SkillGroup,
} from "@/constants";
import PdfViewer from "./pdf-viewer";

const Main = () => {
  return (
    <main className="px-2.5 py-4 lg:p-10 flex flex-col gap-6 lg:gap-10 w-full max-w-5xl">
      <section className="flex flex-col w-full content-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-6 rounded-full bg-indigo-500" />
          <h2 className="text-slate-900 dark:text-slate-100 text-[20px] font-bold tracking-tight break-words">
            Area of Interest
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 my-1.5 lg:my-2">
          {INTERESTS.map((interest, index) => (
            <div key={index} className="w-auto flex">
              <span className="font-semibold px-3 py-1.5 lg:px-3.5 bg-white dark:bg-[#111622] border border-slate-200 dark:border-slate-800 text-indigo-900 dark:text-indigo-200 text-[14px] rounded-lg shadow-xs">
                {interest}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col w-full content-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-6 rounded-full bg-sky-500" />
          <h2 className="text-slate-900 dark:text-slate-100 text-[20px] font-bold tracking-tight break-words">
            Education
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 my-1.5 lg:my-2">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#111622] border border-slate-200 dark:border-slate-800 shadow-xs rounded-xl p-4 lg:p-5 w-full flex flex-col justify-between"
            >
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sky-600 dark:text-sky-400 text-[16px] font-bold break-words">
                  {edu.examination}
                </h3>
                <p className="text-slate-800 dark:text-slate-200 text-[14px] font-semibold leading-snug break-words">
                  {edu.institution}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-[12px] font-medium break-words">
                  {edu.year}
                </p>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-[12px] font-normal break-words mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
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
      </section>

      <section className="flex flex-col w-full content-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-6 rounded-full bg-emerald-500" />
          <h2 className="text-slate-900 dark:text-slate-100 text-[20px] font-bold tracking-tight break-words">
            Skills
          </h2>
        </div>
        <div className="bg-white dark:bg-[#111622] border border-slate-200 dark:border-slate-800 shadow-xs rounded-xl p-4 lg:p-6 w-full flex flex-col gap-5 my-1.5 lg:my-2">
          {SKILLS.map((skill: SkillGroup, index: number) => (
            <div key={index} className="flex flex-col gap-2.5">
              <h3 className="text-slate-700 dark:text-slate-300 text-[14px] font-bold tracking-wide uppercase">
                {skill.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.values.map((val: string, idx: number) => (
                  <span
                    key={`${index}-${idx}`}
                    className="font-medium px-3 py-1.5 bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 rounded-lg text-[14px]"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col w-full content-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-6 rounded-full bg-purple-500" />
          <h2 className="text-slate-900 dark:text-slate-100 text-[20px] font-bold tracking-tight break-words">
            Work Experience
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 lg:gap-4 my-1.5 lg:my-2 w-full">
          {EXPERIENCES.map((exp: ExperienceItem, index: number) => (
            <div
              key={index}
              className="bg-white dark:bg-[#111622] border border-slate-200 dark:border-slate-800 shadow-xs rounded-xl p-4 lg:p-6 w-full flex flex-col gap-3.5 text-left"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-2">
                <div className="flex flex-col text-left">
                  {exp.role && (
                    <h3 className="text-purple-600 dark:text-purple-400 text-[16px] font-bold break-words">
                      {exp.role}
                    </h3>
                  )}
                  {exp.organization && (
                    <p className="text-slate-800 dark:text-slate-200 text-[14px] font-semibold break-words">
                      {exp.organization}
                    </p>
                  )}
                  {exp.details.title && (
                    <h4 className="text-slate-600 dark:text-slate-400 text-[14px] font-medium break-words mt-0.5">
                      {exp.details.title}
                    </h4>
                  )}
                </div>
                <span className="px-3 py-1 bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 text-[12px] font-semibold rounded-full border border-purple-200 dark:border-purple-800 shrink-0">
                  {exp.start} - {exp.end} ({exp.period}{" "}
                  {exp.period === 1 ? "month" : "months"})
                </span>
              </div>

              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-1.5 text-left">
                  <p className="text-purple-600 dark:text-purple-400 text-[12px] font-bold uppercase tracking-wider">
                    Key Highlights
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {exp.details.description.map((step: string, idx: number) => (
                      <p
                        key={idx}
                        className="text-slate-600 dark:text-slate-300 text-[14px] leading-relaxed text-left"
                      >
                        • {step}
                      </p>
                    ))}
                  </div>
                </div>

                {exp.tools && (
                  <div className="flex flex-col text-left pt-1">
                    <p className="text-slate-400 dark:text-slate-500 text-[12px] font-bold uppercase tracking-wider mb-2">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool: string, idx: number) => (
                        <span
                          key={idx}
                          className="font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-[12px]"
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

      <section className="flex flex-col w-full content-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-6 rounded-full bg-cyan-500" />
          <h2 className="text-slate-900 dark:text-slate-100 text-[20px] font-bold tracking-tight break-words">
            Internship
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 lg:gap-4 my-1.5 lg:my-2 w-full">
          {INTERNSHIPS.map((intern: ExperienceItem, index: number) => (
            <div
              key={index}
              className="bg-white dark:bg-[#111622] border border-slate-200 dark:border-slate-800 shadow-xs rounded-xl p-4 lg:p-6 w-full flex flex-col gap-3.5 text-left"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-2">
                <div className="flex flex-col text-left">
                  {intern.role && (
                    <h3 className="text-cyan-600 dark:text-cyan-400 text-[16px] font-bold break-words">
                      {intern.role}
                    </h3>
                  )}
                  {intern.organization && (
                    <p className="text-slate-800 dark:text-slate-200 text-[14px] font-semibold break-words">
                      {intern.organization}
                    </p>
                  )}
                  {intern.details.title && (
                    <h4 className="text-slate-600 dark:text-slate-400 text-[14px] font-medium break-words mt-0.5">
                      {intern.details.title}
                    </h4>
                  )}
                </div>
                <span className="px-3 py-1 bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 text-[12px] font-semibold rounded-full border border-cyan-200 dark:border-cyan-800 shrink-0">
                  {intern.start} - {intern.end} ({intern.period}{" "}
                  {intern.period === 1 ? "month" : "months"})
                </span>
              </div>

              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-1.5 text-left">
                  <p className="text-cyan-600 dark:text-cyan-400 text-[12px] font-bold uppercase tracking-wider">
                    Key Highlights
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {intern.details.description.map((step: string, idx: number) => (
                      <p
                        key={idx}
                        className="text-slate-600 dark:text-slate-300 text-[14px] leading-relaxed text-left"
                      >
                        • {step}
                      </p>
                    ))}
                  </div>
                </div>

                {intern.tools && (
                  <div className="flex flex-col text-left pt-1">
                    <p className="text-slate-400 dark:text-slate-500 text-[12px] font-bold uppercase tracking-wider mb-2">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {intern.tools.map((tool: string, idx: number) => (
                        <span
                          key={idx}
                          className="font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-[12px]"
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

      <section className="flex flex-col w-full content-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-6 rounded-full bg-violet-500" />
          <h2 className="text-slate-900 dark:text-slate-100 text-[20px] font-bold tracking-tight break-words">
            Projects
          </h2>
        </div>
        <div className="flex flex-col gap-3 lg:gap-4 my-1.5 lg:my-2 w-full">
          {PROJECTS.map((project: ProjectItem, index: number) => (
            <div
              key={index}
              className="bg-white dark:bg-[#111622] border border-slate-200 dark:border-slate-800 shadow-xs rounded-xl p-4 lg:p-6 w-full flex flex-col gap-4 text-left"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-2">
                <div className="flex flex-col text-left">
                  {project.details.title && (
                    <h3 className="text-violet-600 dark:text-violet-400 text-[16px] font-bold break-words">
                      {project.details.title}
                    </h3>
                  )}
                </div>
                <span className="px-3 py-1 bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 text-[12px] font-semibold rounded-full border border-violet-200 dark:border-violet-800 shrink-0">
                  {project.start} - {project.end} ({project.period}{" "}
                  {project.period === 1 ? "month" : "months"})
                </span>
              </div>

              <div className="flex flex-col gap-3.5 w-full text-left">
                <div className="flex flex-col text-left gap-1">
                  <p className="text-violet-600 dark:text-violet-400 text-[12px] font-bold uppercase tracking-wider mb-0.5">
                    Description
                  </p>
                  {project.details.description.map((step: string, idx: number) => (
                    <p
                      key={idx}
                      className="text-slate-600 dark:text-slate-300 text-[14px] leading-relaxed text-left"
                    >
                      • {step}
                    </p>
                  ))}
                </div>

                {project.tools && (
                  <div className="flex flex-col text-left pt-1">
                    <p className="text-slate-400 dark:text-slate-500 text-[12px] font-bold uppercase tracking-wider mb-2">
                      Stack & Tools
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool: string, idx: number) => (
                        <span
                          key={idx}
                          className="font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-[12px]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.link && (
                  <div className="flex flex-col text-left pt-1">
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={project.link}
                        target="_blank"
                        className="font-semibold py-2 px-4 rounded-lg text-[12px] bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors"
                      >
                        Explore Live Demo →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <PdfViewer />
    </main>
  );
};

export default Main;