import React from 'react';
import ParticlesComponent from './particle';
import TextEffect from './TextEffect';
import SocialButtons from './social';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';

const resumeUrl = "https://drive.google.com/file/d/1jHO9_xnQ7F2p1drGVSiscs0UnwaEtxG6/view?usp=sharing";

const Hero = () => {
  const handleDownloadResume = () => {
    window.open(resumeUrl, '_blank');};
  return (
    
    <div className="relative h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('/images/banner.jpg')` }}
      ></div>

      {/* Particles */}
      <ParticlesComponent />

      {/* Main content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[90%] lg:w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-8 text-center text-white">
          
          {/* Text content */}
          <div data-aos="flip-up" data-aos-delay="300" className="flex flex-col items-center lg:items-start lg:pr-8 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              HI, I&apos;M <span className="text-yellow-400">PRAKHAR!</span>
            </h1>
            <TextEffect />
            <p className="mt-4 text-lg text-[#ffffff92] text-center lg:text-left">
            Passionate Computer Science Engineer | AI &amp; ML Enthusiast | Content Creator | Helping Brands Transform with Technology | Creative Content Creator | Esports Athlete
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={handleDownloadResume} className="px-6 py-3 text-lg font-bold uppercase bg-[#55e6a5] text-black hover:bg-yellow-400 transition duration-200 flex items-center space-x-2">
                <p>Download Resume</p>
                <ArrowDownTrayIcon className="w-6 h-6 text-black" />
              </button>
            </div>
            <SocialButtons /> {/* Add SocialButtons component here */}
          </div>

          {/* Image */}
          <div data-aos="zoom-in" className="hidden lg:flex items-end justify-end w-full h-[400px] overflow-hidden">
            <img
              src="/images/u1.jpg"
              alt="user"
              className="object-cover w-[400px] h-[400px] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
