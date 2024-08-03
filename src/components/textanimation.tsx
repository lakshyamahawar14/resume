"use client";

import { useEffect } from "react";
import gsap from "gsap";

const TextAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("p, h1");

    elements.forEach((el) => {
      el.classList.add("fade-in");
    });

    const otherElements = document.querySelectorAll(
      "a, span, h2, h3, h4, button, img"
    );
    gsap.to(otherElements, {
      opacity: 1,
      duration: 0.2,
      stagger: 0,
      ease: "power1.out",
    });
  }, []);

  return <></>;
};

export default TextAnimation;
