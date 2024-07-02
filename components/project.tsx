import Image from "next/image";
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    image: "/images/p1.jpeg",
    alt: "Face Recognition",
    githubLink: "https://github.com/prakharsingh-74/Face-recognition-model",
    deployLink: "https://yourdeployedlink1.com"
  },
  {
    id: 2,
    image: "/images/p2.jpg",
    alt: "Video Player Automation",
    githubLink: "https://github.com/prakharsingh-74/videoplayerautomation",
    deployLink: "https://yourdeployedlink1.com"
  },  
];

const Project = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="100" className="bg-[#02050a] py-12 md:pt-24 md:pb-8">
      <div className="w-[80%] mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">My <span className="text-yellow-400"> Projects</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="relative rounded-lg overflow-hidden bg-gray-800 w-full md:w-[90%]">
              <div className="transform cursor-pointer hover:-translate-y-2 transition-all duration-200 relative w-full h-[300px] md:h-[400px]">
                <Image src={project.image} alt={project.alt} layout="fill" objectFit="cover" className="object-cover rounded-lg" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{project.alt}</h3>
                <div className="flex items-center space-x-4">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-gray-600 transition duration-300 flex items-center justify-center">
                    <FaGithub className="text-white w-6 h-6" />
                  </a>
                  <a href={project.deployLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-gray-600 transition duration-300 flex items-center justify-center">
                    <FaExternalLinkAlt className="text-white w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
