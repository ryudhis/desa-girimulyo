import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center w-screen h-12 bg-[#107C41]">
        <div className="flex flex-row justify-center items-center">
          <PhoneIcon className="h-4 w-4 text-white" />
          <p className="text-white text-sm">0831-88889999</p>
          <EnvelopeIcon className="h-4 w-4 text-white" />
        </div>
        <div>
          <GlobeAsiaAustraliaIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
