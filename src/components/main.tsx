import { memo } from "react";
import Link from "next/link";
import DarkMode from "./darkmode";
import ScrollObserver from "./scroll-observer";
import { GithubIcon, LinkedinIcon, DownloadIcon, FileTextIcon } from "./icons";
import {
  INTERESTS,
  EDUCATION,
  SKILLS,
  EXPERIENCES,
  PROJECTS,
  SOCIAL_LINKS,
} from "@/constants";
import { ExperienceItem, ProjectItem, SkillGroup, SocialLinkItem } from "@/types";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Github":
      return <GithubIcon className="w-5 h-5 shrink-0" />;
    case "Linkedin":
      return <LinkedinIcon className="w-5 h-5 shrink-0" />;
    default:
      return null;
  }
};

const Main = () => {
  console.log('main.tsx rendered!');
  return (
    <main className="px-4 py-8 lg:p-16 flex flex-col gap-16 lg:gap-28 w-full max-w-5xl mx-auto">
      <ScrollObserver />

      <section className="min-h-[100dvh] flex flex-col justify-center items-center lg:items-start gap-10 lg:gap-14 w-full py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 w-full">
          <div className="w-48 h-48 min-w-48 min-h-48 rounded-full ring-2 ring-accent-primary overflow-hidden shrink-0 relative bg-slate-200 dark:bg-bg-card">
            <img
              src="/images/profile.avif"
              width={192}
              height={192}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              alt="Lakshya Mahawar profile photo"
              className="rounded-full object-cover object-center w-full h-full block"
            />
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 flex-1">
            <div className="flex flex-col gap-2">
              <h1 className="text-slate-900 dark:text-slate-100 text-name font-extrabold tracking-tight break-words font-sans">
                Lakshya Mahawar
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-subheading font-medium break-words font-sans">
                Software Engineer @ <span className="text-accent-primary font-semibold">V3iT</span>
              </p>
            </div>

            <div className="flex flex-col gap-2.5 max-w-2xl">
              <p className="text-accent-subtle text-caption font-bold tracking-wider font-sans">
                About
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-body leading-relaxed break-words font-editorial">
                Fullstack Developer with over 2 years of experience developing enterprise-grade Fiori applications with OData, Node.js, and Python backend services.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 w-full justify-center lg:justify-start">
              <div className="flex flex-col gap-1.5">
                <p className="text-accent-subtle text-caption font-bold tracking-wider font-sans">
                  Email
                </p>
                <p className="text-slate-800 dark:text-slate-200 text-body font-medium break-words font-sans">
                  <Link
                    href="mailto:lakshyamahawar14@gmail.com"
                    className="hover:text-accent-primary underline-offset-2 hover:underline"
                  >
                    lakshyamahawar14@gmail.com
                  </Link>
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <p className="text-accent-subtle text-caption font-bold tracking-wider font-sans">
                  Phone
                </p>
                <p className="text-slate-800 dark:text-slate-200 text-body font-medium break-words font-sans">
                  +91 6350643154
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between w-full pt-6 border-t border-slate-200 dark:border-border-primary mt-2">
              <ul className="flex items-center gap-5">
                {SOCIAL_LINKS.filter((link: SocialLinkItem) => link.icon === "Github" || link.icon === "Linkedin").map((link: SocialLinkItem, idx: number) => (
                  <li key={idx} className="list-none shrink-0">
                    <Link
                      href={link.route}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="w-9 h-9 flex justify-center items-center rounded-lg text-slate-600 dark:text-slate-300 shrink-0 aspect-square"
                    >
                      {getIcon(link.icon)}
                    </Link>
                  </li>
                ))}
              </ul>
              <DarkMode />
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-section min-h-[100dvh] flex flex-col justify-center gap-12 lg:gap-16 w-full py-8 lg:py-16">
        <div className="w-full pb-6 lg:pb-8 text-center">
          <h2 className="text-slate-900 dark:text-slate-100 text-title font-extrabold tracking-tight break-words font-sans">
            Background
          </h2>
        </div>

        <div className="flex flex-col gap-5">
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

        <div className="flex flex-col gap-5">
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

        <div className="flex flex-col gap-5">
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

      <section className="scroll-section min-h-[100dvh] flex flex-col justify-center gap-10 lg:gap-14 w-full py-8 lg:py-16">
        <div className="w-full pb-6 lg:pb-8 text-center">
          <h2 className="text-slate-900 dark:text-slate-100 text-title font-extrabold tracking-tight break-words font-sans">
            Work Experience
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:gap-16 my-2 w-full">
          {EXPERIENCES.map((exp: ExperienceItem, index: number) => (
            <div
              key={index}
              className="w-full flex flex-col gap-5 text-left py-2"
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

      <section className="scroll-section min-h-[100dvh] flex flex-col justify-center gap-10 lg:gap-14 w-full py-8 lg:py-16">
        <div className="w-full pb-6 lg:pb-8 text-center">
          <h2 className="text-slate-900 dark:text-slate-100 text-title font-extrabold tracking-tight break-words font-sans">
            Projects
          </h2>
        </div>
        <div className="flex flex-col gap-12 lg:gap-16 my-2 w-full">
          {PROJECTS.map((project: ProjectItem, index: number) => (
            <div
              key={index}
              className="w-full flex flex-col gap-5 text-left py-2"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-3">
                <div className="flex flex-col text-left">
                  {project.details.title && (
                    <h3 className="text-accent-primary text-item-title font-bold break-words font-sans">
                      {project.details.title}
                    </h3>
                  )}
                </div>
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
                        className="font-semibold py-2.5 px-5 rounded-lg text-body bg-accent-primary hover:bg-accent-hover text-black shadow-xs font-sans"
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

      <section className="scroll-section flex flex-col w-full">
        <div className="w-full pb-6 lg:pb-8 text-center">
          <h2 className="text-slate-900 dark:text-slate-100 text-title font-extrabold tracking-tight break-words font-sans">
            Resume
          </h2>
        </div>
        <div className="w-full my-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 py-4">
          <div className="flex items-center gap-3">
            <FileTextIcon className="w-6 h-6 text-accent-primary shrink-0" />
            <span className="text-subheading font-semibold text-slate-800 dark:text-slate-200 font-sans">
              resume.pdf
            </span>
          </div>
          <a
            href="/resume.pdf"
            download="Lakshya_Mahawar_Resume.pdf"
            className="flex items-center gap-2 px-5 py-2.5 bg-accent-primary hover:bg-accent-hover text-black text-body font-semibold rounded-lg shadow-xs cursor-pointer font-sans"
            aria-label="Download Resume PDF"
          >
            <DownloadIcon className="w-4 h-4" />
            <span>Download</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default memo(Main);