import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-10/12 bg-white  rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: 'url("/assets/shadow.png")' }}
          >
            <img src="/assets/register.png" />
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            {/* <h2 className="text-3xl mb-4">Register</h2> */}
            <div className="text-fuchsia-500 text-[32px] font-semibold font-['Clash Display'] mb-4">
              Register
            </div>

            <div className=" mb-4 text-white text-sm font-normal font-['Montserrat'] ">
              Be part of this movement!
            </div>
            {/* <p className="mb-4">
              Create your account. It’s free and only take a minute
            </p> */}

            <div className="text-white text-2xl font-normal font-['Montserrat'] mb-4">
              CREATE YOUR ACCOUNT
            </div>
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Enter the name of your group"
                  className="border border-gray-400 py-1 px-2 "
                />
                <input
                  type="text"
                  placeholder="Enter the phone number"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-5 mt-5">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  type="text"
                  placeholder="What is your group project topic"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-5 mt-5">
                <select
                  data-te-select-init
                  className="border border-gray-400 py-1 px-2"
                >
                  <option value="1">Select your category</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                  <option value="7">Seven</option>
                  <option value="8">Eight</option>
                </select>

                <select
                  data-te-select-init
                  className="border border-gray-400 py-1 px-2"
                >
                  <option value="1">Select group size</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                  <option value="7">Seven</option>
                  <option value="8">Eight</option>
                </select>
              </div>

              <div className="mt-4">
                <div className="text-pink-500 text-xs font-normal font-['Montserrat']">
                  Please review your registration details before submitting
                </div>

                <div className="mt-2">
                  <input type="checkbox" className="border border-gray-400" />
                  <span>
                    I accept the{" "}
                    <a href="#" className="text-purple-500 font-semibold">
                      Terms of Use
                    </a>{" "}
                    &amp;{" "}
                    <a href="#" className="text-purple-500 font-semibold">
                      Privacy Policy
                    </a>
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <button className=" text-white w-full bg-purple-500 py-3 text-center bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded">
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
