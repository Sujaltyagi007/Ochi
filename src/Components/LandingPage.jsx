import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion';
import image from '../assets/content-image01.jpg'
const LandingPage = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=". 3" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className="textstructure my-[12%] pl-20">
                {["We Create", "Eye Opening", "Presentation"].map((item, index) => (
                    <div key={index} className="masker">
                        <div className="w-fit flex items-center overflow-hidden ">
                            {index === 1 && (<motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76,0,0.24,1], duration:1}} style={{background:`url(${image})`,backgroundSize:"cover", backgroundRepeat:"no-repeat"}} className=" h-[5vw] rounded relative top-1  "></motion.div>)}
                            <h1 key={index} className=' flex items-center justify-center uppercase text-[7vw] leading-[6vw] tracking-tight font-semibold'>
                                {item}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center border-t-2 border-zinc-800 mt-32">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p key={index} className='tracking-tight leading-none font-light my-5 px-10'>{item}</p>
                ))}
                <div className="start flex justify-center items-center mx-5">
                    <div className="px-5 border-2 rounded-full ">
                        Start the project
                    </div>
                    <div className='border border-white rounded-full p-0.5 m-2'>
                        <MdArrowOutward />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingPage
