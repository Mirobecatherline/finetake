// import React, { useRef } from 'react';

// function Toppicture() {
//   const post = {
//     imageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736804176/zkluqenwhskipuhpcl6a.jpg",
//     caption: " ",
//   };

//   const imageRef = useRef(null);

//   const handleImageClick = () => {
//     if (imageRef.current.requestFullscreen) {
//       imageRef.current.requestFullscreen();
//       imageRef.current.style.objectFit = 'contain'; // Maintain aspect ratio in fullscreen
//     } else if (imageRef.current.webkitRequestFullscreen) { /* Safari */
//       imageRef.current.webkitRequestFullscreen();
//       imageRef.current.style.objectFit = 'contain'; // Maintain aspect ratio in fullscreen
//     } else if (imageRef.current.msRequestFullscreen) { /* IE11 */
//       imageRef.current.msRequestFullscreen();
//       imageRef.current.style.objectFit = 'contain'; // Maintain aspect ratio in fullscreen
//     }
//   };

//   const handleFullscreenChange = () => {
//     if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
//       imageRef.current.style.objectFit = 'cover'; // Revert to original display when exiting fullscreen
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
//         <img
//           ref={imageRef}
//           src={post.imageUrl}
//           alt={post.caption}
//           className="w-full h-96 object-cover rounded-lg cursor-pointer"
//           onClick={handleImageClick}
//           style={{ objectFit: 'cover' }} // Initial display
//         />
//         <div className="bg-white p-4 rounded-b-lg">
//           <h2 className="text- font-semibold  text-black">top picture🌟</h2>
//           <p className="text-gray-600 mt-2">{post.caption}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Toppicture;

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

function Toppicture() {
  const post = {
    imageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736804176/zkluqenwhskipuhpcl6a.jpg",
    caption: "Capturing the essence of beauty in ordinary moments",
    photographer: "Featured Photographer",
  };

  const imageRef = useRef(null);

  const handleImageClick = () => {
    if (imageRef.current.requestFullscreen) {
      imageRef.current.requestFullscreen();
      imageRef.current.style.objectFit = 'contain';
    } else if (imageRef.current.webkitRequestFullscreen) {
      imageRef.current.webkitRequestFullscreen();
      imageRef.current.style.objectFit = 'contain';
    } else if (imageRef.current.msRequestFullscreen) {
      imageRef.current.msRequestFullscreen();
      imageRef.current.style.objectFit = 'contain';
    }
  };

  const handleFullscreenChange = () => {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      imageRef.current.style.objectFit = 'cover';
    }
  };

  React.useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="w-full md:w-1/2">
      <motion.div 
        className="h-full rounded-xl shadow-lg overflow-hidden bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
            Featured Photo
          </h2>
          <div className="flex items-center">
            <span className="bg-white bg-opacity-30 text-white text-xs px-2 py-1 rounded-full">
              Highlight
            </span>
          </div>
        </div>
        
        <div className="relative">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"
            whileHover={{ opacity: 1 }}
          >
            <div className="p-6 text-white">
              <h3 className="font-bold text-xl mb-2">{post.photographer}</h3>
              <p className="font-medium">{post.caption}</p>
            </div>
          </motion.div>
          
          <motion.img
            ref={imageRef}
            src={post.imageUrl}
            alt={post.caption}
            className="w-full h-96 object-cover cursor-pointer"
            onClick={handleImageClick}
            style={{ objectFit: 'cover' }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-900 font-bold">Photo of the Day</h3>
              <p className="text-gray-500 text-sm">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
            </div>
            <motion.button 
              className="flex items-center text-white bg-gradient-to-r from-purple-600 to-blue-500 px-3 py-1 rounded-full text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleImageClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
              View Full
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Toppicture;
