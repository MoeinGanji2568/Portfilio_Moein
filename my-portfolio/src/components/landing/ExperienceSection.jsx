import React from "react";
import HeadingText from "../ui/HeadingText";
import { experience } from "@/constants/data/experience";

const ExperienceSection = () => {
  return (
    <div className="holder">
      <HeadingText className="text-center">My Experience</HeadingText>
      <div className="flex flex-col ml-[36.8px] mt-5">
        {experience.map((item) => {
          return <ExperienceCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ExperienceSection;

export function ExperienceCard({ item }) {
  return (
    <>
      <span className="circle"></span>
      <div className="text-secondary-900 sm:mr-8 space-y-3 experience">
        <h1 className="text-lg font-semibold">{item.label}</h1>
        <span className="text-secondary-600 text-sm">{item.duration}</span>
        <h2 className="font-semibold">{item.position}</h2>
        <span className="text-sm">{item.type}</span>
        <p className="text-secondary-600 text-sm">{item.more}</p>
        <ul className="list-disc text-sm">
          {item?.description.map((item, index) => (
            <li key={index} className="text-secondary-800 ml-4 mb-3">
              {item.paragraph}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
