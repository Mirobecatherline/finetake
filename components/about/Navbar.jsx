"use client"; // Add this line at the top

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-xl">Logo</div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`hidden md:flex md:items-center md:justify-end md:space-x-4`}>
          <a href="#" className="block text-black py-2 md:py-0 px-4 hover:bg-green-500 hover:text-white rounded">Services</a>
          <a href="#" className="block text-black py-2 md:py-0 px-4 hover:bg-green-500 hover:text-white rounded">About</a>
          <a href="#" className="block text-black py-2 md:py-0 px-4 hover:bg-green-500 hover:text-white rounded">Testimonial</a>
          <a href="#" className="block text-black py-2 md:py-0 px-4 hover:bg-green-500 hover:text-white rounded">Contact</a>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white p-4 absolute top-16 right-0 w-48 rounded shadow-lg">
          <a href="#" className="block text-black py-2 px-4 hover:bg-green-500 hover:text-white rounded">Services</a>
          <a href="#" className="block text-black py-2 px-4 hover:bg-green-500 hover:text-white rounded">About</a>
          <a href="#" className="block text-black py-2 px-4 hover:bg-green-500 hover:text-white rounded">Testimonial</a>
          <a href="#" className="block text-black py-2 px-4 hover:bg-green-500 hover:text-white rounded">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
