'use client';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './Banner.css';

export default function Banner() {
  return (
    <div className="flex items-center justify-center h-40 text-2xl bg-slate-100 rounded-lg ">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="h-full flex items-center justify-center">Banner1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full flex items-center justify-center">Banner2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full flex items-center justify-center">Banner3</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
