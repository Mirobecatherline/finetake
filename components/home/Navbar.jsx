
// import React, { useState } from 'react';
// import { FaHome } from 'react-icons/fa';
// import { CiSearch } from 'react-icons/ci';
// import { FaCameraRetro } from 'react-icons/fa';
// import { IoNotifications } from "react-icons/io5";
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Added AiOutlineClose for the hamberger open and close
// import { useAuth } from '../../app/context/AuthContext';
 

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // this one is for managing visibility
//   const [searchQuery, setSearchQuery] = useState(''); // this one is used to manage the search input value
  

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     // Handle search logic here to redirect or filter results)
//     console.log("Search submitted:", searchQuery);
//   };

//   return (
//     <nav className="bg-white shadow-md p-0 text-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* companies name*/}
//           <div className="flex items-center space-x-2">
//           <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-500">FineTake</h1>
//           </div>

//           {/* Center: My Essential Menu Items */}
//           <div className="flex space-x-6">
//             <a href="/" className="flex flex-row-reverse items-center space-x-1 hover:border-b-2 hover hover:border-b-black shadow-md-500">
//               <FaHome className="h-5 w-5" />
//               {/* <span>home</span> */}
//             </a>

//             {/* Search Bar and an search icon */}
//             <form onSubmit={handleSearchSubmit} className="flex items-center border-2 border-gray-300 rounded-md p-1 w-22"> {/* Adjust width here */}
//               <CiSearch className="h-5 w-5 text-gray-500" />
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//                 placeholder="Search..."
//                 className="bg-transparent border-none outline-none text-black pl-2 w-full" 
//               />
//             </form>

//             <a href="/application/about" className="flex flex-row-reverse items-center space-x-1 hover:border-b-2 hover:border-b-black shadow-md-500">
//               <FaCameraRetro className="h-5 w-5" />
//               <span>Finetake</span>
//             </a>
//           </div>

//           {/* Right Side: My Hamburger Menu */}
//           <div className="md:hidden flex items-center">
//             {/* Conditional rendering of hamburger or close icon */}
//             {isMenuOpen ? (
//               <AiOutlineClose
//                 className="h-6 w-6 cursor-pointer"
//                 aria-label="Close menu"
//                 onClick={() => setIsMenuOpen(false)} // Close dropdown
//               />
//             ) : (
//               <AiOutlineMenu
//                 className="h-6 w-6 cursor-pointer"
//                 aria-label="Open menu"
//                 onClick={() => setIsMenuOpen(true)} // Open dropdown
//               />
//             )}
//           </div>

//           {/* Hidden on Small Screens */}
//           <div className="hidden md:flex space-x-6">
//           <a href="/create-account" className="flex flex-row-reverse items-center space-x-1 hover:border-b-2 hover:border-b-black shadow-md-500">
//               <IoNotifications className="h-5 w-5" />
//               {/* <span>Notifications</span> */}
//             </a>

//             <a href="/products" className="flex items-center space-x-1 hover:border-b-2 hover:border-b-black shadow-md-500">
//               Our Products
//             </a>

//             <a href="/login" className="hover:text-red-500 border-2 border-blue-500 bg-blue-100 px-4 py-2 rounded-md" >
//               <button >
//                 sign In
//               </button>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-black shadow-md text-white py-10 space-y-4">
//           <a href="/products" className="block px-4 hover:text-red-500" onClick={() => setIsMenuOpen(false)}>
//             Our Products
//           </a>
//           <a href="/notifications" className="block px-4 hover:text-red-500 " onClick={() => setIsMenuOpen(false)}>
//             Notifications
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaCameraRetro } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { IoNotifications } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlinePhotoLibrary } from 'react-icons/md';
import { useAuth } from '../../app/context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  
  // Check if user has scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted:", searchQuery);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white backdrop-blur-sm shadow-md' : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <a href="/" className="flex items-center">
              <FaCameraRetro className="h-6 w-6 text-purple-600 mr-2" />
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                FineTake
              </h1>
            </a>
          </motion.div>

          {/* Center: Menu Items */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.a 
              href="/" 
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors px-3 py-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHome className="h-5 w-5" />
              <span>Home</span>
            </motion.a>

            <motion.a 
              href="/about" 
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors px-3 py-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BsInfoCircle className="h-5 w-5" />
              <span>About</span>
            </motion.a>

            <motion.a 
              href="/products" 
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors px-3 py-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdOutlinePhotoLibrary className="h-5 w-5" />
              <span>Products</span>
            </motion.a>

            <motion.a 
              href="/application/gallery" 
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors px-3 py-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCameraRetro className="h-5 w-5" />
              <span>Finetake</span>
            </motion.a>
          </div>

          {/* Right side: Search, notifications, sign in */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <motion.form 
              onSubmit={handleSearchSubmit}
              className={`relative flex items-center ${
                searchFocused 
                  ? 'border-2 border-purple-500 bg-white rounded-full py-1 px-3 shadow-md' 
                  : 'border border-gray-300 bg-gray-100 rounded-full py-1 px-3'
              } transition-all duration-300`}
              animate={{ width: searchFocused ? 220 : 180 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <CiSearch className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-gray-800 pl-2 w-full text-sm"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </motion.form>

            {/* Hidden on Small Screens */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.a
                href="/notifications"
                className="text-gray-700 hover:text-purple-600 transition-colors relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IoNotifications className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </motion.a>

              <motion.a
                href="/login"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
                  Sign In
                </button>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 p-2 rounded-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? (
                  <AiOutlineClose className="h-6 w-6" />
                ) : (
                  <AiOutlineMenu className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        className={`md:hidden overflow-hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 shadow-inner px-4 py-5 space-y-3">
          <a 
            href="/" 
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaHome className="h-5 w-5 text-purple-600" />
            <span className="font-medium">Home</span>
          </a>
          
          <a 
            href="/about" 
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <BsInfoCircle className="h-5 w-5 text-purple-600" />
            <span className="font-medium">About</span>
          </a>
          
          <a 
            href="/products" 
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <MdOutlinePhotoLibrary className="h-5 w-5 text-purple-600" />
            <span className="font-medium">Products</span>
          </a>
          
          <a 
            href="/application/about" 
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaCameraRetro className="h-5 w-5 text-purple-600" />
            <span className="font-medium">Finetake</span>
          </a>
          
          <a 
            href="/notifications" 
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <IoNotifications className="h-5 w-5 text-purple-600" />
            <span className="font-medium">Notifications</span>
            <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </a>
          
          <div className="pt-2">
            <a 
              href="/login"
              className="block text-center bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;