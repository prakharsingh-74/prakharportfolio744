import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skill';
import Project from '@/components/project'

const Homepage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  
  return (
    <div className='overflow-x-hidden'>
      <div>
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav}/>
        <Hero />
        <div className='realtive z-[30]'>
            <About/>
            <Skills />
            <Project/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;