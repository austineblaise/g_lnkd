import React from "react";

import Awards from "./Awards";

const Prize = () => {
  return (
    <>
      <div className="border-b  border-gray-500  lg:mt-[100px]  lg:p-0 md:p-0 p-10   ">
        <section className=" flex flex-col lg:flex-row lg:mt-10 md:mt-10 container lg:mb-[100px]">
          <div className="lg:w-1/2 flex items-center justify-center lg:order-1 order-1 ">
            <img src="/assets/prize.png" alt="Your Image" />
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-2">
            <div>
              <div>
                <div className="">
                  <span className="text-white text-[32px] font-bold font-['Clash Display'] text">
                    Prizes and <br />
                  </span>
                  <span className="text-fuchsia-500 text-[32px] font-bold font-['Clash Display']">
                    Rewards
                  </span>
                </div>

                <div className=" text-white text-sm font-normal font-['Montserrat'] leading-normal">
                  Here is the breakdown of the time we anticipate <br />
                  using for the upcoming event.
                </div>
              </div>
              <div className=" mt-4">
                <Awards  />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Prize;
