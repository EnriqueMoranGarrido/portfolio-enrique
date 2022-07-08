import React from "react";
import { HiArrowCircleLeft } from "react-icons/hi";

import Link from "next/link";

const BackButton = ({ link, project }) => {
  const fullLink = "/#" + link;
  let backStyle = "underline cursor-pointer uppercase ";
  if (project) {
    backStyle = backStyle + "absolute bottom-[98%]";
  }

  return (
    <Link href={fullLink}>
      <div className={backStyle}>
        <HiArrowCircleLeft size={35} />
        Back
      </div>
    </Link>
  );
};

export default BackButton;
