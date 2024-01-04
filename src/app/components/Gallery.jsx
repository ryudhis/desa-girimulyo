import React from "react";

const Gallery = () => {
  return (
    <div id="galeri">
      <h1 className="text-[#107C41] mx-3 border-b-2 border-[#107C41]">
        Galeri Dusun 10
      </h1>
      <div className="flex flex-col">
        <div className="mt-[9px] w-[335px] h-[119px] mx-auto">
          <img
            className="object-none object-center w-full h-full"
            src="images/img1.png"
          />
        </div>
        <div>
          <h1 className="text-[#107C41] font-bold text-[10px] mx-3">
            Menembus Kegelapan Gua Pandan di Desa Girimulyo Lampung Timur
          </h1>
          <p className="text-[10px] mx-3 text-justify">
            Gua Pandan terletak di Desa Giri Mulyo, Kecamatan Marga sekampung,
            Kabupaten Lampung Timur. Untuk mencapai Gua Pandan menghabiskan
            waktu 30 menit dari Dusun 10 dengan menggunakan kendaraan bermotor.
            Gua Pandan dikelilingi dengan pohon pepaya california yang sangat
            lebat.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mt-[9px] w-[335px] h-[119px] mx-auto">
          <img className=" w-full h-full" src="images/img2.png" />
        </div>
        <div>
          <h1 className="text-[#107C41] font-bold text-[10px] mx-3">
            Pembangunan Desa Girimulyo Kec.Marga Sekampung Kab.Lampung Timur
            Pesat di Pimpin Kades Echwanudin
          </h1>
          <p className="text-[10px] mx-3 text-justify">
            Pembangunan Desa Girimulyo Kec.Marga Sekampung Kab.Lampung Timur
            Pesat di Pimpin Kades Echwanudin. Pembangunan dilakukan setiap hari
            dengan pantauan yang rutin oleh pihak desa agar berjalan dengan
            kondusif.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mt-[9px] w-[335px] h-[119px] mx-auto">
          <img
            className="object-none object-center w-full h-full"
            src="images/img3.png"
          />
        </div>
        <div>
          <h1 className="text-[#107C41] font-bold text-[10px] mx-3">
            Panen Alpukat Siger di Desa Girimulyo, Marga Sekampung, Lampung
            Timur
          </h1>
          <p className="text-[10px] mx-3 text-justify">
            Berkesempatan hadir saat panen alpukat dari satu pohon di halaman
            rumah Pak Muhajir, warga Desa Girimulyo, Kecamatan Sekampung Udik,
            Lampung Timur. Dari 1 pohon tersebut menghasilkan sekitar 100
            kilogram buah alpukat. Yang super mungkin sekitar 40an kg dari pohon
            tersebut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
