import React from 'react';
import Image from 'next/image';

const certifications = [
  {
    id: 1,
    title: 'React Certification',
    image: '/images/cert1.jpg',
    description: 'Certified by React Academy',
  },
  {
    id: 2,
    title: 'JavaScript Mastery',
    image: '/images/cert2.jpg',
    description: 'Certified by JavaScript Institute',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    image: '/images/cert3.jpg',
    description: 'Certified by Design School',
  },
  // Add more certifications as needed
];

const Certifications: React.FC = () => {
  return (
    <div className="bg-[#02050a] py-12 md:pt-24 md:pb-8">
      <div className="w-[80%] mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">My <span className="text-yellow-400">Certifications</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification) => (
            <div key={certification.id} className="relative overflow-hidden rounded-lg bg-gray-800 hover:transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image src={certification.image} alt={certification.title} layout="fill" objectFit="cover" className="object-cover rounded-lg" />
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