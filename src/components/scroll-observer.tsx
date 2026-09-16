"use client";

import { useEffect } from "react";

const ScrollObserver = () => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      const sections = document.querySelectorAll(".scroll-section");
      if (!sections.length) return;

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

      for (let i = 0; i < sections.length; i++) {
        observer.observe(sections[i]);
      }
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(setupObserver, { timeout: 1000 });
      return () => {
        window.cancelIdleCallback(idleId);
        observer?.disconnect();
      };
    } else {
      const timer = setTimeout(setupObserver, 50);
      return () => {
        clearTimeout(timer);
        observer?.disconnect();
      };
    }
  }, []);

  return null;
};

export default ScrollObserver;