import React from "react";

const Medals= () => {
  return (
    <section className="flex">
      <div className="w-[160px] h-[300px] left-0 top-[50px] relative m-2">
        <div className="w-[160px] h-[216px] left-0 top-[34px] absolute bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-500" />
        <img
          className="w-[137px] h-[138px] left-[12px] top-0 absolute"
          src="/assets/medal1.png"
          alt="Placeholder"
        />
        <div className="left-[50px] top-[148px] absolute text-white text-2xl font-bold font-['Montserrat'] leading-[40px]">
          2nd
        </div>
        <div className="left-[45px] top-[187px] absolute text-white text-lg font-semibold font-['Montserrat'] leading-[34px]">
          Runner
        </div>
        <div className="left-[18px] top-[214px] absolute text-fuchsia-500 text-[18px] font-bold font-['Montserrat'] leading-[34px]">
          N300,000
        </div>
      </div>

      <div className="w-[160px] h-[300px] left-0 top-[50px] relative m-2 lg:transform lg:scale-125">
        <div className="w-[160px] h-[216px] left-0 top-[34px] absolute bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-500" />
        <img
          className="w-[137px] h-[138px] left-[12px] top-0 absolute"
          src="/assets/medal2.png"
          alt="Placeholder"
        />
        <div className="left-[50px] top-[148px] absolute text-white text-2xl font-bold font-['Montserrat'] leading-[40px]">
          2nd
        </div>
        <div className="left-[45px] top-[187px] absolute text-white text-lg font-semibold font-['Montserrat'] leading-[34px]">
          Runner
        </div>
        <div className="left-[18px] top-[214px] absolute text-fuchsia-500 text-[18px] font-bold font-['Montserrat'] leading-[34px]">
          N300,000
        </div>
      </div>

      <div className="w-[160px] h-[300px] left-0 top-[50px] relative m-2">
        <div className="w-[160px] h-[216px] left-0 top-[34px] absolute bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-500" />
        <img
          className="w-[137px] h-[138px] left-[12px] top-0 absolute"
          src="/assets/medal3.png"
          alt="Placeholder"
        />
        <div className="left-[50px] top-[148px] absolute text-white text-2xl font-bold font-['Montserrat'] leading-[40px]">
          2nd
        </div>
        <div className="left-[45px] top-[187px] absolute text-white text-lg font-semibold font-['Montserrat'] leading-[34px]">
          Runner
        </div>
        <div className="left-[18px] top-[214px] absolute text-fuchsia-500 text-[18px] font-bold font-['Montserrat'] leading-[34px]">
          N300,000
        </div>
      </div>

  
    </section>
  );
};

export default Medals;
