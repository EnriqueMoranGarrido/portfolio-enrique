import React from "react";
import Netflix from "../public/assets/projects/netflix.jpg";
import Portfolio from "../public/assets/projects/portfolio.png";
import ProjectItem from "./ProjectItem";
import Uber from "../public/assets/projects/general/2.png";
import Pinterest from "../public/assets/projects/general/4.png";
import Twitch from "../public/assets/projects/twitch2.jpg";
import Link from "next/link";
import Disney from "../public/assets/projects/disney-portfolio.jpg";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-[400px] nxs:w-full sm:w-full mt-28 items-center justify-center align-middle"
    >
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" py-4 uppercase  text-2xl tracking-widest  text-[#039898]">
          Projects
        </p>
        <h2 className="py-4">My Crafts</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectItem
            title="Disney +"
            image={Disney}
            projectUrl="/disney"
            tools="Next Js / TailwindCSS / GitHub / AWS Amplify / AWS S3 / Next Auth / Google Auth "
          />

          <ProjectItem
            title="Twitch UI"
            image={Twitch}
            projectUrl="/twitch"
            tools="Next JS / TailwindCSS / Next Auth / Google Auth / GitHub Auth "
          />
          <ProjectItem
            title="Uber Eats Mobile App"
            image={Uber}
            projectUrl="/uber"
            tools="React Native / Expo CLI / AWS Amplify / GitHub "
          />
          <ProjectItem
            title="Pinterest Mobile App"
            image={Pinterest}
            projectUrl="/pinterest"
            tools="React Native / Expo CLI / AWS Amplify / GitHub "
          />

          {/* <ProjectItem
            title="Web Portfolio"
            image={Portfolio}
            projectUrl="/portfolio"
            tools="JavaScript /Next Js / TailwindCSS / GitHub / AWS Amplify / AWS S3  "
          /> */}
        </div>
      </div>
      <div className="flex w-full justify-center items-center ">
        <Link href="/projects">
          <button className="w-[55%] p-4 text-gray-100 mt-4  justify-center items-center text-2xl ">
            All my projects!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
