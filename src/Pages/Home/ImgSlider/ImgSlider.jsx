import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import img1 from "../../../assets/Slider/0.png";
import img2 from "../../../assets/Slider/1.png";
import img3 from "../../../assets/Slider/2.jpg";
import img4 from "../../../assets/Slider/3.png";
import img5 from "../../../assets/Slider/4.jpg";

SwiperCore.use([Navigation, Pagination]);

const DraggableSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      className="mx-auto my-6 container"
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      }}
    >
      <SwiperSlide>
        <img src={img1} className="rounded-lg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} className="rounded-lg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} className="rounded-lg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} className="rounded-lg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} className="rounded-lg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default DraggableSlider;
