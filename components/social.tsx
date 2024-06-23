import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaMedium } from 'react-icons/fa';

const socialbuttons = () => {
  return (
    <div className="flex space-x-4 mt-6">
      {/* GitHub */}
      <a
        href="https://github.com/prakharsingh-74"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-800 rounded-full hover:bg-gray-600 transition duration-300"
      >
        <FaGithub className="text-white w-6 h-6" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/prakharsingh74/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-blue-600 rounded-full hover:bg-blue-400 transition duration-300"
      >
        <FaLinkedin className="text-white w-6 h-6" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/prakhar.singh74"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-pink-500 rounded-full hover:bg-pink-400 transition duration-300"
      >
        <FaInstagram className="text-white w-6 h-6" />
      </a>

      {/* Medium */}
      <a
        href="https://medium.com/@prakharsingh.bz3"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-800 rounded-full hover:bg-gray-600 transition duration-300"
      >
        <FaMedium className="text-white w-6 h-6" />
      </a>
    </div>
  );
};

export default socialbuttons;
