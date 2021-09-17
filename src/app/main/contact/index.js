import React from 'react';
import { ImLocation } from 'react-icons/im';
import HomeSlider from './components/slider/Slider';
import { SocialTabs } from '@nfc';
import { ContactBg } from './styles';

function Contact() {
  return (
    <div>
      <HomeSlider />

      <ContactBg className='max-w-7xl mx-auto pt-16 md:px-0 px-8'>
        <div className='text-left mb-8'>
          <h1 className='font-black tracking-tight text-3xl text-green mb-4 uppercase'>
            Contact Us
          </h1>
        </div>
        <div className='block mb-16'>
          <h1 className='font-bold text-lg text-gray-800 mb-4'>
            All correspondence should be addressed to
          </h1>

          <ul className='w-full rounded-lg mt-2 mb-8 text-gray-800'>
            <li>The Director General,</li>
            <li>Nigerian Conservation Foundation</li>
            <li>NCF Headquarters, Km 19, Lekki-Epe Expressway, Lekki.</li>
            <li>P.O.Box 74638, Victoria Island, Lagos, Nigeria.</li>
          </ul>

          <h3 className='font-bold text-base mb-4'>Telephones:</h3>

          <ul className='w-full rounded-lg -ml-3 text-gray-800'>
            <li className='flex items-start p-1 pl-3'>
              <ImLocation
                size={18}
                className='text-green mr-2 mt-0.5 flex-none transform -rotate-90'
              />
              <span>
                For enquiries and booking of LCC facilities call 09065460479 or
                email <em className='text-green'>lcc@ncfnigeria.org</em>
              </span>
            </li>
            <li className='flex items-start p-1 pl-3'>
              <ImLocation
                size={18}
                className='text-green mr-2 mt-0.5 flex-none transform -rotate-90'
              />
              <span>
                For Membership registration and enquiries: 08069813495 or email
                <em className='text-green'>membership@ncfnigeria.org</em>
              </span>
            </li>
            <li className='flex items-start p-1 pl-3'>
              <ImLocation
                size={18}
                className='text-green mr-2 mt-0.5 flex-none transform -rotate-90'
              />
              <span>
                For Educational programmes, School visits: 09027509511 or email
                <em className='text-green'>education@ncfnigeria.org</em>
              </span>
            </li>
            <li className='flex items-start p-1 pl-3'>
              <ImLocation
                size={18}
                className='text-green mr-2 mt-0.5 flex-none transform -rotate-90'
              />
              <span>
                For job opportunities/vacancies email:
                <em className='text-green'>recruitment@ncfnigeria.org</em>
              </span>
            </li>
            <li className='flex items-start p-1 pl-3'>
              <ImLocation
                size={18}
                className='text-green mr-2 mt-0.5 flex-none transform -rotate-90'
              />
              <span>
                For sponsorship and partnership, enquiries call: 09092236281 or
                email <em className='text-green'>fundraising@ncfnigeria.org</em>
              </span>
            </li>
            <li className='flex items-start p-1 pl-3'>
              <ImLocation
                size={18}
                className='text-green mr-2 mt-0.5 flex-none transform -rotate-90'
              />
              <span>
                For subscription to our magazine, Advert enquiries and
                e-bulletin call NCF Media Unit: 0903 489 5750 or
                <em className='text-green'>media@ncfnigeria.org</em>
              </span>
            </li>
            <li className='flex items-start p-1 pl-3'>
              <ImLocation
                size={18}
                className='text-green mr-2 mt-0.5 flex-none transform -rotate-90'
              />
              <span>
                E-mail: <em className='text-green'>info@ncfnigeria.org</em> |{' '}
                <em className='text-green'>media@ncfnigeria.org</em>
              </span>
            </li>
            <li className='flex items-start p-1 pl-3'>
              <ImLocation
                size={18}
                className='text-green mr-2 mt-0.5 flex-none transform -rotate-90'
              />
              <span>
                Website: <em className='text-green'>www.ncfnigeria.org</em>
              </span>
            </li>
          </ul>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-x-8 gap-y-16 items-start mt-8'>
          <div>
            <h2 className='font-black text-gray-800 text-lg mb-2'>
              Headquarters
            </h2>
            <ul>
              <li>Km 19, Lekki-Epe Expressway,</li>
              <li>Lekki, Lagos.</li>
              <li>P.O. Box 74638, Victoria Island, Lagos.</li>
              <li>Tel: 0903 489 5750, 0903 473 5858</li>
              <li>Email: info@ncfnigeria.org</li>
            </ul>
          </div>
          <div>
            <h2 className='font-black text-gray-800 text-lg mb-2'>
              South East Regional Programme Office
            </h2>
            <ul>
              <li>Km 19, Lekki-Epe Expressway,</li>
              <li>Lekki, Lagos.</li>
              <li>P.O. Box 74638, Victoria Island, Lagos.</li>
              <li>Tel: 0903 489 5750, 0903 473 5858</li>
              <li>Email: info@ncfnigeria.org</li>
            </ul>
          </div>
          <div>
            <h2 className='font-black text-gray-800 text-lg mb-2'>
              Abuja Office
            </h2>
            <ul>
              <li>Km 19, Lekki-Epe Expressway,</li>
              <li>Lekki, Lagos.</li>
              <li>P.O. Box 74638, Victoria Island, Lagos.</li>
              <li>Tel: 0903 489 5750, 0903 473 5858</li>
              <li>Email: info@ncfnigeria.org</li>
            </ul>
          </div>
          <div>
            <h2 className='font-black text-gray-800 text-lg mb-2'>
              North East Office
            </h2>
            <ul>
              <li>Km 19, Lekki-Epe Expressway,</li>
              <li>Lekki, Lagos.</li>
              <li>P.O. Box 74638, Victoria Island, Lagos.</li>
              <li>Tel: 0903 489 5750, 0903 473 5858</li>
              <li>Email: info@ncfnigeria.org</li>
            </ul>
          </div>
        </div>
      </ContactBg>

      <div className='relative z-10 pt-16'>
        <div className='max-w-7xl mx-auto pb-16 md:px-0 px-8'>
          <SocialTabs />
        </div>
      </div>
    </div>
  );
}

export default Contact;
