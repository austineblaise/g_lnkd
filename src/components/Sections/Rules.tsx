import React from "react";

const Rules = () => {
  return (
    <div className="border-b  border-gray-500 ">
      <div className="flex flex-col lg:flex-row justify-center lg:w-4/5 lg:mx-auto md:mx-auto lg:px-0 md:px-0  px-[20px] mt-8 lg:mt-0 container">
        <div className="lg:w-1/2 order-2 lg:order-1 ">
          <div className="flex flex-col justify-center h-full p-6">
            <div>
              <span className="text-white text-[32px] font-bold font-['Clash Display']">
                Rules and
                <br />
              </span>
              <span className="text-fuchsia-500 text-[32px] font-bold font-['Clash Display']">
                Guidelines
              </span>
            </div>
            <div className="text-white text-sm font-normal font-['Montserrat'] leading-7">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as
              <br />
              clear as day: to shape the future. Whether you're a coding genius,
              a <br />
              design maverick, or a concept wizard, you'll have the chance to
              transform <br />
              your ideas into reality. Solving real-world problems, pushing the
              boundaries
              <br />
              of technology, and creating solutions that can change the world,
              <br />
              that's what we're all about!
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 lg:order-2 order-1 ">
          <img
            src="assets/rules.png"
            alt="Card Image"
            className=" object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Rules;
