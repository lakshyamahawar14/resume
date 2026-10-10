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
      <header className="w-full text-center mb-6">
        <h2>Projects</h2>
      </header>

      <div className="w-full flex flex-col gap-8 lg:gap-10">
        {PROJECTS.map((project: ProjectItem, index: number) => (
          <article
            key={index}
            className={`w-full ${
              project.image
                ? "min-h-[auto] lg:min-h-[75vh] flex items-center justify-center p-2 sm:p-4"
                : "max-w-4xl mx-auto flex flex-col gap-4 py-2"
            }`}
          >
            <div
              className={`w-full ${
                project.image
                  ? "flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10"
                  : "flex flex-col gap-4"
              }`}
            >
              {project.image && (
                <div className="w-full lg:w-1/2 flex items-center justify-center overflow-hidden shrink-0 p-2">
                  <div className="relative w-full max-w-[460px] aspect-[16/10] sm:aspect-[16/9] lg:h-[60vh]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      loading="lazy"
                      quality={75}
                      sizes="(min-width: 1024px) 460px, 95vw"
                      className="object-contain object-center block"
                    />
                  </div>
                </div>
              )}

              <div
                className={`w-full flex flex-col gap-4 lg:gap-5 ${
                  project.image ? "lg:w-1/2" : ""
                }`}
              >
                <header className="flex flex-col sm:flex-row justify-between items-start gap-2">
                  <h3>{project.title}</h3>
                  <time>
                    {project.start} - {project.end} ({project.period}{" "}
                    {project.period === 1 ? "month" : "months"})
                  </time>
                </header>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-sans font-bold text-caption tracking-wider">
                      Description
                    </h4>
                    <ul className="flex flex-col gap-1.5">
                      {project.description.map((step: string, idx: number) => (
                        <li key={idx}>
                          <p>• {step}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.skills.length > 0 && (
                    <div className="flex flex-col gap-1.5">
                      <h4 className="font-sans font-bold text-caption tracking-wider">
                        Stack & Tools
                      </h4>
                      <ul className="flex flex-wrap gap-2">
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