import { memo } from "react";
import Image from "next/image";
import { DownloadIcon, FileTextIcon } from "./icons";

const Resume = () => {
  console.log('resume.tsx rendered!');
  return (
    <section className="items-center">
      <header className="scroll-section w-full text-center">
        <h2>Resume</h2>
      </header>

      <article className="scroll-section w-full min-h-[100dvh] flex items-center justify-center py-4 lg:py-8">
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-7 lg:gap-12">
          <div className="w-full lg:w-1/2 flex items-start justify-center overflow-hidden shrink-0">
            <Image
              src="/images/resumess.avif"
              alt="Lakshya Mahawar Resume Preview"
              width={800}
              height={1131}
              loading="lazy"
              quality={75}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full h-auto max-h-[55vh] lg:max-h-[650px] object-contain object-top block"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:gap-6">
            <header className="flex items-center gap-3">
              <FileTextIcon className="w-6 h-6 text-accent-primary shrink-0" />
              <span className="font-sans font-semibold text-subheading text-slate-800 dark:text-slate-200">
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