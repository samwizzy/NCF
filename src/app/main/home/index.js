import React from 'react';
import _ from 'lodash';
import { FiCalendar } from 'react-icons/fi';
import { ImLocation } from 'react-icons/im';
import data from './data/mock.json';
import { Event, EventLeft, EventRight, NatureDiv, Slider } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeSlider from './components/slider/Slider';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Home() {
  return (
    <div>
      <HomeSlider />
      <div className='w-full bg-gray-100'>
        <div className='max-w-7xl mx-auto py-16 md:px-0 px-8'>
          <div className='text-center mb-6'>
            <h1 className='font-bold text-3xl text-gray-800 mb-2'>OUR WORK</h1>
            <p className='text-base'>
              We protect the environment and transform <br />
              livelihood through our programmes
            </p>
          </div>
          <Slider>
            <Swiper
              navigation={true}
              pagination={{ clickable: true }}
              className='mySwiper'
            >
              {_.range(3).map((i) => (
                <SwiperSlide key={i}>
                  <div className='w-full'>
                    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-8 items-center md:mb-0 mb-8'>
                      <div className='colum'>
                        <div className='block'>
                          <h1 className='text-2xl font-bold text-green mb-2'>
                            FOREST PROGRAMME
                          </h1>
                          <h3 className='font-base'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                          </h3>
                          <button className='bg-green hover:bg-green-800 text-white font-bold py-2 px-6 mt-6'>
                            Read More
                          </button>
                        </div>
                      </div>
                      <div className='colum'>
                        <img src='/assets/images/nature/forest.png' alt='' />
                      </div>
                    </div>

                    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-y-8 items-center'>
                      <div className=''>
                        <img src='/assets/images/nature/species.png' alt='' />
                      </div>
                      <div className='block'>
                        <h1 className='text-2xl mb-2 font-bold text-green'>
                          SPECIES CONSERVATION
                        </h1>
                        <h3 className='text-base'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </h3>
                        <button className='bg-green hover:bg-green-800 text-white font-bold py-2 px-6 mt-6'>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Slider>
        </div>
      </div>

      <div className='max-w-7xl mx-auto py-16 md:px-0 px-8'>
        <div className='text-center mb-6'>
          <h1 className='font-bold text-2xl mb-2'>OUR EXPERIENCE</h1>
          <div className='text-sm leading-5'>
            We work with diverse groups, governments, international
            organisations,
            <br />
            corporate organisations, communities and individual.
            <br />
            This has conferred enviable milestones spanning over 4 decades on
            the Foundation.
          </div>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-y-8 items-center'>
          <div className=''>
            <img src='/assets/images/nature/experiences.png' alt='' />
          </div>
          <div className='block'>
            <h1 className='text-2xl mb-2 font-bold text-green'>MILESTONES</h1>
            <p>1984 – Assisted to develop National Conservation Strategy</p>
            <p>1985 – Supported the enactment of Endangered Species Decree</p>
            <p>1990 – Established the Lekki Conservation Centre</p>
            <p>
              1992 – Established the Hadejia-Nguru wetland conservation project
            </p>

            <p className='mt-4'>
              <a href='/' className='font-bold italic text-green'>
                Learn More
              </a>
            </p>
          </div>
        </div>
      </div>

      <NatureDiv className='bg-center bg-no-repeat bg-cover min-h-full text-white'>
        <div className='bg-gray-900 bg-opacity-50 py-32 md:px-0 px-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-y-8 items-center'>
              <div className='block'>
                <p>
                  Green Recovery Nigeria Is Our Initiative To Restore
                  <br />
                  Nigeria’s Forest Cover To A Minimum Of 25%
                  <br />
                  Over The Next 30 Years.
                </p>
                <p className='is-size-7'>
                  We are achieving this by restoring the mangroves and
                  reclaiming the deserts
                </p>
                <div className='flex items-end justify-center space-x-8 mt-4'>
                  <div className='flex flex-col text-center'>
                    <img alt='' src='/assets/images/icons/bundle-cash.svg' />
                    <span>FUND NEEDED</span>
                    <hr className='h-0 my-2 border-0 border-t border-solid border-white' />
                    <span>&#8358; 10,000,000</span>
                  </div>
                  <div className='flex flex-col text-center'>
                    <img alt='' src='/assets/images/icons/money-1.svg' />
                    <span>FUND RAISED</span>
                    <hr className='h-0 my-2 border-0 border-t border-solid border-white' />
                    <span>&#8358; 2,000,000</span>
                  </div>
                  <div className='flex flex-col text-center'>
                    <img alt='' src='/assets/images/icons/tree.svg' />
                    <span>TREE PLANTED</span>
                    <hr className='h-0 my-2 border-0 border-t border-solid border-white' />
                    <span>150 Hectares</span>
                  </div>
                  <div className='flex flex-col text-center'>
                    <img alt='' src='/assets/images/icons/tree.svg' />
                    <span>TREE TO GO</span>
                    <hr className='h-0 my-2 border-0 border-t border-solid border-white' />
                    <span>1,000,000 Hectares</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NatureDiv>

      <div className='max-w-7xl mx-auto py-16 md:px-0 px-8'>
        <div className='text-center mb-12'>
          <h1 className='font-bold text-xl text-gray-600'>NEWS AND UPDATE</h1>
          <span className='text-sm'>
            Latest information on programmes and events.
          </span>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 md:gap-x-16 gap-y-8'>
          {data.blogs.map((b, i) => (
            <div
              key={i}
              className='max-w-md rounded overflow-hidden h-full shadow-lg'
            >
              <img
                className='w-full'
                src={b.image}
                alt='Sunset in the mountains'
              />
              <div className='px-6 py-4'>
                <div className='font-bold text-lg mb-2'>{b.title}</div>
                <p className='text-gray-700 text-base mb-4'>{b.description}</p>

                <time dateTime='2016-1-1' className='flex items-center'>
                  <FiCalendar className='text-green -mt-0.5 mr-2' />
                  <span className='text-green font-medium text-sm'>
                    11:09 PM — 1 Jan 2016
                  </span>
                </time>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='max-w-7xl mx-auto py-6 md:px-0 px-8'>
        <div className='text-center mb-6'>
          <h1 className='font-bold text-2xl'>UPCOMING EVENTS</h1>
          <span className='text-sm'>
            Notices of future events and programmes.
          </span>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-y-8 items-center'>
          <div className=''>
            <div className='w-96 bg-green text-white px-4 py-2 mb-4 font-bold'>
              Upcoming
            </div>
            <div className='block mb-4'>
              <h3 className='text-lg font-bold my-2'>
                World Migratory Bird Day
              </h3>
              <p className='text-base'>
                World Migratory Bird Day is an annual event to raise awareness
                on bird migration and the importance of protecting the flyways
                and habitats used by birds during migration. Migration is a
                regular and seasonal movement of birds between their breeding...
              </p>
            </div>
            <div className='flex flex-col justify-center space-y-2'>
              <span className='flex items-center'>
                <FiCalendar className='text-gray-600 mr-2' />
                <span className='text-gray-600 text-sm'>
                  11:09 PM - 1 Jan 2016
                </span>
              </span>
              <span className='flex items-center'>
                <ImLocation className='text-gray-600 mr-2' />
                <span className='text-gray-600 text-sm'>Various Locations</span>
              </span>
            </div>
          </div>
          <div className=''>
            <img src='/assets/images/nature/event.png' alt='' />
          </div>
        </div>
      </div>

      <div className='bg-green-dark text-white'>
        <Event className='w-full bg-no-repeat bg-center bg-cover'></Event>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-x-0 items-start'>
          <EventLeft className='bg-no-repeat bg-cover text-white p-24 md:min-h-full'>
            <div className='block mb-6'>
              <h3 className='text-lg font-bold mt-1'>
                International Day for the Conservation of Mangrove Ecosystem
              </h3>
              <p className='text-sm'>
                Nigeria has a third of the entire mangrove in Africa – the
                largest in the continent and the third largest in the world.
                Mangroves are important carbon sinks and help cushion the impact
                of coastal storms, waves and erosions. They are one of the most
                productive and threatened ecosystems.
              </p>
            </div>
            <div className='flex items-center space-x-8'>
              <span className='flex items-center'>
                <FiCalendar className='text-gray-200 mr-2' />
                <strong className='text-gray-200 text-sm'>
                  11:09 PM - 1 Jan 2016
                </strong>
              </span>
              <span className='flex items-center'>
                <ImLocation className='text-gray-200 mr-2' />
                <strong className='text-gray-200 text-sm'>
                  Various Locations
                </strong>
              </span>
            </div>
          </EventLeft>
          <EventRight className='bg-no-repeat bg-cover text-white p-24 md:min-h-full'>
            <div className='block mb-6'>
              <h3 className='text-lg font-bold mt-1'>
                Launching of Green Recovery Nigeria
              </h3>
              <p className='text-sm'>
                The Green Recovery Nigeria (GRN) is an initiative of the
                Nigerian Conservation Foundation (NCF) and an intervention model
                to institute local actions that seek to retain a significant
                proportion of Nigeria’s landmass under forest.
              </p>
            </div>
            <div className='flex items-center space-x-8'>
              <span className='flex items-center'>
                <FiCalendar className='text-gray-200 mr-2' />
                <strong className='text-gray-200 text-sm'>
                  11:09 PM - 1 Jan 2016
                </strong>
              </span>
              <span className='flex items-center'>
                <ImLocation className='text-gray-200 mr-2' />
                <strong className='text-gray-200 text-sm'>
                  Various Locations
                </strong>
              </span>
            </div>
          </EventRight>
        </div>
      </div>

      <div className='max-w-7xl mx-auto py-16'>
        <div className='text-center mb-12'>
          <h1 className='font-bold text-3xl'>OUR TESTIMONIALS</h1>
          <hr className='w-28 my-2 mx-auto border-t-4 border-solid border-green-700' />
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-y-8 items-start'>
          {data.testimonials.map((ts, i) => (
            <div
              key={i}
              className='max-w-md rounded overflow-hidden h-full text-center'
            >
              <img
                className='mx-auto'
                src={ts.avatar}
                alt='Sunset in the mountains'
              />
              <div className='px-6 py-4'>
                <div className='text-sm text-gray-700 mb-2'>{ts.text}</div>
                <p className='flex flex-col justify-center'>
                  <span className='font-bold text-sm mb-1'>{ts.name}</span>
                  <span className='text-xs'>{ts.title}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full bg-green-dark relative'>
        <div className='grid md:grid-cols-2 grid-cols-1 items-center'>
          <div className=''>
            <img
              src='/assets/images/nature/contact.png'
              alt=''
              className='w-full h-full'
            />
          </div>
          <div className='block p-16'>
            <div className='mb-8'>
              <h2 className='text-2xl font-bold text-white text-center'>
                Leave us a Message
              </h2>
            </div>
            <form>
              <div className='grid grid-cols-2 gap-x-8 mb-6'>
                <div>
                  <label className='text-white mb-2 block'>Full Name</label>
                  <div>
                    <input
                      className='p-1.5 w-full bg-transparent focus:outline-none rounded text-white border border-solid border-gray-200 focus:ring focus:border-green-light'
                      placeholder='e.g. John Doe'
                      type='text'
                    />
                  </div>
                </div>
                <div>
                  <label className='text-white mb-2 block'>Email</label>
                  <div>
                    <input
                      className='p-1.5 w-full bg-transparent focus:outline-none rounded text-white border border-solid border-gray-200 focus:ring focus:border-green-light'
                      placeholder='Email Address'
                      type='email'
                    />
                  </div>
                </div>
              </div>
              <div className='mb-8'>
                <div>
                  <label className='text-white mb-2 block'>Message</label>
                  <div>
                    <textarea
                      rows={5}
                      className='p-1.5 w-full bg-transparent focus:outline-none rounded text-white border border-solid border-gray-200 focus:ring focus:border-green-light'
                      placeholder='Drop a message...'
                    />
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <button className='bg-green hover:bg-green-800 text-white font-bold py-2 px-16 mt-6'>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='w-full bg-white relative'>
        <img
          src='/assets/images/bg/white-bg.png'
          alt=''
          className='w-full absolute -top-28'
        />
        <div className='max-w-7xl mx-auto py-16 md:px-0 px-8'>
          <div className='mb-6'>
            <h1 className='font-medium text-xl'>NCF SPONSORS</h1>
            <hr className='h-1 bg-transparent border-0 border-t border-solid border-gray-200 my-2' />
          </div>
          <div className=''>
            <Slider>
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                className='mySwiper'
              >
                <SwiperSlide>
                  <img src='/assets/images/brands/access-bank.png' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src='/assets/images/brands/chevron.png' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src='/assets/images/brands/cap-plc.png' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src='/assets/images/brands/ecobank.png' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src='/assets/images/brands/access-bank.png' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src='/assets/images/brands/chevron.png' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src='/assets/images/brands/cap-plc.png' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src='/assets/images/brands/ecobank.png' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src='/assets/images/brands/ecobank.png' alt='' />
                </SwiperSlide>
              </Swiper>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
