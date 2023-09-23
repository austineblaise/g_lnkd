import React from "react";

const MobilePartners = () => {
  return (
    <div>
      <div className=" border border-fuchsia-500 rounded-lg p-4 m-4 container mx-auto py-8  max-w-3xl md:mb-[150px] mb-[50px]">
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
              <span className="text-white lg:text-[51px] text-[20px]  font-normal font-['Typo Hoop Demo'] leading-7">
                Pay
              </span>
              <span className="text-sky-500 lg:text-[51px] text-[20px] font-normal font-['Typo Hoop Demo'] leading-7">
                box
              </span>
            </div>
          </div>

          <div className="border-t border-l  border-fuchsia-500 p-2 flex items-center justify-center">
            <div className="w-[231px] h-[21px]">
              <span className="text-white text-[20px] font-normal font-['Voces'] leading-7">
                Vuzual{" "}
              </span>
              <span className="text-red-600 text-[20px] font-normal font-['Volkhov'] leading-7">
                Plus{" "}
              </span>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePartners;
