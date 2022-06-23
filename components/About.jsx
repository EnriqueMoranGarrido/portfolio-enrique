import React from "react";
import five from "../public/assets/projects/5.png";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-[400px] sm:w-full justify-center ">
      <div className="w-full md:h-screen p-2 flex  py-16   ">
        <div className="max-w-[1240px] m-auto md:grid md:grid-cols-3 md:gap-8">
          <div className="col-span-2">
            <p className="py-4 uppercase  text-2xl tracking-widest  text-[#039898]">
              About
            </p>
            <h2 className="py-4">Who I Am</h2>

            <p className="py-2 text-gray-600">I am not an average engineer.</p>
            <p className="py-2 text-gray-600">
              I am a recent graduated Mechatronics Engineer and I have spent the
              last 6 years learning different tools and blooming my passion for
              technology. In 2017 I started programming and interacting with
              microcontrollers. What I thought was just a few small puzzles /
              assignments, turned into my great love for programming.
            </p>
            <p className="py-2 text-gray-600">
              Fascinated with how intricated programming can be, I was quickly
              drawn to learn more. I started learning JavaScript, PLCs, and
              other technologies that made me feel even more enthused to start
              building my own interactive projects such as web and mobile
              applications, and industrial automation systems. Now I spend my
              time building projects with React JS, AWS, TIA PORTAL, and
              expanding my toolset.
            </p>
            <Link href="/#projects">
              <p className="py-2 text-[#039898] underline cursor-pointer">
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
          <div className="w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={five} width="900px" height="626px" alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
