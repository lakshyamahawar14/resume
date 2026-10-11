import { memo } from "react";
import Image from "next/image";
import { DownloadIcon, FileTextIcon } from "./icons";
import { getRandomLayoutTransform } from "@/utils/font";

const Resume = () => {
  return (
    <section>
      <header style={getRandomLayoutTransform(2, 8, -1.2, 1.2)}>
        <h2>Resume</h2>
      </header>

      <article style={getRandomLayoutTransform(2, 8, -0.7, 0.7)}>
        <div>
          <div style={getRandomLayoutTransform(1, 4, -0.5, 0.5)}>
            <Image
              src="/images/resumess.avif"
              alt="Lakshya Mahawar Resume Preview"
              width={460}
              height={650}
              loading="eager"
              quality={75}
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div style={getRandomLayoutTransform(2, 8, -0.7, 0.7)}>
            <header>
              <FileTextIcon width={24} height={24} />
              <span>resume.pdf</span>
            </header>

            <p style={getRandomLayoutTransform(2, 6, -0.5, 0.5)}>
              Download my résumé containing complete educational background, technical skill sets, and professional experience details.
            </p>

            <div style={getRandomLayoutTransform(2, 4, -0.4, 0.4)}>
              <a
                href="/resume.pdf"
                download="Lakshya_Mahawar_Resume.pdf"
                aria-label="Download Resume PDF"
              >
                <DownloadIcon width={16} height={16} />
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