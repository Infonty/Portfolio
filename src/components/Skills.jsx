import React from "react";
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Mongo from '../assets/mongo.png'
import Tailwind from '../assets/tailwind.png'
import Javascript from '../assets/javascript.png'
import Cpp from '../assets/cpp.png'
const Skills = () => {
  return (
    <div name="skills" className=" antialiased bg-[#0a192f] text-gray-300">
      <div className="max-w-[100px] ml-[130px] md:mx-auto pt-[150px]  flex flex-col justify-center w-full h-full">
        <p className="text-4xl text-gray-300 font-bold  border-b-4 border-yellow-600 ">My__Skills</p>
        <p className="py-4">This is my technical stack</p>
      </div>
      {/* ----grid start-- */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center px-[100px] py-8">
        <div className="shadow-md shadow-yellow-300 hover:scale-110 duration-500" >
         <img className="w-20 mx-auto mt-2" src={HTML} alt="" />
         <p className="my-4">
            HTML
         </p>
        </div>
        {/* ------first skill---ended-- */}
        <div className="shadow-md shadow-yellow-300 hover:scale-110 duration-500" >
         <img className="w-20 mx-auto mt-2" src={CSS} alt="" />
         <p className="my-4">
            CSS
         </p>
        </div>
        <div className="shadow-md shadow-yellow-300 hover:scale-110 duration-500" >
         <img className="w-20 mx-auto mt-2" src={Tailwind} alt="" />
         <p className="my-4">
            Tailwind
         </p>
        </div>
        <div className="shadow-md shadow-yellow-300 hover:scale-110 duration-500" >
         <img className="w-20 mx-auto mt-2" src={Cpp} alt="" />
         <p className="my-4">
            CPP
         </p>
        </div>
        <div className="shadow-md shadow-yellow-300 hover:scale-110 duration-500" >
         <img className="w-20 mx-auto mt-2 " src={Javascript} alt="" />
         <p className="my-4">
            Javascript
         </p>
        </div>
        <div className="shadow-md shadow-yellow-300 hover:scale-110 duration-500" >
         <img className="w-20 mx-auto mt-2" src={Mongo} alt="" />
         <p className="my-4">
            Mongo
         </p>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
