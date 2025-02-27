import React from "react";

const About = () => {
  return (
    <div className="bg-[#cdea68] w-full text-black ">
      <div className="mx-[4%] py-[8%] lg:text-5xl text-2xl lg:tracking-normal tracking-tight text-black ">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to
        <u>
          raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
          peo­ple.
        </u>
      </div>
      <div className="border border-t-[#515e25] border-b-[#515e25] lg:flex w-full px-[4%] py-[1%]">
        <div className="w-[50%] lg:mb-[0%] lg:mt-[0%] mt-[4%] mb-[10%]">
          <div className="">What you can expect:</div>
        </div>
        <div className="lg:w-[20%] w-[80%]">
          <div className="">
            We partner with the companies and startups who make the world go
            round — they drive the net-zero economy, revolutionize crypto
            treasury management, build photonic chips, and open Michelin-starred
            restaurants.
          </div>
          <div className="lg:my-[0%] my-[6%]">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </div>
        </div>
        <div className="w-[30%] flex justify-center items-end ">
          <div className="">
            <div className="lg:my-[0%] my-[6%]">S:</div>
            <div className="flex flex-col lg:my-[0%] my-[10%] ">
              <a href="">
                <u>Instagram</u>
              </a>
              <a href="">
                <u>Facebook</u>
              </a>
              <a href="">
                <u>Linkedin</u>
              </a>
              <a href="">
                <u>Twitter</u>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-[4%] lg:flex">
        <div className="lg:w-1/2">
            <div className="lg:text-5xl text-3xl my-[2%]">Our Appraoch:</div>
            <div className="flex justify-center items-center my-[4%] w-fit py-4 px-6 rounded-full bg-black ">
                <div className="uppercase text-white mb-0.5">read more</div>
                <div className="p-1 m-auto bg-white rounded-full ml-4"></div>
            </div>
        </div>
        <div className="lg:w-1/2 lg:m-[2%] p-[4%] rounded-2xl overflow-hidden">
         <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default About;
