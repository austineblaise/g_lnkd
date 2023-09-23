"use client";

import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const handleRegisterClick = () => {
    router.push("/register");
  };

  let Links = [
    { name: "Timeline", link: "/timeline" },
    { name: "Overview", link: "/" },
    { name: "FAQs", link: "/FAQs" },
    { name: "Contact", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);

  const handleToggleClick = () => {
    setOpen(!open);
  };

  const handleMenuItemClick = () => {
    setOpen(false);
  };

  return (
    <div className=" border-b border-gray-500 z-10  w-full absolute lg:static    top-0 left-0  ">
      <div className=" md:flex items-center justify-between bg-[#150e28] py-6 md:px-[70px] px-7 ">
        {/* logo section */}

        <Link
          href="/"
          className="font-bold text-2xl cursor-pointer flex items-center "
        >
          <span className="text-white  font-bold font-['Clash Display']">
            get
          </span>
          <span className="text-fuchsia-500  font-bold font-['Clash Display']">
            linked
          </span>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <ul
          className={`bg-[#150e28] md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#150e28] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12 " : "top-[-490px] "
          }`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className="md:ml-8 md:my-0 my-7"
              onClick={handleMenuItemClick}
            >
              <Link
                href={link.link}
                className="  text-white text-base font-normal font-['Montserrat'] "
              >
                {link.name}
              </Link>
            </li>
          ))}

          <button
            onClick={() => {
              handleRegisterClick();
              handleMenuItemClick();
            }}
            className="  font-normal font-['Montserrat'] btn bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 text-white md:ml-[100px] font-semibold px-3 py-1 rounded duration-500 md:static"
          >
            Register
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
