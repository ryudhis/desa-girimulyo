import React from "react";
import MapComponent from "./MapComponent";

const Maps = () => {
  return (
    <div id="peta" className="flex flex-col items-center">
      <div className="text-slate-800 text-[15px] font-extrabold bg-[#e8f0e6] w-[90vw] mr-2 mb-4">
        <div className="pl-3">Peta Dusun</div>
      </div>
      <div>
        <MapComponent />
      </div>
      <div className="grid grid-cols-2 gap-20 text-[10px]">
        <div className="flex flex-col">
          <p className="mb-4">Keterangan Gambar Peta</p>
          <p>Tipologi</p>
          <p>Klasifikasi</p>
          <p>Kategori</p>
          <p>Luas Wilayah</p>
          <p>Batas Sebelah Utara</p>
          <p>Batas Sebelah Selatan</p>
          <p>Batas Sebelah Timur</p>
          <p>Batas Sebelah Barat</p>
        </div>
        <div className="flex flex-col">
          <p className="mb-4">Keterangan Gambar Peta</p>
          <p>: PERINDUSTRIAN/JASA</p>
          <p>: SWAKARYA</p>
          <p>: MULA</p>
          <p>: 305.28 ha</p>
          <p>: Dusun 11</p>
          <p>: Dusun 9</p>
          <p>: Dusun 12</p>
          <p>: Dusun 8</p>
        </div>
      </div>
    </div>
  );
};

export default Maps;
