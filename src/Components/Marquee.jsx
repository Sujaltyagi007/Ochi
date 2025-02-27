import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div className='bg-[#004d43] w-full py-[5%] uppercase rounded-t-2xl'>
        <div className=" tracking-tighter border-white border-t-2 border-b-2 flex whitespace-nowrap overflow-hidden font-bold py-[2%] text-[10vw]">
            <motion.div initial={{x:0}} animate={{x:"-112.5%"}}  transition={{ ease:"linear" , duration: 3.5 ,repeat: Infinity }} className="mx-4">we are ochi</motion.div>
            <motion.div initial={{x:0}} animate={{x:"-112.5%"}}  transition={{ ease:"linear" , duration: 3.5 ,repeat: Infinity }} className="mx-4">we are ochi</motion.div>
            <motion.div initial={{x:0}} animate={{x:"-112.5%"}}  transition={{ ease:"linear" , duration: 3.5 ,repeat: Infinity }} className="mx-4">we are ochi</motion.div>
        </div>
    </div>
  )
}

export default Marquee