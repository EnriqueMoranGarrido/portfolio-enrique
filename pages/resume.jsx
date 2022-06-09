import React from "react";
import Head from "next/head";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter, FaTwitch } from "react-icons/fa";
import {
  BsFillPersonLinesFill,
  BsTelephoneFill,
  BsHouseDoorFill,
  BsGlobe2,
} from "react-icons/bs";

import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import icon from "../public/favicon.ico";

import Link from "next/link";

const resume = () => {
  return (
    <>
      <Head>
        <title>Enrique | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href={icon} />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#039898] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center text-gray-100">Enrique Morán Garrido</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/enrique-moran-garrido"
              target="_blank"
            >
              <FaLinkedinIn
                size={23}
                color="white"
                style={{ marginRight: "1rem" }}
              />
            </a>
            <a href="https://github.com/EnriqueMoranGarrido" target="_blank">
              <FaGithub
                size={23}
                color="white"
                style={{ marginRight: "1rem" }}
              />
            </a>
            <Link href="/#resume" target="_blank">
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

        {/* Skills */}
        <div className="text-left py-4">
          <p className="text-left underline text-[18px] py-2 uppercase text-2xl font-bold text-[#039898]">
            Skills
          </p>
          <div className="py-2">
            <p className="font-bold">Programming Languages</p>
            <p>
              Python
              <span className="px-2">|</span>JavaScript
              <span className="px-2">|</span>Java
              <span className="px-2">|</span>C++
              <span className="px-2">|</span> C<span className="px-2">|</span>
              SQL
            </p>
          </div>

          <div className="py-2">
            <p className="font-bold">Technologies</p>
            <p>
              HTML
              <span className="px-2">|</span>CSS
              <span className="px-2">|</span>React JS
              <span className="px-2">|</span>React Native
              <span className="px-2">|</span>Next JS
              <span className="px-2">|</span>TailwindCSS
              <span className="px-2">|</span>Amazon Web Services: Amplify
              <span className="px-2">|</span>GitHub
            </p>
          </div>
          <div className="py-2">
            <p className="font-bold">Softwares</p>
            <p>
              STEP7 / TIA PORTAL
              <span className="px-2">|</span>FluidSIM
              <span className="px-2">|</span>AutoCAD
              <span className="px-2">|</span>AutoDesk Fusion 360
              <span className="px-2">|</span>Multisim
              <span className="px-2">|</span>Proteus Design Suite
              <span className="px-2">|</span>MATLAB & Simulink
              <span className="px-2">|</span>National Instruments LabVIEW
              <span className="px-2">|</span>Visual Studio Code
              <span className="px-2">|</span>Atom
              <span className="px-2">|</span>Arduino IDE
            </p>
          </div>
          <div className="py-2">
            <p className="font-bold">Others</p>
            <p>
              MySQL
              <span className="px-2">|</span>MongoDB
              <span className="px-2">|</span>Profibus
              <span className="px-2">|</span>CAN
              <span className="px-2">|</span>Scrum
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="py-4">
          <p className="text-left underline text-[18px] py-2 uppercase text-2xl font-bold text-[#039898]">
            Experience
          </p>
          <p className="italic">
            <span className="font-bold">
              Fachhochschule Bielefeld University of Applied Sciences
            </span>
            <span className="px-2">|</span>Bielefeld, Germany
          </p>
          <p className="py-1 italic">
            Mechatronics Engineer Intern (Sep 2021 – Dec 2021){" "}
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Accomplished to recreate the Digital Twin (DT) of a production
              factory that manufactured laboratory equipment for over 1,600
              students using Siemens Plant Simulation software.
            </li>
            <li>
              Generated simulation files and classified their performance by
              conducting statistical analyses comparing 20 datasets that
              contained +10,000 samples with the real-life asset, uncovering
              data that lays the foundation for a predictive functioning.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-4">
          <p className="italic">
            <span className="font-bold">IVAC - DAAD</span>
            <span className="px-2">|</span> Remote
          </p>
          <p className="py-1 italic">
            Volunteered mechatronics engineering student (Jan 2021 – May 2021)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Reinvented an electronic Positive Expiratory Pressure device to
              aid Chronic Obstructive Pulmonary Disease (COPD) patients which is
              the third leading cause of death in the U.S. with more than 16.4
              million people diagnosed.
            </li>
            <li>
              Oversaw and collaborated with a bicultural team whilst optimizing
              the integration of the CAD generated models and the designed
              circuitry, with a microcontroller attached to a customized PCB,
              using Autodesk Fusion 360 and the Scrum framework.
            </li>
            <li>
              Outperformed the scope and requirements of the project by
              targeting and including the specific needs from 3 COPD volunteered
              patients and utilized proven and demonstrated knowledge of
              multiple mexican and german official health standards.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-4">
          <p className="italic">
            <span className="font-bold italic">UDLAP</span>
            <span className="px-2">|</span>Puebla, Mexico
          </p>
          <p className="py-1 italic">Mechatronics Engineer Intern</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive understanding of digital twin's modeling
              using MATLAB and Simulink, its issues and implementation as the
              robotics course complementary material.
            </li>
            <li>
              Designed the digital twin for the 6 degrees of freedom UR5 robotic
              arm located at the laboratories of the university, analyzing its
              usage for the manufacture of seats for elementary school students.
            </li>
            <li>
              Founded the bases for predictive maintenance studies at the
              university for over 2500 students.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="text-left py-4">
          <p className="text-left underline text-[18px] py-2 uppercase text-2xl font-bold text-[#039898]">
            Education
          </p>
          <div className="text-md">
            <ul className="flex flex-col">
              <li>
                <div className="py-2 items-center text-left">
                  <p>The Complete 2022 Web Development Bootcamp at Udemy</p>
                  <p>— Jan 2022 - Present</p>
                </div>
              </li>
              <li>
                <div className="py-2 items-center text-left">
                  <p>
                    Bachelor's Degree in Mechatronics Engineering at Universidad
                    de las Américas Puebla
                  </p>
                  <p>— Aug 2016 - Dec 2021</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Interests and more */}
        <div className="text-left py-4">
          <p className="text-left underline text-[18px] py-2 uppercase text-2xl font-bold text-[#039898]">
            Interests and more about me
          </p>
          <p className="my-4">
            Responsible, committed person who can adapt to different working
            methodologies and environments, loves technology, and likes to take
            initiative and seek out to grow personally and professionally.
            Successfully able to work independently and collaborate with others
            as team whilst building good relationships and meeting all project
            deadlines. Lover of green spaces and currently building greenhouse
            at home. Huge fan of languages and can currently speak Spanish,
            English and German. Ex-drummer and learning how to play the guitar
            in a self-taught way. Spending time with my family, friends and pet
            is something that always brings a lot of enjoy!
          </p>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/resume">
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
