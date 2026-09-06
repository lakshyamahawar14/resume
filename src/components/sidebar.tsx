import Link from "next/link";
import Image from "next/image";
import DarkMode from "./darkmode";
import { SOCIAL_LINKS, SocialLinkItem } from "@/constants";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  LeetcodeIcon,
  TypingIcon,
} from "./icons";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Github":
      return <GithubIcon className="w-5 h-5 shrink-0" />;
    case "Linkedin":
      return <LinkedinIcon className="w-5 h-5 shrink-0" />;
    case "Instagram":
      return <InstagramIcon className="w-5 h-5 shrink-0" />;
    case "Code2":
      return <LeetcodeIcon className="w-5 h-5 shrink-0" />;
    case "Keyboard":
      return <TypingIcon className="w-5 h-5 shrink-0" />;
    default:
      return null;
  }
};

const SideBar = () => {
  return (
    <aside className="sticky top-0 left-0 z-30 w-full lg:w-[300px] lg:min-w-[300px] lg:max-w-[300px] lg:shrink-0 h-auto lg:h-screen lg:max-h-screen p-4 lg:py-6 lg:px-6 flex flex-col justify-start items-center gap-4 bg-white dark:bg-[#0c1017] border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto lg:overflow-hidden">
      <div className="flex flex-row lg:flex-col justify-between lg:justify-center items-center gap-3 w-full">
        <div className="flex items-center gap-3">
          <div className="relative p-1 rounded-full bg-indigo-500 shrink-0">
            <div className="flex justify-center items-center rounded-full w-[48px] h-[48px] lg:w-[138px] lg:h-[138px] shrink-0 overflow-hidden bg-white dark:bg-[#0c1017]">
              <Image
                src="/images/profile.webp"
                width={138}
                height={138}
                priority={true}
                loading="eager"
                decoding="sync"
                alt="Lakshya Mahawar profile photo"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-left">
            <h1 className="text-slate-900 dark:text-slate-100 text-[16px] lg:text-[20px] font-bold tracking-tight break-words">
              Lakshya Mahawar
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-[12px] lg:text-[14px] font-medium break-words">
              Software Engineer @ <span className="text-indigo-600 dark:text-indigo-400 font-semibold">V3iT</span>
            </p>
          </div>
        </div>

        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <DarkMode />
        </div>
      </div>

      <div className="w-full hidden lg:flex flex-col gap-3">
        <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <p className="text-indigo-600 dark:text-indigo-400 text-[12px] font-bold tracking-wider uppercase">
            About
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-[14px] leading-relaxed break-words mt-1">
            Fullstack Developer with over 2 years of experience developing enterprise-grade Fiori applications with OData, Node.js, and Python backend services.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <p className="text-slate-400 dark:text-slate-500 text-[12px] font-semibold uppercase tracking-wider">
              Email
            </p>
            <p className="text-slate-800 dark:text-slate-200 text-[14px] font-medium break-words mt-0.5">
              <Link
                href="mailto:lakshyamahawar14@gmail.com"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors underline-offset-2 hover:underline"
              >
                lakshyamahawar14@gmail.com
              </Link>
            </p>
          </div>

          <div className="px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <p className="text-slate-400 dark:text-slate-500 text-[12px] font-semibold uppercase tracking-wider">
              Phone
            </p>
            <p className="text-slate-800 dark:text-slate-200 text-[14px] font-medium break-words mt-0.5">
              +91 6350643154
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start w-full pt-1">
          <p className="text-slate-400 dark:text-slate-500 text-[12px] font-semibold tracking-wider uppercase">
            Connect
          </p>
          <ul className="flex justify-start items-center gap-2.5 py-2 w-full">
            {SOCIAL_LINKS.map((link: SocialLinkItem, idx: number) => (
              <li key={idx} className="list-none">
                <Link
                  href={link.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex justify-center items-center p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-indigo-500 transition-colors"
                >
                  {getIcon(link.icon)}
                </Link>
              </li>
            ))}
          </ul>
          <DarkMode />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;