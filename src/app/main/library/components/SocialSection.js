import React, { useState } from 'react';
import { SocialTabs } from '@nfc';

const socials = [
  { title: 'Facebook', icon: 'facebook' },
  { title: 'Twitter', icon: 'twitter' },
  { title: 'Instagram', icon: 'instagram' },
];

function SocialSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className='mb-4'>
        <h2 className='font-black text-2xl mr-8'>NCF MEDIA</h2>
        <hr className='h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300' />
      </div>
      <div className='flex justify-start items-center'>
        <SocialTabs
          tabs={socials}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className='py-8 text-center mx-auto border'>
        {activeTab === 0 && <div>Content 1</div>}
        {activeTab === 1 && <div>Content 2</div>}
        {activeTab === 2 && <div>Content 3</div>}
      </div>
    </div>
  );
}

export default SocialSection;
