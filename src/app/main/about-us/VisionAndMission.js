import React from 'react';
import HomeSlider from './components/slider/Slider';
import { SocialTabs } from '@nfc';

function VisionAndMision() {
  return (
    <div>
      <HomeSlider />

      <div className='max-w-5xl mx-auto pt-16 md:px-0 px-8'>
        <div className='text-left mb-8'>
          <h1 className='font-bold text-2xl text-green mb-4'>OUR VISION</h1>
          <p className='text-base'>
            "A Nigeria where people prosper while living in harmony with nature"
          </p>
        </div>
        <div className='block'>
          <h1 className='font-bold text-2xl text-green mb-4'>OUR MISION</h1>
          <p className='text-base font-bold mb-4'>
            NCF pursues the conservation of nature and its resources with the
            aim of improving the quality of human life both the present and the
            future by:
          </p>

          <ul className='w-full rounded-lg mt-2 mb-3 -ml-3 text-gray-800'>
            <li className='flex items-start p-1 pl-3'>
              <img
                src='/assets/images/icons/bullet.svg'
                className='mr-2 flex-none mt-0.5'
                alt=''
              />
              <span>
                Preserving the full range of Nigeria’s biodiversity which
                include species, ecosystems and genetic biodiversity.
              </span>
            </li>
            <li className='flex items-start p-1 pl-3'>
              <img
                src='/assets/images/icons/bullet.svg'
                className='mr-2 flex-none mt-0.5'
                alt=''
              />
              <span>
                Promoting sustainable use of natural resources for the benefit
                of the present and future generations; and
              </span>
            </li>
            <li className='flex items-start p-1 pl-3'>
              <img
                src='/assets/images/icons/bullet.svg'
                className='mr-2 flex-none mt-0.5'
                alt=''
              />
              <span>
                Advocating actions that minimize pollution and wasteful
                utilization of renewable resources.
              </span>
            </li>
          </ul>
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

export default VisionAndMision;
