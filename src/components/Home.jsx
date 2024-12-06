import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {Link} from 'react-scroll';
import TypeWriterEffect from "react-typewriter-effect";
const Home = () => {
  return (
    <div name='home' className="w-full antialiased h-screen bg-[#0a192f] ">
      <div className="max-w-[1000px] mx-auto px-8 md:pl-52 pt-5 md:pt-[115px] flex flex-col justify-center gap-y-1 h-full ">
        <p className="text-yellow-100">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Mohit</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]  ">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              color: "#D1D100",
              fontWeight: 550,
              fontSize: "1.0em",
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={["Student", "Software Developer"]}
            multiTextDelay={2500}
            typeSpeed={50}
            multiTextLoop
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Passionate and detail-oriented junior software developer specializing in backend development. Proficient in creating robust, scalable, and efficient server-side applications. Adept at leveraging modern programming languages and frameworks to solve complex problems. Eager to contribute to innovative projects and continuously learn and grow within the tech industry.
        </p>
        {/* ----button---- */}
        <div>
          <button className=" text-gray-300 hover:scale-[20px] px-3 py-2 my-2 flex  bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 items-center rounded-lg font-bold  hover:opacity-200 cursor-pointer transition-all duration-100 hover:text-black ">
            
            <Link to ='about' smooth={true} duration={500}>About me
            <span className="  ">
              <HiArrowNarrowRight className="ml-3 inline " />
            </span></Link>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
