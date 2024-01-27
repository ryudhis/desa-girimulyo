"use client";
import React, { useState } from "react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

const imageGallery = [
  {
    imageSrc: "images/img1.jpg",
    title: "Lapangan Voli",
    desc: 'Lapangan voli di dusun 10 adalah salah satu sarana olahraga yang ada di Desa Giri Mulyo. Lapangan voli ini kerap digunakan warga, bukan hanya dari dusun 10, namun juga warga dari Desa Giri Mulyo. Lapangan voli di Dusun 10 adalah sarana yang selalu ramai, terutama di sore hari karena digunakan oleh warga, pemuda/i, dan anak-anak untuk bermain voli maupun sekedar berkumpul.',
  },
  {
    imageSrc: "images/img2.jpg",
    title:
      "Pasar semut",
    desc: "Dusun 10 menjadi pusat kegiatan ekonomi karena terdapat pasar yang dibangun didalamnya. Pasar semut ini dibuka pada hari Selasa dan Sabtu. Pada hari-hari tersebut, warga dari semua dusun menjajakan jualannya. Pasar semut ini menjual makanan, pakaian, jajanan, hingga alat-alat rumah tangga. Pasar semut buka dari pagi hingga maksimal pukul 12.00 siang.",
  },
  {
    imageSrc: "images/img3.jpg",
    title:
      "Kebudayaan",
    desc: "Setiap tempat memiliki kebudayaan masing-masing, begitupun dengan Desa Giri Mulyo khususnya dusun 10. Kegiatan kebudayaan yang sering diadakan pada dusun 10 ini yaitu kesenian seperti seni tari Jaranan.",
  },
  {
    imageSrc: "images/img4.jpg",
    title:
      "Penyuluhan pengolahan biji alpukat menjadi tepung/kopi/teh",
    desc: "Kegiatan penyuluhan pengolahan biji alpukat menjadi tepung/teh/kopi merupakan program kerja yang dilakukan peserta KKN-Tematik Unit 1 di dusun 10. Program kerja ini dilakukan dengan tujuan memberikan informasi atau pengetahuan kepada masyarakat desa Giri Mulyo khususnya dusun 10 tentang pemanfaatan biji alpukat.",
  },
  {
    imageSrc: "images/img5.jpg",
    title:
      "Sentra Produksi di Desa Giri Mulyo, Marga Sekampung, Lampung Timur",
    desc: "Dusun 10 merupakan pusat produksi yang beragam dengan kontribusi besar pada pengembangan ekonomi lokal. Di dusun ini, terdapat kegiatan produksi logam, kerajinan kayu, tempe, gula merah, cendol, dan bibit alpukat, menciptakan ekosistem ekonomi yang kuat dan berpotensi untuk pengembangan lebih lanjut serta peningkatan kesejahteraan komunitas.",
  },
  {
    imageSrc: "images/img6.jpg",
    title:
      "Sentra Kuliner di Desa Giri Mulyo, Marga Sekampung, Lampung Timur",
    desc: "Dusun 10 menjadi sebuah sentra kuliner yang menawarkan beragam hidangan lezat. Keunikan dan keberagaman kuliner di dusun ini menciptakan destinasi kuliner yang menarik bagi warga lokal maupun wisatawan. Salah satu daya tarik utama adalah warung-warung yang menyajikan kuliner tradisional, di antaranya: Pertama, terdapat sajian lezat Sate, yang merupakan hidangan khas Indonesia yang terkenal.",
  },
  {
    imageSrc: "images/img7.jpg",
    title:
      "Hasil Kebun di Dusun 10, Desa Giri Mulyo",
    desc: "Dusun 10 merupakan desa yang sumber mata pencahariannya mayoritas dari hasil kebun. Di dusun ini, terdapat berbagai macam hasil kebun seperti alpukat,buah naga, pepaya, durian, singkong, kelapa, dan lain sebagainya. Banyak tanaman yang dihasilkan dari hasil kebun di Desa Giri Mulyo karena tanahnya yang sangat subur.",
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
            <img className="object-center object-cover w-full h-full" src={content.imageSrc}/>
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
        className="text-[12px] md:text-[14px] xl:text-[18px] font-semibold w-[100px] md:w-[140px] xl:w-[180px] text-center mb-1 mt-[-2px] rounded-md active:translate-y-1 transition ease-in-out"
      >
        {isToggle ? <BsChevronDoubleUp className='scale-[3] mt-8 mb-4 mx-auto'/> : <BsChevronDoubleDown className="scale-[3] mt-8 mb-4 mx-auto" />}
      </button>
    </div>
  );
};

export default Gallery;
