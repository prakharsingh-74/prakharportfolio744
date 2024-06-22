import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';
import React, { useState } from 'react';
import Hero from '@/components/Hero';

const Homepage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  
  return (
    <div className='overflow-x-hidden'>
      <div>
        {/*Navbar*/}
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav}/>
        {/*Hero*/}
        <Hero />
      </div>
    </div>
  );
};

export default Homepage;