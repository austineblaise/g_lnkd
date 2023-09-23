import React from "react";
import CardContent from "./CardContent";

const Privacy = () => {
  return (
    <div className="flex flex-col lg:flex-row  justify-center lg:w-4/5 md:w-4/5 w-4/5 mx-auto lg:mt-8 lg:mt-[70px] container">
      <div className="lg:w-1/2 order-1 lg:order-1">
        <div className="flex flex-col justify-center lg:p-6 md:p-6">
          <div className="mt-10">
            <span className="text-white text-[32px] font-bold font-['Clash Display']">
              Privacy Policy and <br />
            </span>
            <span className="text-fuchsia-500 text-[32px] font-bold font-['Clash Display']">
              Terms
            </span>
          </div>

          <div className="text-white text-opacity-75 text-sm font-normal font-['Montserrat'] leading-7 mb-4">
            Last updated on September 12, 2023
          </div>
          <div className="text-white text-sm font-normal font-['Montserrat'] leading-relaxed mb-6">
            Below are our privacy & policy, which outline a lot of goodies.{" "}
            <br />
            it’s our aim to always take care of our participants
          </div>
          <CardContent />
        </div>
      </div>

      <div className="lg:w-1/2 lg:order-2 order-1 relative lg:pt-0 md:pt-[70px] pt-[70px]">
        <img
          src="/padlock.svg"
          alt="hero image"
          className="object-cover w-full h-full lg:w-auto lg:h-auto"
          style={{ maxWidth: "100%" }}
        />

        <div style={{ width: "100px", height: "150px" }}>
          <img
            src="/assets/padlock.png"
            alt="Top Image"
            className="absolute inset-0 object-cover lg:w-auto lg:h-auto"
            style={{ maxWidth: "100%", top: "170px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Privacy;
