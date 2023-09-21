import React from "react";
import CardContent from "./CardContent";

const Privacy = () => {
  return (
    // <div className="border-b  border-gray-500 h-auto ">
    <div className="flex flex-col lg:flex-row justify-center  lg:w-4/5 mx-auto mt-8 lg:mt-0 container">
      <div className="lg:w-1/2 order-1 lg:order-1 ">
        <div className="flex flex-col justify-center  lg:p-6">
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
            it’s our aim to always take of our participant
          </div>
          <CardContent />
        </div>
      </div>

      <div className="lg:w-1/2 lg:order-2 order-1  relative ">
        <img
          src="/padlock.svg"
          alt="hero image"
          className="object-fill"
          width={450}
          height={300}
        />

        <div style={{ width: "100px", height: "150px" }}>
          <img
            src="/assets/padlock.png"
            alt="Top Image"
            className="absolute inset-0 object-fill   mt-[170px] object-fill"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Privacy;
