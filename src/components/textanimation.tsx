"use client";

import { useEffect } from "react";
import gsap from "gsap";

const TextAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      "a, p, span, h1, h2, h3, h4, button, img"
    );
    gsap.to(elements, {
      opacity: 1,
      duration: 1,
      stagger: 0,
      ease: "power1.out",
    });
  }, []);
  return <></>;
};

export default TextAnimation;
