import React from "react";

const Criteria = () => {
  return (
    <div className="border-b  border-gray-500 ">
      <section className=" flex flex-col lg:flex-row mt-10 mx-6 container mb-10">
        {/* Image section (above contents on mobile) */}
        <div className="lg:w-1/2 flex items-center justify-center lg:order-1 order-1 ">
          <img
            src="/assets/criteria.png" // Replace with your image path
            alt="Your Image"
              className="w-[600px] h-[587px]"
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
              {" "}
              {/* Adjust the width as needed */}
              <p className=" text-white ">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Criteria;