import Link from "next/link";
import Image from "next/image";
import { Code2, Keyboard } from "lucide-react";
import DarkMode from "./darkmode";
import { SOCIAL_LINKS, SocialLinkItem } from "@/constants";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./icons";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Github":
      return <GithubIcon className="w-5 h-5 shrink-0" />;
    case "Linkedin":
      return <LinkedinIcon className="w-5 h-5 shrink-0" />;
    case "Instagram":
      return <InstagramIcon className="w-5 h-5 shrink-0" />;
    case "Code2":
      return <Code2 className="w-5 h-5 shrink-0" />;
    case "Keyboard":
      return <Keyboard className="w-5 h-5 shrink-0" />;
    default:
      return null;
  }
};

const SideBar = () => {
  return (
    <section className="lg:sticky z-[20] top-0 left-0 flex flex-col justify-start items-center gap-4 lg:max-w-[290px] w-full lg:w-auto h-auto lg:h-screen lg:max-h-screen p-5 lg:py-5 lg:px-6 bg-white dark:bg-[#161b22] shadow-sm lg:shadow-md overflow-y-auto lg:overflow-hidden">
      <div className="flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-3 w-full">
        <div className="flex justify-center items-center rounded-full w-[130px] h-[130px] lg:w-[145px] lg:h-[145px] shrink-0 overflow-hidden shadow-sm">
          <Image
            src="/images/profile.webp"
            width={145}
            height={145}
            priority={true}
            loading="eager"
            decoding="sync"
            alt="Lakshya Mahawar profile photo"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <div className="w-full text-center lg:text-left">
          <h1 className="dark:text-slate-100 text-slate-900 text-[20px] font-bold tracking-tight break-words">
            Lakshya Mahawar
          </h1>
          <p className="dark:text-slate-400 text-slate-600 leading-snug text-[14px] font-normal break-words mt-0.5">
            Software Engineer @ V3iT Consulting Pvt. Ltd.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2.5">
        <div>
          <p className="dark:text-slate-400 text-slate-500 text-[12px] font-medium tracking-wide uppercase">
            About
          </p>
          <p className="dark:text-slate-300 text-slate-600 text-[14px] leading-relaxed break-words mt-0.5">
            Fullstack Developer with over 2 years of experience in developing enterprise-grade Fiori applications, coupled with OData, Node.js, or Python-based backend development.
          </p>
        </div>

        <div>
          <p className="dark:text-slate-400 text-slate-500 text-[12px] font-medium tracking-wide uppercase">
            Email
          </p>
          <p className="dark:text-slate-200 text-slate-700 text-[14px] font-normal break-words mt-0.5">
            <Link href="mailto:lakshyamahawar14@gmail.com" className="hover:underline">
              lakshyamahawar14@gmail.com
            </Link>
          </p>
        </div>

        <div>
          <p className="dark:text-slate-400 text-slate-500 text-[12px] font-medium tracking-wide uppercase">
            Phone
          </p>
          <p className="dark:text-slate-200 text-slate-700 text-[14px] font-normal break-words mt-0.5">
            +91 6350643154
          </p>
        </div>

        <div className="flex flex-col items-start w-full pt-1">
          <p className="dark:text-slate-400 text-slate-500 text-[12px] font-medium tracking-wide uppercase">
            Links
          </p>
          <ul className="flex justify-start items-center gap-3.5 py-2 w-full">
            {SOCIAL_LINKS.map((link: SocialLinkItem, idx: number) => (
              <li key={idx} className="list-none">
                <Link
                  href={link.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex justify-center items-center dark:text-slate-400 text-slate-600 dark:hover:text-slate-100 hover:text-slate-900"
                >
                  {getIcon(link.icon)}
                </Link>
              </li>
            ))}
          </ul>
          <DarkMode />
        </div>
      </div>
    </section>
  );
};

export default SideBar;