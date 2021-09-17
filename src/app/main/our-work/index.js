import React from 'react';
import { SocialTabs } from '@nfc';
import { ForestBg } from './styles';
import OurWorkSlider from './banners/OurWorkSlider';

function OurWork() {
  return (
    <div>
      <OurWorkSlider />

      <ForestBg className='w-full bg-gray-100 py-16 relative'>
        <div className='max-w-7xl mx-auto pt-16 md:px-0 px-8'>
          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='md:col-span-8 col-span-12'>
              <h1 className='text-3xl font-bold text-green mb-6 uppercase'>
                Forest Programme
              </h1>
              <p className='text-base'>
                The forest programme has its focus on conserving and recovering
                Nigeria’s forest cover which is being depleted at an alarming
                rate. As a response to this, NCF deliberately developed an
                Initiative – Green Recovery Nigeria (GRN), as the flagship
                programme of the Foundation. The goal of GRN is to help increase
                forest cover from its current state of about 4-7% to 25% by
                2047. The GRN Initiative is intended to harmonize actions
                targeted at rapid reversal of the loss of forest cover and
                consequently curbing the rapidly increasing threats to the
                natural environment as well as preventing the potentially
                drastic consequences for our planet. NCF is determined to build
                on more than three decades of conservation leadership and
                partnerships with government, corporate organisations,
                communities and other stakeholders. Typical consideration under
                GRN is the understanding of deforestation and livelihood. The
                project is hinged on 4 pillars:
              </p>

              <ul className='w-full rounded-lg text-gray-800 mt-8 md:-ml-3'>
                <li className='flex items-start p-1 pl-3'>
                  <img
                    src='/assets/images/icons/bullet.svg'
                    className='mr-2 flex-none mt-0.5'
                    alt=''
                  />
                  <span>Protected Area Expansion and Management</span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img
                    src='/assets/images/icons/bullet.svg'
                    className='mr-2 flex-none mt-0.5'
                    alt=''
                  />
                  <span>Forest Landscape Restoration</span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img
                    src='/assets/images/icons/bullet.svg'
                    className='mr-2 flex-none mt-0.5'
                    alt=''
                  />
                  <span>Sustainable Forest Management</span>
                </li>
                <li className='flex items-start p-1 pl-3'>
                  <img
                    src='/assets/images/icons/bullet.svg'
                    className='mr-2 flex-none mt-0.5'
                    alt=''
                  />
                  <span>Sustainable Livelihoods</span>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </ForestBg>

      <div className='w-full bg-white'>
        <div className='max-w-7xl mx-auto pt-8 pb-4 md:px-0 px-8'>
          <div className='text-left mb-6'>
            <h1 className='font-bold text-xl tracking-tight text-green uppercase'>
              Protected Area Management
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0'>
            <div className='mt-6 col-span-8'>
              <p className='text-base font-base'>
                This is our initiative inaugurated to protect Nigeria’s marine
                ecosystem. Though, with abundant biodiversity resources, this
                ecosystem has neither been systematically studied nor
                documented. The programme seek to achieve the following:
              </p>
            </div>
            <div className='col-span-4'></div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='max-w-7xl mx-auto py-8 md:px-0 px-8'>
          <div className='text-left mb-6'>
            <h1 className='font-black text-xl text-right text-gray-800'>
              Becheve Nature Reserve
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='md:col-span-5 col-span-12'>
              <img src='/assets/images/nature/becheve.png' alt='' />
            </div>
            <div className='mt-6 md:col-span-7 col-span-12'>
              <p className='text-base mb-4'>
                Becheve Nature Park is classic example of partnership in
                community forest management – jointly owned by 6 communities and
                farmed out to NCF to manage with active collaboration of the
                communities since 2003.
              </p>

              <p className='text-base'>
                The 132-hectares of lush forest that makes up the BNR and the
                adjoining Obudu plateau supports 31 of the 37 qualifying species
                placed under the Afro-tropical highlands biome species. Our
                activities include community engagement and mobilisation which
                often involve women and climate change, environmental education,
                biological monitoring, and active afforestation.{' '}
              </p>
              <p className='text-base'>
                As part of the ecotourism initiative of the Cross Rivers State
                Government (CRSG), Becheve was selected as one of the tourist
                sites in the State. In 2006, the CRSG erected a canopy walkway
                in the Reserve for tourists and visitors’ use. The project is
                supported by Leventis Foundation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-gray-50'>
        <div className='max-w-7xl mx-auto py-16 md:px-0 px-8'>
          <div className='text-left mb-6'>
            <h1 className='font-black text-xl text-left text-gray-800'>
              Finima Nature Park
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='mt-6 md:col-span-8 col-span-12'>
              <p className='text-base mb-4'>
                Established by the Nigerian Liquefied Natural Gas Company (NLNG)
                in 2001, the Finima Nature Park came from a consensus by the
                communities of Finima and Bonny in Rivers State, South – South,
                Nigeria to protect the forests for its integrity, biodiversity
                and the ecosystems services it provides for human settlements.
              </p>

              <p className='text-base mb-4'>
                Since 2011, The Nigerian Conservation Foundation have been
                managing the park having succeeded the Niger Delta Wetland
                Centre (NDWC). We consolidated the efforts of NDWC and built new
                frontiers for conservation, stronger community
                institutionalisation and injected renewed energy on research,
                biodiversity protection and public education.
              </p>
              <p className='text-base'>
                The 1000 hectares Park provides a golden opportunity to show
                genuine commitment of the people of the Niger Delta to
                contribute to environmental protection for the benefit of not
                only the indigenes of the area but as a place of pride for the
                people of the Niger Delta and Nigeria at large. It add value to
                biodiversity and enhance opportunities for sound environmental
                management and promote environmental education and research.
              </p>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <img src='/assets/images/nature/finima.png' alt='' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-gray-50'>
        <div className='max-w-7xl mx-auto py-16 md:px-0 px-8'>
          <div className='text-left mb-6'>
            <h1 className='font-black text-xl text-right text-gray-800'>
              Omo Forest Reserve
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='md:col-span-5 col-span-12'>
              <img src='/assets/images/nature/omo_forest.png' alt='' />
            </div>
            <div className='mt-6 md:col-span-7 col-span-12'>
              <p className='text-base mb-4'>
                Omo Forest Reserve hold the last remaining forest in
                South-Western Nigeria and it has been found to be biologically
                unique. Owned by the Ogun State Government, we act as technical
                partners and helped establish wildlife sanctuary within the
                reserve which we have been managing since 1989.
              </p>

              <p className='text-base mb-4'>
                The sanctuary serve to preserve the last population of African
                forest elephants Loxodonta africana cyclotis, the
                Nigerian-Cameroon chimpanzee Troglodytes ellioti, the white
                throat monkey Cercopithecus erythrogaster and the yellow-casqued
                hornbill Ceratogymna elata, all of which has been designated as
                threatened.
              </p>
              <p className='text-base'>
                The forest reserve is seriously threatened by logging, hunting,
                clearance for farmland and other human activities. Thus, apart
                from conservation activities which caters to afforestation and
                biodiversity monitoring, our roles equally involve advocacy,
                community engagement and environmental education.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='max-w-7xl mx-auto py-12 md:px-0 px-8'>
          <div className='text-left mb-6'>
            <h1 className='font-black tracking-tight text-xl text-left text-gray-800'>
              Lekki Conservation Centre
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='mt-6 md:col-span-7 col-span-12'>
              <p className='text-base mb-4'>
                The Lekki Conservation Centre has come to symbolise our
                successful conservation effort at the Nigerian Conservation
                Foundation. Lekki Conservation Centre showcases unique
                biodiversity, scenic, natural, scientific and recreational
                values of the coastal environment of the south-western Nigeria.
              </p>

              <p className='text-base'>
                Founded in 1990 as a flagship project, LCC was established to
                preserve the representative sample of vegetation and animals of
                the Lekki Peninsula. Today, the centre is renowned as an icon of
                nature conservation and pearl of ecotourism, twice scooping
                TripAdvisor awards. With over 250,000 tourists and visitors
                yearly, LCC has become a powerful resource centre providing
                environmental education, research, public engagement and policy
                advocacy amongst others while events such as the World
                Environment Day, World Wildlife Day are hosted at the Centre.
              </p>
            </div>
            <div className='md:col-span-5 col-span-12'>
              <img src='/assets/images/nature/lekki_conversative.png' alt='' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='max-w-7xl mx-auto py-12 md:px-0 px-8'>
          <div className='text-left mb-6'>
            <h1 className='font-black tracking-tight text-2xl text-left text-green uppercase'>
              FOREST LANDSCAPE RESTORATION
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='mt-6 md:col-span-7 col-span-12'>
              <p className='text-base mb-4'>
                NCF approaches Forest Landscape Restoration (FLR) from two
                principal areas – reforestation and afforestation. Examples of
                areas under FLR that NCF has carried out include:
              </p>

              <ul className='w-full rounded-lg mt-2 mb-3 text-gray-800'>
                <li className='flex items-start p-1 pl-3'>
                  <img
                    src='/assets/images/icons/bullet.svg'
                    className='mr-2 flex-none mt-0.5'
                    alt=''
                  />
                  <span>
                    Green Development: We look closely with Estate developers to
                    ensure that their development to set aside green areas while
                    developing. We have been successful in some major projects
                    prominent among which is the Abuja Technology Village Free
                    Zone which is poised to be poised to become Africa’s
                    preferred destination for technology research, incubation,
                    development and commercialisation across four (4) focus
                    sectors of Information and Communication Technology,
                    Biotechnology, Minerals Technology and Energy Technology.
                  </span>
                </li>
              </ul>
            </div>
            <div className='md:col-span-5 col-span-12'>
              <img src='/assets/images/nature/green-dev.png' alt='' />
            </div>
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='mt-6 md:col-span-7 col-span-12'>
              <ul className='w-full rounded-lg mt-2 mb-3 text-gray-800'>
                <li className='flex items-start p-1 pl-3'>
                  <img
                    src='/assets/images/icons/bullet.svg'
                    className='mr-2 flex-none mt-0.5'
                    alt=''
                  />
                  <span>
                    Green Development: We look closely with Estate developers to
                    ensure that their development to set aside green areas while
                    developing. We have been successful in some major projects
                    prominent among which is the Abuja Technology Village Free
                    Zone which is poised to be poised to become Africa’s
                    preferred destination for technology research, incubation,
                    development and commercialisation across four (4) focus
                    sectors of Information and Communication Technology,
                    Biotechnology, Minerals Technology and Energy Technology.
                  </span>
                </li>
              </ul>
            </div>
            <div className='md:col-span-5 col-span-12'>
              <img src='/assets/images/nature/community_farmers.png' alt='' />
            </div>
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='mt-6 md:col-span-7 col-span-12'>
              <ul className='w-full rounded-lg mt-2 mb-3 text-gray-800'>
                <li className='flex items-start p-1 pl-3'>
                  <img
                    src='/assets/images/icons/bullet.svg'
                    className='mr-2 flex-none mt-0.5'
                    alt=''
                  />
                  <span>
                    Promoting School Gardens: we work closely with schools to
                    promote gardens within their schools. Apart from providing
                    nutritional supplement for the school pupils, it provides a
                    field laboratory for Agricultural science to promote food
                    security. It also helps in greening the school environment
                    thereby improving the micro-climatic conditions of the
                    school.
                  </span>
                </li>
              </ul>
            </div>
            <div className='md:col-span-5 col-span-12'>
              <img src='/assets/images/nature/school_garden.png' alt='' />
            </div>
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8'>
            <div className='mt-6 md:col-span-7 col-span-12'>
              <ul className='w-full rounded-lg mt-2 mb-3 text-gray-800'>
                <li className='flex items-start p-1 pl-3'>
                  <img
                    src='/assets/images/icons/bullet.svg'
                    className='mr-2 flex-none mt-0.5'
                    alt=''
                  />
                  <span>
                    Encouraging Research Plots within Universities: We have
                    collaborations with universities to establish Green Areas
                    that can be used as conservation and research plots. We
                    currently have partnership with Nnamdi Azikiwe University
                    Awka and Nasarawa State University Keffi
                  </span>
                </li>
              </ul>
            </div>
            <div className='md:col-span-5 col-span-12'>
              <img src='/assets/images/nature/university_plot.png' alt='' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-gray-50 py-8'>
        <div className='max-w-7xl mx-auto pt-16 md:px-0 px-8'>
          <div className='text-right mb-4'>
            <h1 className='font-bold tracking-tight text-xl text-green uppercase'>
              Sustainable Forest Management
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>
          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 gap-y-8 items-center'>
            <div className='md:col-span-4 col-span-12'>
              <img src='/assets/images/nature/forest_mgt.png' alt='' />
            </div>
            <div className='md:col-span-8 col-span-12'>
              <p>
                Sustainable Forest Management (SFM) is a major component of the
                GRN Initiative. This is ensuring the proper and sustainable use
                of forest resources for the present and future generations. This
                approach considers innovation solutions partnering with
                corporate organizations, local communities and farmers. We
                conducted Community Based REDD+ projects in some communities in
                Boki Local Government Area of Cross River State, where community
                folks were organized into User Groups and Community Bye-Laws
                strengthened. We are working closely with corporate organization
                utilizing forest resources to adhere to strict standards that
                will promote SFM. Standards such as the Roundtable on
                Sustainable Palm Oil (RSPO).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white py-8 relative z-10'>
        <div className='max-w-7xl mx-auto pt-16 md:px-0 px-8'>
          <div className='text-right mb-4'>
            <h1 className='font-bold tracking-tight text-xl text-green uppercase'>
              Sustainable livelihoods
            </h1>
            <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
          </div>
          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 gap-y-8 items-center'>
            <div className='md:col-span-8 col-span-12'>
              <p className='mb-4'>
                Under the Sustainable Livelihoods of the GRN, we intentionally
                develop programmes that would help forest communities to live
                more independently on forest resources.
              </p>
              <p>
                Where they must do so, they do it sustainably. The component
                involves providing alternation or efficient source of energy,
                improving their farm production and providing equipment that
                will minimize post-harvest loss by improving the value chain of
                their farm produce. Processing plants, cooperative revolving
                loans, improved plant variety, energy efficient stoves etc have
                been providing for such forest dwelling communities
              </p>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <img
                src='/assets/images/nature/sustainable_livelihood.png'
                alt=''
              />
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

export default OurWork;
