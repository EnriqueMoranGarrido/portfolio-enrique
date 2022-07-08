import React from "react";

const SkillKeyRender = ({ skill }) => {
  return (
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
  );
};

export default SkillKeyRender;
