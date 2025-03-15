
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { AiOutlineUser } from 'react-icons/ai';
// import { FaHome } from 'react-icons/fa';
// import { FiMessageSquare, FiShare } from 'react-icons/fi';
// import { HiMenuAlt3 } from 'react-icons/hi';
// import { MdAnalytics, MdDarkMode, MdDashboard, MdSettings } from 'react-icons/md';
// import { AiOutlineDownload } from 'react-icons/ai';

// const Sidenav = () => {
//   const menus = [
//     { name: 'Dashboard', Link: '/', icon: MdDashboard },
//     { name: 'Messages', Link: '/', icon: FiMessageSquare },
//     { name: 'My Account', Link: '/', icon: AiOutlineUser },
//     { name: 'Home', Link: '/', icon: FaHome },
//     { name: 'Analytics', Link: '/', icon: MdAnalytics },
//     { name: 'Settings', Link: '/', icon: MdSettings },
//     { name: 'Mode', Link: '#', icon: MdDarkMode },
//   ];
//   const [open, setOpen] = useState(true); // Sidebar toggle state
//   const [darkMode, setDarkMode] = useState(false); // Mode toggle state

//   // State for tracking paid images
//   const [paidImages, setPaidImages] = useState([]); // Tracks paid images

//   const [isLightboxOpen, setIsLightboxOpen] = useState(false); // Controls full-screen image view
//   const [lightboxImage, setLightboxImage] = useState(null); // Image for the lightbox

//   const images = [
//     "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-54-27_whcgvd.jpg",
//     "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-56-28_mvnenk.jpg",
//     "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-56-29_x5ybpp.jpg",
//     "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-56-27_ywzqgc.jpg",
//   ];

//   const handlePayment = (image) => {
//     // Simulate payment success
//     alert(`Payment successful for image: ${image}`);
//     setPaidImages((prev) => [...prev, image]); // Move image to paid
//   };

//   const openLightbox = (image) => {
//     if (paidImages.includes(image)) {
//       setLightboxImage(image);
//       setIsLightboxOpen(true);
//     } else {
//       alert('Please pay to view this image.');
//     }
//   };

//   const closeLightbox = () => {
//     setIsLightboxOpen(false); // Close the lightbox
//     setLightboxImage(null); // Clear the image from the lightbox
//   };

//   const handleDownload = (image) => {
    
//     const link = document.createElement('a');
//     link.href = image;
//     link.download = image.split('/').pop();
//     document.body.appendChild(link);
//     link.click(); 
//     document.body.removeChild(link);
//   };

//   const handlePost = (image) => {
//     // Placeholder for post functionality (you can replace this with actual post functionality)
//     alert(`Post functionality for image: ${image}`);
//   };

//   // State for storing ratings and review text
//   const [rating, setRating] = useState(0);
//   const [review, setReview] = useState("");

//   const handleRatingChange = (newRating) => {
//     setRating(newRating);
//   };

//   const handleReviewSubmit = () => {
//     alert(`Rating: ${rating}\nReview: ${review}`);
//     // You can handle the review submission here (e.g., sending it to a server)
//     setRating(0);
//     setReview(""); 
//   };

//   return (
//     <section className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} flex gap-6 min-h-screen `}>
//       {/*My Sidebar Menu*/}
//       <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen ${open ? 'w-72' : 'w-16'} duration-500 px-4`}>
//         <div className="py-3 flex justify-end">
//           <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
//         </div>

//         <div className="mt-4 flex flex-col gap-4 relative">
//           {menus.map((menu, i) => (
//             <div key={i} onClick={() => { if (menu.name === 'Mode') setDarkMode(!darkMode); }}>
//               <Link href={menu?.Link} className={`${menu?.margin && 'mt-5'} flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${!open && 'justify-center'}`}>
//                 <div>{React.createElement(menu?.icon, { size: '20' })}</div>
//                 <h2 className={`whitespace-pre duration-300 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/*My Main Content */}
//       <div className="m-3 flex-1 py-8">
//         <h2 className="px-4 text-xl font-semibold mb-4">My Photos</h2>

