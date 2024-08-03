"use client";

import React, { useEffect, useRef } from "react";
import Heading from "./heading";
import Paragraph from "./paragraph";
import gsap from "gsap";

const skillsList = [
  {
    name: "Computer Languages",
    values: [
      { name: "C++", proficiency: "Advanced" },
      { name: "Python", proficiency: "Intermediate" },
      { name: "Java", proficiency: "Beginner" },
      { name: "JavaScript", proficiency: "Intermediate" },
      { name: "TypeScript", proficiency: "Intermediate" },
    ],
  },
  {
    name: "Software Packages",
    values: [
      { name: "Git", proficiency: "Intermediate" },
      { name: "GitHub", proficiency: "Intermediate" },
      { name: "VS Code", proficiency: "Advanced" },
      { name: "MATLAB", proficiency: "Beginner" },
      { name: "LTspice", proficiency: "Beginner" },
    ],
  },
  {
    name: "Additional Courses",
    values: [
      {
        name: "Fundamentals of Object-Oriented Programming",
        proficiency: "Advanced",
      },
      { name: "Data Structures", proficiency: "Advanced" },
      {
        name: "Data Mining for Business Intelligence",
        proficiency: "Intermediate",
      },
      {
        name: "Machine Learning in Semiconductor Industry",
        proficiency: "Intermediate",
      },
      { name: "Probability and Statistics", proficiency: "Advanced" },
    ],
  },
  {
    name: "Languages Known",
    values: [
      { name: "Hindi", proficiency: "Advanced" },
      { name: "English", proficiency: "Advanced" },
    ],
  },
];

const Skills = () => {
  const containerRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.to(containerRefs.current, {
      width: "100%",
      duration: 1,
      ease: "power1.out",
    });
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Heading headingText={"Skills"} headingSize="small" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 my-2">
        {skillsList.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#161B22] border rounded-md p-4 w-full"
          >
            <div className="flex flex-col gap-2">
              <Heading
                headingText={skill.name}
                headingSize={"smaller"}
                className="!text-sky-400"
              />
              {skill.values.map((value, idx) => (
                <div
                  key={`${index}-${idx}`}
                  ref={(el) => {
                    if (el && !containerRefs.current.includes(el)) {
                      containerRefs.current.push(el);
                    }
                  }}
                  className={`w-0`}
                >
                  <Paragraph
                    paragraphText={value.name}
                    paragraphSize={"smaller"}
                    className={`!rounded !px-2 !text-[0.9rem] !text-black !leading-6 !font-bold ${
                      value.proficiency === "Beginner"
                        ? "bg-orange-500 !w-1/3"
                        : value.proficiency === "Intermediate"
                        ? "bg-yellow-300 !w-2/3"
                        : "bg-green-400"
                    } truncate`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
