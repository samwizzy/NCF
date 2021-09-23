import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import HomeSlider from './components/slider/Slider';
import { HiCheck } from 'react-icons/hi';
import { SocialTabs } from '@nfc';
import data from './data/mock.json';

function GetInvolved(props) {
  const { path } = useRouteMatch();

  return (
    <div>
      <HomeSlider />
      <div className='w-full md:px-8 px-4 pt-16 pb-8 bg-gray-100'>
        <div className='max-w-7xl mx-auto md:px-0'>
          <div className='text-left mb-6'>
            <h1 className='font-black text-2xl text-green uppercase tracking-tight'>
              Become a Member
            </h1>
          </div>
          <div className='grid md:grid-cols-12 md:gap-8 gap-y-8 items-start'>
            <div className='sm:col-span-8 col-span-12'>
              <p className='text-base mb-4 leading-8'>
                NCF membership includes a wide variety of members. Together they
                express, from their different categories, keen interests in
                nature conservation efforts. They readily join in advocacy for
                the preservation of Nigeria’s natural resources, and willingly
                lend moral and financial support to NCF programmes and
                activities.
              </p>

              <p className='text-base mb-4 leading-8'>
                NCF offers members the opportunity to make use of the research
                library, access to Nature Reserve sites, attend NCF events, and
                suggest ways of meeting its vision of harmonizing the
                relationship between man and the environment.
              </p>

              <p className='text-base mb-4 leading-8'>
                There are two broad categories available; Corporate and
                Individual. Please find below the details of each category and
                its sub categories.
              </p>
            </div>
            <div className='sm:col-span-4 col-span-12'>
              <img
                className='h-96'
                src='/assets/images/nature/forest-png.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto py-16 md:px-0 px-8'>
        <div className='mb-16 text-center'>
          <h1 className='font-black text-2xl uppercase tracking-tight text-green'>
            CORPORATE MEMBERSHIP
          </h1>
          <span className='font-medium text-sm text-gray-600'>
            This category of membership includes business and corporate
            organisations with keen interests in nature conservation.
          </span>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 md:gap-x-16 gap-y-8'>
          {[0, 1, 2].map((i) => (
            <Link key={i} to={`${path}/corporate`}>
              <div className='max-w-md rounded overflow-hidden h-full shadow-lg'>
                <div className=''>
                  <div className='mb-2 border-b px-4 py-2'>
                    <h2 className='font-bold uppercase'>
                      Platinum Corporate Members
                    </h2>
                    <span className='text-sm text-gray-600'>
                      Registration and Annual Subscription{' '}
                    </span>
                  </div>
                  <div className='px-4 py-2'>
                    <span className='text-sm mb-2'>Starts at:</span>
                    <h3 className='mb-4'>
                      <span className='text-green text-lg font-bold'>
                        N500,000
                      </span>
                      <span className='text-sm'>/Year</span>
                    </h3>

                    <ul class='w-full rounded-lg mt-2 mb-3 text-gray-800'>
                      {data.memberships.map((project, i) => (
                        <li key={i} className='flex items-start p-1 pl-0'>
                          <HiCheck
                            size={16}
                            className='text-green mr-2 mt-0.5 flex-none'
                          />
                          <span className='text-sm'>{project.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className='max-w-7xl mx-auto py-16 md:px-0 px-8'>
        <div className='mb-16 text-center'>
          <h1 className='font-black text-2xl uppercase tracking-tight text-green'>
            INDIVIDUAL MEMBERSHIPS
          </h1>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 md:gap-x-16 gap-y-8'>
          {[0, 1, 2].map((i) => (
            <Link key={i} to={`${path}/individual`}>
              <div
                className='max-w-md rounded overflow-hidden h-full shadow-lg'
                component={Link}
              >
                <div className=''>
                  <div className='mb-2 border-b px-4 py-2'>
                    <h2 className='font-bold uppercase mb-1'>LIFE FELLOWS</h2>
                    <p className='text-xs text-gray-600 mb-1'>
                      They are men and women from all walks of life who
                      volunteer their time and service to work with NCF towards
                      the attainment of NCF vision.
                    </p>
                    <span className='text-sm text-gray-900 font-medium'>
                      Registration and Subscription
                    </span>
                  </div>
                  <div className='px-4 py-2'>
                    <span className='text-sm mb-2'>Starts at:</span>
                    <h3 className='mb-4'>
                      <span className='text-green text-lg font-bold'>
                        N500,000
                      </span>
                      <span className='text-sm'>.00</span>
                    </h3>

                    <ul class='w-full rounded-lg mt-2 mb-3 text-gray-800'>
                      {data.individual.map((project, i) => (
                        <li key={i} className='flex items-start p-1 pl-0'>
                          <HiCheck
                            size={16}
                            className='text-green mr-2 mt-0.5 flex-none'
                          />
                          <span className='text-sm'>{project.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          ))}
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

export default GetInvolved;
