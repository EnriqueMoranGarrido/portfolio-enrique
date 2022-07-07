import React from "react";

import SkillsMain from "./SkillsMain";

const Skills = () => {
  return (
    <div
      id="skills"
      className=" w-[440px] nxs:w-full lg:h-screen p-2 justify-center "
    >
      <div className="max-w-[1240px] mx-auto flex flex-col h-full">
        <p className=" py-4 uppercase  text-2xl tracking-widest  text-[#039898]">
          Skills
        </p>
        <h2 className="py-4">My Set of Tools</h2>
        <SkillsMain />
      </div>
    </div>
  );
};

export default Skills;
