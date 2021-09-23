import React from 'react';
import EnvironSlider from './banners/EnvironSlider';
import { SocialTabs } from '@nfc';
import { Slider } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const bullet = '/assets/images/icons/bullet.svg';

function Community() {
  return (
    <div>
      <EnvironSlider />

      <div className='bg-white py-32'>
        <div className='max-w-7xl mx-auto md:px-0 px-8'>
          <div className='mb-8'>
            <h1 className='font-black text-2xl tracking-tight text-green uppercase mb-12'>
              OUR COMMUNITY
            </h1>

            <h1 className='font-bold text-xl text-gray-800 mb-4'>
              Corporate organisations
            </h1>
            <hr className='border-b border-gray-200 mx-auto border-0' />
          </div>

          <Slider>
            <Swiper
              slidesPerView={2}
              spaceBetween={15}
              slidesPerGroup={2}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className='mySwiper'
            >
              <SwiperSlide>
                <img src='/assets/images/animals/hippopotamus.png' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='/assets/images/animals/hippopotamus.png' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='/assets/images/animals/hippopotamus.png' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='/assets/images/animals/hippopotamus.png' alt='' />
              </SwiperSlide>
            </Swiper>
          </Slider>
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='max-w-7xl mx-auto py-12 md:px-0 px-8'>
          <div className='text-right mb-6'>
            <h1 className='font-bold text-2xl tracking-tight text-right text-green uppercase'>
              STRENGTHENING NCF/CAPACITY BUILDING
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='md:col-span-4 col-span-12'>
              <img src='/assets/images/groups/capacity-building.png' alt='' />
            </div>
            <div className='mt-6 md:col-span-8 col-span-12'>
              <p className='text-base mb-4'>
                Our effort at moving the needle towards achieving our vision,
                mission and strategic plans is hinged on building capacities.
                Firstly, within the organisation as well as with key
                stakeholders.
              </p>

              <ul className='w-full rounded-lg -ml-3 mb-4 text-gray-800'>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    Our people are carefully selected to ensure we have
                    competent, self-motivated and passionate work force.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    Their individual capacities are enhanced through trainings,
                    seminars and workshops.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    The Foundation’s partnership with global conservation
                    organisations such as IUCN, WWF, RSPB and BirdLife
                    International provides access to technical expertise, global
                    best practices, international donor agencies and wealth of
                    experience of these organisations.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    We engage other BirdLife International partners on peer
                    review to learn from each other’s experience in the
                    conservation field
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    Multinational organisations such as ECOWAS, European Union,
                    DFID, United States Fish and Wildlife Service, UNDP and a
                    host of others facilitate linkages to governments and
                    support us in catalyzing the development of guidelines and
                    standards to advance social innovations and integrate
                    research in their process.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    Capacity building is also directed at developing competence
                    of our stakeholders who are integral parts of delivering
                    conservation value. These include Local Conservation Groups,
                    Site Support Groups, coordinators and members of school
                    conservation clubs. With the above in mind, the Foundation
                    aspires to double its current revenue by 2025.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='max-w-7xl mx-auto py-12 md:px-0 px-8'>
          <div className='text-right mb-6'>
            <h1 className='font-bold text-2xl tracking-tight text-left text-green uppercase'>
              FAITH GROUPS - Nigerian Interfaith Initiative on the Environment
              (NIFIE)
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='md:col-span-4 col-span-12'>
              <img src='/assets/images/groups/faith-group.png' alt='' />
            </div>
            <div className='mt-6 md:col-span-8 col-span-12'>
              <p className='text-base mb-4'>
                Faith Groups have been identified as important stakeholders in
                the environment space with many groups taking the front seat in
                matters of environment
              </p>

              <ul className='w-full rounded-lg -ml-3 mb-4 text-gray-800'>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    In 2015, the Catholic Church came up with Laudato si', the
                    second encyclical of Pope Francis. The encyclical has the
                    subtitle "On Care for Our Common Home" where the Pope
                    laments environmental degradation and global warming and
                    calls all people of the world to take "swift and unified
                    global action”.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    Many teachings abound in Islam on environmental stewardship.
                    Principles such as Tauhid (Unity); Fitra (Creation); Mizan
                    (Balance); and Khalifa (Stewardship) are the foundation for
                    the inter-links between environmental protection and Islam
                    belief. Hima (Sustainable management); Harim (protection);
                    Waqf (Trust Fund); and Hisba (Enforcement) are the
                    approaches or mechanisms that Muslim societies have employed
                    to observe and implement the tenets of these four principles
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    NCF works with diverse communities of faith groups such as
                    Catholic Church, Anglican Communion, NASFAT, Da’wah
                    Coordinating Council of Nigeria, National Council of Muslim
                    Youth Organisations, Redeemed Christian Church of God,
                    Pentecostal Fellowship of Nigeria, Soka Gakkai International
                    (SGI) amongst others.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    Currently, we are mobilising a coalition of these faith
                    groups under the umbrella of Nigerian Interfaith Initiative
                    for the Environment (NIFIE
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='max-w-7xl mx-auto py-12 md:px-0 px-8'>
          <div className='text-right mb-6'>
            <h1 className='font-bold text-2xl tracking-tight text-right text-green uppercase'>
              SITE SUPPORT GROUPS (SSGs) AND LOCAL COMMUNITY GROUPS (LCGs)
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='md:col-span-4 col-span-12'>
              <img src='/assets/images/groups/site-support-group.png' alt='' />
            </div>
            <div className='mt-6 md:col-span-8 col-span-12'>
              <p className='text-base mb-4'>
                Sustainability of projects, programme and other interventions in
                communities are critical for lasting and meaningful outputs.
                Communities are the direct beneficiaries of our projects
              </p>

              <ul className='w-full rounded-lg -ml-3 mb-4 text-gray-800'>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    NCF has an agelong culture of partnering with Local
                    Conservation Groups in carrying out projects, drawing from
                    their knowledge of the environment to accomplish
                    conservation goals while also integrating these LCG’s as
                    partners in progress. This helps to instill in them, a sense
                    of ownership.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    Successes recorded in many of the tree planting projects is
                    because the seedlings are nurtured to maturity by Local
                    Conservation Groups and Site Support Groups. The knowledge
                    that it takes years for trees to grow or for some projects
                    to be delivered, bolsters the importance of the SSG and the
                    LCG’s.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    We establish Site Support Groups and are resourced to
                    sustain the achievements recorded at project sites. This has
                    been successfully demonstrated in the case Hadejia-Nguru
                    where we have used the Site Support Group to maintain
                    presence, carry out awareness campaign and engagement with
                    the community.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    In the same vein Ebrobaken Eco Guards, a Local Conservation
                    Group established in 2018 have been in the forefront of
                    providing protection for the migratory bird species in the
                    Afi Mountain Sanctuary in Cross River State.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    Recently, a Local Conservation Group, the Gashaka
                    Biodiversity Conservation Initiative, was established as an
                    autonomous community group by residents of Gashaka community
                    to support the conservation efforts of NCF at the
                    Gashaka-Gumti National Park.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='max-w-7xl mx-auto py-12 md:px-0 px-8'>
          <div className='text-right mb-6'>
            <h1 className='font-bold text-2xl tracking-tight text-left text-green uppercase'>
              MOBILISING CORPORATE ORGANISATIONS AND INDIVIDUAL MEMBERS
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='md:col-span-4 col-span-12'>
              <img src='/assets/images/groups/mobilise-corporate.png' alt='' />
            </div>
            <div className='mt-6 md:col-span-8 col-span-12'>
              <p className='text-base mb-4'>
                Corporate organisations have been the backbone of the Foundation
                over the years. Global Conservation organisations such as WWF,
                IUCN and RSPB provide access to expertise and joint project
                funding
              </p>

              <ul className='w-full rounded-lg -ml-3 mb-4 text-gray-800'>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    Many corporate organisations in Nigeria have demonstrated
                    commitment towards conservation by partnering with us for
                    the establishment and maintenance of conservation reserves
                    such as the renowned Lekki Conservation Centre (Chevron
                    Nigeria Limited), Becheve Nature Reserve (A.P. Leventis),
                    Finima Nature Park (Nigerian Liquefied Natural Gas) and
                    Abuja Conservation Centre (Total E & P).
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    Other organisations have committed to projects like waste
                    management, environmental education, policy advocacy,
                    awareness campaign, corporate membership etc.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    A landmark outcome of our engagement with corporate
                    organisations was the Nigerian Business for Nature workshop
                    where coalition of companies across various sectors agreed
                    to take actions for biodiversity conservation in their
                    operations. This was supported by the WWF’s New Deal for
                    Nature and People.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    Finally, individuals who are passionate about the
                    environment are our largest community through membership
                    subscription, donation and bequest. With a strength of over
                    5,000, NCF is a strong membership based organisation.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='max-w-7xl mx-auto py-12 md:px-0 px-8'>
          <div className='text-right mb-6'>
            <h1 className='font-bold text-2xl tracking-tight text-left text-green uppercase'>
              YOUTH MOBILISATION
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='md:col-span-4 col-span-12'>
              <img src='/assets/images/groups/youth-mobilization.png' alt='' />
            </div>
            <div className='mt-6 md:col-span-8 col-span-12'>
              <p className='text-base mb-4'>
                The large population of Nigerian youth, their diversity,
                resilience and knowledge are important community we partner with
                towards achieving the sustainable development goals.
              </p>

              <ul className='w-full rounded-lg -ml-3 mb-4 text-gray-800'>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    We have worked with youth groups across communities,
                    religious and academic institutions.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    For many decades, the youths have remained an integral part
                    of NCF projects, activities, events, awareness campaign,
                    social media engagements, rallies, membership (where three
                    quarters of total members are youths) and volunteering. In
                    effect, they are the most vibrant segment that we engage in
                    propagating conservation messages.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    Our Environmental education activities provide platforms
                    such as school conservation clubs in secondary schools and
                    tertiary institutions to develop capacities of students in
                    sustainable environmental management and practices.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    The youth have taken the lead in the yearly climate strike –
                    a protest rally to demand action be taken to address climate
                    change.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    With funding from the country’s Nationally Determined
                    Contribution and support from the governments of Germany and
                    Spain, we worked with over 1,000 youths from 21 institutions
                    and 12 youth-led initiatives to produce the Climate Change
                    Youth Action Manual in 2020.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    In 2020, 10 of the youth we nominated were awarded the Top
                    100 Conservation Leaders in Africa
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='max-w-7xl mx-auto py-12 md:px-0 px-8'>
          <div className='text-right mb-6'>
            <h1 className='font-bold text-2xl tracking-tight text-left text-green uppercase'>
              STRATEGIC PARTNERS
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='mt-6 md:col-span-8 col-span-12'>
              <p className='text-base mb-4'>
                NCF is affiliated to renowned global conservation organisations.
                This relationship has remained crucial since inception and
                fosters sharing ideas, joint project development and funding.
              </p>

              <ul className='w-full rounded-lg -ml-3 mb-4 text-gray-800'>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    NCF is an associate of World Wildlife Fund for Nature (WWF),
                    a partner to BirdLife International and a member of the
                    World Conservation Union (IUCN). These strategic
                    partnerships have helped in enhancing the Foundation’s
                    capacity and technical know-how.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    Our strategic partners offer opportunity to operate across
                    the continent and globally through a network of
                    organisations in different countries.
                  </span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img src={bullet} className='mr-2 flex-none mt-0.5' alt='' />
                  <span>
                    Crucially, the strategic partners provide institutional
                    support to the Foundation and collaborate on projects.
                  </span>
                </li>
              </ul>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <div className='grid grid-cols-2 gap-x-8'>
                <img src='/assets/images/partners/birdlife-white.png' alt='' />
                <img src='/assets/images/partners/wwf-white.png' alt='' />
                <img src='/assets/images/partners/iucn-white.png' alt='' />
              </div>
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

export default Community;
