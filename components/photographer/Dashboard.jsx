// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { AiOutlineUser } from "react-icons/ai";
// import { FaHome } from "react-icons/fa";
// import { FiMessageSquare } from "react-icons/fi";
// import { HiMenuAlt3 } from "react-icons/hi";
// import {
//   MdAnalytics,
//   MdDarkMode,
//   MdDashboard,
//   MdSettings,
// } from "react-icons/md";

// const Sidenav = () => {
//   const menus = [
//     { name: "Dashboard", Link: "/", icon: MdDashboard },
//     { name: "Messages", Link: "/", icon: FiMessageSquare },
//     { name: "My Account", Link: "/", icon: AiOutlineUser },
//     { name: "Home", Link: "/", icon: FaHome },
//     { name: "Analytics", Link: "/", icon: MdAnalytics },
//     { name: "Settings", Link: "/", icon: MdSettings },
//     { name: "Mode", Link: "#", icon: MdDarkMode },
//   ];

//   const [open, setOpen] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);
//   const [uploadedImages, setUploadedImages] = useState([]);
//   const [rating, setRating] = useState(0);
//   const [review, setReview] = useState("");
//   const [clientImages, setClientImages] = useState([]);
//   const [clientID, setClientID] = useState("");
//   const [imagesupload, setImagesupload] = useState([]);
//   const [photographerimages, setphotographerimages] = useState([]);
//   const [userid, setuserid]= useState([])
//   const [comment, setcomment] = useState('')
//   const currentuser = JSON.parse(localStorage.getItem("user"));
//   const adminuid = currentuser.uid;
//   const [images, setImages] = useState([
//     "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-54-27_whcgvd.jpg",
//     "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-56-28_mvnenk.jpg",
//     "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-56-29_x5ybpp.jpg",
//     "https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-56-27_ywzqgc.jpg",
//   ]);

//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleassignpicture = async (id) => {
//     try {
//       const response = await fetch( `http://127.0.0.1:3000/images/${id}/assign `, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ uid: adminuid, client_id: 6 }),
//       });
//       const data = await response.json();
//       setphotographerimages((prev) =>
//         prev.map((image) =>
//           image.id === id ? { ...image, assigned_to: data.assigned_to } : image
//         )
//       );
//     } catch (error) {
//       console.error("Error in API call:", error);
//     }
//   };

//   // const handleFileUpload = (event) => {
//   //   const files = Array.from(event.target.files);
//   //   setUploadedImages(files.map((file) => URL.createObjectURL(file)));
//   // };

//   const handleSendPhotos = () => {
//     console.log("Sending images to Client ID:", clientID);
//   };

//   const handleFileUpload = (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('uid',adminuid);
// // console.log(images)
//     for (const file of imagesupload) {
//       formData.append('images', file);
//     }

// // console.log(formData)
//     // Send the files to the API using fetch
//     fetch('http://127.0.0.1:3000/images', {
//       method: 'POST',
//       body:
//       formData
//     })
//       .then(async (response) => {
//         if (response.ok) {
//           setcomment('submitted!!')
//           const data = await response.json();
//           setphotographerimages((prev) => [...prev, data]);
//           //setphotographerimages( response.json());
//           console.log(data)
//         } else {
//           setcomment("not submitted");

//       }})
//      event.target.reset();
//   };

//   // get photographer images
//   useEffect(() => {
//     const fetchimages = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:3000/images/user_images", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({uid:adminuid}),
//         });
//         const data = await response.json();
//         setphotographerimages(Array.isArray(data) ? data : []);

//          // Update state after successful role change

//       } catch (error) {
//         console.error("Error in API call:", error);
//       }
//     };

//     fetchimages();
//   }, []);

