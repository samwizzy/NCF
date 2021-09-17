import React from 'react';
import clsx from 'clsx';

function ButtonTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div>
      <ul class='flex items-center my-4'>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={clsx(
              activeTab === index ? 'bg-green text-white' : 'text-gray-500',
              'flex cursor-pointer py-3 px-4 rounded transition'
            )}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ButtonTabs;
