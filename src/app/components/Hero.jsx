"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

function Hero() {
  const pict = [{ foto: "images/image1.png" }, { foto: "images/image2.png" }];
  //const [swiper, setSwiper] = useState(null)
  return (
    <div className="flex mt-[106px]" id="hero">
      <button className="bg-[#1E1E1E] rounded-xl absolute mt-[90px] right-[7px] z-10">
        <svg
          className="justify-end"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Expand_right">
            <path
              id="Vector 9"
              d="M6.75 4.5L11.25 9L6.75 13.5"
              stroke="white"
              stroke-width="2"
            />
          </g>
        </svg>
      </button>
      <button className="bg-[#1E1E1E] rounded-xl absolute mt-[90px] left-[7px] z-10">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Expand_left">
            <path
              id="Vector 9"
              d="M11.25 4.5L6.75 9L11.25 13.5"
              stroke="white"
              stroke-width="2"
            />
          </g>
        </svg>
      </button>
      <div>
        <Swiper
          onSwiper={setSwiper}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          //onSwiper={swiper => console.log(swiper)}
          className="w-[375px]"
        >
          {pict.map((pict_car, i) => (
            <SwiperSlide key={i}>
              <div className="w-[375px]">
                <img className="w-full" src={pict_car.foto} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
