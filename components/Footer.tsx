import { EnvelopeIcon } from '@heroicons/react/20/solid';
import React from 'react';

const Footer = () => {
  return (
    <div className='relative z-10 pt-[8rem] pb-[4rem] bg-[#02050a] bg-opacity-80'>
      <div className='w-[80%] mx-auto'>
        <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[3rem]'>
          <div className='flex items-center space-x-6'>
            <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
              <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black'/>
            </div>
            <div>
              <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>
                Send me Email
              </h1>
              <p className='text-[17px] w-[90%] text-white opacity-60'>
                prakharsingh.bz3@gmail.com <br/>
                prakharsingh7014@gmail.com
              </p>
            </div>
          </div>
          <div className='w-full mt-[2rem] mx-[29rem] flex justify-between items-center'>
            <p className='text-[17px] text-white opacity-60'>
              Made with <span className='text-red-500'>❤</span> by Prakhar Singh
            </p>
          </div>
        </div>
        <div className='w-full mt-[2rem] mx-[29rem] flex justify-between items-center'>
          <p className='text-[16px] text-white opacity-60'>
            © 2024 Prakhar Singh. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
