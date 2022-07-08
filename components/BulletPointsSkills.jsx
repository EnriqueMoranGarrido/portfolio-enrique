import React from "react";

import { RiRadioButtonFill } from "react-icons/ri";

const BulletPointsSkills = ({ tools }) => {
  return (
    <div className="col-span-4 sm:col-span-2  rounded-xl p-0">
      <div className="p-2">
        <div className="grid grid-cols-3 md:grid-cols-2">
          {tools.map((tool) => (
            <>
              key={tools.tool}
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> {tool}
              </p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BulletPointsSkills;
