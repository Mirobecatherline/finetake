
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { FiMessageSquare, FiShare } from 'react-icons/fi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdAnalytics, MdDarkMode, MdDashboard, MdSettings } from 'react-icons/md';
import { AiOutlineDownload } from 'react-icons/ai';

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
  const [open, setOpen] = useState(true); // Sidebar toggle state
  const [darkMode, setDarkMode] = useState(false); // Mode toggle state

  // State for tracking paid images
  const [paidImages, setPaidImages] = useState([]); // Tracks paid images

  const [isLightboxOpen, setIsLightboxOpen] = useState(false); // Controls full-screen image view
  const [lightboxImage, setLightboxImage] = useState(null); // Image for the lightbox

  const images = [
    "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-54-27_whcgvd.jpg",
    "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-56-28_mvnenk.jpg",
    "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-56-29_x5ybpp.jpg",
    "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-56-27_ywzqgc.jpg",
  ];

  const handlePayment = (image) => {
    // Simulate payment success
    alert(`Payment successful for image: ${image}`);
    setPaidImages((prev) => [...prev, image]); // Move image to paid
  };

  const openLightbox = (image) => {
    if (paidImages.includes(image)) {
      setLightboxImage(image);
      setIsLightboxOpen(true);
    } else {
      alert('Please pay to view this image.');
    }
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false); // Close the lightbox
    setLightboxImage(null); // Clear the image from the lightbox
  };

  const handleDownload = (image) => {
    
    const link = document.createElement('a');
    link.href = image;
    link.download = image.split('/').pop();
    document.body.appendChild(link);
    link.click(); 
    document.body.removeChild(link);
  };

  const handlePost = (image) => {
    // Placeholder for post functionality (you can replace this with actual post functionality)
    alert(`Post functionality for image: ${image}`);
  };

  // State for storing ratings and review text
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewSubmit = () => {
    alert(`Rating: ${rating}\nReview: ${review}`);
    // You can handle the review submission here (e.g., sending it to a server)
    setRating(0);
    setReview(""); 
  };

  return (
    <section className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} flex gap-6 min-h-screen `}>
      {/*My Sidebar Menu*/}
      <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen ${open ? 'w-72' : 'w-16'} duration-500 px-4`}>
        <div className="py-3 flex justify-end">
          <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
        </div>

        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu, i) => (
            <div key={i} onClick={() => { if (menu.name === 'Mode') setDarkMode(!darkMode); }}>
              <Link href={menu?.Link} className={`${menu?.margin && 'mt-5'} flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${!open && 'justify-center'}`}>
                <div>{React.createElement(menu?.icon, { size: '20' })}</div>
                <h2 className={`whitespace-pre duration-300 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/*My Main Content */}
      <div className="m-3 flex-1 py-8">
        <h2 className="px-4 text-xl font-semibold mb-4">My Photos</h2>

        {/*My First Image Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            !paidImages.includes(image) && (
              <div key={index} className="relative overflow-hidden bg-gray-100 rounded-lg shadow-md">
                <img
                  src={image}
                  alt="Client Photo"
                  className="w-full h-64 object-cover rounded-lg cursor-pointer"
                  onClick={() => openLightbox(image)}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <button
                    onClick={() => handlePayment(image)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                  >
                    Pay to View
                  </button>
                </div>
              </div>
            )
          ))}
        </div>

        {/* For Me(either photos or videos) */}
        <h2 className="px-4 text-xl font-semibold mb-4 mt-8">For Me</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paidImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden bg-gray-100 rounded-lg shadow-md">
              <img
                src={image}
                alt="Gallery"
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
                onClick={() => openLightbox(image)}
              />
              {/* Section to handle Actions for Download and Post */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                <button
                  onClick={() => handleDownload(image)}
                  className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
                >
                  <AiOutlineDownload size={20} />
                </button>
                <button
                  onClick={() => handlePost(image)}
                  className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                >
                  <FiShare size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/*Photographer Rating Section  */}
        <div className="mt-10 p-4 bg-gray-900 rounded-lg ">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://res.cloudinary.com/dacpiss4b/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1736938818/DSC_038757_mjzhiy.jpg"
              alt="Photographer"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="text-md font-medium text-white">Photos taken by Logan</h4>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`cursor-pointer text-3xl ${rating >= star ? 'text-yellow-500' : 'text-gray-200'}`}
                    onClick={() => handleRatingChange(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <textarea
              className="flex-grow p-2 border border-gray-900 rounded-md text-black"
              placeholder="Leave a comment here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <button
              onClick={handleReviewSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src={lightboxImage}
              alt="Full-screen"
              className="max-w-full max-h-full object-contain cursor-pointer"
              onClick={closeLightbox}
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black p-2 rounded-full"
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Sidenav;







































