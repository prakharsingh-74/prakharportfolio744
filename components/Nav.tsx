import React from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md z-10 fixed">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          PRAKHAR'S
          <span className="text-yellow-300"> PORTFOLIO</span>
        </h1>
        <div className="hidden md:flex space-x-9">
          <a href="#home" className="nav-link text-white">HOME</a>
          <a href="#about" className="nav-link text-white">ABOUT</a>
          <a href="#skills" className="nav-link text-white">EXPERIENCES & SKILLS</a>
          <a href="#project" className="nav-link text-white">PROJECT</a>
          <a href="#certifications" className="nav-link text-white">CERTIFICATIONS</a>
          <a href="#footer" className="nav-link text-white">CONTACT</a>
        </div>
        <div className="md:hidden" onClick={openNav}>
          <Bars3Icon className="w-[2rem] h-[2rem] cursor-pointer text-yellow-300"/>
        </div>
      </div>
    </div>
  );
}

export default Nav;