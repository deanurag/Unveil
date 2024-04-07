import React from "react";

const Features = () => {
  return (
    <section id="features">
      <div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div class="flex flex-col space-y-12 md:w-1/2">
          <h2 class="max-w-md text-4xl font-serif font-bold text-center md:text-left">
            What's different about Unveil?
          </h2>
          <p class="max-w-sm text-center font-serif font-semibold text-darkGrayishBlue md:text-left">
            What sets Unveil apart is its commitment to simplifying the
            complexities of the Indian stock market for beginner investors
            through intuitive tools.
          </p>
        </div>

        <div className="md:w-1/2">
          <h2 className="font-bold font-serif text-4xl mb-8">Prospects</h2>
          <div className="item flex flex-col space-x-4 mb-8 md:flex-row">
            <div className="heading">
              <div className="bg-brightRedSupLight rounded-l-full md:bg-transparent">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="px-6 py-2 text-bold text-white bg-brightRed rounded-full">
                    01
                  </div>
                  <h3 className="font-bold text-xl md:hidden">
                    Simplified Financial Summaries
                  </h3>
                </div>
              </div>
            </div>

            <div className="">
              <h3 className="font-bold hidden md:block py-2 mb-2">
                Simplified Financial Summaries
              </h3>
              <p className=" text-darkGrayishBlue">
                Unveil simplifies financial summaries, empowering novice
                investors with easy-to-understand insights into company
                finances. By distilling complex data into digestible formats,
                Unveil ensures users grasp essential concepts without
                overwhelming technical details.
              </p>
            </div>

            <div className="content"></div>
          </div>

          {/* -------------------------------------- */}
          <div className="item flex flex-col space-x-4 mb-8 md:flex-row">
            <div className="heading">
              <div className="bg-brightRedSupLight rounded-l-full md:bg-transparent">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="px-6 py-2 text-bold text-white bg-brightRed rounded-full">
                    02
                  </div>
                  <h3 className="font-bold text-xl md:hidden">
                    Interactive Learning Tools
                  </h3>
                </div>
              </div>
            </div>

            <div className="">
              <h3 className="font-bold hidden md:block py-2 mb-2">
                Interactive Learning Tools
              </h3>
              <p className="text-darkGrayishBlue">
                Interactive learning tools, including tutorials, videos, and
                quizzes, guiding novice investors through the complexities of
                the Indian stock market. Users learn at their own pace, gaining
                confidence and making informed investment decisions.
              </p>
            </div>

            <div className="content"></div>
          </div>
          {/* -------------------------------------------------------- */}

          {/* -------------------------------------- */}
          <div className="item flex flex-col space-x-4 mb-8 md:flex-row">
            <div className="heading">
              <div className="bg-brightRedSupLight rounded-l-full md:bg-transparent">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="px-6 py-2 text-bold text-white bg-brightRed rounded-full">
                    03
                  </div>
                  <h3 className="font-bold text-xl md:hidden">
                    Customized Investment Strategies
                  </h3>
                </div>
              </div>
            </div>

            <div className="">
              <h3 className="font-bold hidden md:block py-2 mb-2">
                Customized Investment Strategies
              </h3>
              <p className="text-darkGrayishBlue">
                Unveil delivers personalized investment strategies, analyzing
                user risk tolerance, financial goals, and market preferences.
                Using advanced algorithms, it provides actionable insights to
                build diversified portfolios, meeting individual aspirations.
              </p>
            </div>

            <div className="content"></div>
          </div>
          {/* -------------------------------------------------------- */}
        </div>
      </div>
    </section>
  );
};

export default Features;
