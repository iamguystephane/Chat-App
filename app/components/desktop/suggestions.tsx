"use client";

import Image from "next/image";
import profilePic from "../../assets/images/AI-creation.jpg";

const Suggestions = () => {
  return (
    <>
      <h1 className="font-bold text-2xl mt-4"> Suggestions </h1>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3 mt-4">
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="w-9 h-9 rounded-full"
          />
          <div className="flex-col justify-center">
            <p
              className="text-sm font-bold text-wrap w-full"
            >
              Guy Stephane
            </p>
            <p className="text-sm text-gray-800"> 7 Mutual </p>
          </div>
        </div>
        <button className="text-white px-5 py-1 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500">
          Add
        </button>
      </div>

    </>
  );
};

export default Suggestions;
