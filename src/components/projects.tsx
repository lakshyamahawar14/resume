import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/constants";
import { ProjectItem } from "@/types";
import { ExternalLinkIcon } from "./icons";

const Projects = () => {
  return (
    <section>
      <header>
        <h2 className="text-center font-bold mt-3 py-3 bg-[dodgerblue] text-[aliceblue]">Projects</h2>
      </header>

      <div>
        {PROJECTS.map((project: ProjectItem, index: number) => (
          <article key={index} className="mb-2">
            <div>
              {project.image && (
                <div className="border border-5 border-[lightskyblue] inline-block">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={1000}
                    loading="eager"
                    fetchPriority="high"
                    quality={100}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              )}

              <div>
                <header className="flex justify-between gap-2 bg-[firebrick] text-[cornsilk]">
                  <h3 className="font-semibold">{project.title}</h3>
                  <time className="text-end text-[khaki]">
                    {project.start} - {project.end} ({project.period}{" "}
                    {project.period === 1 ? "month" : "months"})
                  </time>
                </header>

                <div>
                  <div>
                    <h4 className="font-semibold bg-[Gainsboro]">Description</h4>
                    <ul className="bg-[honeydew] border-2 border-[goldenrod]">
                      {project.description.map((step: string, idx: number) => (
                        <li key={idx}>
                          <p>• {step}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.skills.length > 0 && (
                    <div>
                      <h4 className="font-semibold bg-[lightcoral]">Stack & Tools</h4>
                      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,125px),1fr))] gap-1">
                        {project.skills.map((skill: string, idx: number) => (
                          <li key={idx} className="bg-[maroon] w-auto text-[white] rounded-sm pl-2 py-1">
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.link && (
                    <footer className="flex justify-end">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 my-2 w-auto bg-[blue] text-[white] p-2"
                      >
                        <ExternalLinkIcon width={16} height={16} />
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