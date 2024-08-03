"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Heading from "./heading";
import Paragraph from "./paragraph";
import Redirector from "./redirector";
import Tag from "./tag";
import CustomImage from "./customimage";

interface CardProps {
  start: string;
  end: string;
  period: number;
  role?: string;
  organization: string;
  details: {
    title: string;
    description: string[];
  };
  tools?: string[];
  link?: string;
  imageSrc?: string;
  className?: string;
}

const Card: React.FC<CardProps> = (props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(element, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          });
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
      }
    );

    element.style.transform = "translateY(100px)";
    element.style.opacity = "0";

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white dark:bg-[#161B22] border rounded-lg p-4 w-full my-2 flex flex-col gap-2"
    >
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col">
          {props.role && (
            <Heading headingText={props.role} headingSize={"smaller"} />
          )}
          {props.details.title && (
            <Heading
              headingText={props.details.title}
              headingSize={"smaller"}
              className=" !text-sky-400"
            />
          )}
        </div>
        <Paragraph
          paragraphText={`📅 ${props.start} - ${props.end} (${props.period} ${
            props.period === 1 ? "month" : "months"
          })`}
          paragraphSize="smaller"
          className="italic !text-[0.8rem] text-start md:text-end"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-4">
        <div className="text-slate-500 dark:text-slate-400 flex flex-col gap-2">
          <div className="flex flex-col">
            <Heading headingText={`🔑 Key Points`} headingSize={"smaller"} />
            {props.details.description.map((step, idx) => (
              <Paragraph
                key={idx}
                paragraphText={`👉 ${step}`}
                paragraphSize={"smaller"}
                className="!leading-6 lg:text-justify"
              />
            ))}
          </div>

          {props.tools && (
            <div className="flex flex-col">
              <Heading headingText={`🔨 Tools Used`} headingSize="small" />
              <div className="flex flex-wrap gap-2 my-2">
                {props.tools.map((tool, idx) => (
                  <Tag key={idx} tag={tool} className="!text-[0.8rem]" />
                ))}
              </div>
            </div>
          )}

          {props.link && (
            <div className="flex flex-col">
              <Heading headingText={"Live Demo"} headingSize={"smaller"} />
              <div className="flex flex-wrap gap-2 my-2">
                <Redirector
                  redirectorText={props.details.title}
                  redirectorTheme="dark"
                  redirectorPath={props.link}
                  target={"_blank"}
                  className="!w-auto"
                />
              </div>
            </div>
          )}
        </div>

        {props.imageSrc && (
          <div className="flex justify-center items-center w-full lg:w-auto">
            <div className="flex justify-center items-center w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-full rounded-md">
              <CustomImage
                src={props.imageSrc}
                width={600}
                height={600}
                priority={false}
                alt={`${props.details.title} image`}
                className="w-full h-full object-fit rounded-md"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
