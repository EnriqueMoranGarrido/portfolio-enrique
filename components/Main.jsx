import React from "react";

import ConnectionsSocials from "./ConnectionsSocials";

const Main = () => {
  return (
    <div
      id="home"
      className="w-[440px] nxs:w-full h-screen text-center items-center align-middle justify-center"
    >
      <div className=" max-w-[1240px] w-full h-full mx-auto flex p-2  items-center ">
        <div className="">
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#039898]"> Enrique</span>
          </h1>
          <h2 className="py-4 text-gray-500 italic">A Mechatronics Engineer</h2>
          <p className="py-4 text-gray-600 max-w-[63%] m-auto text-xl">
            I am passionate for technology and have recently started my journey
            as a software developer. Currently I&apos;m focused on building and
            designing full-stack applications.
          </p>
          <div className="nxs:max-w-[60%] text-center items-center m-auto">
            <p className="py-4 mt-2  text-bold text-lg italic">
              Graduated from engineering since 2021,
            </p>
            <span className="text-[#039898] text-bold text-lg italic">
              loving it since 1998.
            </span>
          </div>

          <div className="flex items-center justify-between max-w-[90%] nxs:max-w-[550px] m-auto py-4">
            <ConnectionsSocials page={"big"} resume={"yes"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
