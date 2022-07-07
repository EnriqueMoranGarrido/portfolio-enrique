import React from "react";

import Link from "next/link";

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import UpButton from "./UpButton";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-[440px] nxs:w-full lg:h-screen justify-center items-center align-middle"
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="py-4 uppercase  text-2xl tracking-widest  text-[#039898]">
          Contact
        </p>
        <h2 className="py-4">Let&apos;s get in touch!</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-5 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="">
                {/* <img
                  className="rounded-xl hover:scale-110 ease duration-300"
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
                  alt="/"
                /> */}
              </div>
              <div>
                <h2 className="py-2">Enrique Moran Garrido</h2>
                <p className="italic text-[#039898]">Mechatronics Engineer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <p className="uppercase pt-8 pb-4">Connect With Me</p>
              <div className="">
                <div className="flex items-center justify-between max-w-[500px] m-auto py-4">
                  <a href="https://www.linkedin.com/in/enrique-moran-garrido">
                    <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898] ">
                      <FaLinkedin size={25} />
                    </div>
                  </a>
                  <a href="https://github.com/EnriqueMoranGarrido">
                    <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898] ">
                      <FaGithub size={25} />
                    </div>
                  </a>
                  <a href="https://twitter.com/ImMythic2">
                    <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898] ">
                      <FaTwitter size={25} />
                    </div>
                  </a>
                  <Link href="/#contact">
                    <div
                      className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898] "
                      onClick={() => {
                        window.open(
                          "mailto:enrique.morango04@outlook.com?subject=Subject&body=Body%20goes%20here"
                        );
                      }}
                    >
                      <AiOutlineMail size={25} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <UpButton page={"/"} />
      </div>
    </div>
  );
};

export default Contact;
