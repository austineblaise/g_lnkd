import React from "react";

const CardContent = () => {
  return (
    <div className=" border border-fuchsia-500     max-w-sm rounded  shadow-lg">
      <div className="py-4 mx-4">
        <div className="text-white text-sm font-normal font-['Montserrat'] leading-[30.30px] text-[32px">
          At getlinked tech Hackathon 1.0, we value your privacy
          <br />
          and are committed to protecting your personal information.
          <br />
          This Privacy Policy outlines how we collect, use, disclose, <br />
          and safeguard your data when you participate in our tech <br />
          hackathon event. By participating in our event, you consent <br />
          to the practices described in this policy.
        </div>

        <div className="text-fuchsia-500 text-base font-bold font-['Montserrat'] leading-[34.62px]">
          Licensing Policy
        </div>

        <div className="text-white text-sm font-bold font-['Montserrat'] leading-[30.30px] mb-4">
          Here are terms of our Standard License:
        </div>

        <div className="mx-auto  container">
          <ul className="list-none p-0 text-sm font-normal font-['Montserrat']">
            <li className="flex  pb-6 text-white ">
              <img
                src="/assets/list.svg"
                alt="Bullet Point"
                className="w-6 h-6 mr-3"
              />
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </li>
            <li className="flex text-white ">
              <img
                src="/assets/list.svg"
                alt="Bullet Point"
                className="w-6 h-6 mr-3"
              />
              You are licensed to use the item available at any free source
              sites, for your project developement
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center mb-4">
  <button className="btn bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 text-white  font-semibold px-3 py-1 rounded duration-500 md:static">
    Register
  </button>
</div>

    </div>
  );
};

export default CardContent;
