// components/Card.js
import React from "react";

const Card = () => {
  return (
    <div className="border-b  border-gray-500">
      <div className="text-white text-[32px] font-bold font-['Clash Display'] leading-7 text-center pb-4 mt-6 ">
        Partners and Sponsors
      </div>

      <div className="text-center text-white text-sm font-normal font-['Montserrat'] leading-7 text-center pb-10">
        Getlinked Hackathon 1.0 is honored to have the following major <br />
        companies as its partners and sponsors
      </div>

      <div className=" border border-fuchsia-500 rounded-lg p-4 m-4 container mx-auto py-8  max-w-3xl">
        <div className="grid grid-cols-3 ">
         
          <div className="  border-b border-r border-fuchsia-500 p-2 flex items-center justify-center">
            <div className="">
              <img
                src="/assets/part1.png"
                alt="Image for Partition 2"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="border-b border-l border-r border-fuchsia-500 p-2 flex items-center justify-center">
            <div className="text-center">
              <img
                src="/assets/part2.png"
                alt="Image for Partition 2"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="border-b border-l  border-fuchsia-500 p-2 flex items-center justify-center">
            <div className="text-center">
              <img
                src="/assets/part3.png"
                alt="Image for Partition 2"
                className="mx-auto"
              />
            </div>
          </div>

          {/* Lower partitions */}
          <div className=" p-2 border-t border-r border-fuchsia-500 flex items-center justify-center">
            <div className="text-center">
              <img
                src="/assets/part4.png"
                alt="Image for Partition 2"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="border-t border-l border-r border-fuchsia-500 p-2 flex items-center justify-center">
            <div className="w-[204.37px] h-[20.58px]">
              <span className="text-white text-[51px] font-normal font-['Typo Hoop Demo'] leading-7">
                Pay
              </span>
              <span className="text-sky-500 text-[51px] font-normal font-['Typo Hoop Demo'] leading-7">
                box
              </span>
            </div>
          </div>
          <div className="border-t border-l  border-fuchsia-500 p-2 flex items-center justify-center">
            <div className="w-[231px] h-[21px]">
              <span className="text-white text-[41px] font-normal font-['Voces'] leading-7">
                Vuzual{" "}
              </span>
              <span className="text-red-600 text-[41px] font-normal font-['Volkhov'] leading-7">
                Plus{" "}
              </span>
              <span className="text-red-600 text-[41px] font-normal font-['Voces'] leading-7 relative left-[115px]">
              <div className="w-[79px] h-[21px] text-right text-white text-[11px] font-normal font-['Voces'] leading-7">Design Studios</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
