import Navbar from 'parts/Navbar'
import React from 'react'
import { useLocation } from 'react-router-dom';

const LandingPage = () => {

  const location = useLocation();

  console.log(location);

  return (
    <>
      <Navbar location={location.pathname}></Navbar>
    </>
  )
}

export default LandingPage;
