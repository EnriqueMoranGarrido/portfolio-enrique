import React from "react";

import BulletPointsKeyRendering from "./BulletPointsKeyRendering";

const BulletPointsSkills = ({ tools }) => {
  return (
    <div className="col-span-4 sm:col-span-2  rounded-xl p-0">
      <div className="p-2">
        <div className="grid grid-cols-3 md:grid-cols-2">
          {tools.map((tool) => (
            <BulletPointsKeyRendering key={tool} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BulletPointsSkills;
