import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from 'parts/Navbar';
import Hero from 'parts/Hero';
import landingPage from '../json/landingPage.json';
import MostPicked from 'parts/MostPicked';

const LandingPage = () => {
  const location = useLocation();
  // console.log(location);
  document.title = "Vacastay | Home";

  const refMostPicked = useRef();

  return (
    <>
      <Navbar location={location.pathname}></Navbar>
      <Hero data={landingPage.hero} refMostPicked={refMostPicked} />
      <MostPicked data={landingPage.mostPicked} refMostPicked={refMostPicked} />
    </>
  )
}

export default LandingPage;
