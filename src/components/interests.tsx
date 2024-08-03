"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Heading from "./heading";
import Tag from "./tag";

const interests = [
  "Competitive Programming",
  "Web Development",
  "Web Scraping",
  "Data Structures & Algorithms",
  "Machine Learning",
];

const Interests = () => {
  const tagRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (tagRefs.current.length) {
      tagRefs.current.forEach((el) => {
        if (el) {
          el.style.opacity = "1";
          el.style.transform = "translateX(0)";
        }
      });

      gsap.fromTo(
        tagRefs.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.2,
          ease: "power1.out",
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden">
      <Heading headingText={"Area of Interest"} headingSize="small" />
      <div className="flex flex-wrap gap-2 my-2">
        {interests.map((interest, index) => (
          <div
            key={index}
            ref={(el) => {
              tagRefs.current[index] = el;
            }}
            className="tag-container w-auto opacity-0 translate-x-[100px]"
          >
            <Tag tag={interest} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
