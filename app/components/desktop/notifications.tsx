"use client";

import Image from "next/image";
import profilePic from "../../assets/images/AI-creation.jpg";

const Notifications = () => {
  return (
    <>
      <div className="mt-5">
        <h1 className="font-bold text-2xl"> Notifications </h1>
        <div className="mt-4 flex items-center gap-3">
          <Image
            src={profilePic}
            alt="profile image"
            className="rounded-full w-10 h-10"
          />
          <p className="lg:text-sm sm:text-xl">
            <span
              className="text-blue-800 lg:text-base sm:text-xl"
              
            >
              @iamguystephane
            </span>{" "}
            added you to the group 'No Return'
            <span
              
              className="ml-3 lg:text-base sm:text-xl"
            >
              2 mins ago
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Notifications;
