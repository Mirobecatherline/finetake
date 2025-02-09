
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdAnalytics, MdDarkMode, MdDashboard, MdSettings } from 'react-icons/md';

const Sidenav = () => {
  const menus = [
    { name: 'Dashboard', Link: '/', icon: MdDashboard },
    { name: 'Messages', Link: '/', icon: FiMessageSquare },
    { name: 'My Account', Link: '/', icon: AiOutlineUser },
    { name: 'Home', Link: '/', icon: FaHome },
    { name: 'Analytics', Link: '/', icon: MdAnalytics },
    { name: 'Settings', Link: '/', icon: MdSettings },
    { name: 'Mode', Link: '#', icon: MdDarkMode },
  ];

  const [open, setOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [clientImages, setClientImages] = useState([]);
  const [clientID, setClientID] = useState("");
  const [images, setImages] = useState([
    "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-54-27_whcgvd.jpg",
    "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-56-28_mvnenk.jpg",
    "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-56-29_x5ybpp.jpg",
    "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-56-27_ywzqgc.jpg",
  ]);

  const [selectedImage, setSelectedImage] = useState(null);


  const handlePayToViewClick = (imageUrl) => {
    setTimeout(() => {
      alert("Payment successful! Image moved to Client Collection.");
      setClientImages((prev) => [...prev, imageUrl]);
      setImages((prev) => prev.filter((img) => img !== imageUrl));
    }, 2000);
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedImages(files.map(file => URL.createObjectURL(file))); 
  };

  const handleSendPhotos = () => {
    console.log("Sending images to Client ID:", clientID);
  };

  

  return (
    <section className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} flex min-h-screen`}>
      {/* Sidebar */}
      <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen ${open ? 'w-64' : 'w-16'} transition-all duration-500 px-4`}>
        <div className="py-3 flex justify-end">
          <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
        </div>
        <div className="mt-4 flex flex-col gap-4">
          {menus.map((menu, i) => (
            <div key={i} onClick={() => { if (menu.name === 'Mode') setDarkMode(!darkMode); }}>
              <Link href={menu?.Link} className="flex items-center text-sm gap-3 p-2 hover:bg-gray-800 rounded-md">
                <div>{React.createElement(menu?.icon, { size: '20' })}</div>
                <h2
  className={`overflow-hidden transition-all duration-300 ${
    open ? 'opacity-100 w-auto' : 'opacity-0 w-0'
  }`}
>
  {menu?.name}
</h2>

              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 w-full">
        {/* Edited Photos Section */}
        <div className="mt-10 p-4 bg-gray-900 rounded-lg">
          <h2 className="text-xl text-white font-semibold mb-4">Edited Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img src={image} alt="Edited" className="w-full h-auto rounded-lg" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <button onClick={() => handlePayToViewClick(image)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Pay to View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Collection */}
        <div className="mt-6 p-4 bg-gray-900 rounded-lg">
          <h2 className="text-xl text-white font-semibold mb-4">Client Collection</h2>
          {clientImages.length === 0 ? (
            <p className="text-gray-400">No paid images yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {clientImages.map((image, index) => (
               <img
               key={index}
               src={image}
               alt={`Client Image ${index + 1}`}
               className="w-full h-auto rounded-lg cursor-pointer"
               onClick={() => setSelectedImage(image)}
             />
             
              ))}
            </div>
          )}
        </div>

        {selectedImage && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
    <div className="relative">
      {/* Close Button */}
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-4 right-4 z-50 bg-red-600 text-white text-xl px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition-all"
      >
        ✖
      </button>
      
      {/* Image */}
      <img src={selectedImage} alt="Full View" className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl" />
    </div>
  </div>
)}




        {/* Client ID Input Field */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Enter Client ID" 
            value={clientID}
            onChange={(e) => setClientID(e.target.value)}
            className="p-2 rounded-md border border-gray-600 text-black flex-grow"
          />
          <button 
            onClick={handleSendPhotos} 
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </div>

        {/* Upload Button */}
        <div className="mt-4">
          <button onClick={() => document.getElementById('fileInput').click()} className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Upload
          </button>
          <input id="fileInput" type="file" multiple accept="image/*" onChange={handleFileUpload} className="hidden" />
        </div>

              {/* Review & Rating Section */}
              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://res.cloudinary.com/dacpiss4b/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1736938818/DSC_038757_mjzhiy.jpg"
              alt="Photographer"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="text-md font-medium text-white">Photos Edited by Logan</h4>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`cursor-pointer text-2xl ${rating >= star ? 'text-yellow-500' : 'text-gray-200'}`}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <textarea
              className="flex-grow p-2 border border-gray-900 rounded-md text-black"
              placeholder="Leave a comment..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <button
              onClick={() => {
                alert(`Rating: ${rating}\nReview: ${review}`);
                setRating(0);
                setReview("");
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sidenav;











