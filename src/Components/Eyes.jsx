import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate,setRotate] = useState(0);
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth/2;
      const deltaY = mouseY - window.innerHeight/2;

      const angle = Math.atan2(deltaY,deltaX) * 180/Math.PI;

      setRotate(angle - 180);
    })
})
  return (
    <div className="w-full lg:h-screen h-[60vh] overflow-hidden">
      <div className=" relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className=" absolute flex justify-between items-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[35%] ">
          <div className="relative w-[16vw] h-[16vw] flex justify-center items-center bg-white rounded-full">
            <div className=" w-2/3 h-2/3 flex items-center bg-black rounded-full">
              <div style={{transform:`rotate(${rotate}deg)`}} className="h-5 w-full ">
                <div className="w-5 h-full rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <div className=" relative w-[16vw] h-[16vw] flex justify-center items-center bg-white rounded-full">
            <div className=" absolute w-2/3 h-2/3 flex justify-center items-center bg-black rounded-full">
              <div style={{transform:` rotate(${rotate}deg)`}} className="w-full h-5 ">
                <div className="w-5 h-full rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
