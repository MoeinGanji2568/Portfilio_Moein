import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import PersonPng from "../../../public/image/person.png";
// import MyResumePdf from "../../../public/pdf/MoeinGanji-react-resume.pdf";

const HeroSection = () => {
  return (
    <div className="holder text-secondary-900 flexGroup flex-col-reverse xl:flex-row gap-20 my-14">
      <div className=" flex flex-col gap-5">
        <h1 className="font-bold fontSize">
          Hi, I am <br /> Moein Mohsenzadeh Ganji
        </h1>
        <span className="block text-secondary-500">Front-End Developer</span>
        <div className="flex gap-3 mt-3">
          <Button variant="green" className="">
            <a
              href="/pdf/MoeinGanji-react-resume.pdf"
              download="MoeinGanji-react-resume.pdf"
            >
              Download CV
            </a>
          </Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
      <div>
        <Image
          style={{ width: "clamp(300px, 50vw, 500px)" }}
          className="h-auto rounded-full"
          alt=""
          src={PersonPng}
          width={100}
          height={50}
        />
      </div>
    </div>
  );
};

export default HeroSection;
