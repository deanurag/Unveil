import React from "react";
import illustration from "../assets/images/illustration-intro.svg";

const Hero = () => {
  return (
    <div className="container mx-auto mt-6 p-6 flex flex-col-reverse  md:flex-row items-center">
      <div className="left flex flex-col md:w-1/2 space-y-8">
        <h1 className="text-4xl font-bold max-w-md  text-center md:text-left md:text-5xl">
          Bring everyone together to build better products.
        </h1>
        <p className="text-center max-w-sm text-darkGrayishBlue md:text-left">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in the view
        </p>
        <div className="flex justify-center md:justify-start">
          <a
            href="#"
            className="p-3 bg-brightRed text-white rounded-full 
                baseline pt-2 px-6 hover:bg-brightRedLight "
          >
            Get Started
          </a>
        </div>
      </div>
      <div className=" right md:w-1/2">
        <img src={illustration} alt="illustration" />
      </div>
    </div>
  );
};

export default Hero;
