import React from "react";
import Heading from "./heading";
import Paragraph from "./paragraph";

const education = [
  {
    year: 2024,
    examination: "B.Tech (ECE)",
    institution: "Indian Institute of Technology, Roorkee",
    score: "7.348",
  },
  {
    year: 2020,
    examination: "Intermediate (Class XII)",
    institution: "D S Science Academy, Gangapur City (RBSE)",
    score: "96.4%",
  },
  {
    year: 2018,
    examination: "Matriculate (Class X)",
    institution: "Jyoti Shikshan Sansthan, Piplai (RBSE)",
    score: "96.17%",
  },
];

const Education = () => {
  return (
    <div className="flex flex-col w-full">
      <Heading headingText={"Education"} headingSize="small" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(275px,1fr))]  gap-4 my-2">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#161B22] border rounded-md p-4 w-full"
          >
            <div className="flex flex-col gap-2">
              <Heading
                headingText={edu.examination}
                headingSize="smaller"
                className="!text-sky-400"
              />
              <Heading
                headingText={`🏫 ${edu.institution}`}
                headingSize="smaller"
                className="!p-0 leading-6"
              />
              <Paragraph
                paragraphText={`📅 ${edu.year}`}
                paragraphSize="smaller"
                className="!p-0"
              />

              <Paragraph
                paragraphText={
                  <span>
                    {edu.score[edu.score.length - 1] === "%"
                      ? "Percentage: "
                      : "CGPA: "}
                    <span className="font-bold">{edu.score}</span>
                  </span>
                }
                paragraphSize="smaller"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
