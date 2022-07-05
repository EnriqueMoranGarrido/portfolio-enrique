import React from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsTelephoneFill, BsHouseDoorFill, BsGlobe2 } from "react-icons/bs";

import {
  HiOutlineChevronDoubleUp,
  HiArrowCircleLeft,
  HiArrowCircleRight,
} from "react-icons/hi";
import icon from "../public/favicon.ico";

import Link from "next/link";
import Image from "next/image";

import { RiRadioButtonFill } from "react-icons/ri";

import project1 from "../public/assets/projects/twitch-portfolio.png";
import disney from "../public/assets/projects/disney-portfolio.jpg";

const projects = () => {
  return (
    <>
      <Head>
        <title>Enrique | Projects</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
      </Head>
      <Navbar />
      <div className="max-w-[940px] mx-auto p-2 pt-[120px] justify-center items-center">
        <Link href="/#projects">
          <div className="underline cursor-pointer uppercase">
            {" "}
            <HiArrowCircleLeft size={35} />
            Back
          </div>
        </Link>
        <h2 className="text-center">Projects</h2>

        <div className="bg-[#039898] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center text-gray-100">Enrique Morán Garrido</h2>
          <div className="flex">
            <a href="https://www.linkedin.com/in/enrique-moran-garrido">
              <FaLinkedinIn
                size={23}
                color="white"
                style={{ marginRight: "1rem" }}
              />
            </a>
            <a href="https://github.com/EnriqueMoranGarrido">
              <FaGithub
                size={23}
                color="white"
                style={{ marginRight: "1rem" }}
              />
            </a>
            <Link href="/#resume" className="hover:cursor-pointer">
              <BsGlobe2
                size={23}
                color="white"
                style={{ marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>

        <Link
          href="https://disney-enriquemorangarrido.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          <div className="  flex sm:flex-row flex-col border-4 hover:border-[#039898] rounded-t-2xl rounded-b-2xl shadow-md shadow-gray-400 p-2 hover:scale-105  ease-in duration-300 hover:cursor-pointer my-6">
            <div className="sm:w-[50%]">
              <Image
                src={disney}
                width="75"
                height="50"
                layout="responsive"
                className=" sm:rounded-l-2xl"
              />
            </div>
            <div className="sm:w-[50%]">
              <h2 className="bg-[#040714] text-center text-white  sm:rounded-tr-2xl">
                Disney+ Clone
              </h2>
              <p className="px-2">
                In this Disney+ clone, users may choose to be authenticated with
                either a Google account and access the disney interface with
                different features.
              </p>
              <div className="col-span-4 sm:col-span-2  rounded-xl p-0">
                <div className="p-2">
                  <div className="grid grid-cols-3 md:grid-cols-2">
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
                      <RiRadioButtonFill className="pr-1" /> Amazon S3 buckets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/twitch">
          <div className="  flex sm:flex-row flex-col border-4 hover:border-[#039898] rounded-t-2xl rounded-b-2xl shadow-md shadow-gray-400 hover:cursor-pointer p-2 hover:scale-105  ease-in duration-300">
            <div className="sm:w-[50%]">
              <Image
                src={project1}
                width="75"
                height="50"
                layout="responsive"
                className=" sm:rounded-l-2xl"
              />
            </div>
            <div className="sm:w-[50%]">
              <h2 className="bg-[#6441a5] text-center text-white  sm:rounded-tr-2xl">
                Twitch Clone
              </h2>
              <p className="px-2">
                In this Twitch clone, users may choose to be authenticated with
                either a Github account or a Google account.
              </p>
              <div className="col-span-4 sm:col-span-2  rounded-xl p-0">
                <div className="p-2">
                  <div className="grid grid-cols-3 md:grid-cols-2">
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
                      <RiRadioButtonFill className="pr-1" /> GitHub Auth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <h1 className="text-gray-600 text-center mt-10 italic">
          Stay tuned for more!{" "}
        </h1>

        <div className="flex justify-center py-12">
          <Link href="/projects">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#039898]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default projects;
