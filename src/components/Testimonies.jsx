import React from "react";
import anisha from "../assets/images/avatar-anisha.png";
import richard from "../assets/images/avatar-richard.png";
import ali from "../assets/images/avatar-ali.png";

const Testimonies = () => {
  return (
    <section id="testimonies">
      <div className="p-6">
        <h2 className="font-bold text-2xl text-center mb-16 p-4">
          What they've said
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-8 ">
          <div className=" hidden md:flex flex-col  space-y-6  items-center p-6 bg-veryLightGray  rounded-lg md:w-1/3">
            <img src={anisha} alt="" className="w-16 -mt-14" />
            <h3 className="font-bold">Anisha Li</h3>
            <p className="text-darkGrayishBlue text-center">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>

          <div className="flex flex-col space-y-6  items-center p-6 bg-veryLightGray  rounded-lg md:w-1/3">
            <img src={ali} alt="" className="w-16 -mt-14" />
            <h3 className="font-bold">Ali Bravo</h3>
            <p className="text-darkGrayishBlue text-center">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>

          <div className="hidden md:flex flex-col  space-y-6  items-center p-6 bg-veryLightGray  rounded-lg md:w-1/3">
            <img src={richard} alt="" className="w-16 -mt-14" />
            <h3 className="font-bold">Richard Watt</h3>
            <p className="text-darkGrayishBlue text-center">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center ">
          <a
            href="#"
            className="p-3 bg-brightRed text-white rounded-full 
                baseline pt-2 px-6 hover:bg-brightRedLight "
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
