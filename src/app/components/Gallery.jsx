import React from "react";

const imageGallery= [
  {
    imageSrc:"images/img1.png",
    title : "Menembus Kegelapan Gua Pandan di Desa Girimulyo Lampung Timur",
    desc:'Gua Pandan terletak di Desa Giri Mulyo, Kecamatan Marga sekampung, Kabupaten Lampung Timur. Untuk mencapai Gua Pandan menghabiskanwaktu 30 menit dari Dusun 10 dengan menggunakan kendaraan bermotor. Gua Pandan dikelilingi dengan pohon pepaya california yang sangat lebat.'
  },
  {
    imageSrc:"images/img2.png",
    title:"Pembangunan Desa Girimulyo Kec.Marga Sekampung Kab.Lampung Timur Pesat di Pimpin Kades Echwanudin",
    desc: "Pembangunan Desa Girimulyo Kec.Marga Sekampung Kab.Lampung Timur Pesat di Pimpin Kades Echwanudin. Pembangunan dilakukan setiap hari dengan pantauan yang rutin oleh pihak desa agar berjalan dengan kondusif.",  
  },
  {
    imageSrc:"images/img3.png",
    title:"Panen Alpukat Siger di Desa Girimulyo, Marga Sekampung, Lampung Timur",
    desc:"Berkesempatan hadir saat panen alpukat dari satu pohon di halaman rumah Pak Muhajir, warga Desa Girimulyo, Kecamatan Sekampung Udik, Lampung Timur. Dari 1 pohon tersebut menghasilkan sekitar 100 kilogram buah alpukat. Yang super mungkin sekitar 40an kg dari pohon tersebut.",
  }
];


const Gallery = () => {
  return (
    <div id="galeri" className="text-[10px] md:text-[15px]">
      <h1 className="text-[#107C41] mx-3 border-b-2 border-[#107C41] xl:text-[32px] xl:mt-3 xl:mb-4">
        Galeri Dusun 10
      </h1>
    
      {imageGallery.map((content,index) => (
      <div key={index} className="grid md:grid-flow-col">
        <div className="mt-[9px] w-[335px] md:w-[235px] h-[119px] md:h-[176px] mx-auto mb-2 overflow-hidden md:ml-[34px] xl:w-[302px] xl:has-[225px] ">
          <img
            className="object-center object-cover w-full h-full"
            src={content.imageSrc}
          />
        </div>
        <div>
          <h1 className="text-[#107C41] font-bold md:ml-[10px] md:mr-[29px] xl:text-[24px]">
            {content.title}
          </h1>
          <p className="text-justify md:ml-[10px] md:mr-[29px] xl:text-2xl">
            {content.desc}
          </p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Gallery;
