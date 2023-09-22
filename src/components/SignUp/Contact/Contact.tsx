"use client";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoaderSpinner from "../Spinner";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [loadingg, setLoadingg] = useState(false);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    first_name: "",
    phone_number:"",
    message: "",
    email:"",

  });

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://backend.getlinked.ai/hackathon/registration",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data) {
        setLoading(false);
        setShowModal(true);

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

  // Function to handle input changes
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
            <div
              className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: 'url("/assets/shadow.png")' }}
            >
              <img src="/assets/star.png" alt="star" />
              <img src="/assets/register.png" alt="Registration" />
              <img src="/assets/star.png " alt="start" />
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12 border border-fuchsia-500">
              {/* ... other content ... */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col text-white mb-4">
                  <label
                    htmlFor="team_name"
                    className="text-sm font-normal font-['Montserrat']"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the name of your group"
                    className={`border border-gray-400 py-1 px-2 ${
                      errors.first_name} ? "border-red-500" : ""
                    }text-white bg-transparent`}
                    {...register("team_name", { required: true })}
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
                  <label
                    htmlFor="phone"
                    className="text-sm font-normal font-['Montserrat']"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Topic"
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
                  <label
                    htmlFor="Email"
                    className="text-sm font-normal font-['Montserrat']"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email address"
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
                  <label
                    htmlFor="project_topic"
                    className="text-sm font-normal font-['Montserrat'] text-white"
                  >
                    Project Topic
                  </label>
                  <input
                    type="text"
                    placeholder="What is your group project topic"
                    className={`border border-gray-400 py-1 px-2 ${
                      errors.message ? "border-red-500" : ""
                    }text-white bg-transparent`}
                    {...register("project_topic", { required: true })}
                    onChange={handleInputChange}
                    value={formData.message}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm italic">
                      Project topic is required
                    </p>
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
                      Register Now
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
