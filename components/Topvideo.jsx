import React, { useRef } from 'react';

function Topvideo() {
  const videoOfTheWeek = {
    title: "Inspirational Moments",
    url: "https://res.cloudinary.com/dacpiss4b/video/upload/v1736809692/c0rhnxi8jnkkcstbk6kp.mp4",
    description: " "
  };

  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
      videoRef.current.style.objectFit = 'contain'; // Maintain aspect ratio in fullscreen
    } else if (videoRef.current.webkitRequestFullscreen) { /* Safari */
      videoRef.current.webkitRequestFullscreen();
      videoRef.current.style.objectFit = 'contain'; // Maintain aspect ratio in fullscreen
    } else if (videoRef.current.msRequestFullscreen) { /* IE11 */
      videoRef.current.msRequestFullscreen();
      videoRef.current.style.objectFit = 'contain'; // Maintain aspect ratio in fullscreen
    }
  };

  const handleFullscreenChange = () => {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      videoRef.current.style.objectFit = 'cover'; // Revert to original display when exiting fullscreen
    }
  };

  React.useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange); // Safari
    document.addEventListener('msfullscreenchange', handleFullscreenChange); // IE11

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="w-1/2 p-4"> {/* Updated width */}
      <div className="rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          src={videoOfTheWeek.url}
          controls
          className="w-full h-96 object-cover rounded-lg cursor-pointer"
          onClick={handleVideoClick}
          style={{ objectFit: 'cover' }} // Initial display
        ></video>
        <div className="bg-white p-4 rounded-b-lg">
          <h2 className="text font-semibold   text-black">Top Video🎥</h2>
          <p className="text-gray-600 mt-2">{videoOfTheWeek.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Topvideo;
