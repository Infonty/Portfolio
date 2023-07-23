import React, { useState } from "react";
import {Link} from 'react-scroll';
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/infonty_logo.jpg";
const Navbar = () => {
  // ----------- handling navbar click----------
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed antialiased w-full h-[80px] flex justify-between items-center px-4  bg-[#08192f] text-gray-300">
      {/* image-----div------ */}
      <div className="mt-7 md:mt-0">
        <img
          className="rounded-full "
          src={Logo}
          alt="Logo image"
          style={{ width: "60px" }}
        />
      </div>
      {/* ------lists------- */}
   
        <ul className=" hidden md:flex font-semibold md:flex-row md:gap-x-14 cursor-pointer transition-all  md:pr-5">
          <li className=" cursor-pointer hover:border-b hover:border-[#FFFF5C] hover:scale-105 hover:duration-100">
            <Link to ='home' smooth={true} duration={500}>Home</Link> </li>
          <li className="cursor-pointer hover:border-b hover:border-[#FFFF5C] hover:scale-105 hover:duration-100"> <Link to ='about' smooth={true} duration={500}>About</Link> </li>
          {/* <li className=" hover:border-b cursor-pointer hover:border-[#FFFF5C] hover:scale-105 hover:duration-100"> <Link to ='skills' smooth={true} duration={500}>Skills</Link> </li> */}
          <li className=" cursor-pointer hover:border-b hover:border-[#FFFF5C] hover:scale-105 hover:duration-100"> <Link to ='education' smooth={true} duration={500}>Education</Link> </li>
          <li className="hover:border-b cursor-pointer hover:border-[#FFFF5C] hover:scale-105 hover:duration-100 "> <Link to ='contact' smooth={true} duration={500}>Contact</Link> </li>
        </ul>
      
      {/* ------menu--logo---- */}
      <div onClick={handleClick} className="md:hidden pr-2 scale-110  z-[70]">
        {!nav ? <FaBars  /> : <FaTimes />}
      </div>
      {/* -----Mobile menu------ */}

      <ul
        className={
          !nav
            ? "hidden"
            : " absolute flex flex-col sm:hidden z-[60]  justify-center items-center top-0 left-0 w-full h-screen bg-[#0a192f] "
        }
      >
        <li className="py-6  text-4xl cursor-pointer hover:border-b hover:border-[#FFFF5C] hover:scale-105 hover:duration-100"> <Link onClick={handleClick} to ='home' smooth={true} duration={500}>Home</Link></li>
        <li className="py-6 text-4xl cursor-pointer hover:border-b hover:border-[#FFFF5C] hover:scale-105 hover:duration-100"><Link onClick={handleClick} to ='about' smooth={true} duration={500}>About</Link> </li>
        {/* <li className="py-6 text-4xl cursor-pointer hover:border-b hover:border-[#FFFF5C] hover:scale-105 hover:duration-100"><Link onClick={handleClick} to ='skills' smooth={true} duration={500}>Skills</Link> </li> */}
        <li className="py-6 text-4xl cursor-pointer hover:border-b hover:border-[#FFFF5C] hover:scale-105 hover:duration-100"><Link onClick={handleClick} to ='education' smooth={true} duration={500}>Education</Link> </li>
        <li className="py-6  text-4xl cursor-pointer hover:border-b hover:border-[#FFFF5C] hover:scale-105 hover:duration-100"><Link onClick={handleClick} to ='contact' smooth={true} duration={500}>Contact</Link> </li>
      </ul>
      {/* -----social--icons---- */}
      <div className=" hidden md:flex fixed drop-shadow-2xl flex-col top-[35%] left-0 ">
        <ul className="">
          <li className="hover:shadow-md hover:shadow-yellow-500/50 bg-[#0C2D48] hover:bg-[#071330] rounded-t-md w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 border-b  hover:border-r-gray-600 border-r-2 border-t-2 border-gray-500   px-4">
            <a
              className="flex justify-between items-center ml-2 w-full text-gray-300"
              href="https://www.linkedin.com/in/infonty/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="hover:shadow-md hover:shadow-yellow-500/50 bg-[#0C2D48] w-[160px] hover:bg-[#071330]   h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 border-b  hover:border-r-gray-600 border-r-2 border-gray-500 px-4">
            <a
              className="flex justify-between items-center ml-2 w-full text-gray-300"
              href="https://github.com/Infonty"
              target="_blank"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>

          <li className="hover:shadow-md hover:shadow-yellow-500/50 bg-[#0C2D48] w-[160px] hover:bg-[#071330] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 border-b  hover:border-r-gray-600 border-r-2  border-gray-500   px-4">
            <a
              className="flex justify-between items-center ml-2 w-full text-gray-300"
              href="https://leetcode.com/Infonty/"
              target="_blank"
            >
              Leetcode <TbBrandLeetcode size={30} />
            </a>
          </li>
          <li className="hover:shadow-md hover:shadow-yellow-500/50 rounded-b-md  bg-[#0C2D48] hover:bg-[#071330] w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500  hover:border-r-gray-600 border-r-2 border-b-2 border-gray-500  px-4">
            <a
              className="flex justify-between items-center ml-2 w-full text-gray-300"
              href="Mohit_cv_2023.pdf"
              target="_blank"
              download='Mohit_cv_2023.pdf'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
