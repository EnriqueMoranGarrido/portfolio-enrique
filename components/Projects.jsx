import React from "react";
import Crypto from "../public/assets/projects/crypto.jpg";
import Netflix from "../public/assets/projects/netflix.jpg";
import Twitch from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full mt-28">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" text-3xl tracking-widest uppercase text-[#039898]">
          Projects
        </p>
        <h2 className="py-4">My Crafts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Web Portfolio"
            image={Crypto}
            projectUrl="/portfolio"
          />
          <ProjectItem title="Crypto App" image={Crypto} projectUrl="/crypto" />
          <ProjectItem
            title="Netflix App"
            image={Netflix}
            projectUrl="/netflix"
          />
          <ProjectItem title="Twitch UI" image={Twitch} projectUrl="/twitch" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
