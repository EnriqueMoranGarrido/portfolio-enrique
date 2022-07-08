import React from "react";
import Link from "next/link";
import Image from "next/image";

import { RiRadioButtonFill } from "react-icons/ri";
import projects from "../public/assets/projectData";
import BulletPointsSkills from "./BulletPointsSkills";

// const project = projects[0];

const ProjectOverview = ({ project }) => {
  //   console.log(project);
  return (
    <>
      {project != undefined ? (
        <div className="py-4">
          <Link href="/twitch">
            <div className="  flex sm:flex-row flex-col border-4 hover:border-[#039898] rounded-t-2xl rounded-b-2xl shadow-md shadow-gray-400 hover:cursor-pointer p-2 hover:scale-105  ease-in duration-300">
              <div className="sm:w-[50%]">
                <Image
                  src={project.image}
                  width="75"
                  height="50"
                  layout="responsive"
                  className=" sm:rounded-l-2xl"
                  alt="/"
                />
              </div>
              <div className="sm:w-[50%]">
                <h2 className="bg-[#039898] text-center text-white  sm:rounded-tr-2xl">
                  {project.title}
                </h2>
                <p className="px-2">{project.description}</p>

                <BulletPointsSkills tools={project.tools} />
              </div>
            </div>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default ProjectOverview;
