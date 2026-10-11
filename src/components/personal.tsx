import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "./icons";
import { PERSONAL_DETAILS, SOCIAL_LINKS } from "@/constants";
import { PersonalItem, SocialLinkItem } from "@/types";
import { getRandomLayoutTransform } from "@/utils/font";

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
        <div key={index} style={getRandomLayoutTransform(2, 8, -1.0, 1.0)}>
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
            />
          </div>

          <div style={getRandomLayoutTransform(2, 10, -0.8, 0.8)}>
            <header style={getRandomLayoutTransform(2, 6, -1.2, 1.2)}>
              <h1>{person.name}</h1>
              <p>
                {person.role} @ <span>{person.organization}</span>
              </p>
            </header>

            <article style={getRandomLayoutTransform(2, 8, -0.7, 0.7)}>
              <span className="caption">About</span>
              <p>{person.about}</p>
            </article>

            <address style={getRandomLayoutTransform(2, 6, -0.9, 0.9)}>
              <div style={getRandomLayoutTransform(2, 4, -0.5, 0.5)}>
                <span className="caption">Email</span>
                <p>
                  <Link href={`mailto:${person.email}`}>{person.email}</Link>
                </p>
              </div>

              <div style={getRandomLayoutTransform(2, 4, -0.5, 0.5)}>
                <span className="caption">Phone</span>
                <p>{person.phone}</p>
              </div>
            </address>

            <footer style={getRandomLayoutTransform(2, 6, -0.8, 0.8)}>
              <ul>
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