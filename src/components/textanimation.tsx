"use client";

import { useEffect } from "react";
import gsap from "gsap";

const TextAnimation = () => {
  useEffect(() => {
    const textualElements = document.querySelectorAll(
      "a, span, p, h1, h2, h3, h4, button, img"
    );
    gsap.to(textualElements, {
      opacity: 1,
      duration: 0.2,
      stagger: 0,
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
