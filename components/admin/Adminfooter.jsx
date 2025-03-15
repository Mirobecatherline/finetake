// import React from 'react';

// const AdminFooter = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-200 py-8">
//       <div className="container mx-auto flex flex-wrap justify-between">
//         <div className="w-full md:w-1/3 mb-4">
//           <h4 className="text-lg font-semibold">Admin Navigation</h4>
//           <ul className="mt-2">
//             <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
//             <li><a href="/user-management" className="hover:underline">User  Management</a></li>
//             <li><a href="/settings" className="hover:underline">Settings</a></li>
//             <li><a href="/logs" className="hover:underline">Activity Logs</a></li>
//           </ul>
//         </div>
//         <div className="w-full md:w-1/3 mb-4">
//           <h4 className="text-lg font-semibold">Support</h4>
//           <p className="mt-2">Email: muigaid91@gmail.com</p>
//           <p>Phone: (254) 456-7890</p>
//         </div>
//         <div className="w-full md:w-1/3 mb-4">
//           <h4 className="text-lg font-semibold">Connect with Us</h4>
//           <ul className="mt-2 flex space-x-4">
//             <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
//             <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
//             <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
//           </ul>
//         </div>
//       </div>
//       <div className="text-center mt-4">
//         <p>&copy; {new Date().getFullYear()} Finetake group . All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default AdminFooter;
import React, { useState, useEffect } from "react";
import { FaUser, FaTrash, FaBars, FaSearch, FaUserPlus, FaSignOutAlt, FaBell, FaEnvelope, FaCog } from "react-icons/fa";


const AdminFooter = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Admin Navigation</h4>
            <ul className="space-y-2">
              <li><a href="/dashboard" className="hover:text-blue-400 transition duration-150">Dashboard</a></li>
              <li><a href="/user-management" className="hover:text-blue-400 transition duration-150">User Management</a></li>
              <li><a href="/settings" className="hover:text-blue-400 transition duration-150">Settings</a></li>
              <li><a href="/logs" className="hover:text-blue-400 transition duration-150">Activity Logs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>muigaid91@gmail.com</span>
              </li>
              <li className="flex items-center">
                <span>Phone: (254) 456-7890</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect with Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-150">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-150">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-150">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 mt-6 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Finetake Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default AdminFooter;