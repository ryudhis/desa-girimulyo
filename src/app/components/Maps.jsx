import React from "react";
import MapComponent from "./MapComponent";

const Maps = () => {
  console.log("saya ayahnya")

  return (
    <div id="Peta" className="flex flex-col items-center">
      <div className="text-slate-800 text-[15px] font-extrabold bg-[#e8f0e6] w-[90vw] mr-2 mb-4">
        <div className="pl-3">Peta Dusun</div>
      </div>
      <div>
        <MapComponent />
      </div>
    </div>
  );
};

export default Maps;
