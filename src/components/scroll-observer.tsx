"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  console.log('scroll-observer.tsx called');

  useEffect(() => {
    const sections = document.getElementsByClassName("scroll-section");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      {
        rootMargin: "50px 0px",
        threshold: 0.01,
      }
    );

    for (let i = 0; i < sections.length; i++) {
      observer.observe(sections[i]);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}