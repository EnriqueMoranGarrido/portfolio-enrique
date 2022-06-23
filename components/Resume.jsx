import React from "react";
import Link from "next/link";

const Resume = () => {
  return (
    <div
      id="resume"
      className="w-[400px] sm:w-full lg:h-screen p-2 mt-[5%] justify-center items-center align-middle"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <p className=" py-4 uppercase  text-2xl tracking-widest  text-[#039898]">
          Resume
        </p>

        <div className="grid sm:grid-cols-1 xl:grid-cols-2 gap-8">
          <div>
            <h2 className="py-2 mt-6 mb-4 uppercase">Experience</h2>
            {/* Experience */}
            <div className="py-4">
              <p className="italic">
                <span className="font-bold">
                  Fachhochschule Bielefeld University of Applied Sciences
                </span>
                <span className="px-2">|</span>Bielefeld, Germany
              </p>
              <p className="py-1 italic">
                Mechatronics Engineer Intern (Sep 2021 – Dec 2021){" "}
              </p>
              <ul className="list-disc list-outside px-7 py-1 leading-relaxed md:line-clamp-3">
                <li>
                  Accomplished to recreate the Digital Twin (DT) of a production
                  factory that manufactured laboratory equipment for over 1,600
                  students using Siemens Plant Simulation software.
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
                Volunteered mechatronics engineering student (Jan 2021 – May
                2021)
              </p>
              <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
                <li>
                  Reinvented an electronic Positive Expiratory Pressure device
                  to aid Chronic Obstructive Pulmonary Disease (COPD) patients
                  which is the third leading cause of death in the U.S. with
                  more than 16.4 million people diagnosed.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="py-2 mt-6 mb-4 uppercase">Education</h2>
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
            <div className="sm:flex md:hidden xl:flex flex-col">
              <h2 className="py-2 mt-5 mb-4 uppercase xs:hidden">
                Certification
              </h2>
              <div>
                <div className="text-md">
                  <ul className="flex flex-col items-left">
                    <li className="py-2">
                      <p className="text-left ">
                        Amazon Web Services (AWS): Process Model: CRISP-DM on
                        the AWS Stack.{" "}
                        <span className="text-[#039898]">— 2022</span>
                      </p>
                    </li>
                    <li className="py-2">
                      <p className="text-left">
                        Amazon Web Services (AWS): Process Model: CRISP-DM on
                        the AWS Stack.{" "}
                        <span className="text-[#039898]">— 2022</span>
                      </p>
                    </li>
                  </ul>
                  {/* <div className="items-center justify-center">
                    <Link href="/certificates">
                      <button className="w-[100%] p-4 text-gray-100 mt-4 bg-gradient-to-r">
                        View List of Certificates
                      </button>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-10">
          <Link href="/resume">
            <button className="w-[55%] p-4 text-gray-100   from-[#709dff]  to-[#039898] text-2xl ">
              View Full Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;
