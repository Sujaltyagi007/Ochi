import React from 'react'
import { motion } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll'

const Marquee = () => {
    return (
            <div data-scroll data-scroll-speed="-.3" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] ">
                <div className="text border-t-2 border-b-2 tracking-tighter  items-center border-zinc-300 flex whitespace-nowrap overflow-x-hidden   ">
                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:4}} className='text-[10vw] font-bold mb-5 text uppercase '>
                        We are Ochi
                    </motion.h1>
                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:4}} className=' text-[10vw] leading-none font-bold mb-5 text uppercase '>We are Ochi</motion.h1>
                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:4}} className=' text-[10vw] leading-none font-bold mb-5 text uppercase '>We are Ochi</motion.h1>
                </div>
            </div>
    )
}

export default Marquee
