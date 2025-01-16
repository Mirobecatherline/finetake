'use client';
import Aboutvideo from '../../../components/Aboutvideo';
import Posts from '../../../components/Posts';
import Toppicture from '../../../components/Toppicture';
import Topvideo from '../../../components/Topvideo';

import React from 'react';

function Page() {
  return (
    <main className="bg-[#333333] min-h-screen"> {/* Updated background color */}
      {/* Navigation Bar */}
     

      {/* About Video */}
      <div className="w-full   mx-auto border-t border-b border-gray-300 bg-white   "> {/* Full width with white background and borders */}
        <Aboutvideo />
      </div>

      {/* Picture of the Day and Video of the Week */}
      <div className="flex flex-row gap-4  mx-auto border-b border-gray-300 bg-white "> {/* Added border and background color */}
        <Toppicture />
        <Topvideo />
      </div>

      {/* Other Posts */}
      <Posts />
    </main>
  );
}

export default Page;
