"use client";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="border-b  border-gray-500 mt-10">
      <div className="text-center md:hidden lg:hidden block mt-[120px]">
        <div className="text-center mt-4">
          <p className="lg:text-4xl text-xl lg:w-[780px] text-white font-bold font-['Montserrat'] lg:whitespace-nowrap  ">
            {" "}
            Igniting a Revolution in HR Innovation
          </p>

          <div>
            <img
              src="/assets/line.svg"
              alt="Your Image Alt Text"
              className="relative lg:left-[485px] md:left-[485px] left-[235px] lg:-top-[42px] -top-[5px]  md:-top-[42px]  lg:w-[210px] md:w-[210px] w-[110px] "
            />
          </div>
        </div>
      </div>
      <section className="lg:py-3     container  lg:ml-6 lg:px-12 px-2 py-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className=" container  col-span-6 text-center sm:text-left justify-self-start lg:mt-[105px] ">
            <img
              src="/assets/shadow.png"
              alt="Background Image"
              className="absolute top-0 left-0 h-full w-full opacity-40 z-0 -top-[150px]"
              style={{ left: "-500px" }}
            />

            <div className="flex items-center justify-center lg:justify-start md:justify-start lg:mt-[100px]">
              <h1 className="text-white lg:text-[50px] text-[35px] font-bold font-['Clash Display']">
                getlinked Tech
              </h1>
            </div>

            <h1 className="flex items-center justify-center lg:justify-start md:justify-start">
              <span className="text-white lg:text-[50px] text-[35px]  font-bold font-['Clash Display']">
                Hackathon{" "}
              </span>
              <span className="text-fuchsia-500 text-[50px] font-bold font-['Clash Display'] lg:text-[50px] text-[30px] ">
                1.0
              </span>
              <img
                src="/assets/chain.png"
                alt="Your Image"
                className="lg:ml-2 lg:w-16 lg:h-16 w-8 h-8"
              />
            </h1>

            <div className="lg:hidden md:hidden block   text-center text-white text-[15px] font-normal font-['Montserrat'] leading-snug">
              Participate in getlinked tech Hackathon <br />
              2023 stand a chance to win a Big prize
            </div>

            <p className="lg:block md:block hidden  text-white lg:text-xl text-[13px] font-normal font-['Montserrat'] leading-[33.20px]">
              Participate in getlinked <br /> tech Hackathon 2023 stand a chance
              to win a Big prize
            </p>

            <div>
              <button className=" mt-6   w-[172px] h-[53px] bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded">
                <div className="text-white text-base font-normal font-['Montserrat']">
                  Register
                </div>
              </button>

              <div>
                <div className="text-white lg:text-[50px] md:text-[50px] text-[40px]   font-normal font-['Unica One'] leading-[85.12px]    ">
                  {time.hours}
                  <span className="align-baseline inline-block lg:text-[32px] text-[25px]">
                    h
                  </span>{" "}
                  {time.minutes}
                  <span className="align-baseline inline-block text-[32px] ">
                    m
                  </span>{" "}
                  {time.seconds}
                  <span className="align-baseline inline-block text-[32px]">
                    s
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 place-self-center mt-4 lg:mt-0 ">
            <div className="text-center md:block lg:block hidden">
              <div className="text-center mt-4">
                <p className="lg:text-4xl text-xl lg:w-[780px] text-white font-bold font-['Montserrat'] lg:whitespace-nowrap pb-10 ">
                  {" "}
                  Igniting a Revolution in HR Innovation
                </p>

                <div>
                  <img
                    src="/assets/line.svg"
                    alt="Your Image Alt Text"
                    className="relative lg:left-[485px] md:left-[485px] left-[230px] lg:-top-[42px] -top-[42px]  md:-top-[42px]  lg:w-[210px] md:w-[210px] w-[110px] "
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center sm:justify-end relative overflow-hidden ">
              <img
                src="/assets/smart-glasses-man.png"
                alt="hero image"
                className="object-cover  lg:h-[550px] mr-10"
              />

              <img
                src="/assets/net.png"
                alt="Top Image"
                className="absolute inset-0  lg:h-[550px] object-cover opacity-50  lg:ml-[150px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
