import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import DarkMode from "./darkmode";
import { SOCIAL_LINKS, SocialLinkItem } from "@/constants";
import { GithubIcon, LinkedinIcon } from "./icons";

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

const SideBar = () => {
  console.log('sidebar.tsx rendered!');
  return (
    <aside className="sticky top-0 left-0 z-30 w-full lg:w-[300px] lg:min-w-[300px] lg:max-w-[300px] lg:shrink-0 h-auto lg:h-screen lg:max-h-screen p-4 lg:py-6 lg:px-6 flex flex-col justify-start items-center gap-4 bg-white dark:bg-bg-primary border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-border-primary shadow-xs overflow-y-auto lg:overflow-hidden">
      <div className="flex flex-row lg:flex-col justify-between lg:justify-center items-center gap-3 lg:gap-4 w-full">
        <div className="flex flex-row lg:flex-col items-center gap-3 lg:gap-3.5 w-full">
          <div className="relative w-10 h-10 min-w-10 min-h-10 lg:w-48 lg:h-48 lg:min-w-48 lg:min-h-48 aspect-square rounded-full ring-2 ring-accent-primary overflow-hidden shrink-0 bg-white dark:bg-bg-primary">
            <Image
              src="/images/profile.webp"
              fill
              sizes="(min-width: 1024px) 384px, 160px"
              quality={100}
              unoptimized={true}
              priority={true}
              loading="eager"
              decoding="sync"
              alt="Lakshya Mahawar profile photo"
              className="rounded-full object-cover object-center block"
            />
          </div>

          <div className="text-left lg:text-center w-full min-w-0">
            <h1 className="text-slate-900 dark:text-slate-100 text-title font-bold tracking-tight break-words">
              Lakshya Mahawar
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-caption font-medium break-words mt-0.5">
              Software Engineer @ <span className="text-accent-primary font-semibold">V3iT</span>
            </p>
          </div>
        </div>

        <div className="flex items-center shrink-0">
          <DarkMode />
        </div>
      </div>

      <div className="w-full hidden lg:flex flex-col gap-4">
        <div className="flex flex-col">
          <p className="text-accent-primary text-caption font-bold tracking-wider">
            About
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-body leading-relaxed break-words mt-1">
            Fullstack Developer with over 2 years of experience developing enterprise-grade Fiori applications with OData, Node.js, and Python backend services.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <p className="text-slate-400 dark:text-slate-500 text-caption font-semibold tracking-wider">
              Email
            </p>
            <p className="text-slate-800 dark:text-slate-200 text-body font-medium break-words mt-0.5">
              <Link
                href="mailto:lakshyamahawar14@gmail.com"
                className="hover:text-accent-primary transition-colors underline-offset-2 hover:underline"
              >
                lakshyamahawar14@gmail.com
              </Link>
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-slate-400 dark:text-slate-500 text-caption font-semibold tracking-wider">
              Phone
            </p>
            <p className="text-slate-800 dark:text-slate-200 text-body font-medium break-words mt-0.5">
              +91 6350643154
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start w-full pt-1">
          <p className="text-slate-400 dark:text-slate-500 text-caption font-semibold tracking-wider">
            Connect
          </p>
          <ul className="flex justify-start items-center gap-3 py-2 w-full">
            {SOCIAL_LINKS.filter((link: SocialLinkItem) => link.icon === "Github" || link.icon === "Linkedin").map((link: SocialLinkItem, idx: number) => (
              <li key={idx} className="list-none shrink-0">
                <Link
                  href={link.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-9 h-9 flex justify-center items-center rounded-lg hover:text-accent-primary text-slate-600 dark:text-slate-300 transition-colors shrink-0 aspect-square"
                >
                  {getIcon(link.icon)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default memo(SideBar);