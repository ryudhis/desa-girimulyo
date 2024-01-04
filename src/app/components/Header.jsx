import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div>
      <div className="flex flex-row px-4 justify-between items-center w-screen h-12 bg-[#107C41]">
        <div className="flex flex-row gap-1 justify-center items-center">
          <PhoneIcon className="h-3 w-3 text-white" />
          <p className="text-white text-[8px] font-extralight">0831-88889999</p>
          <p className="text-white text-[8px] font-extralight">|</p>
          <EnvelopeIcon className="h-3 w-3 text-white" />
          <p className="text-white text-[8px] font-extralight">
            emaildesa@gmail.co.id
          </p>
        </div>
        <div className="flex flex-row gap-1 justify-center items-center">
          <GlobeAsiaAustraliaIcon className="h-3 w-3 text-white" />
          <p className="text-white text-[8px] font-extralight">
            Kabupaten Lampung Timur
          </p>
        </div>
      </div>
      <div className="w-screen bg-white h-14 flex flex-row justify-between items-center">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
