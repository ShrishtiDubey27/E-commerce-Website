import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base lg:text-lg text-gray-700'>
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Exchange Icon" />
        <p className='font-semibold'><span className='text-orange-500'>Easy Exchange Policy</span></p>
        <p className='text-gray-400'>We offer a hassle-free exchange policy.</p>
      </div>

      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="Return Icon" />
        <p className='font-semibold'><span className='text-orange-500'>7 Days Return Policy</span></p>
        <p className='text-gray-400'>We provide a 7-day free return policy.</p>
      </div>

      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="Support Icon" />
        <p className='font-semibold'><span className='text-orange-500'>Best Customer Support</span></p>
        <p className='text-gray-400'>We provide 24/7 customer support.</p>
      </div>
    </div>
  );
}

export default OurPolicy;
