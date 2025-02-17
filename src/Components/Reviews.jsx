import React from 'react'
import image from '../assets/William.png'

const Reviews = () => {
    return (
        <div className=''>
            <div className="mx-[4%] text-[4vw]">
                Client's Reviews
            </div>
                <div className="border border-white"></div>
            <div className="flex w-full px-[4%] py-[1%]">
                <div className="w-[20%]">
                    Karman Ventures
                </div>
                <div className="w-[30%]">
                    Services
                </div>
                <div className="w-[50%]">
                    <h1 className='mb-[10%]'>William Barens</h1>
                    <img src={image} alt="Images" className='w-[8vw] rounded-2xl my-[4%]' />
                    <div className='w-[70%] leading-5'>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
