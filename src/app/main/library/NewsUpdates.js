import React, { useState } from 'react';
import HomeSlider from './components/slider/Slider';
import { ImFacebook2, ImTwitter } from 'react-icons/im';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { ButtonTabs, SocialTabs } from '@nfc';

const tabs = ['Video', 'Interviews', 'Articles', 'Publication'];

function NewsUpdates(props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <HomeSlider />
      <div className='w-full md:px-8 px-4 pt-16 pb-8 bg-gray-100'>
        <div className='max-w-7xl mx-auto md:px-0'>
          <div className='text-left mb-6'>
            <h1 className='font-black text-2xl text-green uppercase tracking-tight'>
              news and update
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>
          <div className='grid md:grid-cols-12 md:gap-8 gap-y-8 items-center'>
            <div className='sm:col-span-8 col-span-12'>
              <img src='/assets/images/animals/lion.png' alt='' />
            </div>
            <div className='sm:col-span-4 col-span-12'>
              <div className='inline-flex uppercase mb-4'>
                <button className='bg-green hover:bg-green-800 text-white font-medium py-2 px-8 rounded-l'>
                  Todays
                </button>
                <button className='bg-gray-100 hover:bg-gray-200 border border-l-0 border-green text-gray-800 font-medium py-2 px-8 rounded-r'>
                  Article
                </button>
              </div>
              <div className='mb-4'>
                <h1 className='font-black text-3xl mb-4'>
                  ANIMAL
                  <br /> POACHING
                </h1>
                <span className='italic'>Monday April 2021</span>
              </div>

              <p className='text-sm mb-4'>
                Uganda arrests suspects over lion killings at park The lions in
                Queen Elizabeth National Park are known for their ability to
                climb trees The lions in Queen Elizabeth National Park can climb
                treesImage caption: The lions in Queen Elizabeth National Park
                can climb trees
              </p>

              <p className='text-sm mb-4'>
                The Ugandan authorities have arrested four people suspected of
                killing six lions in one of the country's most famous parks.
              </p>
              <p className='text-sm mb-4'>
                The lions were found dead and mutilated last Friday and their
                bodies surrounded by dead vultures in Queen Elizabeth National
                Park.
              </p>
              <p className='text-sm mb-4'>
                On Tuesday, the Uganda Wildlife Authority (UWA) said the
                suspects were arrested in a joint operation by the military,
                police and the wildlife authorities.
              </p>
              <p className='text-sm mb-4'>
                "Today at daybreak, the suspects took the security team to a
                location where three heads of lions were found hidden in a tree
                and the fourth one was buried with 15 legs under the same tree.
                The suspects said they dropped one leg in the park," the UWA
                said in a statement.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full md:px-8 px-4 py-8 bg-gray-100'>
        <div className='max-w-7xl mx-auto py-16 md:px-0 px-8'>
          <div className='grid md:grid-cols-12 md:gap-8 gap-y-8 items-center'>
            <div className='sm:col-span-3 col-span-12'>
              <img src='/assets/images/nature/news-about.png' alt='' />
            </div>
            <div className='sm:col-span-6 col-span-12'>
              <div className='mb-4'>
                <h1 className='font-black text-2xl'>About NCF</h1>
              </div>
              <p>
                The Nigerian Conservation Foundation (NCF) is the premier Non
                Governmental Organisation (NGO) dedicated to nature conservation
                and sustainable development in Nigeria. Established in 1980, the
                Foundation was registered in 1982 as a Charitable Trust under
                the Land (Perpetual Succession) Act of 1961 - a policy that was
                replaced by the Company and Allied Matters Act of 1990. Founded
                by late Chief S. L. Edu, NCF has its patron as the President and
                Commander- In-Chief of the Armed Force of the FederalRepublic of
                Nigeria.
              </p>
            </div>
            <div className='sm:col-span-3 col-span-12'>
              <div className='mb-4'>
                <h1 className='font-bold text-xl'>Stay connected</h1>
              </div>

              <table className='min-w-full divide-y divide-gray-200'>
                <tbody className='bg-white divide-y divide-gray-200'>
                  <tr>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      Follow NCF on Facebook
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      <ImFacebook2 color='#1B3B7D' />
                    </td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      Follow NCF on Facebook
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      <ImTwitter color='#239FE9' />
                    </td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      Follow NCF on Instagram
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      <img
                        src='/assets/images/socials/instagram.svg'
                        className='w-8'
                        alt=''
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto py-16 md:px-0 px-8'>
        <div className='mb-6'>
          <h1 className='font-black text-2xl uppercase tracking-tight'>
            Latest Update
          </h1>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 md:gap-x-16 gap-y-8'>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className='max-w-md rounded overflow-hidden h-full shadow-lg'
            >
              <img
                className='w-full'
                src='/assets/images/nature/news-image.png'
                alt='Sunset in the mountains'
              />
              <div className='px-6 py-4'>
                <div className='font-bold text-lg mb-2'>
                  NGOs, CSOs demand 'Right to a Healthy Planet'
                </div>
                <span className='text-sm italic mb-4'>Monday April 2021</span>
                <p className='text-gray-700 text-sm mb-4'>
                  Over 100 000 citizens demand the United Nations (UN) to
                  recognise a new human right – the right to a healthy planet
                  Citizens from around the world are demanding that the right to
                  a clean, healthy
                </p>

                <a
                  className='flex items-center justify-end text-sm italic'
                  href='/'
                >
                  Read more <HiOutlineChevronRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full md:px-8 px-4 pt-16 pb-8 bg-gray-50'>
        <div className='max-w-7xl mx-auto md:px-0'>
          <div className='grid md:grid-cols-12 md:gap-8 gap-y-8 items-start'>
            <div className='sm:col-span-4 col-span-12'>
              <h1 className='font-black text-2xl mb-4 uppercase tracking-tight'>
                climate change
              </h1>

              <div className='mb-6'>
                <div className='flex flex-col space-y-1 mb-2'>
                  <h2 className='font-bold text-sm'>Interview By</h2>
                  <span className='font-medium text-sm'>DR. Steve Miler</span>
                </div>
                <div className='flex flex-col space-y-1'>
                  <h2 className='font-bold text-sm'>Date</h2>
                  <span className='font-medium text-sm italic'>
                    Monday April 2021
                  </span>
                </div>
              </div>

              <p className='text-sm mb-4'>
                Uganda arrests suspects over lion killings at park The lions in
                Queen Elizabeth National Park are known for their ability to
                climb trees The lions in Queen Elizabeth National Park can climb
                treesImage caption: The lions in Queen Elizabeth National Park
                can climb trees
              </p>

              <p className='text-sm mb-4'>
                The Ugandan authorities have arrested four people suspected of
                killing six lions in one of the country's most famous parks.
              </p>
              <p className='text-sm mb-4'>
                The lions were found dead and mutilated last Friday and their
                bodies surrounded by dead vultures in Queen Elizabeth National
                Park.
              </p>
              <p className='text-sm mb-4'>
                On Tuesday, the Uganda Wildlife Authority (UWA) said the
                suspects were arrested in a joint operation by the military,
                police and the wildlife authorities.
              </p>
              <p className='text-sm mb-4'>
                "Today at daybreak, the suspects took the security team to a
                location where three heads of lions were found hidden in a tree
                and the fourth one was buried with 15 legs under the same tree.
                The suspects said they dropped one leg in the park," the UWA
                said in a statement.
              </p>

              <a
                className='flex items-center justify-end text-sm italic'
                href='/'
              >
                Read more <HiOutlineChevronRight />
              </a>
            </div>
            <div className='sm:col-span-8 col-span-12'>
              <img src='/assets/images/nature/climate.png' alt='' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full md:px-8 px-4 pt-16 pb-8 bg-white'>
        <div className='max-w-7xl mx-auto md:px-0'>
          <div className='flex justify-start items-center'>
            <h2 className='font-black text-2xl mr-8'>Popular</h2>
            <ButtonTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          <div className='py-8 text-center mx-auto border'>
            {activeTab === 0 && (
              <div className='grid md:grid-cols-3 grid-cols-1 md:gap-x-16 gap-y-8'>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className='max-w-md rounded overflow-hidden h-full shadow-lg'
                  >
                    <img
                      className='w-full'
                      src='/assets/images/nature/news-image.png'
                      alt='Sunset in the mountains'
                    />
                    <div className='px-6 py-4'>
                      <div className='font-bold text-lg mb-2'>
                        NGOs, CSOs demand 'Right to a Healthy Planet'
                      </div>
                      <span className='text-sm italic mb-4'>
                        Monday April 2021
                      </span>
                      <p className='text-gray-700 text-sm mb-4'>
                        Over 100 000 citizens demand the United Nations (UN) to
                        recognise a new human right – the right to a healthy
                        planet Citizens from around the world are demanding that
                        the right to a clean, healthy
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 1 && <div>Content 2</div>}
            {activeTab === 2 && <div>Content 3</div>}
            {activeTab === 3 && <div>Content 4</div>}
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

export default NewsUpdates;
