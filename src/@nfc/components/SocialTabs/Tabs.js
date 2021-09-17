import React from 'react';
import clsx from 'clsx';
import { ImFacebook2, ImTwitter, ImInstagram } from 'react-icons/im';

function SocialTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div>
      <ul className='flex items-center my-4'>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={clsx(
              activeTab === index ? 'bg-green text-white' : 'text-gray-500',
              'flex items-center cursor-pointer py-3 px-4 rounded transition'
            )}
            onClick={() => setActiveTab(index)}
          >
            {tab.icon &&
              (tab.icon === 'facebook' ? (
                <ImFacebook2
                  className={clsx(
                    activeTab === index ? 'text-white' : 'text-green-light',
                    'mr-2'
                  )}
                />
              ) : tab.icon === 'twitter' ? (
                <ImTwitter
                  className={clsx(
                    activeTab === index ? 'text-white' : 'text-green-light',
                    'mr-2'
                  )}
                />
              ) : tab.icon === 'instagram' ? (
                activeTab === index ? (
                  <ImInstagram className='mr-2 text-white' />
                ) : (
                  <img
                    src='/assets/images/socials/instagram.svg'
                    className='w-4 mr-2'
                    alt=''
                  />
                )
              ) : (
                ''
              ))}
            {tab.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialTabs;
