import React from "react";
import Head from "next/head";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter, FaTwitch } from "react-icons/fa";
import {
  BsFillPersonLinesFill,
  BsTelephoneFill,
  BsHouseDoorFill,
} from "react-icons/bs";

const resume = () => {
  return (
    <>
      <Head>
        <title>Enrique | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#039898] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center text-gray-100">Enrique Morán Garrido</h2>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider"></div>

        <div className="flex flex-row m-auto justify-center items-center ">
          <BsHouseDoorFill size={20} className="mx-1 " />
          <p>Puebla, Mexico</p>
          <span className="px-1">|</span>
          <BsTelephoneFill size={15} className="mx-1" />
          <p>+52 2281199877</p>
          <span className="px-1">|</span>
          <AiOutlineMail size={20} className="mx-1" />
          <p>enrique.morango04@outlook.com</p>
          <span className="px-1">|</span>
          <FaGithub size={20} className="mx-1" />
          <p>EnriqueMoranGarrido</p>
        </div>

        <p>
          Web Development <span className="px-1">|</span> Complex Problem
          Solving Analytical, innovative, and motivated web development
          professional with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML <span className="px-2">|</span>
            CSS <span className="px-2">|</span>React
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
          </p>
          <p className="py-2">
            <span className="font-bold">Amazon Web Services</span>
            <span className="px-2">|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        {/* Experience */}
        <div className="py-4">
          <h5 className="text-center underline text-[18px] py-4">
            Professional Experience
          </h5>
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
            <span className="font-bold">IVAC - DAAD</span>
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
              Ensured comprehensive understanding of digital twin's modeling
              using MATLAB and Simulink, its issues and implementation as the
              robotics course complementary material.
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

        <div>
          <h2 className="py-2 mt-6 mb-4 uppercase">Interests</h2>
          <div className="text-xl">
            <ul className="flex flex-col">
              <li>
                <div className="py-2 items-center text-left">
                  <p>
                    Lover of green spaces and currently building greenhouse at
                    home.
                  </p>
                </div>
              </li>

              <li>
                <div className="py-2 items-center text-left">
                  <p>
                    Huge fan of languages and can currently speak in Spanish and
                    English, German is in process.
                  </p>
                </div>
              </li>
              <li>
                <div className="py-2 items-center text-left">
                  <p>Ex-drummer and learning how to play the guitar.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default resume;
