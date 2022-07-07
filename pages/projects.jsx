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

import ProjectOverview from "../components/ProjectOverview";
import projectsData from "../public/assets/projectData";

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
        <div>
          {projectsData.map((project) => (
            <ProjectOverview project={project} />
          ))}
        </div>

        <ProjectOverview />

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
