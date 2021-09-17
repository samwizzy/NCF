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
                <ImFacebook2 color='#fff' className='mr-2' />
              ) : tab.icon === 'twitter' ? (
                <ImTwitter color='#fff' className='mr-2' />
              ) : tab.icon === 'instagram' ? (
                <ImInstagram color='#fff' className='mr-2' />
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
