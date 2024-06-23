import React from 'react';
import Image from 'next/image';

const certifications = [
  {
    id: 1,
    title: 'JWOC Open Source',
    image: '/images/cc1.png',
    description: 'Certified by JGEC college',
  },
  {
    id: 2,
    title: 'Python(Basic)',
    image: '/images/cc2.png',
    description: 'Certified by Hackerrank',
  },
  {
    id: 3,
    title: 'CSS(Basic)',
    image: '/images/cc3.png',
    description: 'Certified by Hackerrank',
  },
  {
    id: 4,
    title: 'Data, ML and AI in Google Cloud',
    image: '/images/cc4.png',
    description: 'Certified by Google Cloud',
  },
];

const Certifications: React.FC = () => {
  return (
    <div className="bg-[#02050a] py-12 md:pt-24 md:pb-8">
      <div className="w-[80%] mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">My <span className="text-yellow-400">Certifications</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {certifications.map((certification) => (
            <div key={certification.id} className="relative overflow-hidden rounded-lg bg-gray-800 hover:transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full pt-[75%]"> {/* 4:3 Aspect Ratio */}
                <Image src={certification.image} alt={certification.title} layout="fill" objectFit="cover" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
              </div>
              <div className="p-4 text-white">
                <h3 className="text-xl font-semibold mb-2">{certification.title}</h3>
                <p className="text-gray-400">{certification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;