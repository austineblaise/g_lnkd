"use client";

import React from "react";
import FAQs from "./Faqs/FaqItems";

const Faqs = () => {
  return (
    <div className="border-b  border-gray-500 ">
      <div className="flex flex-col lg:flex-row justify-center lg:w-4/5 lg:mx-auto md:mx-auto lg:px-0 md:px-0 px-10 mt-8 lg:mt-0 container">
        
      
        <div className="lg:w-1/2 order-2 lg:order-1 ">
          <div className="flex flex-col justify-center h-full lg:p-6">
            
            <div>
              <span className="text-white text-[32px] font-bold font-['Clash Display']">
                Frequently asked
                <br />
              </span>
              <span className="text-fuchsia-500 text-[32px] font-bold font-['Clash Display']">
                Questions
              </span>
            </div>

            <div>
              <span className="text-white text-sm font-normal font-['Montserrat'] leading-7">
                We got answers to the questions that you might
                <br />
                want to ask about{" "}
              </span>
              <span className="text-white text-sm font-bold font-['Montserrat'] leading-7">
                getlinked Hackathon 1.0
              </span>
            </div>
            <div className="text-white text-sm font-normal font-['Montserrat'] leading-7">
              <FAQs />
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 lg:order-2 order-1 ">
          <img
            src="assets/Faqs.png"
            alt="Card Image"
            className=" object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
