import React from "react";

import UpButton from "./UpButton";
import ConnectionsSocials from "./ConnectionsSocials";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-[440px] nxs:w-full  h-full justify-center items-center align-middle"
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="py-4 uppercase  text-2xl tracking-widest  text-[#039898]">
          Contact
        </p>
        <h2 className="py-4">Let&apos;s get in touch!</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-5 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <h2 className="py-2">Enrique Moran Garrido</h2>
                <p className="italic text-[#039898]">Mechatronics Engineer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <p className="uppercase tracking-widest text-[#039898]">
                Let&apos;s Connect
              </p>

              <div className="flex items-center justify-between max-w-[500px] m-auto py-4">
                <ConnectionsSocials page={"big"} />
              </div>
            </div>
          </div>
        </div>

        <UpButton page={"/"} />
      </div>
    </div>
  );
};

export default Contact;
