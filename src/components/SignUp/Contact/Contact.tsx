"use client";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoaderSpinner from "../Spinner";

const Contact = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
    clearErrors,
  } = useForm();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    phone_number: "",
    message: "",
    email: "",
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/hackathon/contact-form`,

        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data) {
        setLoading(false);
        toast.info("Submitted Successfully. Thank you", {
          position: "top-right",
          transition: Flip,
        });

        reset();
      } else {
        setLoading(false);

        toast.error("An error occurred. check your prompts and try again", {
          position: "top-right",
          transition: Flip,
        });
      }
    } catch (error: any) {
      setLoading(false);
      const errorObj = error;
      console.log(errorObj);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message, {
          position: "top-right",
          transition: Flip,
        });
      } else {
        toast.error("An error occurred. check your prompts and try again.", {
          position: "top-right",
          transition: Flip,
        });
      }
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen py-10 mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-11/12 lg:w-11/12 bg-[#150e28] rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="relative w-full lg:w-1/2 flex flex-col items-start justify-center p-12 bg-no-repeat bg-cover  bg-left">
            <img
              src="/assets/shadow.png"
              alt="Background Image"
              className="absolute top-0 left-0 h-full w-full opacity-50 z-0"
              style={{ left: "-150px" }}
            />
            <div className="text-fuchsia-500 text-[32px] font-semibold font-['Clash Display']">
              Get in touch
            </div>
            <div>
              <div className="text-white text-base font-normal font-['Montserrat'] mb-4">
                Contact
                <br />
                Information
              </div>
              <div className="text-white text-base font-normal font-['Montserrat'] mb-4">
                27, Alara Street
                <br />
                Yaba 100012
                <br />
                Lagos State
              </div>

              <div className="text-white text-base font-normal font-['Montserrat']">
                Call Us: 07067981819
              </div>

              <div className="text-white text-base font-normal font-['Montserrat'] mb-4">
                We are open from Monday-Friday
                <br />
                08:00am - 05:00pm
              </div>

              <div className="text-fuchsia-500 text-base font-normal font-['Montserrat'] mb-2">
                Share on
              </div>
              <div className="flex items-start">
                <img
                  src="/assets/ig.svg"
                  alt="Instagram Icon"
                  className="w-3 h-3  mr-3"
                />
                <img
                  src="/assets/x.svg"
                  alt="X Icon"
                  className="w-3 h-3 mr-3"
                />
                <img
                  src="/assets/facebook.svg"
                  alt="Facebook Icon"
                  className="w-3 h-3 mr-3"
                />
                <img
                  src="/assets/linkedin.svg"
                  alt="LinkedIn Icon"
                  className="w-3 h-3 mr-3"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 py-16 px-12 border border-fuchsia-500">
            <div className="text-fuchsia-500 text-xl font-semibold font-['Clash Display']">
              Questions or need assistance?
            </div>

            <div className="text-fuchsia-500 text-xl font-semibold font-['Clash Display'] mb-8">
              Let us know about it!
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col text-white mb-4">
                <input
                  type="text"
                  placeholder="first name"
                  className={`border border-gray-400 py-1 px-2 ${errors.first_name} ? "border-red-500" : ""
                    }text-white bg-transparent`}
                  {...register("first_name", { required: true })}
                  onChange={handleInputChange}
                  value={formData.first_name}
                />
                {errors.first_name && (
                  <p className="text-red-500 text-sm italic">
                    Name is required
                  </p>
                )}
              </div>

              <div className="flex flex-col text-white mb-4">
                <input
                  type="text"
                  placeholder="phone number"
                  className={`border border-gray-400 py-1 px-2 ${
                    errors.phone_number ? "border-red-500" : ""
                  }text-white bg-transparent`}
                  {...register("phone_number", { required: true })}
                  onChange={handleInputChange}
                  value={formData.phone_number}
                />
                {errors.phone_number && (
                  <p className="text-red-500 text-sm italic">
                    Phone number is required
                  </p>
                )}
              </div>

              <div className="flex flex-col text-white mb-4">
                <input
                  type="text"
                  placeholder="email address"
                  className={`border border-gray-400 py-1 px-2 ${
                    errors.email ? "border-red-500" : ""
                  } text-white bg-transparent`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email format",
                    },
                  })}
                  onChange={handleInputChange}
                  value={formData.email}
                />
                {errors.email && errors.email.type === "required" && (
                  <p className="text-red-500 text-sm italic">
                    Email is required.
                  </p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className="text-red-500 text-sm italic">
                    Email is not valid.
                  </p>
                )}
              </div>

              <div className="flex flex-col mb-4">
                <textarea
                  placeholder="message"
                  className={`border border-gray-400 py-2 px-3 resize-none ${
                    errors.message ? "border-red-500" : ""
                  } text-white bg-transparent`}
                  {...register("message", { required: true })}
                  onChange={handleInputChange}
                  value={formData.message}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm italic">message</p>
                )}
              </div>

              {loading ? (
                <div className="flex flex-col mb-4">
                  <button
                    type="submit"
                    className="text-white bg-purple-500 py-3 text-center bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded"
                  >
                    <div className="flex items-center gap-2 justify-center">
                      <div className="">
                        <LoaderSpinner />
                      </div>
                      <div className="text-white text-xl font-extrabold">
                        Loading
                      </div>
                    </div>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col mb-4">
                  <button
                    type="submit"
                    className="text-white bg-purple-500 py-3 text-center bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded"
                  >
                    Submit
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
