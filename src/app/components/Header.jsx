import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-end w-screen h-12 bg-[#107C41]">
        <div>
          <PhoneIcon />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
