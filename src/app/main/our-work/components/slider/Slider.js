
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderContainer from "./styles"

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, { Pagination } from 'swiper/core';

SwiperCore.use([Pagination]);

function Slider() {
    return (
        <SliderContainer className="mt-6">
            <Swiper 
                direction={'vertical'} 
                pagination={{"clickable": true}} 
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slider-wrapper">
                        <div className="slider-text border border-solid">
                            <div className="max-w-7xl mx-auto pb-16 pt-48 md:px-0 px-8">
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-8">
                                    <div className="content">
                                        <h1 className="text-4xl font-bold text-white mb-4">What have you done for the Environment Lately?</h1>
                                        <p className="text-2xl font-medium text-white mb-6">
                                            What you give goes a long way
                                        </p>

                                        <button className="bg-green hover:bg-green-800 text-white font-bold py-2 px-8 rounded">Donate</button>
                                    </div>
                                    <div className="flex field-bottom">
                                        <div className="bg-white flex flex-col items-center justify-center md:py-0 py-8 w-48 broder-0 border-r border-solid">
                                            <span className="mb-2">
                                                <img src="/assets/images/icons/shop.svg" alt="" />
                                            </span>
                                            <span>Shop</span>
                                        </div>
                                        <div className="bg-white flex flex-col items-center justify-center md:py-0 py-8 w-48 broder-0 border-r border-solid">
                                            <span className="mb-2">
                                                <img src="/assets/images/icons/shopping-cart.svg" alt="" />
                                            </span>
                                            <span>Cart</span>
                                        </div>
                                        <div className="bg-white flex flex-col items-center justify-center md:py-0 py-8 w-48">
                                            <span className="mb-2">
                                                <img src="/assets/images/icons/donation.svg" alt="" />
                                            </span>
                                            <span>Donate</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/banner/ourwork.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/nature/nature.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/nature/nature.png" alt="" />
                </SwiperSlide>
            </Swiper>  
        </SliderContainer>
    )
}

export default Slider