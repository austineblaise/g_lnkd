"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import LoaderSpinner from "./Spinner";
import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CongratulationsModal from "./Modal";

const Register = () => {
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
    email: "",
    phone_number: "",
    team_name: "",
    group_size: "",
    project_topic: "",
    category: "",
    privacy_policy_accepted: false,
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

        toast.error("An error occurred. Please try again later", {
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
        toast.error("An error occurred. Please try again later.", {
          position: "top-right",
          transition: Flip,
        });
      }
    }
  };

  const fetchCategories = async () => {
    setLoadingg(true);
    try {
      const res = await axios.get(
        "https://backend.getlinked.ai/hackathon/categories-list",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data) {
        setCategories(res.data);
        setLoadingg(false);
      } else {
        console.log("error fetching categories");
        setLoadingg(false);
      }
    } catch (error) {
      console.log("error fetching categories:", error);
      setLoadingg(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
        <div className="flex flex-col lg:flex-row w-11/12 lg:w-11/12 bg-[#150e28]  rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex  flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: 'url("/assets/shadow.png")' }}
          >
            <img src="/assets/star.png" alt="star" />
            <img src="/assets/register.png" alt="Registration" />
            <img src="/assets/star.png " alt="start" />
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12  border border-fuchsia-500">
            <div className="text-fuchsia-500 text-[32px] font-semibold font-['Clash Display'] mb-4">
              Register
            </div>

            <div className="flex">
              <div className=" mb-4 text-white text-sm font-normal font-['Montserrat'] ">
                Be part of this movement!
              </div>

              <img
                src="/assets/reggirl.png "
                className="w-4 h-4"
                alt="start "
              />
              <img src="/assets/regboy.png " className="w-4 h-4 " alt="start" />

              {/* <div className="w-[101px] h-[0px] border border-fuchsia-500"></div>  */}
            </div>

            <div className="text-white text-2xl font-normal font-['Montserrat'] mb-4">
              CREATE YOUR ACCOUNT
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col text-white">
                  <label
                    htmlFor="team_name"
                    className=" text-sm font-normal font-['Montserrat']"
                  >
                    Team Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the name of your group"
                    className={`border border-gray-400 py-1  px-2 ${
                      errors.team_name ? "border-red-500" : ""
                    }text-white bg-transparent`}
                    {...register("team_name", { required: true })}
                    onChange={handleInputChange}
                    value={formData.team_name}
                  />
                  {errors.team_name && (
                    <p className="text-red-500 text-sm italic">
                      Name is required
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className=" text-sm font-normal font-['Montserrat'] text-white"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the phone number"
                    className={`border border-gray-400 py-1 px-2 ${
                      errors.phone_number ? "border-red-500" : ""
                    }text-white bg-transparent`}
                    {...register("phone_number", { required: true })}
                    onChange={handleInputChange}
                    value={formData.phone_number}
                  />
                  {errors.phone_number && (
                    <p className="text-red-500 text-sm  italic">
                      Phone number is required
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="Email"
                    className=" text-sm font-normal font-['Montserrat'] text-white"
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
                    <p className="errorMsg text-red-500 italic">
                      Email is required.
                    </p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="errorMsg text-red-500 text-sm italic">
                      Email is not valid.
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="project_topic"
                    className=" text-sm font-normal font-['Montserrat'] text-white"
                  >
                    Project Topic
                  </label>
                  <input
                    type="text"
                    placeholder="What is your group project topic"
                    className={`border border-gray-400 py-1 px-2 ${
                      errors.project_topic ? "border-red-500" : ""
                    }text-white bg-transparent`}
                    {...register("project_topic", { required: true })}
                    onChange={handleInputChange}
                    value={formData.project_topic}
                  />
                  {errors.project_topic && (
                    <p className="text-red-500 text-sm  italic">
                      Project topic is required
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="category"
                    className=" text-sm font-normal font-['Montserrat'] text-white"
                  >
                    Category
                  </label>
                  <select
                    data-te-select-init
                    className={`border border-gray-400 py-1 px-2 ${
                      errors.category ? "border-red-500" : ""
                    }text-white bg-transparent`}
                    {...register("category", { required: true })}
                    onChange={handleInputChange}
                    value={formData.category}
                  >
                    <option value="" className="bg-[#150e28]">
                      Select your category
                    </option>
                    {categories.map((category: any) => (
                      <option
                        key={category.id}
                        value={category.id}
                        className="bg-[#150e28]"
                      >
                        {category.name}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-500 text-sm  italic">
                      Category is required
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="group_size"
                    className=" text-sm font-normal font-['Montserrat'] text-white"
                  >
                    Group Size
                  </label>
                  <select
                    data-te-select-init
                    className={`border border-gray-400 py-1 px-2  ${
                      errors.group_size ? "border-red-500" : ""
                    }text-white bg-transparent`}
                    {...register("group_size", { required: true })}
                    onChange={handleInputChange}
                    value={formData.group_size}
                  >
                    <option value="" className="bg-[#150e28]">
                      Select{" "}
                    </option>
                    <option value="1" className="bg-[#150e28]">
                      One
                    </option>
                    <option value="2" className="bg-[#150e28]">
                      Two
                    </option>
                    <option value="3" className="bg-[#150e28]">
                      Three
                    </option>
                    <option value="4" className="bg-[#150e28]">
                      Four
                    </option>
                    <option value="5" className="bg-[#150e28]">
                      Five
                    </option>
                    <option value="6" className="bg-[#150e28]">
                      Six
                    </option>
                    <option value="7" className="bg-[#150e28]">
                      Seven
                    </option>
                    <option value="8" className="bg-[#150e28]">
                      Eight
                    </option>
                  </select>
                  {errors.group_size && (
                    <p className="text-red-500 text-sm  italic">
                      Group size is required
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <div className="text-pink-500 text-xs font-normal font-['Montserrat']">
                  Please review your registration details before submitting
                </div>

                <div className="mt-2">
                  <input
                    type="checkbox"
                    className="border border-gray-400"
                    {...register("privacy_policy_accepted", { required: true })}
                    onChange={handleInputChange}
                    checked={formData.privacy_policy_accepted}
                  />

                  <span className="text-white">
                    I agreed with the event terms and conditions and privacy
                  </span>
                </div>
                {errors.privacy_policy_accepted && (
                  <p className="text-red-500 text-sm italic">
                    You must accept the Terms of Use and Privacy Policy
                  </p>
                )}
              </div>

              {loading ? (
                <div className="mt-5">
                  <button
                    type="submit"
                    className="text-white w-full bg-purple-500 py-3 text-center bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded"
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
                <div className="mt-5">
                  <button
                    type="submit"
                    className="text-white w-full bg-purple-500 py-3 text-center bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded"
                  >
                    Register Now
                  </button>
                </div>
              )}
            </form>

            {showModal ? (
              <CongratulationsModal
                showModal={showModal}
                toggleModal={handleToggleModal}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
