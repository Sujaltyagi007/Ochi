import React from "react";
import images from "../assets/William.png";

const Reveiws = () => {
  return (
      <div className="w-full h-screen bg-white text-black">
        <div className="mx-[4%] py-[2%] text-[4vw]">Client's reveiws</div>
        <div className="border border-black"></div>
        <div className=" w-full flex px-[4%] py-[1%]">
          <div className="w-[25%]">Karman Ventures</div>
          <div className="w-[25%] ">
            Services:
            <div className="h-full flex flex-col justify-center ">
              <div className=" uppercase border border-black w-fit rounded-full px-3 my-1">
                investor deck
              </div>
              <div className=" uppercase border border-black w-fit rounded-full px-3 my-1">
                sales deck
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <h1 className="mb-[10%]">William Barnes</h1>
            <img
              src={images}
              alt="images"
              className="w-[17%] mt-[10%] mb-[4%] rounded-2xl"
            />
            <div className="w-[60%]">
              They were transparent about the time and the stages of the
              project. The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </div>
          </div>
        </div>
        <div className="">
            
        </div>
      </div>
  );
};

export default Reveiws;
