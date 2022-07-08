import React from "react";
import Head from "next/head";
import { AiOutlineMail } from "react-icons/ai";
import { BsHouseDoorFill } from "react-icons/bs";

import SkillResume from "../components/SkillResume";
import BackButton from "../components/BackButton";
import InformationBanner from "../components/InformationBanner";
import UpButton from "../components/UpButton";

const resume = () => {
  const skill2Style =
    "w-auto h-auto border-2 rounded-lg inline-block p-1 px-2 border-gray-300 hover:border-[#709dff] hover:scale-105 ease-in duration-150 mx-[0.3%]";
  return (
    <>
      <Head>
        <title>Enrique | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px] justify-center items-center">
        <BackButton link={"resume"} />

        <h2 className="text-center">Resume</h2>

        <InformationBanner />

        <div className="flex flex-row m-auto justify-center items-center ">
          <BsHouseDoorFill size={20} className="mx-1 hidden sm:flex " />
          <p className="hidden sm:flex">Puebla, Mexico</p>
          <span className="px-1 hidden sm:flex ">|</span>
          <div
            className="flex hover:cursor-pointer"
            onClick={() => {
              window.open(
                "mailto:enrique.morango04@outlook.com?subject=Subject&body=Body%20goes%20here"
              );
            }}
          >
            <AiOutlineMail size={20} className="mx-1" />
            <p>enrique.morango04@outlook.com</p>
          </div>
        </div>

        {/* Skills */}
        <div className="text-left py-4">
          <p className="text-left underline text-[18px] py-2 uppercase text-2xl font-bold text-[#039898]">
            Skills
          </p>
          <div className="py-2">
            <p className="font-bold">Programming Languages</p>

            <div className="">
              <SkillResume skill="JavaScript" style={skill2Style} />
              <SkillResume skill="TypeScript" style={skill2Style} />
              <SkillResume skill="Python" style={skill2Style} />
              <SkillResume skill="Java" style={skill2Style} />
              <SkillResume skill="C++" style={skill2Style} />
              <SkillResume skill="C" style={skill2Style} />
              <SkillResume skill="SQL" style={skill2Style} />
              <SkillResume skill="GraphQL" style={skill2Style} />
            </div>
          </div>

          <div className="py-2">
            <p className="font-bold">Technologies</p>
            <div className="">
              <SkillResume skill="HTML 5" style={skill2Style} />
              <SkillResume skill="CSS 3" style={skill2Style} />
              <SkillResume skill="React JS" style={skill2Style} />
              <SkillResume skill="React Native" style={skill2Style} />
              <SkillResume skill="Next JS" style={skill2Style} />
              <SkillResume skill="TailwindCSS" style={skill2Style} />
              <SkillResume skill="Amazon Web Services" style={skill2Style} />
              <SkillResume skill="Version Control (Git)" style={skill2Style} />
            </div>
          </div>

          <div className="py-2">
            <p className="font-bold">Others</p>
            <div>
              <SkillResume skill=" Visual Studio Code" style={skill2Style} />
              <SkillResume skill="Atom" style={skill2Style} />
              <SkillResume skill="MySQL" style={skill2Style} />
              <SkillResume skill="MongoDB" style={skill2Style} />
              <SkillResume skill="RESTful API" style={skill2Style} />
              <SkillResume skill="SCRUM" style={skill2Style} />
              <SkillResume skill="Version Control (Git)" style={skill2Style} />
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="py-4">
          <p className="text-left underline text-[18px] py-2 uppercase text-2xl font-bold text-[#039898]">
            Experience
          </p>
          <p className="italic">
            <span className="font-bold">
              Fachhochschule Bielefeld University of Applied Sciences
            </span>
            <span className="px-2">|</span>Bielefeld, Germany
          </p>
          <p className="py-1 italic">
            Mechatronics Engineer Intern (Sep 2021 – Dec 2021){" "}
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Accomplished to recreate the Digital Twin (DT) of a production
              factory that manufactured laboratory equipment for over 1,600
              students using Siemens Plant Simulation software.
            </li>
            <li>
              Generated simulation files and classified their performance by
              conducting statistical analyses comparing 20 datasets that
              contained +10,000 samples with the real-life asset, uncovering
              data that lays the foundation for a predictive functioning.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-4">
          <p className="italic">
            <span className="font-bold">DAAD</span>
            <span className="px-2">|</span> Remote
          </p>
          <p className="py-1 italic">
            Volunteered mechatronics engineering student (Jan 2021 – May 2021)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Reinvented an electronic Positive Expiratory Pressure device to
              aid Chronic Obstructive Pulmonary Disease (COPD) patients which is
              the third leading cause of death in the U.S. with more than 16.4
              million people diagnosed.
            </li>
            <li>
              Oversaw and collaborated with a bicultural team whilst optimizing
              the integration of the CAD generated models and the designed
              circuitry, with a microcontroller attached to a customized PCB,
              using Autodesk Fusion 360 and the Scrum framework.
            </li>
            <li>
              Outperformed the scope and requirements of the project by
              targeting and including the specific needs from 3 COPD volunteered
              patients and utilized proven and demonstrated knowledge of
              multiple mexican and german official health standards.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-4">
          <p className="italic">
            <span className="font-bold italic">UDLAP</span>
            <span className="px-2">|</span>Puebla, Mexico
          </p>
          <p className="py-1 italic">Mechatronics Engineer Intern</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive understanding of digital twin&apos;s
              modeling using MATLAB and Simulink, its issues and implementation
              as the robotics course complementary material.
            </li>
            <li>
              Designed the digital twin for the 6 degrees of freedom UR5 robotic
              arm located at the laboratories of the university, analyzing its
              usage for the manufacture of seats for elementary school students.
            </li>
            <li>
              Founded the bases for predictive maintenance studies at the
              university for over 2500 students.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="text-left py-4">
          <p className="text-left underline text-[18px] py-2 uppercase text-2xl font-bold text-[#039898]">
            Education
          </p>
          <div className="text-md">
            <ul className="flex flex-col">
              <li>
                <div className="py-2 items-center text-left">
                  <p>The Complete 2022 Web Development Bootcamp at Udemy</p>
                  <p>— Jan 2022 - Present</p>
                </div>
              </li>
              <li>
                <div className="py-2 items-center text-left">
                  <p>
                    Bachelor&apos;s Degree in Mechatronics Engineering at
                    Universidad de las Américas Puebla
                  </p>
                  <p>— Aug 2016 - Dec 2021</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Interests and more */}
        <div className="text-left py-4">
          <p className="text-left underline text-[18px] py-2 uppercase text-2xl font-bold text-[#039898]">
            Interests and more about me
          </p>
          <p className="my-4">
            Responsible, committed person who can adapt to different working
            methodologies and environments, loves technology, and likes to take
            initiative and seek out to grow personally and professionally.
            Successfully able to work independently and collaborate with others
            as team whilst building good relationships and meeting all project
            deadlines. Lover of green spaces and currently building greenhouse
            at home. Huge fan of languages and can currently speak Spanish,
            English and German. Ex-drummer and learning how to play the guitar
            in a self-taught way. Spending time with my family, friends and pet
            is something that always brings a lot of enjoy!
          </p>
        </div>

        {/*  Certificates */}

        <div className="text-left py-4 mt-8">
          <p className="text-left underline text-[18px] py-2 uppercase text-2xl font-bold text-[#039898]">
            Amazon Web Services (AWS)
          </p>
          <div className="py-2 grid grid-cols-5 justify-center items-center indent-8">
            <p className="my-4 col-span-3 ">
              Machine Learning Terminology and Process.
            </p>
            <p className="italics text-right col-span-2 text-[#039898]">2022</p>
            <p className="my-4 col-span-3 ">
              Process Model: CRISP-DM on the AWS Stack.
            </p>
            <p className="italics text-right col-span-2 text-[#039898]">2022</p>
            <p className="my-4 col-span-4 ">
              Machine Learning Essentials for Business and Technical Decision
              Makers.
            </p>
            <p className="italics text-right col-span-1 text-[#039898]">2022</p>
            <p className="my-4 col-span-3 ">
              ML Building Blocks: Services and Terminology.
            </p>
            <p className="italics text-right col-span-2 text-[#039898]">2022</p>
            <p className="my-4 col-span-3 ">
              Machine Learning for Business Challenges.
            </p>
            <p className="italics text-right col-span-2 text-[#039898]">2022</p>

            <p className="my-4 col-span-3 ">Demystifying AI/ML/DL.</p>
            <p className="italics text-right col-span-2 text-[#039898]">2022</p>
          </div>
        </div>

        {/* HackerRank   */}
        <div className="text-left py-4 mt-8">
          <p className="text-left underline text-[18px] py-2 uppercase text-2xl font-bold text-[#039898]">
            HackerRank
          </p>
          <div className="py-2 grid grid-cols-5 justify-center items-center indent-8">
            <p className="my-4 col-span-3 ">JavaScript (Basic).</p>
            <p className="italics text-right col-span-2 text-[#039898]">2022</p>
            <p className="my-4 col-span-3 ">SQL (Basic).</p>
            <p className="italics text-right col-span-2 text-[#039898]">2021</p>
            <p className="my-4 col-span-4 ">Python (Basics).</p>
            <p className="italics text-right col-span-1 text-[#039898]">2021</p>
          </div>
        </div>

        {/* IEEE   */}
        <div className="text-left py-4 mt-8">
          <p className="text-left underline text-[18px] py-2 uppercase text-2xl font-bold text-[#039898]">
            Institute of Electrical and Electronics Engineers (IEEE)
          </p>
          <div className="py-2 grid grid-cols-5 justify-center items-center indent-8">
            <p className="my-4 col-span-3 ">
              Engineering Ethics: Power Engineering.
            </p>
            <p className="italics text-right col-span-2 text-[#039898]">2020</p>
            <p className="my-4 col-span-3 ">
              Engineering Ethics: Topics for Robotics and Automation
              Engineering.
            </p>
            <p className="italics text-right col-span-2 text-[#039898]">2020</p>
          </div>
        </div>

        {/* Universal Robots   */}
        <div className="text-left py-4 mt-8">
          <p className="text-left underline text-[18px] py-2 uppercase text-2xl font-bold text-[#039898]">
            Universal Robots
          </p>
          <div className="py-2 grid grid-cols-5 justify-center items-center indent-8">
            <p className="my-4 col-span-3 ">e-Series: Core Track.</p>
            <p className="italics text-right col-span-2 text-[#039898]">2020</p>
            <p className="my-4 col-span-3 ">e-Series: Pro Track.</p>
            <p className="italics text-right col-span-2 text-[#039898]">2020</p>
            <p className="my-4 col-span-3 ">e-Series: Application Track.</p>
            <p className="italics text-right col-span-2 text-[#039898]">2020</p>
            <p className="my-4 col-span-3 ">CB3: Online Training.</p>
            <p className="italics text-right col-span-2 text-[#039898]">2020</p>
          </div>
        </div>

        {/* MathWorks   */}
        <div className="text-left py-4 mt-8">
          <p className="text-left underline text-[18px] py-2 uppercase text-2xl font-bold text-[#039898]">
            MathWorks
          </p>
          <div className="py-2 grid grid-cols-5 justify-center items-center indent-8">
            <p className="my-4 col-span-3 ">Introduction to MATLAB.</p>
            <p className="italics text-right col-span-2 text-[#039898]">2019</p>
            <p className="my-4 col-span-3 ">Deep Learning Onramp.</p>
            <p className="italics text-right col-span-2 text-[#039898]">2019</p>
            <p className="my-4 col-span-3 ">Simulink Onramp.</p>
            <p className="italics text-right col-span-2 text-[#039898]">2019</p>
          </div>
        </div>
        <UpButton page={"/resume"} />
      </div>
    </>
  );
};

export default resume;
