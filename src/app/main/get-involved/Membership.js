import React, { useState } from 'react';
import HomeSlider from './components/slider/Slider';
import { SocialTabs } from '@nfc';
import { HiOutlineChevronDown } from 'react-icons/hi';
import CorporateForm from './components/CorporateForm';
import IndividualForm from './components/IndividualForm';

function Membership(props) {
  const [member, setMember] = useState('platinum-corporate');

  const handleChange = (event) => {
    setMember(event.target.value);
  };

  console.log(member, 'member');

  return (
    <div>
      <HomeSlider />
      <div className='w-full md:px-8 px-4 pt-16 pb-8 bg-gray-100'>
        <div className='max-w-7xl mx-auto md:px-0'>
          <div className='text-left mb-6'>
            <h1 className='font-black text-2xl text-green uppercase tracking-tight'>
              CORPORATE MEMBERSHIP Form
            </h1>
            <span className='text-sm text-gray-600'>
              Please complete this section with information about your
              organization
            </span>
          </div>
          <div className='w-96 block relative mb-8'>
            <select
              id='membership'
              onChange={handleChange}
              value={member}
              placeholder='Membership'
              autoComplete='membership'
              className='block appearance-none w-full py-2 px-2 pr-8 border border-gray-300 bg-green text-white leading-tight rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 sm:text-sm'
            >
              <option value='platinum-corporate'>
                Platinum Corporate Members - N500,000
              </option>
              <option value='life-fellows'>LIFE FELLOWS - N150,000</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <HiOutlineChevronDown />
            </div>
          </div>
          <div className='grid md:grid-cols-12 md:gap-8 gap-y-8 items-start'>
            <div className='sm:col-span-8 col-span-12'>
              <div>
                {member === 'platinum-corporate' ? (
                  <CorporateForm />
                ) : (
                  <IndividualForm />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full md:px-8 px-4 pt-16 pb-8 bg-white relative z-10'>
        <div className='max-w-7xl mx-auto md:px-0'>
          <SocialTabs />
        </div>
      </div>
    </div>
  );
}

export default Membership;
