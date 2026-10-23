import { memo } from "react";
import Image from "next/image";
import { DownloadIcon, FileTextIcon } from "./icons";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="font-bold text-center mt-3 py-3 bg-[Turquoise]">Resume</h2>
      </header>

      <article>
        <div>
          <div className="mb-2 border border-5 border-[mediumslateblue] inline-block">
            <Image
              src="/images/resumess.avif"
              alt="Lakshya Mahawar Resume Preview"
              width={500}
              height={1000}
              loading="eager"
              fetchPriority="high"
              quality={100}
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div>
            <div className="flex justify-end">
              <a
                href="/resume.pdf"
                download="Lakshya_Mahawar_Resume.pdf"
                aria-label="Download Resume PDF"
                className="flex items-center p-2 gap-2 bg-[blue] text-[white]"
              >
                <DownloadIcon width={16} height={16} />
                <span>Download resume.pdf</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default memo(Resume);