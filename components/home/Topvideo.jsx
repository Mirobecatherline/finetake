// import React, { useRef } from 'react';

// function Topvideo() {
//   const videoOfTheWeek = {
//     title: "Inspirational Moments",
//     url: "https://res.cloudinary.com/dacpiss4b/video/upload/v1736809692/c0rhnxi8jnkkcstbk6kp.mp4",
//     description: " "
//   };

//   const videoRef = useRef(null);

//   const handleVideoClick = () => {
//     if (videoRef.current.requestFullscreen) {
//       videoRef.current.requestFullscreen();
//       videoRef.current.style.objectFit = 'contain'; // Maintain aspect ratio in fullscreen
//     } else if (videoRef.current.webkitRequestFullscreen) { /* Safari */
//       videoRef.current.webkitRequestFullscreen();
//       videoRef.current.style.objectFit = 'contain'; // Maintain aspect ratio in fullscreen
//     } else if (videoRef.current.msRequestFullscreen) { /* IE11 */
//       videoRef.current.msRequestFullscreen();
//       videoRef.current.style.objectFit = 'contain'; // Maintain aspect ratio in fullscreen
//     }
//   };

//   const handleFullscreenChange = () => {
//     if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
//       videoRef.current.style.objectFit = 'cover'; // Revert to original display when exiting fullscreen
//     }
//   };

//   React.useEffect(() => {
//     document.addEventListener('fullscreenchange', handleFullscreenChange);
//     document.addEventListener('webkitfullscreenchange', handleFullscreenChange); // Safari
//     document.addEventListener('msfullscreenchange', handleFullscreenChange); // IE11

//     return () => {
//       document.removeEventListener('fullscreenchange', handleFullscreenChange);
//       document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
//       document.removeEventListener('msfullscreenchange', handleFullscreenChange);
//     };
//   }, []);

//   return (
//     <div className="w-1/2 p-4"> {/* Updated width */}
//       <div className="rounded-lg overflow-hidden">
//         <video
//           ref={videoRef}
//           src={videoOfTheWeek.url}
//           controls
//           className="w-full h-96 object-cover rounded-lg cursor-pointer"
//           onClick={handleVideoClick}
//           style={{ objectFit: 'cover' }} // Initial display
//         ></video>
//         <div className="bg-white p-4 rounded-b-lg">
//           <h2 className="text font-semibold   text-black">Top Video🎥</h2>
//           <p className="text-gray-600 mt-2">{videoOfTheWeek.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Topvideo;

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Topvideo() {
  const videoOfTheWeek = {
    title: "Inspirational Moments",
    url: "https://res.cloudinary.com/dacpiss4b/video/upload/v1736809692/c0rhnxi8jnkkcstbk6kp.mp4",
    description: "Crafting stories through motion and light"
  };

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
      videoRef.current.style.objectFit = 'contain';
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
      videoRef.current.style.objectFit = 'contain';
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
      videoRef.current.style.objectFit = 'contain';
    }
  };

  const handleFullscreenChange = () => {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      videoRef.current.style.objectFit = 'cover';
    }
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('play', () => setIsPlaying(true));
      videoElement.addEventListener('pause', () => setIsPlaying(false));
      videoElement.addEventListener('ended', () => setIsPlaying(false));
    }

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
      
      if (videoElement) {
        videoElement.removeEventListener('play', () => setIsPlaying(true));
        videoElement.removeEventListener('pause', () => setIsPlaying(false));
        videoElement.removeEventListener('ended', () => setIsPlaying(false));
      }
    };
  }, []);

  return (
    <div className="w-full md:w-1/2">
      <motion.div 
        className="h-full rounded-xl shadow-lg overflow-hidden bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <div className="p-4 bg-gradient-to-r from-indigo-600 to-pink-500 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </span>
            Featured Video
          </h2>
          <div className="flex items-center">
            <span className="bg-white bg-opacity-30 text-white text-xs px-2 py-1 rounded-full">
              Trending
            </span>
          </div>
        </div>
        
        <div className="relative group">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            whileHover={{ opacity: 1 }}
          >
            <motion.button 
              className="bg-white rounded-full p-4 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
            >
              {!isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </motion.button>
          </motion.div>
          
          <video
            ref={videoRef}
            src={videoOfTheWeek.url}
            className="w-full h-96 object-cover cursor-pointer"
            onClick={handleVideoClick}
            style={{ objectFit: 'cover' }}
            poster="https://res.cloudinary.com/dacpiss4b/image/upload/v1736804176/zkluqenwhskipuhpcl6a.jpg"
          ></video>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-900 font-bold">{videoOfTheWeek.title}</h3>
              <p className="text-gray-500 text-sm">Video of the Week</p>
            </div>
            
            <div className="flex space-x-2">
              <motion.button 
                className="flex items-center text-gray-600 hover:text-red-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </motion.button>
              
              <motion.button 
                className="flex items-center text-white bg-gradient-to-r from-indigo-600 to-pink-500 px-3 py-1 rounded-full text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleVideoClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
                Fullscreen
              </motion.button>
            </div>
          </div>
          
          <p className="text-gray-600 mt-2 text-sm">{videoOfTheWeek.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Topvideo;
