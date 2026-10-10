import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <section className="h-[100dvh] max-h-[100dvh] flex flex-col justify-center items-center py-4 lg:py-6 overflow-hidden">
      {PERSONAL_DETAILS.map((person: PersonalItem, index: number) => (
        <div
          key={index}
          className="w-full max-w-4xl mx-auto flex flex-col items-center gap-5 lg:gap-7"
        >
          <div className="w-48 h-48 min-w-48 min-h-48 lg:w-56 lg:h-56 lg:min-w-56 lg:min-h-56 rounded-full ring-2 ring-accent-primary overflow-hidden shrink-0 relative">
            <Image
              src={person.image}
              alt={`${person.name} profile photo`}
              fill
              priority={true}
              fetchPriority="high"
              quality={75}
              sizes="(min-width: 1024px) 224px, 192px"
              className="rounded-full object-cover object-center block"
            />
          </div>

          <div className="w-full max-w-2xl flex flex-col items-start text-left gap-5 lg:gap-6">
            <header className="flex flex-col gap-1">
              <h1>{person.name}</h1>
              <p className="font-sans font-medium text-subheading">
                {person.role} @{" "}
                <span className="font-semibold">
                  {person.organization}
                </span>
              </p>
            </header>

            <article className="flex flex-col gap-1.5 max-w-2xl">
              <span className="font-sans font-bold text-caption tracking-wider block">
                About
              </span>
              <p>{person.about}</p>
            </article>

            <address className="not-italic flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 w-full justify-start">
              <div className="flex flex-col gap-1">
                <span className="font-sans font-bold text-caption tracking-wider block">
                  Email
                </span>
                <p className="font-sans font-medium break-all">
                  <Link
                    href={`mailto:${person.email}`}
                    className="underline-offset-2 hover:underline"
                  >
                    {person.email}
                  </Link>
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-sans font-bold text-caption tracking-wider block">
                  Phone
                </span>
                <p className="font-sans font-medium">
                  {person.phone}
                </p>
              </div>
            </address>

            <footer className="flex items-center justify-between w-full">
              <ul className="flex items-center gap-x-1">
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
                      className="w-10 h-10 flex justify-center items-center shrink-0 aspect-square"
                    >
                      {getIcon(link.icon)}
                    </Link>
                  </li>
                ))}
              </ul>
            </footer>
          </div>
        </div>
      ))}
    </section>
  );
};

export default memo(Personal);