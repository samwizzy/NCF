import React from 'react';
import EnvironSlider from './banners/EnvironSlider';
import { ImLocation } from 'react-icons/im';
import { SocialTabs } from '@nfc';

function EnvironmentEducation() {
  return (
    <div>
      <EnvironSlider />

      <div className='w-full bg-gray-100 py-16 relative'>
        <div className='max-w-7xl mx-auto pt-16 md:px-0 px-8'>
          <div className='text-left mb-4'>
            <h1 className='text-2xl font-bold tracking-tight text-green uppercase'>
              Environmental Education
            </h1>
          </div>
          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='md:col-span-8 col-span-12 md:pt-4'>
              <p className='text-base mb-4'>
                The goal of the Environmental Education Unit is raising
                awareness on environmental issues with a view to causing
                positive behavioural change among the people. Though we work
                with the broad spectrum of the public, the focus is on schools –
                primary, secondary & tertiary institutions where we work to
                develop didactic curriculum and activities that promote
                conservation.
              </p>

              <p className='text-base'>
                Our Environmental Education activities comprises:
              </p>
            </div>
            <div className='md:col-span-4 col-span-12'></div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='max-w-7xl mx-auto pt-12 pb-4 md:px-0 px-8'>
          <div className='text-left mb-6'>
            <h1 className='font-bold text-2xl tracking-tight text-right text-green uppercase'>
              School Conservation Clubs
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0'>
            <div className='col-span-4'>
              <img src='/assets/images/groups/school-clubs.png' alt='' />
            </div>
            <div className='mt-6 col-span-8'>
              <p className='text-base mb-4'>
                The schools are crucial partners in creating awareness as the
                young pupils are the leaders and decision makers of tomorrow. We
                partner with schools with the consent of the authorities to
                establish conservation clubs with the purpose of raising
                environmentally conscious students. In the long run, we help
                develop and nurture pupil’s interest in nature.
              </p>
              <p className='text-base'>
                School conservation clubs are opened to public and private
                primary and secondary schools.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-gray-50'>
        <div className='max-w-7xl mx-auto py-12 md:px-0 px-8'>
          <div className='text-left mb-6'>
            <h1 className='font-bold text-2xl tracking-tight text-left text-green uppercase'>
              Arts & Essay Competition
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='mt-6 md:col-span-8 col-span-12'>
              <p className='text-base mb-4'>
                This is our didactic approach at promoting environmental
                conservation amongst primary and secondary schools. It provides
                a platform for students to demonstrate understanding while
                expressing their creativity. The competitions themes and topics
                center on the environment with each edition focusing on a
                thematic area or burning issue.
              </p>

              <p className='text-base'>
                Arts & Essay competitions hold across the 36 states of the
                federation and the FCT in collaboration with the relevant
                education authorities. Fabulous prizes are awarded to winning
                schools.
              </p>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <img src='/assets/images/groups/arts-essay.png' alt='' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='max-w-7xl mx-auto py-12 md:px-0 px-8'>
          <div className='text-left mb-6'>
            <h1 className='font-bold text-2xl tracking-tight text-left text-green uppercase'>
              Training and Workshop
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='mt-6 md:col-span-8 col-span-12'>
              <p className='text-base mb-4'>
                The unit engages in capacity development for instructors,
                individuals and organisations whose roles and output revolve
                around the environment. We have modules that cater for broad
                spectrum of environmental learning outcomes which include
                conservation, pollution, recycling, tree planting, running
                school conservation clubs, how to engage communities in viable
                projects etc.
              </p>

              <p className='text-base'>
                Trainings and workshops are hosted on-site at the Lekki
                Conservation Centre, as well as off-site.
              </p>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <img src='/assets/images/groups/training-workshop.png' alt='' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-gray-50'>
        <div className='max-w-7xl mx-auto py-12 md:px-0 px-8'>
          <div className='text-left mb-6'>
            <h1 className='font-bold text-2xl tracking-tight text-left text-green uppercase'>
              School Visits
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='mt-6 md:col-span-8 col-span-12'>
              <p className='text-base mb-4'>
                We receive schools and their students in all project sites
                across the country and engage them in environmental education
                through direct field experience and lectures.{' '}
              </p>
              <p className='text-base'>
                This has been a vital channel of reaching such young, exciting
                audience and modifying their behaviours to appreciate and care
                about nature.
              </p>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <img src='/assets/images/groups/arts-essay.png' alt='' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='max-w-7xl mx-auto py-12 md:px-0 px-8'>
          <div className='text-left mb-6'>
            <h1 className='font-bold text-2xl tracking-tight text-left text-green uppercase'>
              Community Engagement
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='md:col-span-4 col-span-12'>
              <img
                src='/assets/images/groups/community-engagement.png'
                alt=''
              />
            </div>
            <div className='mt-6 md:col-span-8 col-span-12'>
              <p className='text-base mb-4'>
                We strive to take message to communities and general public
                through sensitisation campaigns, information dissemination,
                participatory activities and engagement.
              </p>

              <p className='text-base'>
                Community engagement usually focuses does not focus only on
                campaign, but equally, affirmative actions through direct
                intervention and support that ameliorate conditions of community
                dwellers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-gray-50'>
        <div className='max-w-7xl mx-auto py-12 md:px-0 px-8'>
          <div className='text-left mb-6'>
            <h1 className='font-bold text-2xl tracking-tight text-left text-green uppercase'>
              Public Engagement
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='mt-6 md:col-span-8 col-span-12'>
              <p className='text-base mb-4'>
                International days are occasions to educate the public on issues
                of concern, to mobilize political will and resources in
                addressing global problems, and to celebrate and reinforce
                achievements of humanity. The Unit rallies support and
                participation of NCF members, schools conservation clubs, host
                communities, corporate organisations, government officials,
                researchers and other dignitaries for these events. These
                include:
              </p>

              <ul className='w-full rounded-lg -ml-3 mb-4 text-gray-800'>
                <li className='flex items-start p-1 pl-3'>
                  <ImLocation
                    size={18}
                    className='text-green mr-2 mt-0.5 flex-none transform -rotate-90'
                  />
                  <span>Word Wetland Day</span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <ImLocation
                    size={18}
                    className='text-green mr-2 mt-0.5 flex-none transform -rotate-90'
                  />
                  <span>World Migratory Bird Day</span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <ImLocation
                    size={18}
                    className='text-green mr-2 mt-0.5 flex-none transform -rotate-90'
                  />
                  <span>Word Environment Day</span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <ImLocation
                    size={18}
                    className='text-green mr-2 mt-0.5 flex-none transform -rotate-90'
                  />
                  <span>World Habitat Day</span>
                </li>
              </ul>

              <p className='text-base'>
                These events are supported by corporate organisations as
                contributions to their corporate social responsibility. For
                sponsorship, click here.
              </p>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <img src='/assets/images/groups/public-engagement.png' alt='' />
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

export default EnvironmentEducation;