//         {/*My First Image Container */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {images.map((image, index) => (
//             !paidImages.includes(image) && (
//               <div key={index} className="relative overflow-hidden bg-gray-100 rounded-lg shadow-md">
//                 <img
//                   src={image}
//                   alt="Client Photo"
//                   className="w-full h-64 object-cover rounded-lg cursor-pointer"
//                   onClick={() => openLightbox(image)}
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                   <button
//                     onClick={() => handlePayment(image)}
//                     className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
//                   >
//                     Pay to View
//                   </button>
//                 </div>
//               </div>
//             )
//           ))}
//         </div>

//         {/* For Me(either photos or videos) */}
//         <h2 className="px-4 text-xl font-semibold mb-4 mt-8">For Me</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {paidImages.map((image, index) => (
//             <div key={index} className="relative overflow-hidden bg-gray-100 rounded-lg shadow-md">
//               <img
//                 src={image}
//                 alt="Gallery"
//                 className="w-full h-64 object-cover rounded-lg cursor-pointer"
//                 onClick={() => openLightbox(image)}
//               />
//               {/* Section to handle Actions for Download and Post */}
//               <div className="absolute bottom-4 left-4 flex gap-2">
//                 <button
//                   onClick={() => handleDownload(image)}
//                   className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
//                 >
//                   <AiOutlineDownload size={20} />
//                 </button>
//                 <button
//                   onClick={() => handlePost(image)}
//                   className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
//                 >
//                   <FiShare size={20} />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/*Photographer Rating Section  */}
//         <div className="mt-10 p-4 bg-gray-900 rounded-lg ">
//           <div className="flex items-center gap-4 mb-4">
//             <img
//               src="https://res.cloudinary.com/dacpiss4b/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1736938818/DSC_038757_mjzhiy.jpg"
//               alt="Photographer"
//               className="w-12 h-12 rounded-full object-cover"
//             />
//             <div>
//               <h4 className="text-md font-medium text-white">Photos taken by Logan</h4>
//               <div className="flex gap-1">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <span
//                     key={star}
//                     className={`cursor-pointer text-3xl ${rating >= star ? 'text-yellow-500' : 'text-gray-200'}`}
//                     onClick={() => handleRatingChange(star)}
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="flex gap-4 items-center">
//             <textarea
//               className="flex-grow p-2 border border-gray-900 rounded-md text-black"
//               placeholder="Leave a comment here..."
//               value={review}
//               onChange={(e) => setReview(e.target.value)}
//             />
//             <button
//               onClick={handleReviewSubmit}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Lightbox Modal */}
//       {isLightboxOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
//           <div className="relative">
//             <img
//               src={lightboxImage}
//               alt="Full-screen"
//               className="max-w-full max-h-full object-contain cursor-pointer"
//               onClick={closeLightbox}
//             />
//             <button
//               onClick={closeLightbox}
//               className="absolute top-4 right-4 text-white bg-black p-2 rounded-full"
//             >
//               X
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Sidenav;

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { FiMessageSquare, FiShare } from 'react-icons/fi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdAnalytics, MdDarkMode, MdDashboard, MdSettings } from 'react-icons/md';
import { AiOutlineDownload, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Sidenav = () => {
  const menus = [
    // { name: 'Dashboard', Link: '/', icon: MdDashboard },
    // { name: 'Messages', Link: '/', icon: FiMessageSquare },
    // { name: 'My Account', Link: '/', icon: AiOutlineUser },
    { name: 'Home', Link: '/', icon: FaHome },
    // { name: 'Analytics', Link: '/', icon: MdAnalytics },
    // { name: 'Settings', Link: '/', icon: MdSettings },
    { name: 'Mode', Link: '#', icon: MdDarkMode },
  ];
  
  const [open, setOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [clientimages, setClientImages] = useState([]);
  const [paidImages, setPaidImages] = useState([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeSection, setActiveSection] = useState('unpaid');
  const [likedImages, setLikedImages] = useState([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedImageForPayment, setSelectedImageForPayment] = useState(null);
  const currentuser = JSON.parse(localStorage.getItem("user"));

  // Handle screen resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    // Set initial state based on screen size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-54-27_whcgvd.jpg",
    "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-56-28_mvnenk.jpg",
    "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-56-29_x5ybpp.jpg",
    "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-56-27_ywzqgc.jpg",
  ];

  const handlePaymentModal = (image) => {
    setSelectedImageForPayment(image);
    setIsPaymentModalOpen(true);
  };

  const handlePayment = () => {
    if (selectedImageForPayment) {
      setPaidImages((prev) => [...prev, selectedImageForPayment]);
      setIsPaymentModalOpen(false);
      setSelectedImageForPayment(null);
    }
  };

  const openLightbox = (image) => {
    if (paidImages.includes(image)) {
      setLightboxImage(image);
      setIsLightboxOpen(true);
      // Add a class to prevent body scrolling
      document.body.classList.add('overflow-hidden');
    } else {
      handlePaymentModal(image);
    }
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImage(null);
    // Remove the class to allow body scrolling again
    document.body.classList.remove('overflow-hidden');
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
    // Social media sharing options could be expanded here
    const platforms = ['Instagram', 'Facebook', 'Twitter', 'WhatsApp'];
    const platformChoice = prompt(`Choose a platform to share to:\n${platforms.join('\n')}`);
    
    if (platformChoice && platforms.map(p => p.toLowerCase()).includes(platformChoice.toLowerCase())) {
      alert(`Sharing to ${platformChoice}...`);
    }
  };

  const toggleLike = (image) => {
    if (likedImages.includes(image)) {
      setLikedImages(prev => prev.filter(img => img !== image));
    } else {
      setLikedImages(prev => [...prev, image]);
    }
  };

  // State for storing ratings and review text
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewSubmit = () => {
    if (rating === 0) {
      alert('Please select a rating before submitting.');
      return;
    }
    
    if (review.trim() === '') {
      alert('Please write a review before submitting.');
      return;
    }
    
    alert(`Thank you for your ${rating}-star review!`);
    setRating(0);
    setReview(""); 
  };


  //get client images 
   useEffect(() => {
      const fetchImages = async () => {
        try {
          //setIsLoading(true);
          const response = await fetch(`/api/images/${currentuser.id}/client_images`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          const data = await response.json();
          setClientImages(data);
        } catch (error) {
          console.error("Error in API call:", error);
        } finally {
          //setIsLoading(false);
        }
      };
  
      fetchImages();
    }, []);
  
  return (
    <section className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} flex gap-6 min-h-screen transition-colors duration-300`}>
      {/* Sidebar Menu */}
      <div 
        className={`${darkMode ? "bg-gray-800" : "bg-white"} min-h-screen shadow-lg ${
          open ? "w-64" : "w-16"
        } transition-all duration-300 z-10`}
      >
        <div className="py-3 flex justify-end px-4">
          <HiMenuAlt3 
            size={26} 
            className={`cursor-pointer transition-colors ${darkMode ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-black'}`} 
            onClick={() => setOpen(!open)} 
          />
        </div>

        <div className="mt-8 flex flex-col gap-3 relative">
          {menus.map((menu, i) => (
            <div 
              key={i} 
              onClick={() => { if (menu.name === 'Mode') setDarkMode(!darkMode); }}
              className={`${i === 0 ? 'mt-4' : ''}`}
            >
              <Link 
                href={menu?.Link} 
                className={`${menu?.margin && 'mt-5'} flex items-center text-sm gap-3.5 font-medium p-3 
                  ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} 
                  rounded-md ${!open && 'justify-center'} transition-all duration-200`}
              >
                <div className={`${i === 6 && darkMode ? 'text-yellow-400' : ''}`}>
                  {React.createElement(menu?.icon, { size: '20' })}
                </div>
                <h2 
                  className={`whitespace-pre duration-300 ${
                    !open && 'opacity-0 translate-x-28 overflow-hidden'
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
      <div className="flex-1 p-6 md:p-8 w-full overflow-x-hidden">
        <div className="m-4 py-6">
          {/* Section Navigation */}
          <div className="flex justify-between items-center px-4 mb-8">
            <h1 className="text-2xl font-bold">My Photo Gallery</h1>
            <div className="flex gap-4">
              <button 
                onClick={() => setActiveSection('unpaid')}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeSection === 'unpaid' 
                    ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white') 
                    : (darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600')
                }`}
              >
                Available Photos
              </button>
              <button 
                onClick={() => setActiveSection('paid')}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeSection === 'paid' 
                    ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white') 
                    : (darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600')
                }`}
              >
                My Photos
              </button>
            </div>
          </div>

          {/* Available Photos Section */}
          {activeSection === 'unpaid' && (
            <>
              <h2 className="px-4 text-xl font-semibold mb-4">Available Photos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
                {clientimages
                .filter(image => !paidImages.includes(image.url))
                .map((image, index) => (
                  
                    <div 
                      key={index} 
                      className="relative overflow-hidden bg-gray-100 rounded-xl shadow-md group transform transition-all duration-300 hover:scale-102 hover:shadow-xl"
                    >
                      <div className="aspect-w-3 aspect-h-4">
                        <img
                          src={image.url}
                          alt="Client Photo"
                          className="w-full h-64 object-cover object-center rounded-t-xl"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-100 flex items-center justify-center transition-opacity">
                        <button
                          onClick={() => handlePaymentModal(image.url)}
                          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transform transition-all hover:scale-105 font-medium shadow-lg"
                        >
                          View Full Photo
                        </button>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                          Available
                        </span>
                      </div>
                    </div>
                  
                ))}
              </div>
            </>
          )}

          {/* For Me (Paid Photos) */}
          {activeSection === 'paid' && (
            <>
              <h2 className="px-4 text-xl font-semibold mb-4">My Purchased Photos</h2>
              {paidImages.length === 0 ? (
                <div className={`flex flex-col items-center justify-center p-10 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl mx-4`}>
                  <p className="text-lg mb-4">You haven't purchased any photos yet.</p>
                  <button
                    onClick={() => setActiveSection('unpaid')}
                    className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all"
                  >
                    Browse Available Photos
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
                  {paidImages.map((image, index) => (
                    <div 
                      key={index}
                      className={`relative overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl shadow-md group transition-all hover:shadow-xl`}
                    >
                      <div 
                        className="cursor-pointer aspect-w-3 aspect-h-4" 
                        onClick={() => openLightbox(image)}
                      >
                        <img
                          src={image}
                          alt="Gallery"
                          className="w-full h-64 object-cover object-center rounded-t-xl transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Image Actions */}
                      <div className="p-3 flex justify-between items-center">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleDownload(image)}
                            className={`${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} p-2 rounded-full transition-colors`}
                            title="Download"
                          >
                            <AiOutlineDownload size={20} />
                          </button>
                          <button
                            onClick={() => handlePost(image)}
                            className={`${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} p-2 rounded-full transition-colors`}
                            title="Share"
                          >
                            <FiShare size={20} />
                          </button>
                        </div>
                        <button
                          onClick={() => toggleLike(image)}
                          className={`p-2 rounded-full transition-colors ${
                            likedImages.includes(image) 
                              ? 'text-red-500' 
                              : darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}
                          title={likedImages.includes(image) ? "Unlike" : "Like"}
                        >
                          {likedImages.includes(image) ? <AiFillHeart size={22} /> : <AiOutlineHeart size={22} />}
                        </button>
                      </div>

                      {/* Click to View Badge */}
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className={`${darkMode ? 'bg-gray-700' : 'bg-white'} text-sm px-2 py-1 rounded shadow-md`}>
                          Click to view
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Photographer Rating Section */}
              {paidImages.length > 0 && (
                <div className={`mt-10 p-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl mx-4 shadow-md`}>
                  <h3 className="text-lg font-semibold mb-4">Rate Your Photographer</h3>
                  <div className="flex items-start gap-4">
                    <img
                      src="https://res.cloudinary.com/dacpiss4b/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1736938818/DSC_038757_mjzhiy.jpg"
                      alt="Photographer"
                      className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                    <div className="flex-1">
                      <h4 className="text-md font-medium mb-2">Photos taken by Logan</h4>
                      <div className="flex gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className="cursor-pointer text-2xl"
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={() => handleRatingChange(star)}
                          >
                            {rating >= star || hoverRating >= star ? (
                              <FaStar className="text-yellow-400" />
                            ) : (
                              <FaRegStar className={darkMode ? "text-gray-400" : "text-gray-500"} />
                            )}
                          </span>
                        ))}
                        <span className="ml-2 text-sm self-center">
                          {rating > 0 ? `${rating} star${rating > 1 ? 's' : ''}` : 'Select a rating'}
                        </span>
                      </div>
                      <div className="flex flex-col md:flex-row gap-3">
                        <textarea
                          className={`flex-grow p-3 border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'} rounded-lg`}
                          placeholder="Share your experience with Logan..."
                          value={review}
                          onChange={(e) => setReview(e.target.value)}
                          rows="3"
                        />
                        <button
                          onClick={handleReviewSubmit}
                          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors self-end"
                        >
                          Submit Review
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
          <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl max-w-md w-full shadow-2xl`}>
            <button
              onClick={() => setIsPaymentModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <IoMdClose size={24} />
            </button>
            
            <h3 className="text-xl font-bold mb-4">Purchase Photo</h3>
            
            {selectedImageForPayment && (
              <div className="mb-4">
                <img
                  src={selectedImageForPayment}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  style={{ filter: 'blur(5px)' }}
                />
                <p className="mb-4">Purchase this photo to view, download, and share it.</p>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span>Photo</span>
                    <span>$15.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Service fee</span>
                    <span>$1.50</span>
                  </div>
                  <div className="h-px bg-gray-300 my-2"></div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>$16.50</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsPaymentModalOpen(false)}
                    className={`flex-1 py-2 rounded-lg border ${
                      darkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'
                    } transition-colors`}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handlePayment}
                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Purchase Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4">
          <div className="relative max-w-5xl w-full max-h-screen">
            <img
              src={lightboxImage}
              alt="Full-screen"
              className="max-w-full max-h-[85vh] object-contain mx-auto rounded-lg"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full transition-all"
            >
              <IoMdClose size={24} />
            </button>
            
            {/* Lightbox Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-6 py-3 rounded-full flex gap-6">
              <button 
                onClick={() => handleDownload(lightboxImage)}
                className="text-white hover:text-blue-400 transition-colors"
                title="Download"
              >
                <AiOutlineDownload size={24} />
              </button>
              <button 
                onClick={() => handlePost(lightboxImage)}
                className="text-white hover:text-blue-400 transition-colors" 
                title="Share"
              >
                <FiShare size={24} />
              </button>
              <button 
                onClick={() => toggleLike(lightboxImage)}
                className={`${likedImages.includes(lightboxImage) ? 'text-red-500' : 'text-white'} hover:text-red-400 transition-colors`}
                title={likedImages.includes(lightboxImage) ? "Unlike" : "Like"}
              >
                {likedImages.includes(lightboxImage) ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Sidenav;





































