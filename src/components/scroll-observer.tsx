"use client";

import { useEffect } from "react";

const ScrollObserver = () => {
  console.log('scroll-observer.tsx rendered!');
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let frameId: number;

    frameId = requestAnimationFrame(() => {
      const sections = document.querySelectorAll(".scroll-section");
      const count = sections.length;
      if (!count) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        for (let i = 0; i < count; i++) {
          sections[i].classList.add("is-visible");
        }
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          }
        },
        {
          rootMargin: "0px 0px -10% 0px",
          threshold: 0.15,
        }
      );

      for (let i = 0; i < count; i++) {
        observer.observe(sections[i]);
      }
    });

    return () => {
      cancelAnimationFrame(frameId);
      observer?.disconnect();
    };
  }, []);

  return null;
};

export default ScrollObserver;