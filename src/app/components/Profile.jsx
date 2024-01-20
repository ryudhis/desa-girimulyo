import React from "react";

const Profile = () => {
  return (
    <div id="profil" className="flex flex-col items-center mt-2 mb-2">
      <div className="text-[#107C41] text-[15px] md:text-[18px] xl:text-[25px] font-bold border-b-[2px] border-[#107C41] w-[93vw] md:w-[94vw] xl:w-[96vw]">
        <div className="pl-1">Profil Dusun</div>
      </div>

      <div className="mt-2">
        <div className="text-[12px] md:text-[15px] xl:text-[22px] font-extrabold text-[#33363F]">
          Dusun 10 - Desa Giri Mulyo <br /> Kecamatan Marga Sekampung - Lampung
          Timur
        </div>

        <div className="w-[92vw] md:w-[93.5vw] xl:w-[95.5vw] text-[12px] md:text-[15px] xl:text-[22px] mt-1  text-[#5c616e]">
          Dusun 10 merupakan bagian dari Desa Giri Mulyo yang memiliki 15 Dusun.
          Dusun 10 memiliki total luasan lahan sebesar 55.45 Ha, yang terdiri
          dari 15.8 Ha Kawasan Permukiman dan Kegiatan serta 39.65 Ha Kawasan
          Perkebunan/Ladang.
          <br /> <br />
          Dusun 10 menjadi pusat desa karena memiliki poisisi strategis dan
          memiliki beragam kegiatan ekonomi serta kepemudaan. Terdapat pasar
          semut sebagai sentra ekonomi Dusun 10. Keberadaan gereja serta masjid
          / mushola mencerminkan keberagaman dan toleransi agama. Selain itu,
          Dusun 10 memiliki jumlah RT terbanyak dibandingkan Dusun lain dan
          memiliki jumlah penduduk ke-4 terbanyak dari Dusun lainnya.
          <br /> <br />
          Mayoritas masyarakat Dusun 10 bekerja sebagai buruh tani dan kebun
          palawija yang menghasilkan hasil alam melimpah yaitu berupa Alpukat,
          Jagung, Kelapa, dan Pisang.
        </div>
      </div>
    </div>
  );
};

export default Profile;
