import Navbar from 'parts/Navbar'
import React from 'react'
import { useLocation } from 'react-router-dom'

function BrowseBy() {
  const location = useLocation();

  return (
    <>
      <Navbar location={location.pathname}></Navbar>

    </>
  )
}

export default BrowseBy
