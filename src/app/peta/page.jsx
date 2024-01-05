import React from "react";
import PetaArcGIS from "../components/PetaArcGIS";

export const metadata = {
    title: "Peta Dusun 10",
    description: "Peta Dusun 10",
  };

const Peta = () => {
    return(
        <div id='petaArcGIS'>
            <PetaArcGIS />
        </div>
    )
}

export default Peta;