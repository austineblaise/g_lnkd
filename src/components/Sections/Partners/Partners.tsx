

import React from "react";
import Testprivate from "./Testprivate";
import MobilePartners from "./MobilePartners";

const Card = () => {
  return (
    <div className="border-b  border-gray-500 mt-10">
    <div className=" mx-10">
      <div className="text-white text-[32px] font-bold font-['Clash Display'] leading-7 text-center pb-4 mt-6 ">
        Partners and Sponsors
      </div>

      <div className="text-center text-white text-sm font-normal font-['Montserrat'] leading-7 text-center pb-10">
        Getlinked Hackathon 1.0 is honored to have the following major <br />
        companies as its partners and sponsors
      </div>
      <div className="lg:hidden"><MobilePartners /></div>
      <div className="border border-fuchsia-500 rounded-lg lg:mx-10 mb-[100px] lg:block hidden">
        <div className="   m-4 container mx-auto mt-[180px]  max-w-2xl justify-center">
          <Testprivate />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
