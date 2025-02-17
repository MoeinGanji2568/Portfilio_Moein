import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import MyImage from "../../../public/image/Moein.jpg";

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
      <div className="rounded-full shadow-xl shadow-secondary-100">
        <Image
          style={{ width: "clamp(300px, 50vw, 500px)" }}
          className="h-fit rounded-full"
          alt=""
          src={MyImage}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default HeroSection;
