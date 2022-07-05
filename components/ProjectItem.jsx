import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, image, projectUrl, tools }) => {
  return (
    <div className="hover:scale-105 ease-in duration-300">
      {" "}
      <Link href={projectUrl}>
        <div className="relative flex items-center justify-center h-auto w-[420px] nxs:w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#039898] to-[#709dff]">
          <Image
            src={image}
            alt="/"
            className="rounded-xl group-hover:opacity-20"
          />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl text-white tracking-wider text-center">
              {title}
            </h3>
            <p className="text-white text-center pb-4 pt-2">{tools}</p>
            <Link href={projectUrl}>
              <p className="text-center rounded-lg py-3 bg-white text-gray-700 font-bold italic text-lg cursor-pointer hover:bg-black hover:text-white">
                More Info
              </p>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
