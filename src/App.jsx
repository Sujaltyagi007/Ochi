import React ,{useEffect} from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Feature from './Components/Feature'
import LocomotiveScroll from 'locomotive-scroll'


const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      multiplier: 1.5, // Speed of scrolling
    });

    return () => {
      scroll.destroy(); // Cleanup
    };
  }, []);

  return (
    <div data-scroll-container className='w-full min-h-screen bg-zinc-900 text-white '>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Feature />
    </div>
  )
}

export default App
