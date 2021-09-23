import React from 'react';
import HomeSlider from './components/slider/Slider';
import { SocialTabs } from '@nfc';
import { HiOutlineChevronDown } from 'react-icons/hi';
import data from './data/mock.json';
import { BirdBg, MemberBanner, FutureBanner } from './styles';

function BirdClub() {
  return (
    <div>
      <HomeSlider />

      <BirdBg className='w-full bg-gray-50 py-32'>
        <div className='max-w-5xl mx-auto md:px-0 px-8'>
          <div className='mb-8'>
            <h1 className='font-bold text-2xl text-green mb-4 uppercase'>
              Lekki Bird Club
            </h1>
          </div>
          <div className='mb-4'>
            <p className='text-base mb-4'>
              The first volunteer-based bird conservation group; Lekki Bird Club
              (LBC) was established in March 2009 to raise the stake of bird
              conservation in Nigeria. LBC is the first in the series of bird
              club that NCF plans to set up in major urban settlements across
              Nigeria and this stems from the overlooked unique bird
              associations an assemblages in the cities.
            </p>
          </div>
        </div>
      </BirdBg>

      <div className='w-full bg-white pt-8 pb-8'>
        <div className='max-w-7xl mx-auto md:px-0 px-8'>
          <div className='mb-8'>
            <h1 className='font-bold text-2xl text-gray-800 mb-4'>
              Activities
            </h1>
          </div>
          <div className='mb-4'>
            <p className='text-base mb-4'>
              Some of the activities of LBC include bird-watching trips,
              talks/lectures as well as publications in form of newsletters and
              trip reports to reach a wider audience. Since inception in March
              2009, LBC has on numerous occasions visited key birding areas
              within Lagos and recorded a few globally significance species like
              Hooded Vulture (Necrosyrtesmonachus) and Whimbrel
              (Numeniusphaeopus). LBC also disseminates updates on her
              activities via newsletters and trip reports. Some of these have
              gone beyond the borders of Nigeria, thus reaching a wider audience
            </p>
          </div>
        </div>
      </div>

      <div className='w-full bg-white pt-4 pb-8'>
        <div className='max-w-7xl mx-auto md:px-0 px-8'>
          <div className='mb-8'>
            <h1 className='font-bold text-xl text-gray-800 mb-4'>Membership</h1>
          </div>
          <div className='mb-4'>
            <p className='text-base mb-4'>
              Two categories of membership currently exist for LBC; student
              membership and individual membership. They cost N1,000 and N2,000
              respectively. Eligibility for LBC membership is simply passion for
              nature with or without bird identification skills. However,
              members are expected to participate in birding trips which in due
              time will enable them identify birds off-hand even without help
              from skilled members or field guides.
            </p>
            <p className='text-base'>
              Members of the club can enjoy subsidised access to the Lekki
              Conservation Centre (LCC) nature reserve and the NCF library. They
              will also be invited to participate in birding trips among and
              other LBC/NCF programmes.
            </p>
          </div>
        </div>
      </div>

      <MemberBanner className='w-full bg-gray-100 h-96'>
        <div className='max-w-7xl mx-auto pt-16 md:px-0 px-8'></div>
      </MemberBanner>

      <div className='w-full bg-white pt-12 pb-8'>
        <div className='max-w-7xl mx-auto md:px-0 px-8'>
          <div className='mb-8'>
            <h1 className='font-bold text-xl text-gray-800 mb-4'>Future</h1>
          </div>
          <div className='mb-4'>
            <p className='text-base mb-4'>
              Being the first volunteer-based bird conservation group created by
              NCF, we are looking at replicating similar volunteer based bird
              clubs around urban settlements within the country. In the near
              future, LBC hopes to introduce training and capacity building
              opportunities for aspiring birders and also engage in coordinated
              field projects.
            </p>
            <p className='text-base mb-4'>
              For membership registration and further information on the Lekki
              Bird Club, please contact;
              <span className='text-green'>lbc@ncfnigeria.org</span>
            </p>

            <h3 className='font-bold text-base text-gray-800'>
              Some Key Birding Sites in Lagos State
            </h3>

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
      </div>

      <FutureBanner className='w-full bg-gray-100 h-96'>
        <div className='max-w-7xl mx-auto pt-16 md:px-0 px-8'></div>
      </FutureBanner>

      <div className='w-full bg-gray-50 pt-16 pb-8'>
        <div className='max-w-7xl mx-auto md:px-0 px-8'>
          <div className='flex items-center justify-between mb-2'>
            <h1 className='font-bold text-2xl text-green uppercase'>
              Lekki Bird Club - Report
            </h1>
            <div className='flex items-center border p-1'>
              <span className='text-gray-600 mr-3'>Year</span>
              <div className='w-full block relative'>
                <select
                  id='year'
                  placeholder='year'
                  autoComplete='year'
                  className='block appearance-none w-full py-2 px-2 pr-8 border border-gray-300 bg-white leading-tight rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 sm:text-sm'
                >
                  <option value='2019'>2019</option>
                  <option value='2021'>2021</option>
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                  <HiOutlineChevronDown />
                </div>
              </div>
            </div>
          </div>
          <hr className='h-1 mb-6 bg-transparent border-0 border-t border-solid border-gray-300' />

          <div className='mb-4'>
            <div className='rounded-md border md:w-2/6 w-5/6'>
              <div className='bg-gray-200 p-3'>
                <h3 className='text-sm font-bold'>
                  LEKKI BIRD CLUB - REPORT - 2009
                </h3>
              </div>
              <ul className='text-sm'>
                <li className='flex items-center justify-between p-3'>
                  <span className='text-gray-800 font-bold'>File Name</span>
                  <span className='text-gray-800 font-bold'>Size</span>
                </li>
                {data.files.map((file, i) => (
                  <li
                    key={i}
                    className='flex items-center justify-between p-3 bg-gray-100'
                  >
                    <div className='flex items-center'>
                      <img
                        src='/assets/images/icons/pdf.svg'
                        alt=''
                        className='mr-3'
                      />
                      <span>{file.name}</span>
                    </div>
                    <span className='whitespace-nowrap'>{file.size}</span>
                  </li>
                ))}
              </ul>
            </div>
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

export default BirdClub;
