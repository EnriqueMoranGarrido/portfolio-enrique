import React from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";

import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import Link from "next/link";

import BackButton from "../components/BackButton";
import ProjectOverview from "../components/ProjectOverview";
import projectsData from "../public/assets/projectData";
import InformationBanner from "../components/InformationBanner";

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
        <BackButton link={"projects"} />
        <h2 className="text-center">Projects</h2>
        <InformationBanner />
        <div>
          {projectsData.map((project) => (
            <ProjectOverview project={project} />
          ))}
        </div>

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
