import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../public/images/image1.png";
import image2 from "../../../public/images/image2.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  const pict = [{ image: image1 }, { image: image2 }];
  return (
    <div className="flex mt-32" id="hero">
      <div className="bg-[#1E1E1E] rounded-xl">
        <svg
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
      </div>
      <div className="bg-[#1E1E1E] rounded-xl">
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
              d="M6.75 4.5L11.25 9L6.75 13.5"
              stroke="white"
              stroke-width="2"
            />
          </g>
        </svg>
      </div>
      <div>
        <Swiper
          slidesPerview={1.2}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {pict.map((pict_car, i) => (
            <SwiperSlide key={i}>
              <div>
                <img src={pict_car.image} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
