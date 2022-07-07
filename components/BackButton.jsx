import React from "react";
import { HiArrowCircleLeft } from "react-icons/hi";

import Link from "next/link";

const BackButton = ({ link }) => {
  const fullLink = "/#" + link;
  return (
    <Link href={fullLink}>
      <div className="underline cursor-pointer uppercase">
        <HiArrowCircleLeft size={35} />
        Back
      </div>
    </Link>
  );
};

export default BackButton;
