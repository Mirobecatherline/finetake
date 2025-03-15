// import React from 'react';

// const Header = () => {

//   const currentuser = JSON.parse(localStorage.getItem("user"));
//   const adminId = currentuser.id;

//   return (
//     <div className="flex flex-col items-center p-4 bg-gray-100 border-b border-gray-300 shadow-md">
//       <img
//         src={currentuser.photo_url}
//         alt={currentuser.name}
//         className="w-40 h-40 mb-4 rounded-full object-cover"
//       />
//       <div className="text-center mb-4">
//         <span className="text-lg font-semibold text-gray-800">{currentuser.name}</span>
//         <div className="text-sm text-gray-600">{currentuser.role}</div>
//       </div>
//       <div className="self-end mr-6">
//         <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
//           Create New Account
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import {
  FaUser,
  FaTrash,
  FaBars,
  FaSearch,
  FaUserPlus,
  FaSignOutAlt,
  FaBell,
  FaEnvelope,
  FaCog,
} from "react-icons/fa";

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentuser = JSON.parse(localStorage.getItem("user"));
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user");
    // You can also clear other items if needed
    // localStorage.removeItem("token");
    
    // Redirect to home page using router
    router.push('/');
  };
  

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Toggle */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mr-4 text-gray-700 md:hidden"
            >
              <FaBars size={20} />
            </button>
            <h1 className="text-xl font-bold text-gray-800">
              FineTake {currentuser.role}
            </h1>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 flex-1 max-w-md mx-6">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search dashboard..."
              className="bg-transparent border-0 outline-none p-2 w-full text-gray-700"
            />
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <FaBell size={18} />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <FaEnvelope size={18} />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <FaCog size={18} />
              </button>
            </div>

            <div className="flex items-center">
              <div className="hidden md:block mr-3 text-right">
                <div className="font-medium text-gray-800">
                  {currentuser.name}
                </div>
                <div className="text-xs text-gray-500 capitalize">
                  {currentuser.role}
                </div>
              </div>
              <div className="relative group">
                <img
                  src={currentuser.photo_url}
                  alt={currentuser.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 cursor-pointer"
                  onClick={toggleDropdown}
                />
                {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20">
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  {/* <a href="/logout" className="block px-4 py-2 text-red-500 hover:bg-gray-100">Logout</a> */}
                   <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-red-500 hover:bg-gray-100 text-left w-full"
                  >
                    Logout
                  </button> 
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4">
            <div className="flex items-center bg-gray-100 rounded-lg px-3 mb-4">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search dashboard..."
                className="bg-transparent border-0 outline-none p-2 w-full text-gray-700"
              />
            </div>
            <nav className="space-y-1">
              <a
                href="/dashboard"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
              >
                Dashboard
              </a>
              <a
                href="/user-management"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
              >
                User Management
              </a>
              <a
                href="/settings"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
              >
                Settings
              </a>
              <a
                href="/logs"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
              >
                Activity Logs
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
