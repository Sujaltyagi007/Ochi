import React from "react";

const Project = () => {
  const images = [
    "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png",
    "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png",
    "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png",
    "https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png",
    "https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png",
    "https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png",
    "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
    "https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg",
  ];
  return (
    <div className="w-full bg-white py-[4%] text-black">
      <div className="text-black text-[4vw] mx-[4%] my-[2%]">
        Featured Projects
      </div>
      <div className="border border-black"></div>
      <div className=" px-[4%] py-[2%] border border-t-amber-100 border-l-0 border-r-0 border-b-amber-100  grid grid-cols-2 w-full">
        {images.map((item, index) => (
          <div key={index} className="my-[2%] col-span-1 m-[1%]">
            <div className="flex items-center gap-6 my-[2%] w-fit ">
              <div className="p-1.5 bg-black rounded-2xl"></div>
              <div className="uppercase">Salience Labs</div>
            </div>
            <div className="h-fit rounded-2xl overflow-hidden">
              <img
                src={item}
                alt="Featured Project"
                className="w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex my-[5%]  justify-center  items-center">
        <div className="bg-black uppercase tracking-tight text-[14px] px-5 py-3 pb-4 flex justify-center items-center rounded-full text-white w-fit">
          veiw all case studies
          <div className="w-2 h-2 rounded-full mt-0.5 ml-10 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
