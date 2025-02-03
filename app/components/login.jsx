"use client";

import Loading from "./desktop/loading";
import { useState, useEffect } from "react";
import { EyeIcon } from "hugeicons-react";
import { IconButton } from "@mui/material";
import Link from "next/link";
import LoginProviders from "./mobile/login-providers";
import LoginProvidersDesktop from "./desktop/login-providers";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setErrors] = useState({});

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(formData)
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const errorMessages = {};
    if (!formData.username) errorMessages.username = "Username is required";
    if (!formData.password) errorMessages.password = "Password is required";

    if (Object.keys(errorMessages).length === 0) {
      //send login request to the server
    }
    setErrors(errorMessages);
  };

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }, []);

  if (!isLoading)
    return (
      <div className="w-full h-screen grid place-content-center">
        <Loading />
      </div>
    );
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center xsm:px-5 sm:p-0 bg-[url(/assets/images/background-image.avif)] ">
        <div className="md:w-1/3 bg-white overflow-auto h-[515px] xsm:py-10 lg:py-20  xsm:w-full sm:w-3/4 px-10 xsm:rounded md:rounded-none">
          <h1 className="w-full first:font-bold text-xl text-black">
            Log in to <span className="text-purple-500"> Chatty </span>
          </h1>
          <p className="w-full text-sm text-black">
            Enter your account details below
          </p>
          <form className="flex-col" onSubmit={handleOnSubmit}>
            <div className="flex-col mt-2">
              <label className="text-black"> Email or Username </label>
              <input
                type="email"
                placeholder="Enter your email or username"
                className="w-full bg-gray-100 p-2 rounded-lg focus:outline-pink-500 focus:bg-white focus:text-black"
                name="username"
                onChange={handleOnChange}
              />
            </div>
            {error.username && (
              <p className="text-sm text-red-500"> {error.username} </p>
            )}
            <div className="flex-col mt-2">
              <label className="text-black"> Password </label>
              <div className="relative flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  className="w-full bg-gray-100 p-2 rounded-lg focus:outline-pink-500 focus:bg-white focus:text-black placeholder:text-sm"
                  name="password"
                  onChange={handleOnChange}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    right: 5,
                    top: 0,
                    color: "gray",
                  }}
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <EyeIcon color={showPassword ? "black" : ""} />
                </IconButton>
              </div>
              {error.password && (
                <p className="text-red-500 text-sm"> {error.password} </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 mt-3 rounded-lg text-white py-2"
            >
              Login
            </button>
            <Link href="">
              <p className="mt-5 text-sm text-center text-black">
                forgot password?
              </p>
            </Link>
            <hr className="mt-4" />
            <div className="lg:flex w-full justify-between items-center mt-4">
              <p className="text-sm xsm:text-center md:text-left text-black">
                Don't have an account?
              </p>
              <Link href="/sign-up">
                <p className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg px-4 xsm:py-2 md:py-1 lg:py-2 text-white text-center">
                  Get Started
                </p>
              </Link>
            </div>
            <div className="mt-5 md:hidden">
              <p className="text-center"> Or Continue with </p>
              <div className="w-full flex flex-col items-center justify-center">
                <LoginProviders />
              </div>
            </div>
          </form>
        </div>
        <div className="xsm:hidden md:flex md:flex-col w-1/3 h-[515px] bg-[url(/assets/images/signup-bg.jpg)] text-pu items-center justify-center bg-no-repeat bg-cover px-4">
          <div className="bg-white rounded-lg flex flex-col h-3/4 overflow-auto items-center justify-center px-2">
            <h1 className="text-3xl font-bold text-center">
              {" "}
              Welcome to{" "}
              <span className="bg-gradient-to-l from-pink-500 to-purple-500 text-white rounded-lg px-2 py-1">
                Chatty
              </span>{" "}
            </h1>
            <p className="text-sm mt-3 text-center">
              {" "}
              Connect instantly, chat seamlessly—your conversations, your way!{" "}
            </p>
            <h1 className="mt-5 w-3/4 text-center">
              {" "}
              Please fill in the information on your left to continue{" "}
            </h1>
            <h1 className="text-center"> Or </h1>
            <div className="xsm:hidden xl:flex w-full flex flex-col items-center justify-center">
              <LoginProvidersDesktop />
            </div>
            <div className="xsm:flex xl:hidden w-full flex flex-col items-center justify-center">
              <LoginProviders />
            </div>       
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
