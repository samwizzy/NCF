import React, { useState } from 'react';
import HomeSlider from './components/slider/Slider';
import { Rating } from '@material-ui/lab';
import { HiOutlineSearch, HiViewGrid, HiUserCircle } from 'react-icons/hi';
import { MdStarBorder, MdHistory } from 'react-icons/md';
import _ from 'lodash';
import ShopSideMenu from './components/ShopSideMenu';

function Shop() {
  const [user] = useState({ picture: '' });

  return (
    <div>
      <HomeSlider />
      <div className='w-full md:px-8 px-4 py-8 bg-gray-100'>
        <div className='grid md:grid-cols-12 grid-cols-1 md:gap-x-0'>
          <div className='md:col-span-2 col-span-12'></div>
          <div className='md:col-span-10 col-span-12'>
            <div className='flex justify-end items-center text-right mb-8'>
              <h2 className='text-gray-800 text-lg font-bold'>Welcome John</h2>
              <div className='ml-2'>
                {user.picture ? (
                  <HiUserCircle size='40' color='#067139' />
                ) : (
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                )}
              </div>
            </div>

            <div className='flex md:flex-row flex-col md:space-y-0 space-y-2 justify-between'>
              <div className='mt-0 flex rounded-md shadow-sm w-96'>
                <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                  <HiOutlineSearch />
                </span>
                <input
                  type='text'
                  name='search'
                  id='search'
                  autoComplete='given-name'
                  placeholder='Search'
                  className='border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-light focus:ring-opacity-50 p-2 flex-1 block rounded-none rounded-r-md sm:text-sm'
                />
              </div>

              <div className='inline-flex'>
                <input
                  type='text'
                  name='search'
                  id='search'
                  autoComplete='given-name'
                  placeholder='Order history'
                  className='border border-gray-100 focus:outline-none focus:ring-1 focus:ring-green-light focus:ring-opacity-50 p-2 flex-1 block rounded-none rounded-l-sm sm:text-sm'
                />
                <hr className='w-0 h-full border-l' />
                <button className='focus:outline-none bg-white border border-gray-100 rounded-none rounded-r-sm p-2'>
                  <MdHistory size='28' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full md:px-4 px-4 py-2 shadow-sm'>
        <div className='grid md:grid-cols-12 gap-x-2 items-center'>
          <div className='col-span-2'>
            <h4 className='text-sm font-bold uppercase'>PRODUCT CATEGORY</h4>
          </div>
          <div className='flex justify-between items-center col-span-10'>
            <h4 className='text-sm font-bold uppercase'>
              Showing 9 of 9 products
            </h4>
            <div className='flex items-center space-x-2'>
              <button className=''>
                <HiViewGrid size='32' className='text-gray-300' />
              </button>
              <button className=''>
                <HiViewGrid size='32' className='text-green' />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full md:px-0 relative z-10'>
        <div className='grid md:grid-cols-12 md:gap-x-0 gap-y-2'>
          <aside className='md:col-span-2 col-span-12 min-h-screen py-4 border-0 border-r border-solid border-gray-200'>
            <ShopSideMenu />
          </aside>
          <div className='md:col-span-10 col-span-12 p-4'>
            <div className='text-right mb-2'>
              <span className='text-sm'>Sort by: Default</span>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 md:gap-x-8 gap-y-8'>
              {_.range(0, 8).map((i) => (
                <div className='max-w-md rounded overflow-hidden h-full shadow-lg'>
                  <img
                    className='w-full'
                    src='http://bulma.io/images/placeholders/1280x960.png'
                    alt='Sunset in the mountains'
                  />
                  <div className='px-6 py-4'>
                    <div className='font-bold text-sm mb-2'>
                      Birding Binocular
                    </div>
                    <p className='text-gray-700 text-sm mb-2'>₦ 131,250</p>
                    <p className='text-gray-400 text-sm line-through mb-4'>
                      ₦ 157,500
                    </p>

                    <Rating
                      name='customized-empty'
                      size='small'
                      defaultValue={2}
                      precision={0.5}
                      emptyIcon={<MdStarBorder fontSize='inherit' />}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
