import React from 'react'
import Clutch from '../assets/logo.svg'
import logo from '../assets/logo.png'
const Cards = () => {
    return (
        <div className='flex border border-white gap-3 p-[3%] w-full h-screen'>
            <div className="w-[50%] flex justify-center items-center bg-emerald-800 h-[65%] rounded-xl ">
                <div className="text-[3vw] text-[#cdea68] font-semibold">
                    ochi
                </div>
            </div>
            <div className="w-[25%] bg-amber-200 h-[65%] rounded-xl flex justify-center items-center ">
                <img src={`${Clutch}`} alt="" />
            </div>
            <div className="w-[25%] flex justify-center items-center bg-white h-[65%] rounded-xl ">
                <img src={`${logo}`} alt="" className='w-[30%]' />
            </div>
        </div>
    )
}

export default Cards
