import React from 'react';
import TextEffect from './TextEffect';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const resumeUrl = "https://docs.google.com/document/d/1Sz652Td71dp_lbqJukeyaBxGPF652vBrH4gPie4Qf2k/edit?usp=sharing";

const About = () => {
  const handleDownloadResume = () => {
    window.open(resumeUrl, '_blank');};
    return (
      <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
        <a href="#about"></a>
        <div data-aos="zoom-in-up" className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
          <div>
            <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]'>
              ABOUT ME
            </h1>
            <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white'>
              Transforming <span className='text-yellow-400'>Visions</span>
            </h2>
            <div className='mb-[3rem] flex items-center md:space-x-10'>
              <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
              <p className='text-[19px] text-slate-300 w-[80%]'>
              Fullstack Developer with expertise in building responsive web applications, deploying machine learning models, and performing data analysis for actionable insights. Experienced in object detection model deployment and predictive analytics. Active Open Source Contributor, fostering innovation in the tech community through collaborative contributions.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
              <button onClick={handleDownloadResume} className="px-8 py-4 text-lg font-bold uppercase bg-[#55e6a5] text-black hover:bg-yellow-400 transition duration-200 flex items-center space-x-2">
                <p>Download Resume</p>
                <ArrowDownTrayIcon className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div data-aos="fade-left" className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[300px] w-[300px] h-[300px] relative'>
            <Image src="/images/about.jpg" alt="user" layout="fill" objectFit='contain' className='relative z-[11] w-[100%] h-[100%] object-contain' />
          
          <div className='absolute w-[60%] h-[90%] z-[10] bg-[#55e6a5] top-[-2rem] right-[4rem]'>

            </div>
          </div>
        </div>
      </div>
    
  );
};

export default About;
