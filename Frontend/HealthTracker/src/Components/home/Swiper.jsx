import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import img7 from "./7.jpg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import './Swiper.css';

// import required modules
import { Autoplay,EffectFade } from 'swiper/modules';

export default function Swipers() {
  return (
    <>
    
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
       
        loop={true}
        modules={[Autoplay,EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img7} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img6} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img7} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img5} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img7} />
        </SwiperSlide>
      </Swiper>
      
    </>
  );
}
