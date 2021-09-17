import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import Thumbnail from './thumbnail';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

export default function ThumbnailSlider() {
  return (
    <Thumbnail>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className='mySwiper'
      >
        <SwiperSlide>
          <img
            className='w-40'
            src='/assets/images/products/binocular.png'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='w-40'
            src='/assets/images/products/binocular.png'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='w-40'
            src='/assets/images/products/binocular.png'
            alt=''
          />
        </SwiperSlide>
      </Swiper>
    </Thumbnail>
  );
}
