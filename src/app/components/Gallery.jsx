"use client";
import React, { useState } from "react";

const imageGallery = [
  {
    imageSrc: "images/img1.png",
    title: "Menembus Kegelapan Gua Pandan di Desa Girimulyo Lampung Timur",
    desc: "Gua Pandan terletak di Desa Giri Mulyo, Kecamatan Marga sekampung, Kabupaten Lampung Timur. Untuk mencapai Gua Pandan menghabiskanwaktu 30 menit dari Dusun 10 dengan menggunakan kendaraan bermotor. Gua Pandan dikelilingi dengan pohon pepaya california yang sangat lebat.",
  },
  {
    imageSrc: "images/img2.png",
    title:
      "Pembangunan Desa Girimulyo Kec.Marga Sekampung Kab.Lampung Timur Pesat di Pimpin Kades Echwanudin",
    desc: "Pembangunan Desa Girimulyo Kec.Marga Sekampung Kab.Lampung Timur Pesat di Pimpin Kades Echwanudin. Pembangunan dilakukan setiap hari dengan pantauan yang rutin oleh pihak desa agar berjalan dengan kondusif.",
  },
  {
    imageSrc: "images/img3.png",
    title:
      "Panen Alpukat Siger di Desa Girimulyo, Marga Sekampung, Lampung Timur",
    desc: "Berkesempatan hadir saat panen alpukat dari satu pohon di halaman rumah Pak Muhajir, warga Desa Girimulyo, Kecamatan Sekampung Udik, Lampung Timur. Dari 1 pohon tersebut menghasilkan sekitar 100 kilogram buah alpukat. Yang super mungkin sekitar 40an kg dari pohon tersebut.",
  },
  {
    imageSrc: "images/img3.png",
    title:
      "Panen Alpukat Siger di Desa Girimulyo, Marga Sekampung, Lampung Timur",
    desc: "Berkesempatan hadir saat panen alpukat dari satu pohon di halaman rumah Pak Muhajir, warga Desa Girimulyo, Kecamatan Sekampung Udik, Lampung Timur. Dari 1 pohon tersebut menghasilkan sekitar 100 kilogram buah alpukat. Yang super mungkin sekitar 40an kg dari pohon tersebut.",
  },
  {
    imageSrc: "images/img3.png",
    title:
      "Panen Alpukat Siger di Desa Girimulyo, Marga Sekampung, Lampung Timur",
    desc: "Berkesempatan hadir saat panen alpukat dari satu pohon di halaman rumah Pak Muhajir, warga Desa Girimulyo, Kecamatan Sekampung Udik, Lampung Timur. Dari 1 pohon tersebut menghasilkan sekitar 100 kilogram buah alpukat. Yang super mungkin sekitar 40an kg dari pohon tersebut.",
  },
  {
    imageSrc: "images/img3.png",
    title:
      "Panen Alpukat Siger di Desa Girimulyo, Marga Sekampung, Lampung Timur",
    desc: "Berkesempatan hadir saat panen alpukat dari satu pohon di halaman rumah Pak Muhajir, warga Desa Girimulyo, Kecamatan Sekampung Udik, Lampung Timur. Dari 1 pohon tersebut menghasilkan sekitar 100 kilogram buah alpukat. Yang super mungkin sekitar 40an kg dari pohon tersebut.",
  },
  {
    imageSrc: "images/img3.png",
    title:
      "Panen Alpukat Siger di Desa Girimulyo, Marga Sekampung, Lampung Timur",
    desc: "Berkesempatan hadir saat panen alpukat dari satu pohon di halaman rumah Pak Muhajir, warga Desa Girimulyo, Kecamatan Sekampung Udik, Lampung Timur. Dari 1 pohon tersebut menghasilkan sekitar 100 kilogram buah alpukat. Yang super mungkin sekitar 40an kg dari pohon tersebut.",
  },
  {
    imageSrc: "images/img3.png",
    title:
      "Panen Alpukat Siger di Desa Girimulyo, Marga Sekampung, Lampung Timur",
    desc: "Berkesempatan hadir saat panen alpukat dari satu pohon di halaman rumah Pak Muhajir, warga Desa Girimulyo, Kecamatan Sekampung Udik, Lampung Timur. Dari 1 pohon tersebut menghasilkan sekitar 100 kilogram buah alpukat. Yang super mungkin sekitar 40an kg dari pohon tersebut.",
  },
];

const Gallery = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsToggle(!isToggle);
  };
  const renderItems = isToggle ? imageGallery : imageGallery.slice(0, 3);
  return (
    <div
      id="galeri"
      className="text-[10px] md:text-[15px] flex flex-col items-center"
    >
      <div className="text-[#107C41] text-[15px] md:text-[18px] xl:text-[25px] font-bold border-b-[2px] border-[#107C41] w-[93vw] md:w-[94vw] xl:w-[96vw]">
        <div className="">Galeri Dusun 10</div>
      </div>

      {renderItems.map((content, index) => (
        <div key={index} className="grid md:grid-flow-col">
          <div className="mt-[9px] w-[335px] md:w-[235px] h-[119px] md:h-[176px] mx-auto overflow-hidden md:ml-[34px] xl:w-[302px] xl:has-[225px] ">
            <img
              className="object-center object-cover w-full h-full"
              src={content.imageSrc}
            />
          </div>
          <div className="p-3 text-justify">
            <h1 className="text-[#107C41] font-bold md:ml-[10px] md:mr-[29px] xl:text-[24px]">
              {content.title}
            </h1>
            <p className="text-justify md:ml-[10px] md:mr-[29px] xl:text-2xl">
              {content.desc}
            </p>
          </div>
        </div>
      ))}
      <button
        onClick={handleClick}
        className=" bg-[#c4c5c4] hover:bg-[#d4d4d4] text-[12px] md:text-[14px] xl:text-[18px] font-semibold w-[100px] md:w-[140px] xl:w-[180px] text-center mb-1 mt-[-2px] rounded-md active:translate-y-1 transition ease-in-out"
      >
        Buka Galeri
      </button>
    </div>
  );
};

export default Gallery;
