import Image from "next/image";
import React from "react";
import cryptoImg from "../public/assets/projects/portfolio.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

import BackButton from "../components/BackButton";

const portfolio = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cryptoImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <BackButton link={"projects"} project={"yes"} />
          <h2 className="py-2">Web Portfolio</h2>
          <h3>
            JavaScript /Next Js / TailwindCSS / GitHub / AWS Amplify / AWS S3{" "}
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          {/* <p>Project</p> */}
          <h2 className="my-4">Overview</h2>
          <p className="my-4">
            This web application was built using Next JS and is hosted on
            GitHub. This is my personal space to share with you the projects
            that I&apos;ve built and new ones that are still in progress. This
            is the second version of my portfolio that I&apos;ve built and will
            be updated in the future. Users can access a description page of the
            projects, a detailed version of my resume, and my certificates.
          </p>
          <Link href="/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>

          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TailwindCSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Amazon Web Services
                Amplify
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Amazon Web Services S3
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
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

export default portfolio;
