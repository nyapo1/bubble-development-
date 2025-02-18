import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Hero1 from './Hero';

const Hero = () => {
  return (
    <div className='w-screen h-screen bg-gradient-to-tr relative from-blue-500 via-white to-purple-600 flex justify-center rounded-2xl'>
      <nav className="flex justify-center items-center md:w-[70vw] w-[90vw] h-[10vh] max-md:h-[8vh] bg-white absolute top-3 shadow-md rounded-full">
        <ul className="flex space-x-4 md:space-x-8 justify-around flex-wrap">
          <li className="nav-items max-sm:hidden">
            <a href="#home">Home</a>
          </li>
          <li className="nav-items">
            <a href="#about">About</a>
          </li>
          <li className="nav-items">
            <a href="#services">Services</a>
          </li>
          <li className="nav-items">
            <a href="#contact">Contact</a>
          </li>
          <li className="text-base md:text-lg font-semibold text-gray-700 bg-purple-600 transition duration-300 cursor-pointer rounded-full px-3 md:px-5 py-1 hover:text-white  flex-shrink-0 ">
            <a href="#contact" className='btn'>Start <FaArrowRight className='inline-block font-bold'/></a>
          </li>
        </ul>
      </nav>
      <Hero1/>
    </div>
  );
};

export default Hero;