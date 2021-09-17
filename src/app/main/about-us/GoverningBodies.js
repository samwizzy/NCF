import React from 'react';
import HomeSlider from './components/slider/Slider';
import { SocialTabs } from '@nfc';
import data from './data/mock.json';

function GoverningBodies() {
  return (
    <div>
      <HomeSlider />

      <div className='w-full bg-gray-100'>
        <div className='max-w-7xl mx-auto pt-16 md:px-0 px-8'>
          <div className='text-center mb-8'>
            <h1 className='font-bold text-2xl text-green mb-4 uppercase'>
              Governing Bodies
            </h1>
            <p className='text-sm uppercase font-medium'>BOARD OF TRUSTEES</p>
          </div>
          <div className='grid md:grid-cols-4 grid-cols-1 md:gap-8 gap-y-8 items-start'>
            {data.trustees.map((ts, i) => (
              <div className='max-w-md rounded overflow-hidden h-full text-center'>
                <img
                  className='mx-auto rounded-full'
                  src={
                    ts.avatar
                      ? ts.avatar
                      : 'https://bulma.io/images/placeholders/128x128.png'
                  }
                  alt='Sunset in the mountains'
                />
                <div className='px-6 py-4'>
                  <div className='text-sm text-gray-800 font-bold mb-2'>
                    {ts.title}
                  </div>
                  <p className='flex flex-col justify-center'>
                    <span className='font-medium text-sm mb-1'>
                      {ts.position}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className='text-center my-12'>
            <p className='text-sm mb-3 uppercase font-medium'>
              NATIONAL EXECUTIVE COUNCIL
            </p>
            <hr className='block mx-auto w-48 h-1 bg-green' />
          </div>
          <div className='grid md:grid-cols-4 grid-cols-1 md:gap-8 gap-y-8 items-start'>
            {data.executives.map((ts, i) => (
              <div className='max-w-md rounded overflow-hidden h-full text-center'>
                <img
                  className='mx-auto rounded-full'
                  src={
                    ts.avatar
                      ? ts.avatar
                      : 'https://bulma.io/images/placeholders/128x128.png'
                  }
                  alt='Sunset in the mountains'
                />
                <div className='px-6 py-4'>
                  <div className='text-sm text-gray-800 font-bold mb-2'>
                    {ts.title}
                  </div>
                  <p className='flex flex-col justify-center'>
                    <span className='font-medium text-sm mb-1'>
                      {ts.position}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
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

export default GoverningBodies;
