import React from "react";
import five from "../public/assets/projects/5.png";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="w-full md:h-screen p-2 flex items-center py-16   "
      >
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="py-4 uppercase  text-2xl tracking-widest  text-[#039898]">
              About
            </p>
            <h2 className="py-4">Who I Am</h2>

            <p className="py-2 text-gray-600">
              // I am not your average engineer
            </p>
            <p className="py-2 text-gray-600">
              I am a recent graduated Mechatronics Engineer and I have spent the
              last 6 years learning different tools and blooming my passion for
              technology. In 2017 I started programming and interacting with
              microcontrollers. What I thought was just a few small puzzles /
              assignments, turned into a love for programming.
            </p>
            <p className="py-2 text-gray-600">
              Fascinated with how intricate programming can be I was quickly
              drawn to learn more. I started learning javascript and PLCs, and
              was even more enthused with making interactive projects such as
              web and mobile applications, and industrial automation systems. I
              am now spending my time building projects with React JS, AWS, TIA
              PORTAL, FluidSIM and learning new technologies.
            </p>
            <a href="/#projects">
              <p className="py-2 text-[#039898] underline cursor-pointer">
                Check out some of my latest projects.
              </p>
            </a>
          </div>
          <div className="w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={five} width="900px" height="626px" alt="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
