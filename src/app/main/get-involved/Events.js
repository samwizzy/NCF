import React from 'react';
import { SocialTabs } from '@nfc';
import data from './data/mock.json';
import HomeSlider from './components/slider/Slider';

function Events() {
  return (
    <div>
      <HomeSlider />
      <div className='w-full bg-gray-100 py-32'>
        <div className='max-w-5xl mx-auto md:px-0 px-8'>
          <div className='grid md:grid-cols-1 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='block'>
              <h1 className='text-3xl font-bold text-green mb-6'>Events</h1>
              <p className='text-base mb-4'>
                One of the ways you can support the Foundation is through our
                events. We organise series of events aimed at bridging the
                awareness gap amongst the general public. These events equally
                serve as advocacy tools for policy change. As an environmental
                organisations, events centre on the environment and executed
                along the United Nations international days.
              </p>
              <p className='text-base'>
                Corporate organisations and individuals who share our passion in
                the environment have found these events creditable and partner
                with us for success. The partnership is acknowledged as such
                organisation’s contribution towards the environment.Some of the
                events we host yearly are:
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white py-16'>
        <div className='max-w-7xl mx-auto md:px-0 px-8'>
          <div className='text-left mb-6'>
            <h1 className='font-bold text-2xl text-green'>
              World Wetlands Day
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='mt-6 md:col-span-8 col-span-12'>
              <p className='font-base mb-4'>
                World Wetlands Day is commemorated on 2nd February each year to
                raise global awareness about the vital role of wetlands for
                people and our planet. This day also marks the date of the
                adoption of the Convention on Wetlands on 2 February 1971, in
                the Iranian city of Ramsar on the shores of the Caspian Sea.
              </p>
              <p className='font-base mb-4'>
                Wetlands are land areas that are saturated or flooded with water
                either permanently or seasonally. Inland wetlands include
                marshes, ponds, lakes, fens, rivers, floodplains, and swamps.
                Coastal wetlands include saltwater marshes, estuaries,
                mangroves, lagoons and even coral reefs.
              </p>
              <p className='font-base'>
                Activities during the World Wetlands Day include:
              </p>

              <ul className='w-full rounded-lg mt-2 mb-3 text-gray-800 list-disc ml-4'>
                <li className='p-1 pl-3'>Conference</li>
                <li className='p-1 pl-3'>Wetland clean-up day</li>
                <li className='p-1 pl-3'>Photo or essay competition</li>
                <li className='p-1 pl-3'>Public awareness</li>
                <li className='p-1 pl-3'>Art competition for students</li>
              </ul>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <img src='/assets/images/groups/wetland-day.png' alt='' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white pt-8 pb-8'>
        <div className='max-w-7xl mx-auto md:px-0 px-8'>
          <div className='text-right mb-4'>
            <h1 className='font-bold text-2xl text-right text-green'>
              World Migratory Bird Day
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>
          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 gap-y-8 items-start'>
            <div className='md:col-span-4 col-span-12'>
              <img src='/assets/images/groups/bird-day.png' alt='' />
            </div>
            <div className='md:col-span-8 col-span-12 mt-4'>
              <p className='text-base mb-4'>
                WMBD is an annual event for raising awareness on bird migration
                and the importance of protecting the flyways and habitats used
                by birds during migration.
              </p>
              <p className='text-base mb-4'>
                The event holds across the country, and particularly in sites
                designated Important Bird Area where wintering birds and
                European migrants rely for survival.
              </p>
              <p className='text-base'>
                Activities during the World Migratory Bird Day involve community
                engagement (where residents are enlightened on yearly birds
                migration and what they can do to preserve flyways), birding
                expedition, clean up exercise, environmental education and
                commemorative tree planting exercise.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white pt-8 pb-8'>
        <div className='max-w-7xl mx-auto md:px-0 px-8'>
          <div className='text-right mb-8'>
            <h1 className='font-bold text-2xl text-green uppercase'>
              World Environment Day
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>
          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 gap-y-8 items-start'>
            <div className='md:col-span-8 col-span-12 mt-4'>
              <p className='text-base mb-4'>
                World Environment Day is an international environmental
                awareness day celebrated every 5th of June. It is organised by
                the United Nations Environment Programme (UNEP) to encourage
                global awareness for the protection of the environment, as well
                as call for actions to promote environmental sustainability.
              </p>
              <p className='text-base mb-4'>
                As the biggest annual event for positive environmental action,
                the day focuses on environmental concerns ranging from
                pollution, global warming, sustainable food production and
                protection of wildlife.
              </p>
              <p className='text-base mb-4'>
                Every year, we use the event to shore up public engagement and
                advocacy about the state of the environment and deliberate on
                what local actions are necessary to ensure global environmental
                sustainability.
              </p>

              <p className='text-base mb-4'>
                Some of the activities carried out during World Environment Day
                are:
              </p>

              <ul className='w-full rounded-lg mt-2 mb-6 -ml-3 text-gray-800'>
                {data.activities.map((activity, i) => (
                  <li className='flex items-start p-1 pl-3'>
                    <img
                      src='/assets/images/icons/bullet.svg'
                      className='mr-2 flex-none mt-0.5'
                      alt=''
                    />
                    <span>{activity.name}</span>
                  </li>
                ))}
              </ul>
              <p>
                We will be engaging more communities along the Nigerian
                coastline as a way of protecting other species such as the
                African Manatee Trichechus senegalensis, as well as whales that
                sometime beach (Cetacean stranding).
              </p>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <img src='/assets/images/groups/world-env-day.png' alt='' />
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto py-16 md:px-0 px-8 relative z-10'>
        <div className='text-left mb-4'>
          <h2 className='font-bold text-2xl text-right text-green uppercase'>
            World Habitat Day
          </h2>
          <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-200' />
        </div>
        <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 gap-y-8 items-center'>
          <div className='md:col-span-4 col-span-12'>
            <img src='/assets/images/nature/wetland.png' alt='' />
          </div>
          <div className='md:col-span-8 col-span-12'>
            <p className='text-base mb-4'>
              The World Habitat Day is a global environmental event celebrated
              every first Monday of October to reflect on the state of our towns
              and cities, and on the basic right of all for adequate shelter. It
              is also intended to remind the world that we all have the power
              and the responsibility to shape the future of our cities and
              towns.
            </p>
            <p className='text-base mb-4'>
              NCF joins the rest of the globe to celebrate World Habitat Day
              with an Art Competition to help promote the theme every year.
            </p>
            <p className='text-base'>
              Nigerian Conservation Foundation (NCF) has successfully
              commemorated this day annually in Nigeria with the objective of
              building creativity among youths through outdoor experience that
              connects classroom knowledge with nature.
            </p>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto py-16 md:px-0 px-8 relative z-10'>
        <div className='text-left mb-4'>
          <h2 className='font-bold text-2xl text-green uppercase'>
            Annual Green Ball
          </h2>
          <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-200' />
        </div>
        <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 gap-y-8 items-center'>
          <div className='md:col-span-8 col-span-12'>
            <p className='text-base mb-4'>Annual Green Ball</p>
            <p className='text-base mb-4'>
              The Green Ball is traditionally a high-level black-tie event where
              business leaders, High Net Worth individuals and policy makers
              meet to share their passion for the environment in a relaxed
              atmosphere whilst enjoying exquisite cuisine, nice music and
              stimulating conversations.
            </p>
            <p className='text-base mb-4'>
              As the foremost environmental NGO, we have been hosting the Green
              Ball annually to generate awareness and raise funds for some of
              our projects.
            </p>
            <p className='text-base'>
              The event’s yearly theme reflects clear and present environmental
              challenges that we seek to fund solutions to. Many corporate
              organisations and passionate individuals have found the Green Ball
              valuable towards contributing to the environment and have been
              leading in sponsoring the event.
            </p>
          </div>
          <div className='md:col-span-4 col-span-12'>
            <img src='/assets/images/groups/green-ball.png' alt='' />
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

export default Events;
