import React from "react";
import skillData from "../public/assets/skillsData";

const SkillGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {skillData.map((skill) => (
        <>
          key={skill}
          <a href={skill.link}>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[110px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img src={skill.image} width="70px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.title}</h3>
                </div>
              </div>
            </div>
          </a>
        </>
      ))}
    </div>
  );
};

export default SkillGrid;
