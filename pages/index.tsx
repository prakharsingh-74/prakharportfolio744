import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';
import React, { useState } from 'react';

const Homepage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  
  return (
    <div className='overflow-x-hidden'>
      <div>
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav}/>
      </div>
    </div>
  );
};

export default Homepage;