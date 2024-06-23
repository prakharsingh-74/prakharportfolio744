import React from 'react';
import ParticlesComponent from './particle';
import TextEffect from './TextEffect';
import SocialButtons from './social';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';

const Hero = () => {
  return (
    <div className="relative h-[88vh] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('/images/banner.jpg')` }}
      ></div>

      {/* Particles */}
      <ParticlesComponent />

      {/* Main content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="w-[90%] lg:w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-12 text-center text-white">
          
          {/* Text content */}
          <div className="flex flex-col items-center lg:items-start lg:pr-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              HI, I'M <span className="text-yellow-400">PRAKHAR!</span>
            </h1>
            <TextEffect />
            <p className="mt-6 text-lg text-[#ffffff92] text-center lg:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum sapiente voluptates ducimus laboriosam aliquam? Fuga similique asperiores ea dolorem id.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-4 text-lg font-bold uppercase bg-[#55e6a5] text-black hover:bg-yellow-400 transition duration-200 flex items-center space-x-2">
                <p>Download Resume</p>
                <ArrowDownTrayIcon className="w-6 h-6 text-black" />
              </button>
            </div>
            <SocialButtons /> {/* Add SocialButtons component here */}
          </div>

          {/* Image */}
          <div className="hidden lg:flex items-center justify-center lg:justify-start lg:ml-14 w-[400px] h-[400px] rounded-full overflow-hidden">
            <img
              src="/images/u1.jpg"
              alt="user"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
