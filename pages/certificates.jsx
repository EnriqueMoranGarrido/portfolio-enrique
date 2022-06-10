import React from "react";
import Head from "next/head";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsTelephoneFill, BsHouseDoorFill, BsGlobe2 } from "react-icons/bs";
import { HiOutlineChevronDoubleUp, HiArrowCircleLeft } from "react-icons/hi";
import icon from "../public/favicon.ico";

import Link from "next/link";

const resume = () => {
  return (
    <>
      <Head>
        <title>Enrique | Certificates</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href={icon} />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <Link href="/#resume">
          <div className="underline cursor-pointer">
            {" "}
            <HiArrowCircleLeft size={35} />
            Back
          </div>
        </Link>
        <h2 className="text-center">Certificates</h2>
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
            <Link href="/">
              <BsGlobe2
                size={23}
                color="white"
                style={{ marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider"></div>

        <div className="flex flex-row m-auto justify-center items-center ">
          <BsHouseDoorFill size={20} className="mx-1 " />
          <p>Puebla, Mexico</p>
          <span className="px-1">|</span>
          <BsTelephoneFill size={15} className="mx-1" />
          <p>+52 2281199877</p>
          <span className="px-1">|</span>
          <div
            className="flex hover:cursor-pointer"
            onClick={() => {
              window.open(
                "mailto:enrique.morango04@outlook.com?subject=Subject&body=Body%20goes%20here"
              );
            }}
          >
            <AiOutlineMail size={20} className="mx-1" />
            <p>enrique.morango04@outlook.com</p>
          </div>
        </div>

        {/* Amazon   */}
        <div className="text-left py-4 mt-8">
          <p className="text-left underline text-[18px] py-2 uppercase text-2xl font-bold text-[#039898]">
            Amazon Web Services (AWS)
          </p>
          <div className="py-2 grid grid-cols-5 justify-center items-center indent-8">
            <p className="my-4 col-span-3 ">
              Machine Learning Terminology and Process.
            </p>
            <p className="italics text-right col-span-2 text-[#039898]">2022</p>
            <p className="my-4 col-span-3 ">
              Process Model: CRISP-DM on the AWS Stack.
            </p>
            <p className="italics text-right col-span-2 text-[#039898]">2022</p>
            <p className="my-4 col-span-4 ">
              Machine Learning Essentials for Business and Technical Decision
              Makers.
            </p>
            <p className="italics text-right col-span-1 text-[#039898]">2022</p>
            <p className="my-4 col-span-3 ">
              ML Building Blocks: Services and Terminology.
            </p>
            <p className="italics text-right col-span-2 text-[#039898]">2022</p>
            <p className="my-4 col-span-3 ">
              Machine Learning for Business Challenges.
            </p>
            <p className="italics text-right col-span-2 text-[#039898]">2022</p>

            <p className="my-4 col-span-3 ">Demystifying AI/ML/DL.</p>
            <p className="italics text-right col-span-2 text-[#039898]">2022</p>
          </div>
        </div>

        {/* HackerRank   */}
        <div className="text-left py-4 mt-8">
          <p className="text-left underline text-[18px] py-2 uppercase text-2xl font-bold text-[#039898]">
            HackerRank
          </p>
          <div className="py-2 grid grid-cols-5 justify-center items-center indent-8">
            <p className="my-4 col-span-3 ">JavaScript (Basic).</p>
            <p className="italics text-right col-span-2 text-[#039898]">2022</p>
            <p className="my-4 col-span-3 ">SQL (Basic).</p>
            <p className="italics text-right col-span-2 text-[#039898]">2021</p>
            <p className="my-4 col-span-4 ">Python (Basics).</p>
            <p className="italics text-right col-span-1 text-[#039898]">2021</p>
          </div>
        </div>

        {/* IEEE   */}
        <div className="text-left py-4 mt-8">
          <p className="text-left underline text-[18px] py-2 uppercase text-2xl font-bold text-[#039898]">
            Institute of Electrical and Electronics Engineers (IEEE)
          </p>
          <div className="py-2 grid grid-cols-5 justify-center items-center indent-8">
            <p className="my-4 col-span-3 ">
              Engineering Ethics: Power Engineering.
            </p>
            <p className="italics text-right col-span-2 text-[#039898]">2020</p>
            <p className="my-4 col-span-3 ">
              Engineering Ethics: Topics for Robotics and Automation
              Engineering.
            </p>
            <p className="italics text-right col-span-2 text-[#039898]">2020</p>
          </div>
        </div>

        {/* Universal Robots   */}
        <div className="text-left py-4 mt-8">
          <p className="text-left underline text-[18px] py-2 uppercase text-2xl font-bold text-[#039898]">
            Universal Robots
          </p>
          <div className="py-2 grid grid-cols-5 justify-center items-center indent-8">
            <p className="my-4 col-span-3 ">e-Series: Core Track.</p>
            <p className="italics text-right col-span-2 text-[#039898]">2020</p>
            <p className="my-4 col-span-3 ">e-Series: Pro Track.</p>
            <p className="italics text-right col-span-2 text-[#039898]">2020</p>
            <p className="my-4 col-span-3 ">e-Series: Application Track.</p>
            <p className="italics text-right col-span-2 text-[#039898]">2020</p>
            <p className="my-4 col-span-3 ">CB3: Online Training.</p>
            <p className="italics text-right col-span-2 text-[#039898]">2020</p>
          </div>
        </div>

        {/* MathWorks   */}
        <div className="text-left py-4 mt-8">
          <p className="text-left underline text-[18px] py-2 uppercase text-2xl font-bold text-[#039898]">
            MathWorks
          </p>
          <div className="py-2 grid grid-cols-5 justify-center items-center indent-8">
            <p className="my-4 col-span-3 ">Introduction to MATLAB.</p>
            <p className="italics text-right col-span-2 text-[#039898]">2019</p>
            <p className="my-4 col-span-3 ">Deep Learning Onramp.</p>
            <p className="italics text-right col-span-2 text-[#039898]">2019</p>
            <p className="my-4 col-span-3 ">Simulink Onramp.</p>
            <p className="italics text-right col-span-2 text-[#039898]">2019</p>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/certificates">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#039898]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default resume;
