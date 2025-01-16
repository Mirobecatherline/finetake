
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { FaCameraRetro } from 'react-icons/fa';
import { IoNotifications } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Added AiOutlineClose for the hamberger open and close

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // this one is for managing visibility
  const [searchQuery, setSearchQuery] = useState(''); // this one is used to manage the search input value

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here to redirect or filter results)
    console.log("Search submitted:", searchQuery);
  };

  return (
    <nav className="bg-white shadow-md p-0 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* companies name*/}
          <div className="flex items-center space-x-2">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-500">FineTake</h1>
          </div>

          {/* Center: My Essential Menu Items */}
          <div className="flex space-x-6">
            <a href="/" className="flex flex-row-reverse items-center space-x-1 hover:border-b-2 hover hover:border-b-black shadow-md-500">
              <FaHome className="h-5 w-5" />
              {/* <span>home</span> */}
            </a>

            {/* Search Bar and an search icon */}
            <form onSubmit={handleSearchSubmit} className="flex items-center border-2 border-gray-300 rounded-md p-1 w-22"> {/* Adjust width here */}
              <CiSearch className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-black pl-2 w-full" 
              />
            </form>

            <a href="/create-account" className="flex flex-row-reverse items-center space-x-1 hover:border-b-2 hover:border-b-black shadow-md-500">
              <FaCameraRetro className="h-5 w-5" />
              <span>Finetake</span>
            </a>
          </div>

          {/* Right Side: My Hamburger Menu */}
          <div className="md:hidden flex items-center">
            {/* Conditional rendering of hamburger or close icon */}
            {isMenuOpen ? (
              <AiOutlineClose
                className="h-6 w-6 cursor-pointer"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)} // Close dropdown
              />
            ) : (
              <AiOutlineMenu
                className="h-6 w-6 cursor-pointer"
                aria-label="Open menu"
                onClick={() => setIsMenuOpen(true)} // Open dropdown
              />
            )}
          </div>

          {/* Hidden on Small Screens */}
          <div className="hidden md:flex space-x-6">
          <a href="/create-account" className="flex flex-row-reverse items-center space-x-1 hover:border-b-2 hover:border-b-black shadow-md-500">
              <IoNotifications className="h-5 w-5" />
              {/* <span>Notifications</span> */}
            </a>

            <a href="/products" className="flex items-center space-x-1 hover:border-b-2 hover:border-b-black shadow-md-500">
              Our Products
            </a>

            <a href="/Sign-Up" className="hover:text-red-500 border-2 border-blue-500 bg-blue-100 px-4 py-2 rounded-md">
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black shadow-md text-white py-10 space-y-4">
          <a href="/Sign-Up" className="block px-4 border-2 border-white-500 bg-blue-400 py-1 rounded-md hover:text-red-500 w-fit ml-4" onClick={() => setIsMenuOpen(false)}>
            Sign Up
          </a>
          <a href="/products" className="block px-4 hover:text-red-500" onClick={() => setIsMenuOpen(false)}>
            Our Products
          </a>
          <a href="/notifications" className="block px-4 hover:text-red-500 " onClick={() => setIsMenuOpen(false)}>
            Notifications
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;






































