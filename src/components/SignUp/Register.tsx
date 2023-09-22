"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: "", // Change this to an empty string
    project_topic: "",
    category: "", // Change this to an empty string
    privacy_policy_accepted: true,
  });

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

      if (res.data.success) {
        setLoading(false);
        // Handle success, e.g., show a success message or redirect to another page
        reset(); // Clear the form
      } else {
        setLoading(false);
        console.log("error:", res.data.message);
      }
    } catch (error) {
      setLoading(false);
      const errorObj = error;
      console.log(errorObj);
    }
  };

  const fetchCategories = async () => {
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
      } else {
        console.log("error fetching categories");
      }
    } catch (error) {
      console.log("error fetching categories:", error);
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
    <div className="min-h-screen py-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-10/12 bg-white  rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: 'url("/assets/shadow.png")' }}
          >
            <img src="/assets/register.png" alt="Registration" />
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <div className="text-fuchsia-500 text-[32px] font-semibold font-['Clash Display'] mb-4">
              Register
            </div>

            <div className=" mb-4 text-white text-sm font-normal font-['Montserrat'] ">
              Be part of this movement!
            </div>

            <div className="text-white text-2xl font-normal font-['Montserrat'] mb-4">
              CREATE YOUR ACCOUNT
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Enter the name of your group"
                  className={`border border-gray-400 py-1 px-2 ${
                    errors.team_name ? "border-red-500" : ""
                  }`}
                  {...register("team_name", { required: true })}
                  onChange={handleInputChange}
                  value={formData.team_name}
                />
                {errors.team_name && (
                  <p className="text-red-500 text-sm">Name is required</p>
                )}
                <input
                  type="text"
                  placeholder="Enter the phone number"
                  className={`border border-gray-400 py-1 px-2 ${
                    errors.phone_number ? "border-red-500" : ""
                  }`}
                  {...register("phone_number", { required: true })}
                  onChange={handleInputChange}
                  value={formData.phone_number}
                />
                {errors.phone_number && (
                  <p className="text-red-500 text-sm">
                    Phone number is required
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-5 mt-5">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className={`border border-gray-400 py-1 px-2 ${
                    errors.email ? "border-red-500" : ""
                  }`}
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
                    <p className="errorMsg text-red-500 italic">
                      Email is not valid.
                    </p>
                  )}
               
                <input
                  type="text"
                  placeholder="What is your group project topic"
                  className={`border border-gray-400 py-1 px-2 ${
                    errors.project_topic ? "border-red-500" : ""
                  }`}
                  {...register("project_topic", { required: true })}
                  onChange={handleInputChange}
                  value={formData.project_topic}
                />
                {errors.project_topic && (
                  <p className="text-red-500 text-sm">
                    Project topic is required
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-5 mt-5">
                <select
                  data-te-select-init
                  className={`border border-gray-400 py-1 px-2 ${
                    errors.category ? "border-red-500" : ""
                  }`}
                  {...register("category", { required: true })}
                  onChange={handleInputChange}
                  value={formData.category}
                >
                  <option value="">Select your category</option>
                  {categories.map((category: any) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-500 text-sm">Category is required</p>
                )}

                <select
                  data-te-select-init
                  className={`border border-gray-400 py-1 px-2 ${
                    errors.group_size ? "border-red-500" : ""
                  }`}
                  {...register("group_size", { required: true })}
                  onChange={handleInputChange}
                  value={formData.group_size}
                >
                  <option value="">Select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                  <option value="7">Seven</option>
                  <option value="8">Eight</option>
                </select>
                {errors.group_size && (
                  <p className="text-red-500 text-sm">Group size is required</p>
                )}
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
                {errors.privacy_policy_accepted && (
                  <p className="text-red-500 text-sm">
                    You must accept the Terms of Use and Privacy Policy
                  </p>
                )}
              </div>
              <div className="mt-5">
                <button type="submit" className="text-white w-full bg-purple-500 py-3 text-center bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded">
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
