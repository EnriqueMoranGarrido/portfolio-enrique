import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const ConnectionsSocials = ({ page, resume }) => {
  let size = 20;
  let padding = "p-3";
  if (page === "big") {
    size = 25;
    padding = "p-6";
  }
  const iconStyle =
    "rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898] " +
    padding;

  return (
    <div className="flex items-center m-auto py-4 justify-between w-[90%]">
      <Link href="https://www.linkedin.com/in/enrique-moran-garrido">
        <a target="_blank" rel="noopener noreferrer">
          <div className={iconStyle}>
            <FaLinkedin size={size} />
          </div>
        </a>
      </Link>
      <Link href="https://github.com/EnriqueMoranGarrido">
        <a target="_blank" rel="noopener noreferrer">
          <div className={iconStyle}>
            <FaGithub size={size} />
          </div>
        </a>
      </Link>
      <Link href="https://twitter.com/ImMythic2">
        <a target="_blank" rel="noopener noreferrer">
          <div className={iconStyle}>
            <FaTwitter size={size} />
          </div>
        </a>
      </Link>

      <div
        onClick={() => {
          window.open("mailto:enrique.morango04@outlook.com?subject=&body=");
        }}
        className={iconStyle}
      >
        <AiOutlineMail size={size} />
      </div>
      {resume ? (
        <Link href="/#resume">
          <div className={iconStyle}>
            <BsFillPersonLinesFill size={25} />
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default ConnectionsSocials;
