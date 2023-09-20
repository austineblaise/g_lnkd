import React from "react";
import Awards from "./Awards";

const Prize = () => {
  return (
    <div className="border-b  border-gray-500 ">
      <section className=" flex flex-col lg:flex-row mt-10 mx-6 container mb-10">
        {/* Image section (above contents on mobile) */}
        <div className="lg:w-1/2 flex items-center justify-center lg:order-1 order-1 ">
          <img
            src="/assets/prize.png"
            alt="Your Image"
            //   className="max-h-full"
          />
        </div>

        {/* Text section (below image on mobile) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-2">
          <div>
            <div>
              <span className="text-white text-[32px] font-bold font-['Clash Display']">
                Introduction to getlinked
                <br />
              </span>
              <span className="text-fuchsia-500 text-[32px] font-bold font-['Clash Display']">
                tech Hackathon 1.0
              </span>
            </div>
            <div className="w-4/5 mt-4">
                            <Awards/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prize;
