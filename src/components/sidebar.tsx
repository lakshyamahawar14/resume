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
    <section className="lg:sticky z-[20] top-0 left-0 flex flex-col md:flex-col lg:flex-col justify-center items-center gap-4 lg:max-w-[300px] w-full lg:w-auto h-full lg:min-h-screen p-6 bg-white dark:bg-[#0D1117] border-b lg:border-b-0 lg:border-r">
      <div className="flex flex-col sm:flex-row lg:flex-col justify-center items-center lg:items-center gap-4 w-full">
        <div className="flex justify-center items-center rounded-full w-[150px] lg:w-[200px] shrink-0">
          <Image
            src="/images/pfp_linkedin.jpg"
            width={400}
            height={400}
            priority={true}
            alt="pfp"
            className="rounded-full"
          />
        </div>

        <div className="w-full text-center lg:text-left">
          <h1 className="dark:text-slate-200 text-slate-800 py-1 text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold break-words">
            Lakshya Mahawar
          </h1>
          <p className="dark:text-slate-400 text-slate-700 py-1 leading-7 text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] font-normal break-words">
            Jr. Software Engineer @ V3iT Consulting Inc., Dehradun, 248002, India.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <p className="dark:text-slate-400 text-slate-700 py-1 leading-7 text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] font-normal break-words">
          📧 Email
        </p>
        <p className="dark:text-slate-400 text-slate-700 py-1 leading-7 text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] font-normal break-words">
          <Link href="mailto: lakshyamahawar.official@gmail.com">
            lakshyamahawar.official@gmail.com
          </Link>
        </p>
        <p className="dark:text-slate-400 text-slate-700 py-1 leading-7 text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] font-normal break-words">
          📞 Phone
        </p>
        <p className="dark:text-slate-400 text-slate-700 py-1 leading-7 text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] font-normal break-words">
          +91 7688XXXX38
        </p>

        <div className="flex flex-col items-start w-full">
          <p className="dark:text-slate-400 text-slate-700 py-1 leading-7 text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] font-normal break-words">
            🔗 Links
          </p>
          <ul className="flex justify-start items-center gap-4 py-2 w-full">
            {SOCIAL_LINKS.map((link, idx) => (
              <abbr title={link.name} key={idx} className="w-auto">
                <Link
                  href={link.route}
                  target="_blank"
                  className="flex justify-center items-center dark:text-slate-400 text-slate-600 dark:hover:text-slate-200 hover:text-slate-800"
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