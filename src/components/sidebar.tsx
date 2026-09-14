"use client";

import { useState, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import DarkMode from "./darkmode";
import { SOCIAL_LINKS } from "@/constants";
import { GithubIcon, LinkedinIcon } from "./icons";
import { SocialLinkItem } from "@/types";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Github":
      return <MemoizedGithubIcon />;
    case "Linkedin":
      return <MemoizedLinkedinIcon />;
    default:
      return null;
  }
};

const MemoizedGithubIcon = memo(() => <GithubIcon className="w-5 h-5 shrink-0" />);
MemoizedGithubIcon.displayName = "MemoizedGithubIcon";

const MemoizedLinkedinIcon = memo(() => <LinkedinIcon className="w-5 h-5 shrink-0" />);
MemoizedLinkedinIcon.displayName = "MemoizedLinkedinIcon";

const ProfileImage = memo(() => (
  <Image
    src="/images/profile.avif"
    width={192}
    height={192}
    quality={100}
    priority={true}
    loading="eager"
    decoding="async"
    sizes="192px"
    alt="Lakshya Mahawar profile photo"
    className="rounded-full object-cover object-center w-full h-full block"
  />
));
ProfileImage.displayName = "ProfileImage";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <aside
      className={`bg-white dark:bg-bg-primary border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-border-primary shadow-xs box-border lg:sticky lg:top-0 lg:left-0 lg:z-30 lg:w-[300px] lg:min-w-[300px] lg:max-w-[300px] lg:shrink-0 lg:h-screen lg:max-h-screen lg:overflow-hidden p-4 lg:py-6 lg:px-6 flex flex-col justify-start items-center gap-3 lg:gap-4 ${
        isOpen
          ? "fixed inset-0 z-50 w-full h-[100dvh] max-h-[100dvh] overflow-y-auto overscroll-contain"
          : "sticky top-0 left-0 z-30 w-full h-auto"
      }`}
    >
      <div className={`flex justify-between items-center gap-3 lg:gap-4 w-full shrink-0 ${isOpen ? "flex-col lg:flex-col" : "flex-row lg:flex-col"}`}>
        {isOpen && (
          <div className="flex lg:hidden w-full justify-end">
            <button
              type="button"
              onClick={toggleSidebar}
              aria-label="Close navigation menu"
              className="flex items-center justify-center p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-bg-card cursor-pointer shrink-0"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        )}

        <div className={`flex items-center gap-3 lg:gap-3.5 w-full min-w-0 ${isOpen ? "hidden lg:flex lg:flex-col lg:items-center" : "flex-row lg:flex-col"}`}>
          <div className="rounded-full ring-2 ring-accent-primary overflow-hidden shrink-0 bg-white dark:bg-bg-primary w-14 h-14 min-w-14 min-h-14 lg:w-48 lg:h-48 lg:min-w-48 lg:min-h-48 relative">
            <ProfileImage />
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

        {!isOpen && (
          <button
            type="button"
            onClick={toggleSidebar}
            aria-label="Open navigation menu"
            className="flex lg:hidden items-center justify-center p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-bg-card cursor-pointer shrink-0 ml-auto"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}
      </div>

      <div
        className={`w-full flex-col gap-3 lg:gap-4 pt-1 lg:pt-0 ${
          isOpen ? "flex items-center" : "hidden lg:flex"
        }`}
      >
        {isOpen && (
          <div className="flex lg:hidden flex-col items-center gap-2 w-full pb-1">
            <div className="w-48 h-48 min-w-48 min-h-48 rounded-full ring-2 ring-accent-primary overflow-hidden shrink-0 bg-white dark:bg-bg-primary relative">
              <ProfileImage />
            </div>
            <div className="text-center w-full min-w-0">
              <h2 className="text-slate-900 dark:text-slate-100 text-title font-bold tracking-tight break-words">
                Lakshya Mahawar
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-caption font-medium break-words mt-0.5">
                Software Engineer @ <span className="text-accent-primary font-semibold">V3iT</span>
              </p>
            </div>
          </div>
        )}

        <div className="w-full flex flex-col pt-2 border-t border-slate-200 dark:border-border-primary lg:border-t-0">
          <p className="text-accent-primary text-caption font-bold tracking-wider">
            About
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-body leading-relaxed break-words mt-0.5">
            Fullstack Developer with over 2 years of experience developing enterprise-grade Fiori applications with OData, Node.js, and Python backend services.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 w-full">
          <div className="flex flex-col">
            <p className="text-slate-600 dark:text-slate-400 text-caption font-semibold tracking-wider">
              Email
            </p>
            <p className="text-slate-800 dark:text-slate-200 text-body font-medium break-words mt-0.5">
              <Link
                href="mailto:lakshyamahawar14@gmail.com"
                className="hover:text-accent-primary underline-offset-2 hover:underline"
              >
                lakshyamahawar14@gmail.com
              </Link>
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-slate-600 dark:text-slate-400 text-caption font-semibold tracking-wider">
              Phone
            </p>
            <p className="text-slate-800 dark:text-slate-200 text-body font-medium break-words mt-0.5">
              +91 6350643154
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start w-full pt-0.5">
          <p className="text-slate-600 dark:text-slate-400 text-caption font-semibold tracking-wider">
            Connect
          </p>
          <ul className="flex justify-start items-center gap-3 py-1.5 w-full">
            {SOCIAL_LINKS.filter((link: SocialLinkItem) => link.icon === "Github" || link.icon === "Linkedin").map((link: SocialLinkItem, idx: number) => (
              <li key={idx} className="list-none shrink-0">
                <Link
                  href={link.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-9 h-9 flex justify-center items-center rounded-lg hover:text-accent-primary text-slate-600 dark:text-slate-300 shrink-0 aspect-square"
                >
                  {getIcon(link.icon)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center w-full">
          <DarkMode />
        </div>
      </div>
    </aside>
  );
};

export default memo(SideBar);