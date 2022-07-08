import React from "react";
import skillData from "../public/assets/skillsData";
import SkillKeyRender from "./SkillKeyRender";

const SkillGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {skillData.map((skill) => (
        <SkillKeyRender key={skill} skill={skill} />
      ))}
    </div>
  );
};

export default SkillGrid;
