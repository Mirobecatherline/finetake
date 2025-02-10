import React, { useRef } from 'react';

function Toppicture() {
  const post = {
    imageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736804176/zkluqenwhskipuhpcl6a.jpg",
    caption: " ",
  };

  const imageRef = useRef(null);

  const handleImageClick = () => {
    if (imageRef.current.requestFullscreen) {
      imageRef.current.requestFullscreen();
      imageRef.current.style.objectFit = 'contain'; // Maintain aspect ratio in fullscreen
    } else if (imageRef.current.webkitRequestFullscreen) { /* Safari */
      imageRef.current.webkitRequestFullscreen();
      imageRef.current.style.objectFit = 'contain'; // Maintain aspect ratio in fullscreen
    } else if (imageRef.current.msRequestFullscreen) { /* IE11 */
      imageRef.current.msRequestFullscreen();
      imageRef.current.style.objectFit = 'contain'; // Maintain aspect ratio in fullscreen
    }
  };

  const handleFullscreenChange = () => {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      imageRef.current.style.objectFit = 'cover'; // Revert to original display when exiting fullscreen
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
        <img
          ref={imageRef}
          src={post.imageUrl}
          alt={post.caption}
          className="w-full h-96 object-cover rounded-lg cursor-pointer"
          onClick={handleImageClick}
          style={{ objectFit: 'cover' }} // Initial display
        />
        <div className="bg-white p-4 rounded-b-lg">
          <h2 className="text- font-semibold  text-black">top picture🌟</h2>
          <p className="text-gray-600 mt-2">{post.caption}</p>
        </div>
      </div>
    </div>
  );
}

export default Toppicture;
