'use client'
import React, {useState} from "react";
//import { useState } from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

function Hero() {
  const pict = [{ foto: "images/image2.jpg" }, { foto: "images/image1.jpg" }, {foto: "images/image4.jpg"}];
  const [swiper, setSwiper] = useState(null);

  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div className="flex mt-[104px] relative" id="hero">
      <button onClick={handleNextClick} className="bg-[#1E1E1E] rounded-xl absolute self-center right-[11px] z-10">
        <svg className="justify-end md:w-7 md:h-7 xl:w-10 xl:h-10" width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Expand_right">
          <path id="Vector 9" d="M6.75 4.5L11.25 9L6.75 13.5" stroke="white" stroke-width="2"/>
          </g>
        </svg>
      </button>

      <button onClick={handlePrevClick} className="bg-[#1E1E1E] rounded-xl absolute self-center left-[11px] z-10">
        <svg className="md:w-7 md:h-7 xl:w-10 xl:h-10" width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">          
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
      <div className="w-[100%]">
        <Swiper
          spaceBetween={10}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3000,
          }}
          modules={[Autoplay]}
          onSwiper={setSwiper}
        >
          {pict.map((pict_car, i) => (
            <SwiperSlide key={i}>
              <div className="w-[110%] xl:w-full h-[130px] md:h-[400px] xl:h-[700px] overflow-hidden">
                <img className="w-[120%] h-full object-cover object-center" src={pict_car.foto} alt="carousel" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;