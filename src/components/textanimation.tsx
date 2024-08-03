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
      ease: "power1.out",
      onComplete() {
        const sectionalElements = document.querySelectorAll(".loadable");

        sectionalElements.forEach((el) => {
          el.classList.add("fade-in");
        });
      },
    });
  });

  return <></>;
};

export default TextAnimation;
