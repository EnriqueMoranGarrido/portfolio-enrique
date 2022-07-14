import React from "react";

import SkillGrid from "./SkillGrid";

const Skills = () => {
  return (
    <div
      id="skills"
      className=" w-[440px] nxs:w-full h-fullp-2  flex items-center justify-center align-middle"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col h-auto py-16 w-full">
        <p className=" py-4 uppercase  text-2xl tracking-widest  text-[#039898]">
          Skills
        </p>
        <h2 className="py-4">My Set of Tools</h2>
        <SkillGrid />
      </div>
    </div>
  );
};

export default Skills;
