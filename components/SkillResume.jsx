import React from "react";

const SkillResume = ({ style, skill }) => {
  return (
    <div className={style}>
      <p>{skill}</p>
    </div>
  );
};

export default SkillResume;
