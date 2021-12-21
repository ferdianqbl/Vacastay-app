import React from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from 'parts/Navbar';
import Hero from 'parts/Hero';
import landingPage from '../json/landingPage.json';

const LandingPage = () => {
  const location = useLocation();
  // console.log(location);
  document.title = "Vacastay | Home";

  return (
    <>
      <Navbar location={location.pathname}></Navbar>
      <Hero data={landingPage.hero} />
    </>
  )
}

export default LandingPage;