//   return (
//     <section
//       className={`${
//         darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
//       } flex min-h-screen`}
//     >
//       {/* Sidebar */}
//       <div
//         className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} min-h-screen ${
//           open ? "w-64" : "w-16"
//         } transition-all duration-500 px-4`}
//       >
//         <div className="py-3 flex justify-end">
//           <HiMenuAlt3
//             size={26}
//             className="cursor-pointer"
//             onClick={() => setOpen(!open)}
//           />
//         </div>
//         <div className="mt-4 flex flex-col gap-4">
//           {menus.map((menu, i) => (
//             <div
//               key={i}
//               onClick={() => {
//                 if (menu.name === "Mode") setDarkMode(!darkMode);
//               }}
//             >
//               <Link
//                 href={menu?.Link}
//                 className="flex items-center text-sm gap-3 p-2 hover:bg-gray-800 rounded-md"
//               >
//                 <div>{React.createElement(menu?.icon, { size: "20" })}</div>
//                 <h2
//                   className={`overflow-hidden transition-all duration-300 ${
//                     open ? "opacity-100 w-auto" : "opacity-0 w-0"
//                   }`}
//                 >
//                   {menu?.name}
//                 </h2>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 w-full">
//         {/* Edited Photos Section */}
//         <div className="mt-10 p-4 bg-gray-900 rounded-lg">
//           <h2 className="text-xl text-white font-semibold mb-4">
//             Edited Photos
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {images.map((image, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={image}
//                   alt="Edited"
//                   className="w-full h-auto rounded-lg"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                   <button
//                     onClick={() => handlePayToViewClick(image)}
//                     className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//                   >
//                     Pay to View
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Client Collection */}
//         <div className="mt-6 p-4 bg-gray-900 rounded-lg">
//           <h2 className="text-xl text-white font-semibold mb-4">
//             Client Collection
//           </h2>
//           {clientImages.length === 0 ? (
//             <p className="text-gray-400">No paid images yet.</p>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {clientImages.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Client Image ${index + 1}`}
//                   className="w-full h-auto rounded-lg cursor-pointer"
//                   onClick={() => setSelectedImage(image)}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {selectedImage && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
//             <div className="relative">
//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedImage(null)}
//                 className="absolute top-4 right-4 z-50 bg-red-600 text-white text-xl px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition-all"
//               >
//                 ✖
//               </button>

//               {/* Image */}
//               <img
//                 src={selectedImage}
//                 alt="Full View"
//                 className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
//               />
//             </div>
//           </div>
//         )}

//         {/* Client ID Input Field */}
//         <div className="mt-6 flex flex-col sm:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="Enter Client ID"
//             value={clientID}
//             onChange={(e) => setClientID(e.target.value)}
//             className="p-2 rounded-md border border-gray-600 text-black flex-grow"
//           />
//           <button
//             onClick={handleSendPhotos}
//             className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
//           >
//             Send
//           </button>
//         </div>

//         {/* Upload Button */}
//         <div className="mt-4">
//           <form onSubmit={handleFileUpload}>
//             <input
//               type="file"
//               multiple
//               onChange={(e) => {
//                 setImagesupload(e.target.files);
//               }}
//             />
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
//             >
//               Upload Image
//             </button>
//             <div style={{ background: "white" }}>
//               <p
//                 style={
//                   comment === "submitted!!"
//                     ? { color: "green", background: "white" }
//                     : { color: "red", background: "white" }
//                 }
//               >
//                 {comment}
//               </p>
//             </div>
//           </form>
//           {/* <button onClick={() => document.getElementById('fileInput').click()} className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
//             Upload
//           </button>
//           <input id="fileInput" type="file" multiple accept="image/*" onChange={handleFileUpload} className="hidden" /> */}
//         </div>

// <br />
// <br />
// <br />
//         {/* photographer pictures  */}

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {photographerimages.map((image) => (
//               <div key={image.id} className="relative">
//                 <img
//                   src={image.url}
//                   alt="Edited"
//                   className="w-full h-auto rounded-lg"
//                 />
//                 <div>
//                   {image.assigned_to === null ? (
//                     <button
//                       onClick={() => handleassignpicture(image.id)}
//                       className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//                     >
//                       Assign
//                     </button>
//                   ) : ""}
//                 </div>
//               </div>
//             ))}
//           </div>

//         {/* Review & Rating Section */}
//         <div className="mt-6 p-4 bg-gray-900 rounded-lg">
//           <div className="flex items-center gap-4 mb-4">
//             <img
//               src="https://res.cloudinary.com/dacpiss4b/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1736938818/DSC_038757_mjzhiy.jpg"
//               alt="Photographer"
//               className="w-12 h-12 rounded-full object-cover"
//             />
//             <div>
//               <h4 className="text-md font-medium text-white">
//                 Photos Edited by Logan
//               </h4>
//               <div className="flex gap-1">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <span
//                     key={star}
//                     className={`cursor-pointer text-2xl ${
//                       rating >= star ? "text-yellow-500" : "text-gray-200"
//                     }`}
//                     onClick={() => setRating(star)}
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4 items-center">
//             <textarea
//               className="flex-grow p-2 border border-gray-900 rounded-md text-black"
//               placeholder="Leave a comment..."
//               value={review}
//               onChange={(e) => setReview(e.target.value)}
//             />
//             <button
//               onClick={() => {
//                 alert(`Rating: ${rating}\nReview: ${review}`);
//                 setRating(0);
//                 setReview("");
//               }}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Sidenav;

import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiOutlineUser,
  AiOutlineEdit,
  AiOutlineCheck,
  AiOutlineCloudUpload,
} from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  MdAnalytics,
  MdDarkMode,
  MdDashboard,
  MdSettings,
  MdPhotoLibrary,
  MdPhotoFilter,
  MdOutlinePhotoSizeSelectActual,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Sidenav = () => {
  const menus = [
    // { name: "Dashboard", Link: "/", icon: MdDashboard },
    // { name: "Messages", Link: "/", icon: FiMessageSquare },
    // { name: "My Account", Link: "/", icon: AiOutlineUser },
    // { name: "Home", Link: "/", icon: FaHome },
    // { name: "Analytics", Link: "/", icon: MdAnalytics },
    { name: "users", Link: "/application/users", icon: MdSettings },
    { name: "Mode", Link: "#", icon: MdDarkMode },
  ];

  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("edited");
  const [imagesupload, setImagesupload] = useState([]);
  const [assignClientId, setAssignClientId] = useState("");
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [comment, setComment] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAssigning, setIsAssigning] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Handle responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get current user from localStorage
  const currentuser =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || '{"uid":"demo-uid"}')
      : { uid: "demo-uid" };
  const adminuid = currentuser.uid;

  // State for edited and unedited photos
  const [editedPhotos, setEditedPhotos] = useState([]);
  const [uneditedPhotos, setUneditedPhotos] = useState([]);

  // Handle drag events for file upload area
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setImagesupload(e.dataTransfer.files);
    }
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("uid", adminuid);

    if (imagesupload.length === 0) {
      setComment("Please select images to upload.");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + 10;
      });
    }, 300);

    for (const file of imagesupload) {
      formData.append("images", file);
    }

    // Send the files to the API using fetch
    fetch("/api/images", {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        clearInterval(progressInterval);
        setUploadProgress(100);

        setTimeout(() => {
          setIsUploading(false);
          setUploadProgress(0);
        }, 500);

        if (response.ok) {
          setComment("Images uploaded successfully!");
          const data = await response.json();
          // Add the new images to unedited photos by default
          setUneditedPhotos((prev) => [
            ...prev,
            ...(Array.isArray(data) ? data : [data]),
          ]);
          console.log(data);
        } else {
          setComment("Upload failed. Please try again.");
        }
      })
      .catch((error) => {
        clearInterval(progressInterval);
        setIsUploading(false);
        setUploadProgress(0);
        setComment("Error uploading images: " + error.message);
        console.error("Error in upload:", error);
      });

    event.target.reset();
    setImagesupload([]);
  };

  // Handle marking a photo as edited
  const handleMarkAsEdited = (photo) => {
    fetch(`/api/images/${photo.id}/edit`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    })
      .then(async (response) => {
        // Update the photo in state
        if (response.ok) {
          // Try to get the updated photo from response
          let updatedPhoto;
          try {
            updatedPhoto = await response.json();
          } catch (error) {
            // If response doesn't contain updated photo, use existing photo with edited set to true
            updatedPhoto = { ...photo, edited: true };
          }

          console.log("Photo marked as edited successfully!");
          // Remove from unedited and add to edited
          setUneditedPhotos((prev) => prev.filter((p) => p.id !== photo.id));
          setEditedPhotos((prev) => [...prev, { ...photo, isEdited: true }]);

          // Show success message
          setComment("Photo marked as edited successfully!");

          // If photo was selected in modal, close the modal
          if (selectedImage && selectedImage.id === photo.id) {
            setSelectedImage(null);
          }
        } else {
          console.log("Failed to mark photo as edited", data.error);
          setComment("Failed to mark photo as edited. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error marking photo as edited:", error);
        setComment("Error marking photo as edited: " + error.message);
      });
  };

  // Handle assigning photo to a client
  const handleAssignPhoto = (id) => {
    if (!assignClientId.trim()) {
      setComment("Please enter a valid Client ID");
      return;
    }

    fetch(`/api/images/${id}/assign`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid: adminuid, client_id: assignClientId }),
    })
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          setEditedPhotos((prev) =>
            prev.map((photo) =>
              photo.id === id
                ? { ...photo, assigned_to: data.assigned_to }
                : photo
            )
          );
          setComment(
            `Photo assigned to client ${assignClientId} successfully!`
          );
          setIsAssigning(false);
          setSelectedImageId(null);
          setAssignClientId("");
        } else {
          setComment("Failed to assign photo. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error assigning photo:", error);
        setComment("Error assigning photo: " + error.message);
      });
  };

  // Fetch photographer's images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/images/user_images", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uid: adminuid }),
        });

        if (response.ok) {
          const data = await response.json();

          // Sort images into edited and unedited categories

          const edited = [];
          const unedited = [];

          (Array.isArray(data) ? data : []).forEach((img) => {
            if (img.edited) {
              edited.push(img);
            } else {
              unedited.push(img);
            }
          });

          setEditedPhotos(edited);
          setUneditedPhotos(unedited);
        } else {
          console.error("Failed to fetch images:", response.statusText);
          setComment("Failed to load images. Please refresh the page.");
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setComment("Error loading images: " + error.message);
      }
    };

    fetchImages();
  }, [adminuid]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const photoVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const slideVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      x: 20,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } flex min-h-screen transition-colors duration-300`}
    >
      {/* Sidebar */}
      <div
        className={`${
          darkMode ? "bg-gray-800" : "bg-white"
        } min-h-screen shadow-xl ${
          open ? "w-64" : "w-16"
        } transition-all duration-300 z-10 fixed`}
      >
        <div className="py-6 px-4 flex justify-between items-center">
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-bold text-lg flex items-center"
            >
              <MdOutlinePhotoSizeSelectActual
                size={24}
                className="mr-2 text-blue-500"
              />
              <span className={darkMode ? "text-white" : "text-gray-800"}>
                PhotoPro
              </span>
            </motion.div>
          )}
          <HiMenuAlt3
            size={26}
            className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className="mt-8 flex flex-col gap-2">
          {menus.map((menu, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => {
                if (menu.name === "Mode") setDarkMode(!darkMode);
              }}
              className={`${
                menu.active ? (darkMode ? "bg-blue-900/30" : "bg-blue-50") : ""
              } ${darkMode && menu.name === "Mode" ? "bg-gray-700" : ""}`}
            >
              <Link
                href={menu.Link}
                className={`flex items-center gap-3 p-3 mx-2 rounded-lg ${
                  menu.active
                    ? `${darkMode ? "text-blue-400" : "text-blue-600"}`
                    : `${darkMode ? "text-gray-300" : "text-gray-700"}`
                } ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                } transition-all duration-200`}
              >
                <div className={menu.active ? "text-blue-500" : ""}>
                  {React.createElement(menu.icon, { size: "20" })}
                </div>
                <h2
                  className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${
                    open ? "opacity-100 w-auto" : "opacity-0 w-0"
                  } ${menu.active ? "font-medium" : ""}`}
                >
                  {menu.name}
                </h2>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 p-6 md:p-8 w-full overflow-x-hidden ${
          open ? "ml-64" : "ml-16"
        } transition-all duration-300`}
      >
        <header className="mb-8">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`text-2xl md:text-3xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Photographer Dashboard
          </motion.h1>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className={`mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Manage your photo collections and client assignments
          </motion.p>
        </header>

        {/* Success/Error Message */}
        <AnimatePresence>
          {comment && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mb-4 p-4 rounded-md shadow-md ${
                comment.includes("success") || comment.includes("uploaded")
                  ? "bg-green-100 text-green-700 border-l-4 border-green-500"
                  : "bg-red-100 text-red-700 border-l-4 border-red-500"
              }`}
            >
              <div className="flex items-center">
                <span
                  className={`mr-2 text-lg ${
                    comment.includes("success") || comment.includes("uploaded")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {comment.includes("success") || comment.includes("uploaded")
                    ? "✓"
                    : "✕"}
                </span>
                {comment}
              </div>
              <button
                onClick={() => setComment("")}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`p-6 rounded-lg shadow-md mb-8 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <MdPhotoLibrary className="mr-2 text-blue-500" size={24} />
            Upload New Photos
          </h2>
          <form onSubmit={handleFileUpload} className="space-y-4">
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
                isDragging
                  ? `${
                      darkMode
                        ? "border-blue-500 bg-blue-900/20"
                        : "border-blue-500 bg-blue-50"
                    }`
                  : `${darkMode ? "border-gray-600" : "border-gray-300"}`
              } ${
                darkMode ? "hover:border-blue-400" : "hover:border-blue-300"
              }`}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <AiOutlineCloudUpload
                className={`mx-auto text-5xl mb-2 ${
                  isDragging
                    ? "text-blue-500"
                    : darkMode
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              />
              <p
                className={`text-lg mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Drag & drop images here or
              </p>
              <input
                type="file"
                multiple
                id="fileInput"
                className="hidden"
                onChange={(e) => {
                  setImagesupload(e.target.files);
                }}
              />
              <label
                htmlFor="fileInput"
                className={`inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 cursor-pointer`}
              >
                Browse Files
              </label>
              {imagesupload.length > 0 && (
                <p
                  className={`mt-3 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {imagesupload.length} file
                  {imagesupload.length !== 1 ? "s" : ""} selected
                </p>
              )}
            </div>

            {isUploading && (
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            )}

            <button
              type="submit"
              disabled={isUploading}
              className={`w-full px-6 py-3 rounded-md transition-colors duration-200 flex items-center justify-center ${
                isUploading
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {isUploading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Uploading...
                </>
              ) : (
                <>Upload Images</>
              )}
            </button>
          </form>
        </motion.div>

        {/* Photo Gallery Tabs */}
        <div className="mb-6 flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("edited")}
            className={`px-6 py-3 font-medium text-sm rounded-t-lg transition-all duration-200 ${
              activeTab === "edited"
                ? `${
                    darkMode
                      ? "bg-gray-800 border-t border-l border-r border-gray-700 text-blue-400"
                      : "bg-white border-t border-l border-r border-gray-200 text-blue-600"
                  }`
                : `${
                    darkMode
                      ? "text-gray-400 hover:text-gray-300 hover:bg-gray-800"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`
            }`}
          >
            <div className="flex items-center">
              <AiOutlineEdit className="mr-2" />
              Edited Photos ({editedPhotos.length})
            </div>
          </button>
          <button
            onClick={() => setActiveTab("unedited")}
            className={`px-6 py-3 font-medium text-sm rounded-t-lg transition-all duration-200 ${
              activeTab === "unedited"
                ? `${
                    darkMode
                      ? "bg-gray-800 border-t border-l border-r border-gray-700 text-blue-400"
                      : "bg-white border-t border-l border-r border-gray-200 text-blue-600"
                  }`
                : `${
                    darkMode
                      ? "text-gray-400 hover:text-gray-300 hover:bg-gray-800"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`
            }`}
          >
            <div className="flex items-center">
              <MdPhotoFilter className="mr-2" />
              Unedited Photos ({uneditedPhotos.length})
            </div>
          </button>
        </div>

        {/* Photo Collections */}
        <div
          className={`p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">
            {activeTab === "edited" ? "Edited Photos" : "Unedited Photos"}
          </h2>
          <AnimatePresence mode="wait">
          {activeTab === "edited" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
              {editedPhotos.length === 0 ? (
                  <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-center py-16 border-2 border-dashed rounded-lg ${
                    darkMode ? "border-gray-700 text-gray-400" : "border-gray-200 text-gray-500"
                  }`}
                >
                  <MdPhotoLibrary className="mx-auto text-5xl mb-3" />
                  <p className="text-lg">No edited photos yet.</p>
                  <p className="mt-2">Mark some photos as edited to see them here.</p>
                  <button
                    onClick={() => setActiveTab("unedited")}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Unedited Photos
                  </button>
                </motion.div>
              ) : (
                
                editedPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className={`relative group rounded-lg overflow-hidden shadow-sm ${
                      darkMode ? "bg-gray-700" : "bg-gray-50"
                    }`}
                  >
                    <img
                      src={photo.url}
                      alt={`Edited photo ${photo.id}`}
                      className="w-full h-48 object-cover cursor-pointer"
                      onClick={() => setSelectedImage(photo)}
                    />
                    <div className="p-3">
                      <div className="flex justify-between items-center">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            darkMode
                              ? "bg-blue-900 text-blue-100"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          Edited
                        </span>
                        {photo.assigned_to ? (
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              darkMode
                                ? "bg-green-900 text-green-100"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            Assigned to: {photo.assigned_to}
                          </span>
                        ) : (
                          <button
                            onClick={() => {
                              setSelectedImageId(photo.id);
                              setIsAssigning(true);
                            }}
                            className="text-xs px-2 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                          >
                            Assign
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              
              )
              
              )
              
              }
              
            </div>
          )}

          {activeTab === "unedited" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {uneditedPhotos.length === 0 ? (
                <p
                  className={`col-span-full text-center py-8 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  No unedited photos yet. Upload some photos to get started.
                </p>
              ) : (
                uneditedPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className={`relative group rounded-lg overflow-hidden shadow-sm ${
                      darkMode ? "bg-gray-700" : "bg-gray-50"
                    }`}
                  >
                    <img
                      src={photo.url}
                      alt={`Unedited photo ${photo.id}`}
                      className="w-full h-48 object-cover cursor-pointer"
                      onClick={() => setSelectedImage(photo)}
                    />
                    <div className="p-3">
                      <div className="flex justify-between items-center">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            darkMode
                              ? "bg-gray-600 text-gray-200"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          Unedited
                        </span>
                        <button
                          onClick={() => handleMarkAsEdited(photo)}
                          className="text-xs px-2 py-1 bg-green-600 text-white rounded-full hover:bg-green-700 flex items-center"
                        >
                          <AiOutlineCheck className="mr-1" /> Mark as Edited
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
          </AnimatePresence>
        </div>

        {/* Feedback Section */}
        {/* <div className={`mt-8 p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://res.cloudinary.com/dacpiss4b/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1736938818/DSC_038757_mjzhiy.jpg"
              alt="Photographer"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className={`text-md font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>
                Client Feedback
              </h4>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`cursor-pointer text-2xl ${
                      rating >= star ? "text-yellow-500" : darkMode ? "text-gray-600" : "text-gray-300"
                    }`}
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
              className={`flex-grow p-3 border rounded-md ${
                darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-800"
              }`}
              placeholder="Your feedback on the photos..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={3}
            />
            <button
              onClick={() => {
                setComment(`Rating: ${rating}/5. Feedback submitted successfully!`);
                setRating(0);
                setReview("");
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto"
            >
              Submit Feedback
            </button>
          </div>
        </div> */}
      </div>


{/* Photo Full View Modal */}
       <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 bg-red-600 text-white text-xl p-2 rounded-full shadow-lg hover:bg-red-700 transition-all"
                aria-label="Close"
              >
                ✖
              </button>

              {/* Image */}
              <img
                src={selectedImage.url}
                alt="Full View"
                className="max-w-full max-h-[90vh] mx-auto rounded-lg shadow-2xl"
              />

              {/* Image Details */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-4 left-0 right-0 bg-black bg-opacity-70 backdrop-blur-sm text-white p-4 rounded-md mx-4"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">
                      {selectedImage.edited ? "Edited Photo" : "Unedited Photo"}
                    </p>
                    <p className="text-xs text-gray-300">
                      ID: {selectedImage.id}
                    </p>
                  </div>
                  {selectedImage.edited && !selectedImage.assigned_to && (
                    <button
                      onClick={() => {
                        setSelectedImageId(selectedImage.id);
                        setIsAssigning(true);
                        setSelectedImage(null);
                      }}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Assign to Client
                    </button>
                  )}
                  {!selectedImage.edited && (
                    <button
                      onClick={() => {
                        handleMarkAsEdited(selectedImage);
                        setSelectedImage(null);
                      }}
                      className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors flex items-center"
                    >
                      <AiOutlineCheck className="mr-1" /> Mark as Edited
                    </button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Assign Photo Modal */}
   <AnimatePresence>
        {isAssigning && selectedImageId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`relative p-6 rounded-lg shadow-xl w-full max-w-md ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <button
                onClick={() => {
                  setIsAssigning(false);
                  setSelectedImageId(null);
                  setAssignClientId("");
                }}
                className={`absolute top-3 right-3 ${darkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700"} text-xl`}
              >
                ✖
              </button>

              <h3
                className={`text-xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Assign Photo to Client
              </h3>

              <div className="space-y-4">
                <div>
                  <label
                    className={`block mb-1 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Client ID
                  </label>
                  <input
                    type="text"
                    value={assignClientId}
                    onChange={(e) => setAssignClientId(e.target.value)}
                    placeholder="Enter client ID"
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-gray-50 border-gray-300 text-gray-900"
                    }`}
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      setIsAssigning(false);
                      setSelectedImageId(null);
                      setAssignClientId("");
                    }}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      darkMode
                        ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleAssignPhoto(selectedImageId)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Assign
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Sidenav;
