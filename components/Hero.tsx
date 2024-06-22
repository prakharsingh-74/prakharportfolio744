import React from 'react';
import ParticlesComponent from './Particle';
import TextEffect from './TextEffect';

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
        <div className="w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-12 text-center text-white">
          
          {/* Text content */}
          <div className="flex flex-col items-center justify-center lg:items-start">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              HI, I'M <span className="text-yellow-400">PRAKHAR!</span>
            </h1>
            <TextEffect />
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum sapiente voluptates ducimus laboriosam aliquam? Fuga similique asperiores ea dolorem id.
            </p>
          </div>

          {/* Image */}
          <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] rounded-full overflow-hidden">
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
