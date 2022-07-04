import Image from "next/image";
import React from "react";
import disneyImg from "../public/assets/projects/disney-portfolio.jpg";
import disneyImg1 from "../public/assets/projects/disney/disney1.jpg";
import disneyImg2 from "../public/assets/projects/disney/disney2.jpg";
import disneyImg3 from "../public/assets/projects/disney/disney3.png";
import disneyImg4 from "../public/assets/projects/disney/disney4.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import { HiArrowCircleLeft } from "react-icons/hi";
import Link from "next/link";

const twitch = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={disneyImg1}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <Link href="/#projects">
            <div className="underline cursor-pointer absolute bottom-[98%] ">
              {" "}
              <HiArrowCircleLeft size={35} color="white" />
              <p className="text-white">BACK</p>
            </div>
          </Link>
          <h2 className="py-2">Disney +</h2>
          <h3>Next JS / TailwindCSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-4 mx-auto">
            This appplication was built using NEXT JS and is styled with
            Tailwind CSS, Amazon Web Services for the backend and is hosted
            using Vercel. This is mobile responsive recreation of Disney+ and
            features Next Auth for authentication. Users may choose to be
            authenticated with a Google account. A few features to note with
            this project are lazy loading images using the Image component,
            built in routing, and Next/Auth Context.
          </p>

          <p className="py-4 mx-auto">
            Users can view the catalogs of movies and series from Disney +
            platform, select the content by category such as Disney, Pizar,
            Marvel, Star Wars and National Geographic. User authentication is
            available so you can signup & signin to your account with an email
            address in order to save your favorite movies and series.
          </p>

          <p className="py-4 mx-auto">
            By the way, I hope you enjoy the &apos;content&apos;!
          </p>

          <a
            href="https://disney-enriquemorangarrido.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/EnriqueMoranGarrido/disney
            "
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next Auth
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google Auth
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AWS Amplify
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AWS S3
              </p>
            </div>
          </div>
        </div>
        {/* <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link> */}

        <Image src={disneyImg} width="100" height="100" layout="responsive" />
      </div>
    </div>
  );
};

export default twitch;
