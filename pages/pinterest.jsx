import Image from "next/image";
import React from "react";
import pinterestImg from "../public/assets/projects/4.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { HiArrowCircleLeft } from "react-icons/hi";
import Link from "next/link";

import BackButton from "../components/BackButton";

const crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={pinterestImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <BackButton link={"projects"} project={"yes"} />
          <h2 className="py-2">Pinterest Mobile App</h2>
          <h3>React Native / Expo CLI / AWS Amplify / GitHub</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4  ">
          {/* <p className="my-4">Project</p> */}
          <h2 className="my-4">Overview</h2>
          <p className="my-4">
            This is a mobile app that was built using React JS, React Native,
            and Amazon Web Services for the backend. Users can view the pins
            uploaded into the app on the home screen, visualize their favorite
            pins and your date on your profile and create new and amazing pins!
            User authentication is available so you can signup & signin to your
            account with an email address in order to save your orders and the
            restaurants information. The authentication process is validated by
            an automated validation email. This is made possible with Amazon Web
            Services Amplify.
          </p>
          {/* <button className="px-8 py-2 mt-4 mr-8">Demo</button> */}
          {/* <button className="px-8 py-2 mt-4">Code</button> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React / React Native
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Expo CLI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AWS: Amplify
              </p>
            </div>
          </div>
        </div>
        {/* <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link> */}
      </div>
    </div>
  );
};

export default crypto;
