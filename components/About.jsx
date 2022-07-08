import React from "react";
import Image from "next/image";
import Link from "next/link";
import cozy from "../public/assets/programming-cozy.jpg";

const About = () => {
  return (
    <div id="about" className="w-[400px] nxs:w-full justify-center ">
      <div className="w-full md:h-screen p-2 flex  py-16   ">
        <div className="max-w-[1240px] m-auto md:grid md:grid-cols-3 md:gap-8">
          <div className="col-span-2">
            <p className="py-4 uppercase  text-2xl tracking-widest  text-[#039898]">
              About
            </p>
            <h2 className="py-4">Who I Am</h2>
            <p className="py-2 text-gray-600">I am not an average engineer.</p>
            <p className="py-2 text-gray-600">
              I am a Mechatronics Engineer and I have spent the last 6 years
              learning different tools and blooming my passion for technology.
              In 2017 I started programming and interacting with
              microcontrollers. What I thought was just a few small puzzles /
              assignments, turned into my great love for programming.
            </p>
            <p className="py-2 text-gray-600">
              Fascinated with how intricate programming can be, I was quickly
              drawn to learn more. I started learning JavaScript frameworks,
              such as React JS, React Native, Next JS whilst integrating my
              projects with AWS Amplify, and other technologies that made me
              feel even more enthused to start building my own interactive
              projects such as web and mobile applications. Now I spend my time
              building projects that challenge me to learn new skills and
              expanding my toolset.
            </p>

            <Link href="/#projects">
              <p className="py-2 text-[#039898] underline cursor-pointer">
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
          <div className="hidden md:flex w-auto h-auto m-auto shadow-md shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={cozy} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
