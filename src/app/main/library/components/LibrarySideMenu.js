import React from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';

function LibrarySideMenu() {
  return (
    <nav>
      <div className=''>
        <button className='w-full text-left flex px-4 py-2 items-center outline-none focus:outline-none'>
          <span className='pr-1 text-xs text-gray-500 font-bold uppercase flex-1'>
            CATEGORIES
          </span>
          <span className='mr-auto'>
            <HiOutlineChevronDown className='h-4 w-4 transition transform hover:rotate-180 duration-150 ease-in-out' />
          </span>
        </button>
        <div className='pl-4'>
          <a
            className='block text-sm font-medium text-gray-600 my-0 px-4 py-2'
            href='/'
          >
            NCF Annual Reports
          </a>
          <a
            className='block text-sm font-medium text-gray-600 my-0 px-4 py-2'
            href='/'
          >
            Memorial Lecture
          </a>
          <a
            className='block text-sm font-medium text-gray-600 my-0 px-4 py-2'
            href='/'
          >
            Studies and Reports
          </a>
        </div>
      </div>
    </nav>
  );
}

export default LibrarySideMenu;
