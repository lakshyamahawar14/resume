import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/constants";
import { ProjectItem } from "@/types";
import { ExternalLinkIcon } from "./icons";

const Projects = () => {
  console.log('projects.tsx rendered!');
  return (
    <section className="items-center">
      <header className="scroll-section w-full text-center">
        <h2>Projects</h2>
      </header>

      <div className="w-full flex flex-col gap-8 lg:gap-12">
        {PROJECTS.map((project: ProjectItem, index: number) => (
          <article
            key={index}
            className={`scroll-section w-full ${
              project.image
                ? "min-h-[100dvh] flex items-center justify-center py-4 lg:py-8"
                : "max-w-4xl mx-auto flex flex-col gap-4 py-4"
            }`}
          >
            <div
              className={`w-full ${
                project.image
                  ? "flex flex-col lg:flex-row items-start justify-between gap-7 lg:gap-12"
                  : "flex flex-col gap-4"
              }`}
            >
              {project.image && (
                <div className="w-full lg:w-1/2 flex items-start justify-center overflow-hidden shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={675}
                    loading="lazy"
                    quality={75}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="w-full h-auto max-h-[50vh] lg:max-h-[550px] object-contain object-top block"
                  />
                </div>
              )}

              <div
                className={`w-full flex flex-col gap-5 lg:gap-6 ${
                  project.image ? "lg:w-1/2" : ""
                }`}
              >
                <header className="flex flex-col lg:flex-row justify-between items-start gap-2">
                  <h3>{project.title}</h3>
                  <time>
                    {project.start} - {project.end} ({project.period}{" "}
                    {project.period === 1 ? "month" : "months"})
                  </time>
                </header>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h4 className="font-sans font-bold text-caption tracking-wider text-accent-primary">
                      Description
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {project.description.map((step: string, idx: number) => (
                        <li key={idx}>
                          <p>• {step}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.skills.length > 0 && (
                    <div className="flex flex-col gap-2">
                      <h4 className="font-sans font-bold text-caption tracking-wider text-accent-primary">
                        Stack & Tools
                      </h4>
                      <ul className="flex flex-wrap gap-2.5">
                        {project.skills.map((skill: string, idx: number) => (
                          <li key={idx}>
                            <span className="badge">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.link && (
                    <footer className="pt-1">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <ExternalLinkIcon className="w-4 h-4" />
                        <span>Live →</span>
                      </Link>
                    </footer>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default memo(Projects);