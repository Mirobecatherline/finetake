'use client';
import React from 'react'
import { useEffect, useState } from 'react';
import Aboutvideo from '../components/home/Aboutvideo';
import Posts from '../components/home/Posts';
import Toppicture from '../components/home/Toppicture';
import Topvideo from '../components/home/Topvideo';
import Navbar from '../components/home/Navbar';
import Login from "./login/page";
import { useAuth } from "./context/AuthContext";


export default function Home() {
  const { user, logOut } = useAuth();

  // if (!user) {
  //   return <Login />;
  // }

  return (

    <div>
    <main className="bg-[#333333] min-h-screen">
         {/* Navigation Bar */}
        <Navbar/>
   
         {/* About Video */}
         <div className="w-full   mx-auto border-t border-b border-gray-300 bg-white   ">
           <Aboutvideo />
         </div>
   
         {/* Picture of the Day and Video of the Week */}
         <div className="flex flex-row gap-4  mx-auto border-b border-gray-300 bg-white ">
           <Toppicture />
           <Topvideo />
         </div>
   
         {/* Other Posts */}
         <Posts />
       </main>
   
       </div>

  );
}
