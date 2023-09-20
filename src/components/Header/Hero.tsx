"use client";
import React from "react";



const HeroSection = () => {
  return (
    <section className="lg:py-3     container  lg:ml-6 lg:px-12 px-2 py-4 border-b  border-gray-500">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div
         
          className="col-span-6 text-center sm:text-left justify-self-start lg:mt-[105px]"
        >
          <div className="flex items-center">
            <h1 className="text-white text-[50px] font-bold font-['Clash Display']">
              getlinked Tech
            </h1>
          </div>

          <h1 className="flex items-center">
            <span className="text-white text-[50px] font-bold font-['Clash Display']">
              Hackathon{" "}
            </span>
            <span className="text-fuchsia-500 text-[50px] font-bold font-['Clash Display']">
              1.0
            </span>
            <img
              src="/assets/chain.png" 
              alt="Your Image"
              className="ml-2 w-16 h-16" // Adjust margin as needed for spacing
            />
          </h1>

          {/* <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold"> */}
          {/* <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span> */}

          {/* getlinked Tech */}
          {/* <TypeAnimation
              sequence={[
                "Judy",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            /> */}

          {/* </h1> */}

          <p className="text-white text-xl font-normal font-['Montserrat'] leading-[33.20px]">
            Participate in getlinked tech Hackathon 2023 stand <br />a chance to
            win a Big prize
          </p>

          {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p> */}
          <div>
            <button className=" mt-6   w-[172px] h-[53px] bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded">
              <div className="text-white text-base font-normal font-['Montserrat']">
                Register
              </div>
            </button>

            <div className="text-white text-[50px] font-normal font-['Unica One'] leading-[85.12px] mt-10">
              00
              <span className="align-baseline inline-block text-[32px]">h</span>{" "}
              00
              <span className="align-baseline inline-block text-[32px]">m</span>{" "}
              00
              <span className="align-baseline inline-block text-[32px]">s</span>
            </div>

            {/* <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link> */}
          </div>
        </div>
        <div
         
          className="col-span-6 place-self-center mt-4 lg:mt-0 "
        >
          {/* <div className="w-[742px] text-white text-4xl font-bold font-['Montserrat']">Igniting a Revolution in HR Innovation</div> */}
          <div className="text-center">
            <div className="text-center mt-4">
              <p className="text-4xl  lg:w-[600px] text-white font-bold font-['Montserrat'] lg:whitespace-nowrap pb-10 ">
                {" "}
                Igniting a Revolution in HR Innovation
              </p>
            </div>

            {/* <div className="w-[742px] text-white text-4xl font-bold font-['Montserrat']">
            Igniting a Revolution in HR Innovation
            </div> */}
          </div>

          <div className="flex justify-center sm:justify-end relative overflow-hidden">
            <img
              src="/assets/smart-glasses-man.png"
              alt="hero image"
              className="object-cover"
              // width={500}
              // height={500}
            />

            <img
              src="/assets/net.png" 
              alt="Top Image"
              className="absolute inset-0  object-cover opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
