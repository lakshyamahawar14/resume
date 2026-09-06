import Link from "next/link";
import Image from "next/image";
import { Code2, Keyboard } from "lucide-react";
import DarkMode from "./darkmode";
import { SOCIAL_LINKS } from "@/constants";
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
    <section className="lg:sticky z-[20] top-0 left-0 flex flex-col justify-between items-center gap-6 lg:max-w-[300px] w-full lg:w-auto h-full lg:min-h-screen p-6 bg-white dark:bg-[#161b22] shadow-sm lg:shadow-md">
      <div className="flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-4 w-full">
        <div className="flex justify-center items-center rounded-full w-[150px] h-[150px] lg:w-[190px] lg:h-[190px] shrink-0 overflow-hidden shadow-sm">
          <Image
            src="/images/profile.webp"
            width={400}
            height={400}
            priority={true}
            loading="eager"
            decoding="sync"
            unoptimized={true}
            alt="pfp"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <div className="w-full text-center lg:text-left mt-1">
          <h1 className="dark:text-slate-100 text-slate-900 py-1 text-[1.2rem] lg:text-[1.35rem] font-bold tracking-tight break-words">
            Lakshya Mahawar
          </h1>
          <p className="dark:text-slate-400 text-slate-600 py-1 leading-relaxed text-[0.9rem] lg:text-[0.95rem] font-normal break-words">
            Jr. Software Engineer @ V3iT Consulting Inc., Dehradun, 248002, India.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-3">
        <div>
          <p className="dark:text-slate-400 text-slate-500 text-[0.8rem] font-medium tracking-wide uppercase">
            Email
          </p>
          <p className="dark:text-slate-200 text-slate-700 text-[0.9rem] font-normal break-words mt-0.5">
            <Link href="mailto: lakshyamahawar.official@gmail.com" className="hover:underline">
              lakshyamahawar.official@gmail.com
            </Link>
          </p>
        </div>

        <div>
          <p className="dark:text-slate-400 text-slate-500 text-[0.8rem] font-medium tracking-wide uppercase">
            Phone
          </p>
          <p className="dark:text-slate-200 text-slate-700 text-[0.9rem] font-normal break-words mt-0.5">
            +91 7688XXXX38
          </p>
        </div>

        <div className="flex flex-col items-start w-full pt-2">
          <p className="dark:text-slate-400 text-slate-500 text-[0.8rem] font-medium tracking-wide uppercase">
            Links
          </p>
          <ul className="flex justify-start items-center gap-4 py-3 w-full">
            {SOCIAL_LINKS.map((link, idx) => (
              <abbr title={link.name} key={idx} className="w-auto">
                <Link
                  href={link.route}
                  target="_blank"
                  className="flex justify-center items-center dark:text-slate-400 text-slate-600 dark:hover:text-slate-100 hover:text-slate-900"
                >
                  {getIcon(link.icon)}
                </Link>
              </abbr>
            ))}
          </ul>
          <DarkMode />
        </div>
      </div>
    </section>
  );
};

export default SideBar;