import React from "react";

const Criteria = () => {
  return (
    <div className="border-b  border-gray-500 ">
      <section className=" flex flex-col lg:flex-row  md:flex-row  mt-10  container mb-10">
        <div className="lg:w-4/5 lg:mx-auto flex items-center justify-center lg:order-1 order-1  lg:px-0 md:px-0  px-5">
          <img
            src="/assets/criteria.png"
            alt="Your Image"
            className="lg:w-[600px] lg:h-[587px] md:h-[587px] lg:pt-10 "
          />
        </div>

        <div className="w-full lg:w-1/2  h-auto lg:px-0 md:px-0  px-10  items-center justify-center order-2 md:order-2 lg:order-2">
          <div>
            <div>
              <span className="text-white text-[32px] font-bold font-['Clash Display']">
                Judging Criteria
                <br />
              </span>
              <span className="text-fuchsia-500 text-[32px] font-bold font-['Clash Display']">
                Key attributes
              </span>
            </div>
            <div className="mb-3">
              <span className="text-pink-500 text-base font-bold font-['Montserrat'] leading-7">
                Innovation and Creativity
              </span>
              <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
                : Evaluate the uniqueness and creativity of the
                <br />
                solution. Consider whether it addresses a real-world problem in
                a novel <br />
                way or introduces innovative features.
              </span>
            </div>

            <div className="mb-3">
              <span className="text-pink-500 text-base font-bold font-['Montserrat'] leading-7">
                Functionality:
              </span>
              <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
                {" "}
                Assess how well the solution works. Does it perform its <br />
                intended functions effectively and without major issues? Judges
                would
                <br />
                consider the completeness and robustness of the solution.
              </span>
            </div>

            <div className="mb-3">
              <span className="text-pink-500 text-base font-bold font-['Montserrat'] leading-7">
                Impact and Relevance:{" "}
              </span>
              <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
                Determine the potential impact of the solution <br />
                in the real world. Does it address a significant problem, and is
                it relevant <br />
                to the target audience? Judges would assess the potential
                social, <br />
                economic, or environmental benefits.
              </span>
            </div>
          </div>

          <div className="mb-3">
            <span className="text-pink-500 text-base font-bold font-['Montserrat'] leading-7">
              Technical Complexity:{" "}
            </span>
            <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
              Evaluate the technical sophistication of the solution. <br />
              Judges would consider the complexity of the code, the use of
              advanced <br />
              technologies or algorithms, and the scalability of the solution.
            </span>
          </div>

          <div>
            <span className="text-pink-500 text-base font-bold font-['Montserrat'] leading-7">
              Adherence to Hackathon Rules:{" "}
            </span>
            <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
              Judges will Ensure that the team adhered <br />
              to the rules and guidelines of the hackathon, including deadlines,
              use of <br />
              specific technologies or APIs, and any other competition-specific
              requirements.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Criteria;
