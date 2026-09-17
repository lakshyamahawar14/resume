import { memo } from "react";
import Link from "next/link";
import DarkMode from "./darkmode";
import { GithubIcon, LinkedinIcon } from "./icons";
import { PERSONAL_DETAILS, SOCIAL_LINKS } from "@/constants";
import { PersonalItem, SocialLinkItem } from "@/types";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Github":
      return <GithubIcon className="w-7 h-7 shrink-0" />;
    case "Linkedin":
      return <LinkedinIcon className="w-7 h-7 shrink-0" />;
    default:
      return null;
  }
};

const Personal = () => {
  console.log('personal.tsx rendered!');
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center items-center">
      {PERSONAL_DETAILS.map((person: PersonalItem, index: number) => (
        <div
          key={index}
          className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8 lg:gap-10"
        >
          <div className="w-48 h-48 min-w-48 min-h-48 lg:w-56 lg:h-56 lg:min-w-56 lg:min-h-56 rounded-full ring-2 ring-accent-primary overflow-hidden shrink-0 relative">
            <img
              src={person.image}
              width={224}
              height={224}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              alt={`${person.name} profile photo`}
              className="rounded-full object-cover object-center w-full h-full block"
            />
          </div>

          <div className="w-full max-w-2xl flex flex-col items-start text-left gap-8">
            <header className="flex flex-col gap-2">
              <h1>{person.name}</h1>
              <p className="font-sans font-medium text-subheading text-slate-600 dark:text-slate-400">
                {person.role} @{" "}
                <span className="text-accent-primary font-semibold">
                  {person.organization}
                </span>
              </p>
            </header>

            <article className="flex flex-col gap-2.5 max-w-2xl">
              <span className="font-sans font-bold text-caption tracking-wider text-accent-subtle block">
                About
              </span>
              <p>{person.about}</p>
            </article>

            <address className="not-italic flex flex-col lg:flex-row gap-8 lg:gap-16 w-full justify-start">
              <div className="flex flex-col gap-1.5">
                <span className="font-sans font-bold text-caption tracking-wider text-accent-subtle block">
                  Email
                </span>
                <p className="font-sans font-medium text-slate-800 dark:text-slate-200">
                  <Link
                    href={`mailto:${person.email}`}
                    className="hover:text-accent-primary underline-offset-2 hover:underline"
                  >
                    {person.email}
                  </Link>
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="font-sans font-bold text-caption tracking-wider text-accent-subtle block">
                  Phone
                </span>
                <p className="font-sans font-medium text-slate-800 dark:text-slate-200">
                  {person.phone}
                </p>
              </div>
            </address>

            <footer className="flex items-center justify-between w-full">
              <ul className="flex items-center gap-1">
                {SOCIAL_LINKS.filter(
                  (link: SocialLinkItem) =>
                    link.icon === "Github" || link.icon === "Linkedin"
                ).map((link: SocialLinkItem, idx: number) => (
                  <li key={idx} className="shrink-0">
                    <Link
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="w-11 h-11 flex justify-center items-center rounded-lg text-slate-600 dark:text-slate-300 hover:text-accent-primary dark:hover:text-accent-primary shrink-0 aspect-square"
                    >
                      {getIcon(link.icon)}
                    </Link>
                  </li>
                ))}
              </ul>
              <DarkMode />
            </footer>
          </div>
        </div>
      ))}
    </section>
  );
};

export default memo(Personal);