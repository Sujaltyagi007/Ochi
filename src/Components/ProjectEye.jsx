import React,{useEffect,useState} from 'react'

const ProjectEye = () => {
    const [rotate, setRotate] = useState(0);
    
        useEffect(() => {
    
            window.addEventListener("mousemove", (e) => {
                const mouseX = e.clientX;
                const mouseY = e.clientY;
    
                const deltaX = mouseX - window.innerWidth / 2;
                const deltaY = mouseY - window.innerHeight / 2;
    
                const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
                setRotate(angle - 180); // Update the rotation angle based on mouse position
            })
        })
    return (
        <div className='w-full h-screen bg-[#cdea68] flex justify-center items-center'>
            <div className="uppercase tracking-tighter text-[10vw] flex flex-col font-bold justify-center items-center w-[70%] leading-34  ">
                <div className="">Ready</div>
                <div className="">to start</div>
                <div className="">the project?</div>
            </div>
            <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
                    <div className="relative w-2/3 h-2/3 flex justify-center items-center  bg-zinc-900 rounded-full">
                        <div style={{ transform: `rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                            <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                        </div>
                    </div>
                </div>
                <div className="w-[15vw] h-[15vw] flex justify-center items-center bg-zinc-100 rounded-full">
                    <div className="relative w-2/3 h-2/3 flex justify-center items-center bg-zinc-900 rounded-full">
                        <div style={{ transform: `rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                            <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectEye
