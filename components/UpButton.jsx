import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import Link from "next/link";

const UpButton = ({ page }) => {
  return (
    <div className="flex justify-center py-12">
      <Link href={page}>
        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
          <HiOutlineChevronDoubleUp className="text-[#039898]" size={30} />
        </div>
      </Link>
    </div>
  );
};

export default UpButton;
