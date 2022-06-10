import React from "react";
import Netflix from "../public/assets/projects/netflix.jpg";
import Portfolio from "../public/assets/projects/portfolio.png";
import ProjectItem from "./ProjectItem";
import Uber from "../public/assets/projects/1.png";
import Pinterest from "../public/assets/projects/4.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full mt-28">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" py-4 uppercase  text-2xl tracking-widest  text-[#039898]">
          Projects
        </p>
        <h2 className="py-4">My Crafts</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectItem
            title="Uber Eats Mobile App"
            image={Uber}
            projectUrl="/uber"
            tools="React / React Native / Expo CLI / AWS Amplify / GitHub "
          />
          <ProjectItem
            title="Pinterest Mobile App"
            image={Pinterest}
            projectUrl="/pinterest"
            tools="React / React Native / Expo CLI / AWS Amplify / GitHub "
          />
          <ProjectItem
            title="Netflix UI"
            image={Netflix}
            projectUrl="/netflix"
            tools="React JS / Tailwind / Firebase"
          />
          <ProjectItem
            title="Web Portfolio"
            image={Portfolio}
            projectUrl="/portfolio"
            tools="JavaScript /Next Js / TailwindCSS / GitHub / AWS Amplify / AWS S3  "
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
