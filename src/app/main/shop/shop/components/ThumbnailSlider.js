
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

import Thumbnail from "./thumbnail"

// import Swiper core and required modules
import SwiperCore, {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Keyboard, Scrollbar, Navigation, Pagination]);

export default function ThumbnailSlider() {
    return (
        <Thumbnail>
            <Swiper 
                slidesPerView={1} 
                centeredSlides={false} 
                slidesPerGroupSkip={1} 
                grabCursor={true} 
                keyboard={{ "enabled": true }} 
                breakpoints={{ "240": { "slidesPerView": 2, "slidesPerGroup": 2 } }} 
                scrollbar={true} 
                navigation={true} 
                pagination={{
                    "clickable": true
                }} 
                className="mySwiper"
            >
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
            </Swiper>
        </Thumbnail>
    )
}