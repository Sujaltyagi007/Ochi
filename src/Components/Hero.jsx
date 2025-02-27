import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full h-screen  ">
      <div className="textstructure flex items-center h-[75%] lg:h-[85%] mx-[4%]">
        <div className="masker font-bold lg:text-[6vw] text-4xl uppercase tracking-tighter leading-[5.5vw]">
          {["We create", "eye-opening", "presentations"].map((item, index) => (
            <div key={index} className="flex items-center w-[110%]  ">
              {index === 1 && (
                <motion.div initial={{width:0}} animate={{width:"25%"}} transition={{ease:[0.76,0,0.24,1],duration:1}} className=" mt-3 lg:h-[12vh] h-[4vh] rounded-lg lg:w-[14vw]  bg-amber-600 bg-center bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')]"></motion.div>
              )}
              <div className={` w-full whitespace-nowrap `}>{item}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t-1 lg:flex h-fit justify-between">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <div key={index} className="mx-[2%] lg:mx-[4%] px-4 my-2 lg:my-4">{item}</div>
        ))}
        <div className="uppercase flex px-[1%] lg:justify-center w-fit h-fit items-center mx-[4%]">
          <div className=" border text-[2vh] lg:m-0 border-white px-4 rounded-full">
            start the project
          </div>
          <div className="m-2 border border-white rounded-full p-1.5">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
