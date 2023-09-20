"use client";

import React, { useState } from "react";
import {

  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  let Links = [
    { name: "Timeline", link: "/" },
    { name: "Overview", link: "/" },
    { name: "FAQs", link: "/" },
    { name: "Contact", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  // <div className="w-[1559px] h-[617px] bg-gray-900 border border-white border-opacity-20" />

  return (
    <div className=" border-b border-gray-500  w-full  top-0 left-0  ">
      <div className=" md:flex items-center justify-between bg-[#150e28] py-6 md:px-[70px] px-7 ">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center ">
          
          <span className="text-white  font-bold font-['Clash Display']">
            get
          </span>
          <span className="text-fuchsia-500  font-bold font-['Clash Display']">
            linked
          </span>
        </div>

        {/* <div className="cursor-pointer flex items-center ">
          <span className="text-red text-2xl font-bold font-['Clash Display']">
            get
          </span>
          <span className="text-fuchsia-500 text-4xl font-bold font-['Clash Display']">
            linked
          </span>
        </div> */}

        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white" 
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#150e28] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-7    ">
              <a
                href={link.link}
                className="  text-white text-base font-normal font-['Montserrat']"
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* <div className="text-white text-base font-normal font-['Montserrat']">Contact</div> */}
          <button className="btn bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 text-white md:ml-[100px] font-semibold px-3 py-1 rounded duration-500 md:static">
            Register
          </button>
          {/* <button className="md:ml-8   w-3/4 md:w-[172px] h-[53px] bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded-lg mx-auto my-4">
            Click Me
          </button> */}
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;