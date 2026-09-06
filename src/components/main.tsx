import Image from "next/image";
import Link from "next/link";
import {
  INTERESTS,
  EDUCATION,
  SKILLS,
  INTERNSHIPS,
  PROJECTS,
  PORS,
} from "@/constants";

const Main = () => {
  return (
    <section className="p-6 md:p-8 flex flex-col gap-6 w-full max-w-5xl">
      <section className="flex flex-col w-full">
        <h1 className="dark:text-slate-100 text-slate-900 py-1 text-[1.1rem] md:text-[1.2rem] lg:text-[1.25rem] font-bold tracking-tight break-words">
          Area of Interest
        </h1>
        <div className="flex flex-wrap gap-2.5 my-2">
          {INTERESTS.map((interest, index) => (
            <div key={index} className="w-auto flex">
              <span className="font-medium w-auto px-3.5 py-1.5 dark:bg-[#161b22] bg-white shadow-sm dark:text-slate-200 text-slate-700 text-[0.88rem] rounded-md">
                {interest}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col w-full">
        <h1 className="dark:text-slate-100 text-slate-900 py-1 text-[1.1rem] md:text-[1.2rem] lg:text-[1.25rem] font-bold tracking-tight break-words">
          Education
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(275px,1fr))] gap-4 my-2">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#161b22] shadow-sm rounded-lg p-5 w-full flex flex-col justify-between"
            >
              <div className="flex flex-col gap-1.5">
                <h1 className="dark:text-sky-400 text-sky-600 text-[0.95rem] md:text-[1rem] font-semibold break-words">
                  {edu.examination}
                </h1>
                <p className="dark:text-slate-200 text-slate-800 text-[0.9rem] font-medium leading-snug break-words">
                  {edu.institution}
                </p>
                <p className="dark:text-slate-400 text-slate-500 text-[0.85rem] font-normal break-words">
                  {edu.year}
                </p>
              </div>
              <p className="dark:text-slate-400 text-slate-600 text-[0.85rem] font-normal break-words mt-3 pt-2 border-t border-slate-100 dark:border-[#21262d]">
                <span>
                  {edu.score[edu.score.length - 1] === "%"
                    ? "Percentage: "
                    : "CGPA: "}
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{edu.score}</span>
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col w-full">
        <h1 className="dark:text-slate-100 text-slate-900 py-1 text-[1.1rem] md:text-[1.2rem] lg:text-[1.25rem] font-bold tracking-tight break-words">
          Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 my-2">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#161b22] shadow-sm rounded-lg p-5 w-full"
            >
              <div className="flex flex-col gap-2.5">
                <h1 className="dark:text-sky-400 text-sky-600 text-[0.95rem] md:text-[1rem] font-semibold break-words">
                  {skill.name}
                </h1>
                <div className="flex flex-col gap-2">
                  {skill.values.map((value, idx) => (
                    <div key={`${index}-${idx}`} className="w-full">
                      <p
                        className={`text-[0.85rem] py-1 px-2.5 rounded font-medium truncate ${
                          value.proficiency === "Beginner"
                            ? "bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-300 !w-2/5"
                            : value.proficiency === "Intermediate"
                            ? "bg-yellow-100 text-yellow-900 dark:bg-yellow-950/50 dark:text-yellow-300 !w-3/4"
                            : "bg-emerald-100 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300 w-full"
                        }`}
                      >
                        {value.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col w-full">
        <h1 className="dark:text-slate-100 text-slate-900 py-1 text-[1.1rem] md:text-[1.2rem] lg:text-[1.25rem] font-bold tracking-tight break-words">
          Internship
        </h1>
        <div className="grid grid-cols-1 gap-4 my-2 w-full">
          {INTERNSHIPS.map((intern, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#161b22] shadow-sm rounded-lg p-6 w-full flex flex-col gap-3 text-left"
            >
              <div className="flex flex-col md:flex-row justify-between items-start w-full gap-1">
                <div className="flex flex-col text-left">
                  {intern.role && (
                    <h1 className="dark:text-slate-100 text-slate-900 text-[1rem] md:text-[1.05rem] font-bold break-words">
                      {intern.role}
                    </h1>
                  )}
                  {intern.details.title && (
                    <h1 className="dark:text-sky-400 text-sky-600 text-[0.92rem] md:text-[0.98rem] font-medium break-words">
                      {intern.details.title}
                    </h1>
                  )}
                </div>
                <p className="dark:text-slate-400 text-slate-500 text-[0.82rem] font-normal text-start md:text-end shrink-0">
                  {intern.start} - {intern.end} ({intern.period}{" "}
                  {intern.period === 1 ? "month" : "months"})
                </p>
              </div>

              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-1.5 text-left">
                  <p className="dark:text-slate-400 text-slate-500 text-[0.8rem] font-medium uppercase tracking-wider">
                    Key Points
                  </p>
                  <div className="flex flex-col gap-1">
                    {intern.details.description.map((step, idx) => (
                      <p
                        key={idx}
                        className="dark:text-slate-300 text-slate-600 text-[0.88rem] leading-relaxed text-left"
                      >
                        • {step}
                      </p>
                    ))}
                  </div>
                </div>

                {intern.tools && (
                  <div className="flex flex-col text-left pt-1">
                    <p className="dark:text-slate-400 text-slate-500 text-[0.8rem] font-medium uppercase tracking-wider mb-2">
                      Tools Used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {intern.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="font-medium px-2.5 py-1 bg-slate-100 dark:bg-[#21262d] dark:text-slate-300 text-slate-700 rounded text-[0.8rem]"
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

      <section className="flex flex-col w-full">
        <h1 className="dark:text-slate-100 text-slate-900 py-1 text-[1.1rem] md:text-[1.2rem] lg:text-[1.25rem] font-bold tracking-tight break-words">
          Projects
        </h1>
        <div className="flex flex-col gap-4 my-2 w-full">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#161b22] shadow-sm rounded-lg p-6 w-full flex flex-col gap-4 text-left"
            >
              <div className="flex flex-col md:flex-row justify-between items-start w-full gap-1">
                <div className="flex flex-col text-left">
                  {project.details.title && (
                    <h1 className="dark:text-sky-400 text-sky-600 text-[1.05rem] font-semibold break-words">
                      {project.details.title}
                    </h1>
                  )}
                </div>
                <p className="dark:text-slate-400 text-slate-500 text-[0.82rem] font-normal text-start md:text-end shrink-0">
                  {project.start} - {project.end} ({project.period}{" "}
                  {project.period === 1 ? "month" : "months"})
                </p>
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-start gap-6 w-full">
                <div className="flex flex-col gap-3.5 flex-1 text-left">
                  <div className="flex flex-col text-left gap-1">
                    <p className="dark:text-slate-400 text-slate-500 text-[0.8rem] font-medium uppercase tracking-wider mb-0.5">
                      Key Points
                    </p>
                    {project.details.description.map((step, idx) => (
                      <p
                        key={idx}
                        className="dark:text-slate-300 text-slate-600 text-[0.88rem] leading-relaxed text-left"
                      >
                        • {step}
                      </p>
                    ))}
                  </div>

                  {project.tools && (
                    <div className="flex flex-col text-left pt-1">
                      <p className="dark:text-slate-400 text-slate-500 text-[0.8rem] font-medium uppercase tracking-wider mb-2">
                        Tools Used
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="font-medium px-2.5 py-1 bg-slate-100 dark:bg-[#21262d] dark:text-slate-300 text-slate-700 rounded text-[0.8rem]"
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
                          className="font-medium py-1.5 px-4 rounded text-[0.82rem] bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
                        >
                          Live Demo
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {project.imageSrc && (
                  <div className="flex justify-start lg:justify-end items-start w-full lg:w-auto shrink-0 self-start">
                    <div className="w-full max-w-[340px] md:w-[340px] aspect-[16/10] rounded-md overflow-hidden shrink-0 shadow-sm bg-slate-100 dark:bg-[#0d1117] flex items-center justify-center p-1">
                      <Image
                        src={project.imageSrc}
                        width={680}
                        height={425}
                        priority={true}
                        loading="eager"
                        decoding="sync"
                        unoptimized={true}
                        alt={`${project.details.title} image`}
                        className="w-full h-full object-contain rounded"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col w-full">
        <h1 className="dark:text-slate-100 text-slate-900 py-1 text-[1.1rem] md:text-[1.2rem] lg:text-[1.25rem] font-bold tracking-tight break-words">
          Position of Responsibilities
        </h1>
        <div className="grid grid-cols-1 gap-4 my-2 w-full">
          {PORS.map((por, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#161b22] shadow-sm rounded-lg p-6 w-full flex flex-col gap-3 text-left"
            >
              <div className="flex flex-col md:flex-row justify-between items-start w-full gap-1">
                <div className="flex flex-col text-left">
                  {por.role && (
                    <h1 className="dark:text-slate-100 text-slate-900 text-[1rem] md:text-[1.05rem] font-bold break-words">
                      {por.role}
                    </h1>
                  )}
                  {por.details.title && (
                    <h1 className="dark:text-sky-400 text-sky-600 text-[0.92rem] md:text-[0.98rem] font-medium break-words">
                      {por.details.title}
                    </h1>
                  )}
                </div>
                <p className="dark:text-slate-400 text-slate-500 text-[0.82rem] font-normal text-start md:text-end shrink-0">
                  {por.start} - {por.end} ({por.period}{" "}
                  {por.period === 1 ? "month" : "months"})
                </p>
              </div>

              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-1.5 text-left">
                  <p className="dark:text-slate-400 text-slate-500 text-[0.8rem] font-medium uppercase tracking-wider">
                    Key Points
                  </p>
                  <div className="flex flex-col gap-1">
                    {por.details.description.map((step, idx) => (
                      <p
                        key={idx}
                        className="dark:text-slate-300 text-slate-600 text-[0.88rem] leading-relaxed text-left"
                      >
                        • {step}
                      </p>
                    ))}
                  </div>
                </div>

                {por.tools && (
                  <div className="flex flex-col text-left pt-1">
                    <p className="dark:text-slate-400 text-slate-500 text-[0.8rem] font-medium uppercase tracking-wider mb-2">
                      Tools Used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {por.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="font-medium px-2.5 py-1 bg-slate-100 dark:bg-[#21262d] dark:text-slate-300 text-slate-700 rounded text-[0.8rem]"
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
    </section>
  );
};

export default Main;