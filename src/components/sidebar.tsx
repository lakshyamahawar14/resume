import Heading from "./heading";
import Paragraph from "./paragraph";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import DarkMode from "./darkmode";
import CustomImage from "./customimage";

const socialLinks = [
  {
    icon: faGithub,
    name: "GitHub",
    route: "https://github.com/lakshyamahawar14",
  },
  {
    icon: faLinkedin,
    name: "LinkedIn",
    route: "https://www.linkedin.com/in/lakshya-mahawar-099788209/",
  },
  {
    icon: faInstagram,
    name: "Instagram",
    route: "https://www.instagram.com/freaky.lakshya/",
  },
  {
    icon: faCode,
    name: "LeetCode",
    route: "https://leetcode.com/lakshyamahawar14/",
  },
  {
    icon: faKeyboard,
    name: "10FastFingers",
    route: "https://10fastfingers.com/user/2769484/",
  },
];

const SideBar = () => {
  return (
    <div className="lg:sticky z-[20] top-0 left-0 flex flex-col md:flex-col lg:flex-col justify-center items-center gap-4 lg:max-w-[300px] h-full lg:min-h-screen p-6 bg-white dark:bg-[#0D1117] border-b lg:border-b-0 lg:border-r">
      <div className="flex flex-col sm:flex-row lg:flex-col justify-center items-center lg:items-center gap-4">
        <div className="flex justify-center items-center rounded-full w-[150px] lg:w-[200px] shrink-0">
          <CustomImage
            src="/images/pfp_linkedin.jpg"
            width={400}
            height={400}
            priority={true}
            alt="pfp"
            className="rounded-full"
          />
        </div>
        <div>
          <Heading headingText={"Lakshya Mahawar"} headingSize={"small"} />
          <Paragraph
            paragraphText={
              "Jr. Software Engineer @ V3iT Consulting Inc., Dehradun, 248002, India."
            }
            paragraphSize={"small"}
          />
        </div>
      </div>

      <div>
        <Heading headingText={`📧 Email`} headingSize={"smallest"} />
        <Paragraph
          paragraphText={
            <Link href="mailto: lakshyamahawar.official@gmail.com">
              lakshyamahawar.official@gmail.com
            </Link>
          }
          paragraphSize={"small"}
        />
        <Heading headingText={`📞 Phone`} headingSize={"smallest"} />
        <Paragraph paragraphText={"+91 7688XXXX38"} paragraphSize={"small"} />

        <div className="flex flex-col lg:items-start">
          <Heading headingText={`🔗 Links`} headingSize={"smallest"} />
          <ul className="flex justify-start items-center gap-4 py-2">
            {socialLinks.map((link, idx) => (
              <abbr title={link.name} key={idx} className="w-auto">
                <Link
                  href={link.route}
                  target="_blank"
                  className="flex justify-center items-center"
                >
                  <FontAwesomeIcon
                    icon={link.icon}
                    className="dark:text-slate-400 text-slate-600 h-[1.4rem] md:h-[1.5rem] lg:h-[1.6rem] dark:hover:text-slate-200 hover:text-slate-800"
                  />
                </Link>
              </abbr>
            ))}
          </ul>
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
