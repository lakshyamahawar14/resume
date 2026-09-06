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
    <section className="p-6 flex flex-col gap-4">
      <section className="flex flex-col overflow-x-hidden">
        <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold break-words">
          Area of Interest
        </h1>
        <div className="flex flex-wrap gap-2 my-2">
          {INTERESTS.map((interest, index) => (
            <div key={index} className="w-auto flex">
              <span className="font-semibold w-auto px-4 py-2 dark:bg-[#161B22] border bg-white dark:text-slate-200 text-slate-700 text-[1rem] rounded-md">
                {interest}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col w-full">
        <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold break-words">
          Education
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(275px,1fr))] gap-4 my-2">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#161B22] border rounded-md p-4 w-full"
            >
              <div className="flex flex-col gap-2">
                <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-bold break-words !text-sky-400">
                  {edu.examination}
                </h1>
                <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-bold break-words !p-0 leading-6">
                  🏫 {edu.institution}
                </h1>
                <p className="dark:text-slate-400 text-slate-700 py-1 leading-7 text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] font-normal break-words !p-0">
                  📅 {edu.year}
                </p>
                <p className="dark:text-slate-400 text-slate-700 py-1 leading-7 text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] font-normal break-words">
                  <span>
                    {edu.score[edu.score.length - 1] === "%"
                      ? "Percentage: "
                      : "CGPA: "}
                    <span className="font-bold">{edu.score}</span>
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col w-full">
        <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold break-words">
          Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 my-2">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#161B22] border rounded-md p-4 w-full"
            >
              <div className="flex flex-col gap-2">
                <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-bold break-words !text-sky-400">
                  {skill.name}
                </h1>
                {skill.values.map((value, idx) => (
                  <div key={`${index}-${idx}`}>
                    <p
                      className={`dark:text-slate-400 text-slate-700 py-1 text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] font-normal break-words !rounded !px-2 !text-[0.9rem] !text-black !leading-6 !font-bold ${
                        value.proficiency === "Beginner"
                          ? "bg-orange-500 !w-1/3"
                          : value.proficiency === "Intermediate"
                          ? "bg-yellow-300 !w-2/3"
                          : "bg-green-400"
                      } truncate`}
                    >
                      {value.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col w-full">
        <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold break-words">
          Internship
        </h1>
        <div className="grid grid-cols-1 gap-4 my-2">
          {INTERNSHIPS.map((intern, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#161B22] border rounded-lg p-4 w-full my-2 flex flex-col gap-2"
            >
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex flex-col">
                  {intern.role && (
                    <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-bold break-words">
                      {intern.role}
                    </h1>
                  )}
                  {intern.details.title && (
                    <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-bold break-words !text-sky-400">
                      {intern.details.title}
                    </h1>
                  )}
                </div>
                <p className="dark:text-slate-400 text-slate-700 py-1 leading-7 font-normal break-words italic !text-[0.8rem] text-start md:text-end">
                  📅 {intern.start} - {intern.end} ({intern.period}{" "}
                  {intern.period === 1 ? "month" : "months"})
                </p>
              </div>

              <div className="flex flex-col lg:flex-row justify-center items-start gap-4">
                <div className="text-slate-500 dark:text-slate-400 flex flex-col gap-2">
                  <div className="flex flex-col">
                    <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-bold break-words">
                      🔑 Key Points
                    </h1>
                    {intern.details.description.map((step, idx) => (
                      <p
                        key={idx}
                        className="dark:text-slate-400 text-slate-700 py-1 text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] font-normal break-words !leading-6 lg:text-justify"
                      >
                        👉 {step}
                      </p>
                    ))}
                  </div>

                  {intern.tools && (
                    <div className="flex flex-col">
                      <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold break-words">
                        🔨 Tools Used
                      </h1>
                      <div className="flex flex-wrap gap-2 my-2">
                        {intern.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="font-semibold w-auto px-4 py-2 dark:bg-[#161B22] border bg-white dark:text-slate-200 text-slate-700 rounded-md !text-[0.8rem]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col w-full">
        <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold break-words">
          Projects
        </h1>
        <div className="flex flex-wrap gap-2 my-2">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#161B22] border rounded-lg p-4 w-full my-2 flex flex-col gap-2"
            >
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex flex-col">
                  {project.details.title && (
                    <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-bold break-words !text-sky-400">
                      {project.details.title}
                    </h1>
                  )}
                </div>
                <p className="dark:text-slate-400 text-slate-700 py-1 leading-7 font-normal break-words italic !text-[0.8rem] text-start md:text-end">
                  📅 {project.start} - {project.end} ({project.period}{" "}
                  {project.period === 1 ? "month" : "months"})
                </p>
              </div>

              <div className="flex flex-col lg:flex-row justify-center items-start gap-4">
                <div className="text-slate-500 dark:text-slate-400 flex flex-col gap-2">
                  <div className="flex flex-col">
                    <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-bold break-words">
                      🔑 Key Points
                    </h1>
                    {project.details.description.map((step, idx) => (
                      <p
                        key={idx}
                        className="dark:text-slate-400 text-slate-700 py-1 text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] font-normal break-words !leading-6 lg:text-justify"
                      >
                        👉 {step}
                      </p>
                    ))}
                  </div>

                  {project.tools && (
                    <div className="flex flex-col">
                      <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold break-words">
                        🔨 Tools Used
                      </h1>
                      <div className="flex flex-wrap gap-2 my-2">
                        {project.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="font-semibold w-auto px-4 py-2 dark:bg-[#161B22] border bg-white dark:text-slate-200 text-slate-700 rounded-md !text-[0.8rem]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.link && (
                    <div className="flex flex-col">
                      <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-bold break-words">
                        Live Demo
                      </h1>
                      <div className="flex flex-wrap gap-2 my-2">
                        <Link
                          href={project.link}
                          target="_blank"
                          className="font-semibold py-2 px-4 rounded text-[0.8rem] bg-[#29903B] hover:bg-green-600 text-white !w-auto"
                        >
                          {project.details.title}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {project.imageSrc && (
                  <div className="flex justify-center items-center w-full lg:w-auto">
                    <div className="flex justify-center items-center w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-full rounded-md">
                      <Image
                        src={project.imageSrc}
                        width={600}
                        height={600}
                        priority={false}
                        alt={`${project.details.title} image`}
                        className="w-full h-full object-fit rounded-md"
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
        <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold break-words">
          Position of Responsibilities
        </h1>
        <div className="grid grid-cols-1 gap-4 my-2">
          {PORS.map((por, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#161B22] border rounded-lg p-4 w-full my-2 flex flex-col gap-2"
            >
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex flex-col">
                  {por.role && (
                    <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-bold break-words">
                      {por.role}
                    </h1>
                  )}
                  {por.details.title && (
                    <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-bold break-words !text-sky-400">
                      {por.details.title}
                    </h1>
                  )}
                </div>
                <p className="dark:text-slate-400 text-slate-700 py-1 leading-7 font-normal break-words italic !text-[0.8rem] text-start md:text-end">
                  📅 {por.start} - {por.end} ({por.period}{" "}
                  {por.period === 1 ? "month" : "months"})
                </p>
              </div>

              <div className="flex flex-col lg:flex-row justify-center items-start gap-4">
                <div className="text-slate-500 dark:text-slate-400 flex flex-col gap-2">
                  <div className="flex flex-col">
                    <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-bold break-words">
                      🔑 Key Points
                    </h1>
                    {por.details.description.map((step, idx) => (
                      <p
                        key={idx}
                        className="dark:text-slate-400 text-slate-700 py-1 text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] font-normal break-words !leading-6 lg:text-justify"
                      >
                        👉 {step}
                      </p>
                    ))}
                  </div>

                  {por.tools && (
                    <div className="flex flex-col">
                      <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold break-words">
                        🔨 Tools Used
                      </h1>
                      <div className="flex flex-wrap gap-2 my-2">
                        {por.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="font-semibold w-auto px-4 py-2 dark:bg-[#161B22] border bg-white dark:text-slate-200 text-slate-700 rounded-md !text-[0.8rem]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Main;