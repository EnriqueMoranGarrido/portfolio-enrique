import React from "react";
import Image from "next/image";

const Resume = () => {
  return (
    <div id="resume" className="w-full lg:h-screen p-2 mt-[5%]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className=" text-3xl tracking-widest uppercase text-[#039898]">
          Resume
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="py-2 mt-6 mb-4 uppercase">Education</h2>
            <div className="text-xl">
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
                      Bachelor of Mechatronics Engineering at Universidad de las
                      Américas Puebla
                    </p>
                    <p>— Aug 2016 - Dec 2021</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="py-2 mt-6 mb-4 uppercase">Certification</h2>
            <div>
              <div className="text-xl">
                <ul className="flex flex-col items-center">
                  <li className="py-2">
                    <p className="text-left">
                      Amazon Web Services (AWS): Process Model: CRISP-DM on the
                      AWS Stack. <span className="text-[#039898]">— 2022</span>
                    </p>
                  </li>
                  <li className="py-2">
                    <p className="text-left">
                      Amazon Web Services (AWS): Process Model: CRISP-DM on the
                      AWS Stack. <span className="text-[#039898]">— 2022</span>
                    </p>
                  </li>
                </ul>
                <div className="items-center justify-center">
                  <button className="w-[100%] p-4 text-gray-100 mt-4">
                    View List of Certificates
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="py-2 mt-6 mb-4 uppercase">Experience</h2>
            <div className="text-xl">
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
                      Bachelor of Mechatronics Engineering at Universidad de las
                      Américas Puebla
                    </p>
                    <p>— Aug 2016 - Dec 2021</p>
                  </div>
                </li>
              </ul>
            </div>
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
                      Huge fan of languages and can currently speak in Spanish
                      and English, German is in process.
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
      </div>
    </div>
  );
};

export default Resume;
