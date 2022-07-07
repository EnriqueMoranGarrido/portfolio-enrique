import React from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import UpButton from "../components/UpButton";

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

        <UpButton page={"/projects"} />
      </div>
    </>
  );
};

export default projects;
