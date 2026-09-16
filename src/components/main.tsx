import { memo } from "react";
import Link from "next/link";
import DarkMode from "./darkmode";
import ScrollObserver from "./scroll-observer";
import Background from "./background";
import WorkExperience from "./work-experience";
import Projects from "./projects";
import { GithubIcon, LinkedinIcon, DownloadIcon, FileTextIcon } from "./icons";
import { SOCIAL_LINKS } from "@/constants";
import { SocialLinkItem } from "@/types";

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
  return (
    <main className="w-full flex flex-col items-center">
      <ScrollObserver />

      <section className="min-h-[100dvh] flex flex-col justify-center items-center lg:items-start gap-10 lg:gap-14 w-full max-w-5xl px-4 py-8 lg:p-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 w-full">
          <div className="w-56 h-56 min-w-56 min-h-56 rounded-full ring-2 ring-accent-primary overflow-hidden shrink-0 relative">
            <img
              src="/images/profile.avif"
              width={224}
              height={224}
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
                I am a Fullstack Developer with over 2 years of experience developing enterprise-grade Fiori applications with OData, Node.js, and Python backend services.
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
              <ul className="flex items-center gap-2">
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

      <Background />

      <WorkExperience />

      <Projects />

      <section className="scroll-section w-full min-h-[100dvh] flex flex-col justify-center items-center py-12 lg:py-16 px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="w-full max-w-5xl mx-auto pb-6 lg:pb-10 text-center">
          <h2 className="text-slate-900 dark:text-slate-100 text-title font-extrabold tracking-tight break-words font-sans">
            Resume
          </h2>
        </div>

        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden relative shrink-0 flex items-center justify-center">
            <img
              src="/images/resumess.avif"
              alt="Lakshya Mahawar Resume Preview"
              loading="lazy"
              decoding="async"
              className="w-auto h-auto max-h-[55vh] lg:max-h-[650px] object-contain object-center rounded-2xl block border border-slate-200 dark:border-border-primary shadow-sm"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
            <div className="flex items-center gap-3">
              <FileTextIcon className="w-6 h-6 text-accent-primary shrink-0" />
              <span className="text-subheading font-semibold text-slate-800 dark:text-slate-200 font-sans">
                resume.pdf
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-body leading-relaxed font-editorial max-w-md">
              Download my résumé containing complete educational background, technical skill sets, and professional experience details.
            </p>

            <a
              href="/resume.pdf"
              download="Lakshya_Mahawar_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-accent-primary hover:bg-accent-hover text-black text-body font-semibold rounded-lg shadow-xs cursor-pointer font-sans"
              aria-label="Download Resume PDF"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default memo(Main);