import React from 'react'
import Navbar from 'parts/Navbar'
import { useLocation } from 'react-router-dom'

function Stories() {
  const location = useLocation();

  return (
    <>
      <Navbar location={location.pathname}></Navbar>

    </>
  )
}

export default Stories
