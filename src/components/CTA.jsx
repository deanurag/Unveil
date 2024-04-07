import React from "react";

const CTA = () => {
  return (
    <section id="cta" className="bg-brightRed mt-4 md:mt-16 ">
      <div className="container mx-auto p-6 ">
        <div className="flex flex-col md:justify-between space-y-8 py-8 md:flex-row">
          <div className="md:max-w-5xl">
            <h1 className="text-white font-bold text-3xl text-center ">
              Empowering novice investors in the Indian stock market with
              user-friendly tools
            </h1>
          </div>

          {/* <div className="flex justify-center">
            <a
              href="#"
              className="p-3 bg-white text-brightRed rounded-full 
                 pt-2 px-6 hover:bg-gray-300 "
            >
              Get Started
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CTA;
