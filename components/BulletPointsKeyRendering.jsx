import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";

const BulletPointsKeyRendering = ({ tool }) => {
  return (
    <p className="text-gray-600 py-2 flex items-center">
      <RiRadioButtonFill className="pr-1" /> {tool}
    </p>
  );
};

export default BulletPointsKeyRendering;
