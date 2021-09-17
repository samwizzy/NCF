import React from 'react';
import styled from 'styled-components';

function EnvironSlider() {
  return (
    <Banner className='relative block object-cover w-full h-full border'>
      <div className='max-w-7xl mx-auto pb-16 pt-48 md:px-0 px-8'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-8'>
          <div className='content'>
            <h1 className='text-4xl font-bold text-white mb-4'>
              What have you done for the Environment Lately?
            </h1>
            <p className='text-2xl font-medium text-white mb-6'>
              What you give goes a long way
            </p>

            <button className='bg-green hover:bg-green-800 text-white font-bold py-2 px-8 rounded'>
              Donate
            </button>
          </div>
          <div className='flex transform translate-y-80'>
            <div className='bg-white flex flex-col items-center justify-center md:py-0 py-8 w-48 broder-0 border-r border-solid'>
              <span className='mb-2'>
                <img src='/assets/images/icons/shop.svg' alt='' />
              </span>
              <span>Shop</span>
            </div>
            <div className='bg-white flex flex-col items-center justify-center md:py-0 py-8 w-48 broder-0 border-r border-solid'>
              <span className='mb-2'>
                <img src='/assets/images/icons/shopping-cart.svg' alt='' />
              </span>
              <span>Cart</span>
            </div>
            <div className='bg-white flex flex-col items-center justify-center md:py-0 py-8 w-48'>
              <span className='mb-2'>
                <img src='/assets/images/icons/donation.svg' alt='' />
              </span>
              <span>Donate</span>
            </div>
          </div>
        </div>
      </div>
    </Banner>
  );
}

const Banner = styled.div`
  background-image: url(assets/images/banner/conservation.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 700px;
`;

export default EnvironSlider;
