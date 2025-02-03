"use client";

import { IconButton } from "@mui/material";
import { EyeIcon } from "hugeicons-react";
import { useEffect, useState } from "react";
import Loading from "./desktop/loading";
import Link from "next/link";
import Image from "next/image";
import person from "../assets/images/person.png";
import LoginProviders from "./desktop/login-providers";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }, []);

  if (!isLoading)
    return (
      <div className="w-full h-screen grid place-content-center">
        {" "}
        <Loading />{" "}
      </div>
    );
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center xsm:px-8 md:px-0 bg-[url(/assets/images/background-image.avif)]">
        <div className="bg-white max-h-[500px] xsm:rounded-lg md:rounded-none xsm:w-full md:w-1/3 py-10 px-5 overflow-auto">
          <h1 className="font-bold text-xl">
            Create a
            <span className="bg-gradient-to-l from-pink-500 to-purple-500 text-white rounded-lg px-2 py-1">
              Chatty
            </span>
            account
          </h1>
          
          <p className="text-sm"> All fields are required </p>
          <form>
            <div className="w-full flex flex-col">
              <div className="flex flex-col w-full mt-3">
                <label> First Name </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="input"
                />
              </div>
              <div className="flex flex-col w-full">
                <label> Last Name </label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="input"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label> Username </label>
              <input
                type="text"
                placeholder="Enter username"
                className="input"
              />
            </div>

            <div className="flex flex-col w-full">
              <label> Email </label>
              <input type="email" placeholder="Enter email" className="input" />
            </div>
            <div className="flex flex-col w-full relative">
              <label> Password </label>
              <div className="flex w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="input w-full"
                />
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  sx={{
                    position: "absolute",
                    right: 5,
                    top: 23,
                  }}
                >
                  <EyeIcon color={showPassword ? "black" : ""} />
                </IconButton>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label> Confirm password </label>
              <div className="flex w-full">
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input w-full"
                />
              </div>
            </div>
            <button className="w-full mt-2 bg-purple-500 text-white py-2 text-center rounded">
              Register
            </button>
            <hr className="mt-5 xsm:flex" />
            <div className="flex justify-between items-center mt-5 xsm:flex">
              <p className="text-sm flex gap-1">
                {" "}
                Already have an account?{" "}
                <Link href="/">
                  <span className="text-purple-800">Login</span>
                </Link>
              </p>
            </div>
          </form>
        </div>

        <div className="w-1/3 h-[500px] bg-gradient-to-br from-pink-800 to-purple-800 xsm:hidden md:flex flex-col items-center justify-center relative pl-5">
          <div className="flex jusfify-center w-full relative">
            <div>
              <p className="text-white text-sm">
                Make your communication more fun...
              </p>
              <h1 className="text-white font-bold text-3xl mt-4 mb-4">
                Connect with your friends more easily
              </h1>
            </div>
            <Image src={person} alt="chat-person" width={200} height={200} />
          </div>
          <p className="text-white text-sm">
            Private messages and calls allow you to be yourself, talk freely,
            and feel close to people who matter most to you, no matter where
            they are in the world
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
