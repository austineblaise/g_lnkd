import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className=" text-white py-8 bg-[#100B20] lg:mt-[150px] md:pt-[80px] md:mt-[30px] mt-[50px]">
        <div className="container lg:px-[100px] md:px-5 px-[50px] flex flex-wrap justify-between ">
          <div className="w-full md:w-2/5 mb-4 md:mb-0">
            <div className="mb-4">
              <span className="text-white text-3xl font-bold font-['Clash Display']">
                get
              </span>
              <span className="text-fuchsia-500 text-3xl font-bold font-['Clash Display']">
                linked
              </span>
            </div>

            <div className="left-0 top-[43px] text-white text-xs font-normal font-['Montserrat'] leading-tight mb-10">
              Getlinked Tech Hackathon is a technology innovation program <br />
              established by a group of organizations with the aim of showcasing{" "}
              <br />
              young and talented individuals in the field of technology
            </div>

            <div className="text-white text-xs font-normal font-['Montserrat'] leading-tight">
              Terms of Use <span className="text-fuchsia-500">|</span> Privacy
              Policy
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            {/* <h2 className="text-xl font-semibold mb-4">Center Section</h2> */}

            <div className="text-fuchsia-500 text-m font-semibold font-['Montserrat'] leading-normal mb-4">
              Useful Links
            </div>

            <div>
              <div className="text-white text-xs font-normal font-['Montserrat'] leading-tight mb-2">
                Overview
              </div>
              <div className="text-white text-xs font-normal font-['Montserrat'] leading-tight mb-2">
                Timeline
              </div>
              <div className="text-white text-xs font-normal font-['Montserrat'] leading-tight mb-2">
                FAQs
              </div>
              <Link href="/register" className="text-white text-xs font-normal font-['Montserrat'] leading-tight mb-2">
                Register
              </Link>
              <div className="flex">
                <div className="text-fuchsia-500 text-xs font-normal font-['Montserrat']">
                  Follow us
                </div>

                <img
                  src="/assets/ig.svg"
                  alt="Phone Icon"
                  className="w-3 h-3 ml-3 mr-3"
                />
                <img
                  src="/assets/x.svg"
                  alt="Phone Icon"
                  className="w-3 h-3 mr-3"
                />
                <img
                  src="/assets/facebook.svg"
                  alt="Phone Icon"
                  className="w-3 h-3 mr-3"
                />
                <img
                  src="/assets/linkedin.svg"
                  alt="Phone Icon"
                  className="w-3 h-3 mr-3"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/4">
            <div className="text-fuchsia-500 text-sm font-semibold font-['Montserrat'] leading-normal mb-4">
              Contact Us
            </div>
            <div className=" flex text-white text-xs font-normal font-['Montserrat'] space-x-2 mb-4">
              <img
                src="/assets/forter1.svg"
                alt="Phone Icon"
                className="w-3 h-3 mr-3"
              />
              +234 6707653444
            </div>

            <div className=" flex text-white text-xs font-normal font-['Montserrat'] space-x-2 ">
              <img
                src="/assets/footer2.svg"
                alt="Phone Icon"
                className="w-3 h-3 mr-3"
              />
              27,Alara Street Yaba 100012 Lagos State
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="text-white text-xs font-normal font-['Montserrat']">
            All rights reserved. © getlinked Ltd.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
