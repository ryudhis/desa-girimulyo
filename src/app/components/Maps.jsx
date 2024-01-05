"use client";
import React from "react";
import { useRouter } from "next/navigation";
import MapComponent from "./MapComponent";

const Maps = () => {
  const router = useRouter();

  return (
    <div id="peta" className="flex flex-col items-center bg-[#FDFDF6]">
      <div className="text-slate-800 text-[15px] md:text-[18px] xl:text-[22px] font-extrabold bg-[#e8f0e6] w-[93vw] md:w-[94vw] xl:w-[96vw] mb-2 mt-2">
        <div className="pl-3">Peta Dusun</div>
      </div>
      <div>
        <MapComponent />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          router.push("/peta");
        }}
        className=" bg-[#c4c5c4] hover:bg-[#d4d4d4] text-[12px] md:text-[14px] xl:text-[18px] font-semibold w-[100px] md:w-[140px] xl:w-[180px] text-center mt-2 rounded-md active:translate-y-1 transition ease-in-out"
      >
        Lihat Peta
      </button>

      <div className="grid grid-cols-2 gap-[60px] md:gap-[30vw] xl:gap-[30vw] xl:mr-[200px] text-[10px] md:text-[15px] xl:text-[20px] my-3">
        <div className="flex flex-col text-[#33363F] font-bold">
          <p className="mb-4">Keterangan Gambar Peta</p>
          <p>Topologi</p>
          <p>Klasifikasi</p>
          <p>Kategori</p>
          <p>Luas Wilayah</p>
          <p>Batas Sebelah Utara</p>
          <p>Batas Sebelah Selatan</p>
          <p>Batas Sebelah Timur</p>
          <p>Batas Sebelah Barat</p>
        </div>
        <div className="flex flex-col text-[#33363F]">
          <p className="mb-4">Keterangan Gambar Peta</p>
          <p>: &nbsp; PERINDUSTRIAN/JASA</p>
          <p>: &nbsp; SWAKARYA</p>
          <p>: &nbsp; MULA</p>
          <p>: &nbsp; 305.28 ha</p>
          <p>: &nbsp; Dusun 11</p>
          <p>: &nbsp; Dusun 9</p>
          <p>: &nbsp; Dusun 12</p>
          <p>: &nbsp; Dusun 8</p>
        </div>
      </div>
    </div>
  );
};

export default Maps;
