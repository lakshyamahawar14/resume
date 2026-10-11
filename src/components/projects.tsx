import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/constants";
import { ProjectItem } from "@/types";
import { ExternalLinkIcon } from "./icons";
import { getRandomLayoutTransform } from "@/utils/font";

const Projects = () => {
  return (
    <section>
      <header style={getRandomLayoutTransform(2, 8, -1.2, 1.2)}>
        <h2>Projects</h2>
      </header>

      <div style={getRandomLayoutTransform(2, 6, -0.6, 0.6)}>
        {PROJECTS.map((project: ProjectItem, index: number) => (
          <article key={index} style={getRandomLayoutTransform(2, 10, -0.8, 0.8)}>
            <div>
              {project.image && (
                <div style={getRandomLayoutTransform(1, 4, -0.5, 0.5)}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={460}
                    height={280}
                    loading="eager"
                    quality={75}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              )}

              <div style={getRandomLayoutTransform(2, 8, -0.7, 0.7)}>
                <header>
                  <h3>{project.title}</h3>
                  <time>
                    {project.start} - {project.end} ({project.period}{" "}
                    {project.period === 1 ? "month" : "months"})
                  </time>
                </header>

                <div style={getRandomLayoutTransform(2, 6, -0.5, 0.5)}>
                  <div>
                    <h4>Description</h4>
                    <ul>
                      {project.description.map((step: string, idx: number) => (
                        <li key={idx}>
                          <p>• {step}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.skills.length > 0 && (
                    <div style={getRandomLayoutTransform(2, 4, -0.4, 0.4)}>
                      <h4>Stack & Tools</h4>
                      <ul>
                        {project.skills.map((skill: string, idx: number) => (
                          <li key={idx}>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.link && (
                    <footer>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
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