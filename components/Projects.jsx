import React from "react";
import Python from "../public/assets/skills/python.png";
import Crypto from "../public/assets/projects/crypto.jpg";
import Netflix from "../public/assets/projects/netflix.jpg";
import Twitch from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5e9ec5]">
          Projects
        </p>
        <h2 className="py-4">My Crafts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Uber Eats Mobile App (Clone)"
            image={Python}
            projectURL="/uber-eats-ma-clone"
          />

          <ProjectItem
            title="Nextflix UI (Clone)"
            image={Netflix}
            projectURL="/netflix-ui-clone"
          />

          <ProjectItem
            title="Twitch UI (Clone)"
            image={Twitch}
            projectURL="/twitch-ui-clone"
          />
          <ProjectItem title="Crypto App" image={Crypto} projectURL="/crypto" />
          <ProjectItem
            title="Pinterest Mobile App (Clone)"
            image={Twitch}
            projectURL="/twitch-ui-clone"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
