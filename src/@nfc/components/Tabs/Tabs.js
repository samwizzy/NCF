import React, { useState } from 'react';
import clsx from 'clsx';

function Tabs(tabs) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='flex justify-center items-center'>
      <div>
        <ul className='flex justify-center items-center my-4'>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={clsx(
                activeTab === index ? 'text-green-500 border-green-500' : '',
                'cursor-pointer py-2 px-4 text-gray-500 border-b-8'
              )}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </li>
          ))}
        </ul>

        <div className='w-80 bg-white p-16 text-center mx-auto border'>
          {activeTab === 0 && <div>Content 1</div>}
          {activeTab === 1 && <div>Content 2</div>}
          {activeTab === 2 && <div>Content 3</div>}
          {activeTab === 3 && <div>Content 4</div>}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
