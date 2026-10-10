import { memo } from "react";
import Image from "next/image";
import { DownloadIcon, FileTextIcon } from "./icons";

const Resume = () => {
  console.log('resume.tsx rendered!');
  return (
    <section className="items-center">
      <header className="w-full text-center mb-6">
        <h2>Resume</h2>
      </header>

      <article className="w-full min-h-[auto] lg:min-h-[75vh] flex items-center justify-center p-2 sm:p-4">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          <div className="w-full lg:w-1/2 flex items-center justify-center overflow-hidden shrink-0 p-2">
            <div className="relative w-full max-w-[460px] aspect-[1/1.414] lg:h-[60vh]">
              <Image
                src="/images/resumess.avif"
                alt="Lakshya Mahawar Resume Preview"
                fill
                loading="lazy"
                quality={75}
                sizes="(min-width: 1024px) 460px, 95vw"
                className="object-contain object-center block"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-5">
            <header className="flex items-center gap-2.5">
              <FileTextIcon className="w-6 h-6 shrink-0" />
              <span className="font-sans font-semibold text-subheading">
                resume.pdf
              </span>
            </header>

            <p>
              Download my résumé containing complete educational background, technical skill sets, and professional experience details.
            </p>

            <div>
              <a
                href="/resume.pdf"
                download="Lakshya_Mahawar_Resume.pdf"
                className="btn-primary"
                aria-label="Download Resume PDF"
              >
                <DownloadIcon className="w-4 h-4" />
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default memo(Resume);