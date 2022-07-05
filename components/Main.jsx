import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

import Link from "next/link";

const Main = () => {
  return (
    <div
      id="home"
      className="w-[440px] nxs:w-full h-screen text-center items-center align-middle justify-center"
    >
      <div className=" max-w-[1240px] w-full h-full mx-auto flex p-2  items-center ">
        <div className="">
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#039898]"> Enrique</span>
          </h1>
          <h2 className="py-4 text-gray-500 italic">A Mechatronics Engineer</h2>
          <p className="py-4 text-gray-600 max-w-[63%] m-auto text-xl">
            I am passionate for technology and have recently started my journey
            as a software developer. Currently I&apos;m focused on building and
            designing full-stack applications.
          </p>
          <div className="nxs:max-w-[60%] text-center items-center m-auto">
            <p className="py-4 mt-2  text-bold text-lg italic">
              Graduated from engineering since 2021,
            </p>
            <span className="text-[#039898] text-bold text-lg italic">
              loving it since 1998.
            </span>
          </div>

          <div className="flex items-center justify-between max-w-[500px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/enrique-moran-garrido">
              <a target="_blank" rel="noopener noreferrer">
                <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898] ">
                  <FaLinkedin size={25} />
                </div>
              </a>
            </Link>
            <Link href="https://github.com/EnriqueMoranGarrido">
              <a target="_blank" rel="noopener noreferrer">
                <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898] ">
                  <FaGithub size={25} />
                </div>
              </a>
            </Link>
            {/* <Link href="/#contact" target="_blank">
              <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898] ">
                <AiOutlineMail size={25} />
              </div>
            </Link> */}
            <Link href="https://twitter.com/ImMythic2">
              <a target="_blank" rel="noopener noreferrer">
                <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898] ">
                  <FaTwitter size={25} />
                </div>
              </a>
            </Link>

            <div
              onClick={() => {
                window.open(
                  "mailto:enrique.morango04@outlook.com?subject=Subject&body=Body%20goes%20here"
                );
              }}
            >
              <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898] ">
                <AiOutlineMail size={25} />
              </div>
            </div>

            {/* <a href="tel:+522281199877">
              <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898] ">
                <FaPhoneAlt size={25} className="nav-linker " />
              </div>
            </a> */}
            <Link href="/#resume">
              <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898] ">
                <BsFillPersonLinesFill size={25} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
