import React, { useRef } from 'react';

function Aboutvideo() {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) { /* Safari */
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) { /* IE11 */
      videoRef.current.msRequestFullscreen();
    }
  };

  const aboutVideo = {
    title: "About Our Journey",
    url: "https://res.cloudinary.com/dacpiss4b/video/upload/v1736809692/c0rhnxi8jnkkcstbk6kp.mp4", // Replace this with the actual URL
    description: "Learn more about the vision and mission behind our platform."
  };

  return (
    <div className="w-full p-4 mt-4"> {/* Full width */}
      <div className="rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          src={aboutVideo.url}
          controls
          className="w-full h-72 object-cover rounded-lg cursor-pointer"
          onClick={handleVideoClick}
        ></video>
        <div className="bg-white p-4 rounded-b-lg">
          <h2 className="text-lg font-semibold text-black"> {aboutVideo.title} 🎥</h2> {/* Change the title color to black */}
          <p className="text-gray-600 mt-2">{aboutVideo.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Aboutvideo;
