import Navbar from 'parts/Navbar'
import { useLocation } from 'react-router-dom'

function Agents() {
  const location = useLocation();

  return (
    <>
      <Navbar location={location.pathname}></Navbar>

    </>
  )
}

export default Agents