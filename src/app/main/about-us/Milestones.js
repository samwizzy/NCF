import React from 'react';
import { BsTriangleFill } from 'react-icons/bs';
import HomeSlider from './components/slider/Slider';
import { SocialTabs } from '@nfc';
import { Slider } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);

function Milestones() {
  return (
    <div>
      <HomeSlider />
      <div className='bg-green-dark py-32'>
        <div className='max-w-7xl mx-auto md:px-0 px-8'>
          <div className='text-center mb-8'>
            <h1 className='font-bold text-2xl text-white mb-4'>
              OUR MILESTONES
            </h1>
            <hr className='bg-green w-48 mx-auto h-2 border-0' />
          </div>

          <Slider>
            <Swiper navigation={true} className='mySwiper'>
              <SwiperSlide>
                <div className='container'>
                  <div className='flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50'>
                    <div className='flex flex-row-reverse md:contents'>
                      <div className='col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md'>
                        <p className='leading-tight text-justify text-3xl font-bold text-white'>
                          1980
                        </p>
                      </div>
                      <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
                        <div className='h-full w-6 flex items-center justify-center'>
                          <div className='h-full w-1 bg-green-800 pointer-events-none'></div>
                        </div>
                        <div className='w-12 h-12 flex justify-center items-center absolute top-1/3 -right-3 -mt-3 rounded-full bg-white border-4 border-green-800 shadow'>
                          <img src='/assets/images/icons/drop.svg' alt='' />
                        </div>
                      </div>
                      <div className='bg-white col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md relative'>
                        <BsTriangleFill className='absolute text-white top-1 -left-3 transform -rotate-90' />
                        <p className='leading-tight text-justify text-green'>
                          NCF was established
                        </p>
                      </div>
                    </div>

                    <div className='flex flex-row-reverse md:contents'>
                      <div className='col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md'>
                        <p className='leading-tight text-justify text-3xl font-bold text-green'>
                          1984
                        </p>
                      </div>
                      <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
                        <div className='h-full w-6 flex items-center justify-center'>
                          <div className='h-full w-1 bg-green-800 pointer-events-none'></div>
                        </div>
                        <div className='w-12 h-12 flex justify-center items-center absolute top-1/3 -right-3 -mt-3 rounded-full bg-white border-4 border-green-800 shadow'>
                          <img src='/assets/images/icons/drop.svg' alt='' />
                        </div>
                      </div>
                      <div className='bg-green col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md relative'>
                        <BsTriangleFill className='absolute text-green top-1 -left-3 transform -rotate-90' />
                        <p className='leading-tight text-justify'>
                          Assisted in developing National Conservation Strategy
                        </p>
                      </div>
                    </div>

                    <div className='flex flex-row-reverse md:contents'>
                      <div className='col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md'>
                        <p className='leading-tight text-justify text-3xl font-bold text-white'>
                          1985
                        </p>
                      </div>
                      <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
                        <div className='h-full w-6 flex items-center justify-center'>
                          <div className='h-full w-1 bg-green-800 pointer-events-none'></div>
                        </div>
                        <div className='w-12 h-12 flex justify-center items-center absolute top-1/3 -right-3 -mt-3 rounded-full bg-white border-4 border-green-800 shadow'>
                          <img src='/assets/images/icons/drop.svg' alt='' />
                        </div>
                      </div>
                      <div className='bg-white col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md relative'>
                        <BsTriangleFill className='absolute text-white top-1 -left-3 transform -rotate-90' />
                        <p className='leading-tight text-justify text-green'>
                          Supported the enactment of The Endangered Species
                          Decree.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='container'>
                  <div className='flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50'>
                    <div className='flex flex-row-reverse md:contents'>
                      <div className='col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md'>
                        <p className='leading-tight text-justify text-3xl font-bold text-green'>
                          1980
                        </p>
                      </div>
                      <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
                        <div className='h-full w-6 flex items-center justify-center'>
                          <div className='h-full w-1 bg-green-800 pointer-events-none'></div>
                        </div>
                        <div className='w-12 h-12 flex justify-center items-center absolute top-1/3 -right-3 -mt-3 rounded-full bg-white border-4 border-green-800 shadow'>
                          <img src='/assets/images/icons/drop.svg' alt='' />
                        </div>
                      </div>
                      <div className='bg-white col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md relative'>
                        <BsTriangleFill className='absolute text-white top-1 -left-3 transform -rotate-90' />
                        <p className='leading-tight text-justify text-green'>
                          NCF was established
                        </p>
                      </div>
                    </div>

                    <div className='flex flex-row-reverse md:contents'>
                      <div className='col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md'>
                        <p className='leading-tight text-justify text-3xl font-bold text-green'>
                          1984
                        </p>
                      </div>
                      <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
                        <div className='h-full w-6 flex items-center justify-center'>
                          <div className='h-full w-1 bg-green-800 pointer-events-none'></div>
                        </div>
                        <div className='w-12 h-12 flex justify-center items-center absolute top-1/3 -right-3 -mt-3 rounded-full bg-white border-4 border-green-800 shadow'>
                          <img src='/assets/images/icons/drop.svg' alt='' />
                        </div>
                      </div>
                      <div className='bg-green col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md relative'>
                        <BsTriangleFill className='absolute text-green top-1 -left-3 transform -rotate-90' />
                        <p className='leading-tight text-justify'>
                          Assisted in developing National Conservation Strategy
                        </p>
                      </div>
                    </div>

                    <div className='flex flex-row-reverse md:contents'>
                      <div className='col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md'>
                        <p className='leading-tight text-justify text-3xl font-bold text-green'>
                          1985
                        </p>
                      </div>
                      <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
                        <div className='h-full w-6 flex items-center justify-center'>
                          <div className='h-full w-1 bg-green-800 pointer-events-none'></div>
                        </div>
                        <div className='w-12 h-12 flex justify-center items-center absolute top-1/3 -right-3 -mt-3 rounded-full bg-white border-4 border-green-800 shadow'>
                          <img src='/assets/images/icons/drop.svg' alt='' />
                        </div>
                      </div>
                      <div className='bg-white col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md relative'>
                        <BsTriangleFill className='absolute text-white top-1 -left-3 transform -rotate-90' />
                        <p className='leading-tight text-justify text-green'>
                          Supported the enactment of The Endangered Species
                          Decree.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Slider>
        </div>
      </div>

      <div className='relative z-10 pt-16'>
        <div className='max-w-7xl mx-auto pb-16 md:px-0 px-8'>
          <SocialTabs />
        </div>
      </div>
    </div>
  );
}

export default Milestones;
