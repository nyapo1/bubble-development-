import React from 'react'
import { FaArrowRight } from 'react-icons/fa'; 



const Hero = () => {
  return (
    <div className='w-screen h-screen bg-gradient-to-tr relative from-blue-500 via-white to-purple-600 flex justify-center'>
      <nav className="flex justify-center items-center md:w-[70vw]  w-[90vw] h-[10vh] max-md:h-[8vh] bg-white absolute top-3  shadow-md rounded-full">
      <ul className="flex space-x-8 justify-around ">
        <li className="text-lg font-semibold text-gray-700 hover:text-purple-500 transition duration-300">
          <a href="#home">Home</a>
        </li>
        <li className="text-lg font-semibold text-gray-700 hover:text-purple-500 transition duration-300">
          <a href="#about">About</a>
        </li>
        <li className="text-lg font-semibold text-gray-700 hover:text-purple-500 transition duration-300">
          <a href="#services">Services</a>
        </li>
        <li className="text-lg font-semibold text-gray-700 hover:text-purple-500 transition duration-300">
          <a href="#contact">Contact</a>
        </li>
        <li className="text-lg font-semibold text-gray-700 bg-purple-600 rounded-full px-5 py-1 hover:text-white transition duration-300 flex flex-shrink-1">
          <a href="#contact" className='btn '>Start <FaArrowRight className='inline-block font-bold'/></a>
          
        </li>
      </ul>
    </nav>
          
    </div>
  )
}

export default Hero
