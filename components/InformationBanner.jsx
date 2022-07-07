import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";

import Link from "next/link";

const InformationBanner = () => {
  return (
    <div className="bg-[#039898] my-4 p-4 w-full flex justify-between items-center">
      <h2 className="text-center text-gray-100">Enrique Morán Garrido</h2>
      <div className="flex">
        <a
          href="https://www.linkedin.com/in/enrique-moran-garrido"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn
            size={23}
            color="white"
            style={{ marginRight: "1rem" }}
          />
        </a>
        <a
          href="https://github.com/EnriqueMoranGarrido"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={23} color="white" style={{ marginRight: "1rem" }} />
        </a>
        <div className="hover:cursor-pointer">
          <Link href="/#resume">
            <BsGlobe2 size={23} color="white" style={{ marginRight: "1rem" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InformationBanner;
