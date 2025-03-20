// import React, { useRef } from 'react';

// function Aboutvideo() {
//   const videoRef = useRef(null);

//   const handleVideoClick = () => {
//     if (videoRef.current.requestFullscreen) {
//       videoRef.current.requestFullscreen();
//     } else if (videoRef.current.webkitRequestFullscreen) { /* Safari */
//       videoRef.current.webkitRequestFullscreen();
//     } else if (videoRef.current.msRequestFullscreen) { /* IE11 */
//       videoRef.current.msRequestFullscreen();
//     }
//   };

//   const aboutVideo = {
//     title: "About Our Journey",
//     url: "https://res.cloudinary.com/dacpiss4b/video/upload/v1736809692/c0rhnxi8jnkkcstbk6kp.mp4", // Replace this with the actual URL
//     description: "Learn more about the vision and mission behind our platform."
//   };

//   return (
//     <div className="w-full p-4 mt-4"> {/* Full width */}
//       <div className="rounded-lg overflow-hidden">
//         <video
//           ref={videoRef}
//           src={aboutVideo.url}
//           controls
//           className="w-full h-72 object-cover rounded-lg cursor-pointer"
//           onClick={handleVideoClick}
//         ></video>
//         <div className="bg-white p-4 rounded-b-lg">
//           <h2 className="text-lg font-semibold text-black"> {aboutVideo.title} 🎥</h2> {/* Change the title color to black */}
//           <p className="text-gray-600 mt-2">{aboutVideo.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Aboutvideo;
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Aboutvideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const aboutVideo = {
    title: "About Our Journey",
    url: "https://res.cloudinary.com/dacpiss4b/video/upload/v1736809692/c0rhnxi8jnkkcstbk6kp.mp4",
    description: "Learn more about the vision and mission behind our platform. We capture moments that tell stories and evoke emotions through the lens of talented photographers around the world.",
    poster: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736804176/zkluqenwhskipuhpcl6a.jpg"
  };

  const handleVideoClick = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
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

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    
    const handleLoadedMetadata = () => {
      setVideoDuration(videoElement.duration);
    };
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);
    
    if (videoElement) {
      videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
      videoElement.addEventListener('play', handlePlay);
      videoElement.addEventListener('pause', handlePause);
      videoElement.addEventListener('ended', handleEnded);
      videoElement.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
        videoElement.removeEventListener('play', handlePlay);
        videoElement.removeEventListener('pause', handlePause);
        videoElement.removeEventListener('ended', handleEnded);
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white flex items-center">
          <span className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </span>
          {aboutVideo.title}
        </h2>
        <div className="flex items-center">
          <span className="bg-white bg-opacity-20 text-white text-xs px-2 py-1 rounded-full">
            Featured
          </span>
        </div>
      </div>
      
      <div className="relative group">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300 flex items-center justify-center"
        >
          <motion.button 
            className="bg-white rounded-full p-4 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
          >
            {!isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </motion.button>
        </motion.div>
        
        <video
          ref={videoRef}
          src={aboutVideo.url}
          className="w-full h-80 object-cover cursor-pointer"
          onClick={handleVideoClick}
          poster={aboutVideo.poster}
        ></video>
        
        {/* Custom video controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col space-y-2">
          {/* Progress bar */}
          <div className="w-full bg-gray-600 h-1 rounded-full overflow-hidden">
            <div 
              className="bg-white h-full rounded-full" 
              style={{ width: `${(currentTime / videoDuration) * 100}%` }}
            ></div>
          </div>
          
          {/* Controls and time */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button 
                className="text-white p-1 rounded-full hover:bg-white/20 transition-colors"
                onClick={togglePlay}
              >
                {!isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                  </svg>
                )}
              </button>
              <span className="text-white text-xs">
                {formatTime(currentTime)} / {formatTime(videoDuration)}
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                className="text-white p-1 rounded-full hover:bg-white/20 transition-colors"
                onClick={handleVideoClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-xl text-gray-900 mb-2">{aboutVideo.title}</h3>
        <p className="text-gray-600">{aboutVideo.description}</p>
        
        <div className="mt-5 flex justify-between items-center">
          <div className="flex items-center">
            <div className="p-1.5 bg-gray-100 rounded-full mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm text-gray-600">2:45 minutes</span>
          </div>
          
          <motion.button
            className="text-sm text-white bg-gradient-to-r from-gray-700 to-gray-900 px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleVideoClick}
          >
            Watch Fullscreen
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default Aboutvideo;