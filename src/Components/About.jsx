import React from 'react'

const About = () => {
    return (
        <div className='  w-full bg-[#cdea68] rounded-t-2xl text-black'>
            <h1 className='text-[3vw] py-20 px-15'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <u>aise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</u> </h1>
            <div className="w-full flex text-[1.2vw] border border-[#91a34d] p-4 pb-[8%]">
                <div className="w-[50%] ">
                    <p className='px-[6%] '>What you can expect:</p>
                </div>
                <div className="w-[30%] tracking-tight leading-[1.7vw]">
                    <div className="w-[70%]">
                        We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.
                    </div>
                    <div className="w-[70%] mt-[10%]">
                        We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                    </div>
                </div>
                <div className="w-[20%] flex flex-col justify-end">
                    <h1>S:</h1>
                    <div className="flex flex-col ">
                        <u><a href="">Instagram</a></u>
                        <u><a href="">FaceBook</a></u>
                        <u><a href="">Twitter</a></u>
                        <u><a href="">LinkedIn</a></u>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between px-[4%] py-[1%] pb-12">
                <div className="w-[30%]">
                    <h1 className='mb-6 text-6xl'>Our approach:</h1>
                    <div className="border w-fit flex justify-center uppercase tracking-tight items-center border-black bg-black px-8 py-4 text-md rounded-full text-white">
                        <a href="#" className='mb-0.5 pr-6'>
                            Read more
                        </a>
                        <a className='p-[4px] h-fit bg-white rounded-full'></a>
                    </div>
                </div>
                <div className="w-[50%] rounded-xl overflow-hidden">
                    <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default About
