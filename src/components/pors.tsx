import React from "react";
import Heading from "./heading";
import Card from "./card";

const porsList = [
  {
    start: "Jan 2021",
    end: "July 2021",
    period: 1,
    role: "Volunteer",
    organization: "National Service Scheme, IIT Roorkee",
    details: {
      title: "",
      description: [
        "Contacting with participants of National Social Summit, an Annual Fest of NSS, IIT Roorkee",
      ],
    },
  },
  {
    start: "Aug 2021",
    end: "Jan 2022",
    period: 1,
    role: "Web Developer",
    organization: "National Service Scheme, IIT Roorkee",
    details: {
      title: "",
      description: [
        "Debugging and Maintaining National Social Summit website.",
      ],
    },
    tools: ["Django", "Burpe Suite"],
  },
];

const PORs = () => {
  return (
    <div className="flex flex-col w-full">
      <Heading
        headingText={"Position of Responsibilities"}
        headingSize="small"
      />
      {porsList.map((por, index) => (
        <Card
          key={index}
          start={por.start}
          end={por.end}
          period={por.period}
          role={por.role}
          organization={por.organization}
          details={por.details}
          tools={por.tools}
        />
      ))}
    </div>
  );
};

export default PORs;
