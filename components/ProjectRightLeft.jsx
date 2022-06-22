import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectRightLeft = ({ position }) => {
  return <>{position === "right" ? <div>hola</div> : <div>chencho</div>}</>;
};

export default ProjectRightLeft;
