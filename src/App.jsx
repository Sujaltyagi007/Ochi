import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Project from './Components/Project'
import Reveiws from './Components/Reveiws'

const App = () => {
  return (
    <div className='w-full bg-zinc-900 text-white'>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Eyes />
      <Project />
      <Reveiws />
    </div>
  )
}

export default App