import React from 'react';
import clsx from 'clsx';

function Tabs({ tabs, activeTab, setActiveTab }) {
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

        <ul className='flex justify-center items-center my-4'>
          {tabs.map((tab, idx) => (
            <li
              key={idx}
              className={clsx(
                activeTab === idx ? 'bg-green-500 text-white' : 'text-gray-500',
                'cursor-pointer py-3 px-4 rounded transition'
              )}
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </li>
          ))}
        </ul>

        <div className='flex gap-4 justify-center border-t p-4'>
          <button
            className='py-2 px-4 border rounded-md border-blue-600 text-blue-600 cursor-pointer uppercase text-sm font-bold hover:bg-blue-500 hover:text-white hover:shadow'
            onClick={() => setActiveTab((activeTab) => --activeTab)}
            hidden={!activeTab > 0}
          >
            Back
          </button>
          <button
            className='py-2 px-4 border rounded-md border-blue-600 text-blue-600 cursor-pointer uppercase text-sm font-bold hover:bg-blue-500 hover:text-white hover:shadow'
            onClick={() => setActiveTab((activeTab) => ++activeTab)}
            hidden={!(activeTab < tabs.length - 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
