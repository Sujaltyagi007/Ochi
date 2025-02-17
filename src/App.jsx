import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Feature from './Components/Feature'
import LocomotiveScroll from 'locomotive-scroll'
import Reviews from './Components/Reviews'
import Cards from './Components/Cards'
import ProjectEye from './Components/ProjectEye'


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white '>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Feature />
      <Reviews />
      <Cards />
      <ProjectEye />
    </div>
  )
}

export default App
