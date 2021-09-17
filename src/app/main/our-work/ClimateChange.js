import React from 'react';
import { SocialTabs } from '@nfc';
import ClimateSlider from './banners/ClimateSlider';

function ClimateChange() {
  return (
    <div>
      <ClimateSlider />

      <div className='w-full bg-gray-100 py-16 relative'>
        <div className='max-w-7xl mx-auto pt-16 md:px-0 px-8'>
          <div className='text-left mb-6'>
            <h1 className='text-2xl font-bold tracking-tight text-green mb-6 uppercase'>
              Climate Advocacy
            </h1>
          </div>
          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='md:col-span-8 col-span-12 md:pt-8'>
              <p className='text-base'>
                NDC and Climate Policy Technical Support- NCF provide support
                for the national government on the review and implementation of
                the Nationally Determined Contributions (NDC) through
                strengthening climate policies like NAP and promoting its
                adoption by relevant stakeholders. In recent years NCF advocated
                for integration of nature-based solution into national climate
                action plans through nation-wide youth-driven march, rally,
                dialogues, high-level summits and workshops
              </p>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <img src='/assets/images/groups/climate-1.png' alt='' />
            </div>
          </div>
          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='md:col-span-8 col-span-12 md:pt-8'>
              <p className='text-base mb-4'>
                Government Support at Climate Change Conference of Parties -NCF
                as part of the national delegation to the UNFCCC Conference of
                Party support the government in climate negotiations through its
                participation while garnering more support through its network
                of partners for delivering national and regional engagement
              </p>
              <p className='italic'>
                NCF DG Dr. Muhtari Aminu-Kano, Key Staff of Department of
                Climate Change, and other national delegation after a Side Event
                at the UNFCCC COP 25 in Madrid, Spain.
              </p>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <img src='/assets/images/groups/climate-2.png' alt='' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='max-w-7xl mx-auto pt-12 pb-4 md:px-0 px-8'>
          <div className='text-left mb-6'>
            <h1 className='font-bold text-2xl tracking-tight text-green uppercase'>
              The Cross River Gorilla
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0'>
            <div className='mt-6 col-span-8'>
              <p className='text-base font-base'>
                NCF developed the first government-driven Climate Change Youth
                Action Manual targeting youth between ages 5-29yrs as an
                education tool Climate Change Youth Action Manual is an
                educational toolkit developed in Nigeria targeting youth and
                young adult between 5-30yrs aimed at empowering them to
                contribute climate actions to the delivery of the country’s
                Nationally Determined Contribution (climate plan). First of its
                kind government-led initiative for youth in Nigeria, the manual
                is engaging an estimated tens of thousands youth in rural,
                semi-urban, to urban areas to champion actions in eco-mobility
                and sustainable transportation, climate education, afforestation
                and reforestation, waste management, climate smart agriculture,
                renewable energy, Blue economy and Ocean conservation etc. In
                addition to this, the manual suggests practical step-by-step
                activities that will deliver the climate goals across these
                areas. Scoping exercise inform of dialogue was carried out
                across the 6 geopolitical zone involving 21 institutions,
                showcasing 12 youth-led initiatives, 6 partners and over 1000
                youth
              </p>
            </div>
            <div className='col-span-4'>
              <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                <div className='text-center'>
                  <img src='/assets/images/products/book-1.png' alt='' />
                  <button className='bg-green text-white py-1 px-3'>
                    Download here
                  </button>
                </div>
                <div className='text-center'>
                  <img src='/assets/images/products/book-2.png' alt='' />
                  <button className='bg-green text-white py-1 px-3'>
                    Download here
                  </button>
                </div>
                <div className='text-center'>
                  <img src='/assets/images/products/book-2.png' alt='' />
                  <button className='bg-green text-white py-1 px-3'>
                    Download here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='max-w-7xl mx-auto py-12 md:px-0 px-8'>
          <div className='text-left mb-6'>
            <h1 className='font-bold text-2xl tracking-tight text-left text-green uppercase'>
              Climate Action Project
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='mt-6 md:col-span-8 col-span-12'>
              <p className='text-base mb-4'>
                NCF pilots and promotes nature-based solution site management
                model with forest and wetlands conservation area across Nigeria.
                This conservation sites combines natural regeneration and
                restoration effort to improve mitigation and adaptive capacities
                of fragile ecosystems, vulnerable communities, while protecting
                species of conservation concern to reduce the impact of climate
                change. NCF climate change programme continuously assesses and
                quantifies the worth of carbon in these natural sink in
                accordance with the UNFCCC greenhouse gas emission measurement
                guidelines.
              </p>

              <p className='text-base italic'>
                Finima Nature Park, Bonny Island sinks 247,158.78MgTCO2e over
                20yrs alongside mangrove reforestation effort.
              </p>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <img src='/assets/images/groups/climate-action.png' alt='' />
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

export default ClimateChange;
