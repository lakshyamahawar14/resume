import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "./icons";
import { PERSONAL_DETAILS, SOCIAL_LINKS } from "@/constants";
import { PersonalItem, SocialLinkItem } from "@/types";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Github":
      return <GithubIcon width={28} height={28} />;
    case "Linkedin":
      return <LinkedinIcon width={28} height={28} />;
    default:
      return null;
  }
};

const Personal = () => {
  return (
    <section>
      {PERSONAL_DETAILS.map((person: PersonalItem, index: number) => (
        <div key={index} className="flex items-center justify-center flex-col gap-2">
          <div>
            <Image
              src={person.image}
              alt={`${person.name} profile photo`}
              width={200}
              height={200}
              loading="eager"
              priority={true}
              quality={75}
              style={{ width: "auto", height: "auto" }}
              className="rounded-full border border-5 border-[magenta]"
            />
          </div>

          <div className="w-full">
            <header className="bg-[green] text-[white]">
              <h1 className="text-center font-bold">{person.name}</h1>
              <p className="text-center">
                {person.role} @ <span className="italic">{person.organization}</span>
              </p>
            </header>

            <article>
              <span className="font-semibold bg-[red] px-3">About</span>
              <p className="bg-[yellow]">{person.about}</p>
            </article>

            <address className="bg-[aquamarine]">
              <div className="flex gap-3">
                <span>Email</span>
                <p className="underline">
                  <Link href={`mailto:${person.email}`}>{person.email}</Link>
                </p>
              </div>

              <div>
                <div className="flex gap-3">
                  <span>Phone</span>
                  <p>{person.phone}</p>
                </div>
              </div>
            </address>

            <footer>
              <ul className="flex w-fit gap-2 bg-[fuchsia] text-[chartreuse]">
                {SOCIAL_LINKS.filter(
                  (link: SocialLinkItem) =>
                    link.icon === "Github" || link.icon === "Linkedin"
                ).map((link: SocialLinkItem, idx: number) => (
                  <li key={idx}>
                    <Link
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
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