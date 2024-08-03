"use client";

import { useEffect } from "react";
import gsap from "gsap";

const TextAnimation = () => {
  useEffect(() => {
    const textualElements = document.querySelectorAll(
      "span, p, h1, h2, h3, h4, img"
    );
    gsap.to(textualElements, {
      opacity: 1,
      duration: 0.5,
      stagger: 0,
      ease: "power1.out",
      onComplete() {
        const sectionalElements = document.querySelectorAll(".loadable");

        sectionalElements.forEach((el) => {
          el.classList.add("fade-in");
        });

        const anchorElements = document.getElementsByTagName("a");
        const buttonElements = document.getElementsByTagName("button");
        for (var i = 0; i < anchorElements.length; ++i) {
          anchorElements[i]?.style.setProperty("z-index", "30");
          buttonElements[i]?.style.setProperty("z-index", "30");
        }
      },
    });
  });

  return <></>;
};

export default TextAnimation;
