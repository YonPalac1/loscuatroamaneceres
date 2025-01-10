import React from "react";
import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";


import img1 from "../assets/galery/img1.png"
import img2 from "../assets/galery/img2.png"
import img3 from "../assets/galery/img3.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, Autoplay]}
      autoplay
      spaceBetween={0}
      pagination={{ clickable: true }}
      slidesPerView={4}
      breakpoints={{
        300: {
          slidesPerView: 2,
          spaceBetween: 10,
        },

        382: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
        <SwiperSlide>
            <img src={img1}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3}></img>
        </SwiperSlide>
    </Swiper>
  );
};
export default Slider;