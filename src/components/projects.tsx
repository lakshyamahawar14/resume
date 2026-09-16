import { memo } from "react";
import Link from "next/link";
import { PROJECTS } from "@/constants";
import { ProjectItem } from "@/types";
import { ExternalLinkIcon } from "./icons";

const Projects = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="scroll-section w-full max-w-5xl mx-auto px-4 pt-16 pb-8 text-center">
        <h2 className="text-slate-900 dark:text-slate-100 text-title font-extrabold tracking-tight break-words font-sans">
          Projects
        </h2>
      </div>

      <div className="w-full flex flex-col gap-12 lg:gap-20">
        {PROJECTS.map((project: ProjectItem, index: number) => (
          <div
            key={index}
            className={`scroll-section w-full ${
              project.imageSrc
                ? "min-h-[100dvh] flex items-center justify-center py-12 lg:py-16 px-4 sm:px-6 lg:px-12 xl:px-16"
                : "max-w-5xl mx-auto px-4 py-8 lg:px-16 flex flex-col gap-5 text-left"
            }`}
          >
            <div
              className={`w-full ${
                project.imageSrc
                  ? "max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 xl:gap-16"
                  : "flex flex-col gap-5 text-left"
              }`}
            >
              {project.imageSrc && (
                <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden relative shrink-0 flex items-center justify-center">
                  <img
                    src={project.imageSrc}
                    alt={project.details.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto max-h-[50vh] lg:max-h-[550px] object-contain object-center rounded-2xl block"
                  />
                </div>
              )}

              <div
                className={`w-full flex flex-col gap-5 text-left ${
                  project.imageSrc ? "lg:w-1/2" : ""
                }`}
              >
                <div
                  className={`flex items-start justify-between gap-2 ${
                    project.imageSrc
                      ? "flex-col sm:flex-row lg:flex-col"
                      : "flex-col lg:flex-row w-full gap-3"
                  }`}
                >
                  {project.details.title && (
                    <h3 className="text-accent-primary text-item-title font-bold break-words font-sans">
                      {project.details.title}
                    </h3>
                  )}
                  <span className="py-1 bg-transparent text-slate-600 dark:text-slate-400 text-caption font-medium shrink-0 font-sans">
                    {project.start} - {project.end} ({project.period}{" "}
                    {project.period === 1 ? "month" : "months"})
                  </span>
                </div>

                <div className="flex flex-col gap-5 w-full text-left">
                  <div className="flex flex-col text-left gap-2.5">
                    <p className="text-accent-subtle text-caption font-bold tracking-wider mb-0.5 font-sans">
                      Description
                    </p>
                    {project.details.description.map((step: string, idx: number) => (
                      <p
                        key={idx}
                        className="text-slate-600 dark:text-slate-300 text-body leading-relaxed text-left font-editorial"
                      >
                        • {step}
                      </p>
                    ))}
                  </div>

                  {project.tools && (
                    <div className="flex flex-col text-left pt-2">
                      <p className="text-accent-subtle text-caption font-bold tracking-wider mb-3 font-sans">
                        Stack & Tools
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {project.tools.map((tool: string, idx: number) => (
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

                  {project.link && (
                    <div className="flex flex-col text-left pt-2">
                      <div className="flex flex-wrap gap-2.5">
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-semibold py-2.5 px-5 rounded-lg text-body bg-accent-primary hover:bg-accent-hover text-black shadow-xs font-sans cursor-pointer"
                        >
                          <ExternalLinkIcon className="w-4 h-4" />
                          <span>Live →</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Projects);