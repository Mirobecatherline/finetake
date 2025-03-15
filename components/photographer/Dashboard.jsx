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
import { AiOutlineUser, AiOutlineEdit, AiOutlineCheck } from "react-icons/ai";
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
} from "react-icons/md";

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
  const [comment, setComment] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAssigning, setIsAssigning] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  // Get current user from localStorage
  const currentuser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user") || '{"uid":"demo-uid"}') : {uid: "demo-uid"};
  const adminuid = currentuser.uid;

  // State for edited and unedited photos
  const [editedPhotos, setEditedPhotos] = useState([]);
  const [uneditedPhotos, setUneditedPhotos] = useState([]);

  // Handle file upload
  const handleFileUpload = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('uid', adminuid);

    for (const file of imagesupload) {
      formData.append('images', file);
    }
   
    // Send the files to the API using fetch
    fetch('/api/images', {
      method: 'POST',
      body: formData  
    })
      .then(async (response) => {
        if (response.ok) {
          setComment('Images uploaded successfully!');
          const data = await response.json();
          // Add the new images to unedited photos by default
          setUneditedPhotos((prev) => [...prev, ...(Array.isArray(data) ? data : [data])]);
          console.log(data);
        } else {
          setComment("Upload failed. Please try again.");
        }
      })
      .catch(error => {
        setComment("Error uploading images: " + error.message);
        console.error("Error in upload:", error);
      });
      
    event.target.reset();
    setImagesupload([]);
  };

  
  // // Handle marking a photo as edited
  // const handleMarkAsEdited = (photo) => {
  //   // Remove from unedited and add to edited
  //   setUneditedPhotos(prev => prev.filter(p => p.id !== photo.id));
  //   setEditedPhotos(prev => [...prev, {...photo, isEdited: true}]);
    
  //   // Update in backend (mock implementation)
  //   fetch(`http://127.0.0.1:3000/images/${photo.id}/markEdited`, {
  //     method: 'PATCH',
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ isEdited: true, uid: adminuid }),
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       console.error("Failed to mark as edited");
  //       // Revert changes if API fails
  //       setUneditedPhotos(prev => [...prev, photo]);
  //       setEditedPhotos(prev => prev.filter(p => p.id !== photo.id));
  //     }
  //   })
  //   .catch(error => {
  //     console.error("Error marking as edited:", error);
  //   });
  // };


  // Handle marking a photo as edited
const handleMarkAsEdited = (photo) => {
  // Remove from unedited and add to edited
  setUneditedPhotos(prev => prev.filter(p => p.id !== photo.id));
  setEditedPhotos(prev => [...prev, {...photo, isEdited: true}]);
  
  // Show success message
  setComment('Photo marked as edited successfully!');
  
  // If photo was selected in modal, close the modal
  if (selectedImage && selectedImage.id === photo.id) {
    setSelectedImage(null);
  }
};

  // Handle assigning photo to a client
  const handleAssignPhoto = (id) => {
    if (!assignClientId.trim()) {
      setComment("Please enter a valid Client ID");
      return;
    }
    
    fetch(`http://127.0.0.1:3000/images/${id}/assign`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid: adminuid, client_id: assignClientId }),
    })
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setEditedPhotos((prev) =>
          prev.map((photo) =>
            photo.id === id ? { ...photo, assigned_to: data.assigned_to } : photo
          )
        );
        setComment(`Photo assigned to client ${assignClientId} successfully!`);
        setIsAssigning(false);
        setSelectedImageId(null);
        setAssignClientId("");
      } else {
        setComment("Failed to assign photo. Please try again.");
      }
    })
    .catch(error => {
      console.error("Error assigning photo:", error);
      setComment("Error assigning photo: " + error.message);
    });
  };



  // // Handle assigning photo to a client
  // const handleAssignPhoto = (id) => {
  //   if (!assignClientId.trim()) {
  //     setComment("Please enter a valid Client ID");
  //     return;
  //   }
    
  //   // Find the photo in the edited photos array
  //   const photoToAssign = editedPhotos.find(photo => photo.id === id);
    
  //   if (!photoToAssign) {
  //     setComment("Photo not found");
  //     return;
  //   }
    
  //   // Update the photo's assigned_to property in state
  //   setEditedPhotos(prev => 
  //     prev.map(photo => 
  //       photo.id === id 
  //         ? { ...photo, assigned_to: assignClientId } 
  //         : photo
  //     )
  //   );
    
  //   // Show success message
  //   setComment(`Photo assigned to client ${assignClientId} successfully!`);
    
  //   // Close the assignment modal
  //   setIsAssigning(false);
  //   setSelectedImageId(null);
  //   setAssignClientId("");
    
  //   // If this photo is currently selected in the view modal, update it there too
  //   if (selectedImage && selectedImage.id === id) {
  //     setSelectedImage({...selectedImage, assigned_to: assignClientId});
  //   }
  // };

  // Fetch photographer's images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/images/user_images", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({uid: adminuid}),
        });
        
        if (response.ok) {
          const data = await response.json();
          
          // Sort images into edited and unedited categories
          // This assumes your API returns an 'isEdited' field. If not, you might need to modify this.
          const edited = [];
          const unedited = [];
          
          (Array.isArray(data) ? data : []).forEach(img => {
            if (img.isEdited) {
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

  return (
    <section className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} flex min-h-screen transition-colors duration-300`}>
      {/* Sidebar */}
      <div
        className={`${darkMode ? "bg-gray-800" : "bg-white"} min-h-screen shadow-lg ${
          open ? "w-64" : "w-16"
        } transition-all duration-300 z-10`}
      >
        <div className="py-4 px-4 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {menus.map((menu, i) => (
            <div
              key={i}
              onClick={() => {
                if (menu.name === "Mode") setDarkMode(!darkMode);
              }}
              className={`${darkMode && menu.name === "Mode" ? "bg-gray-700" : ""}`}
            >
              <Link
                href={menu?.Link}
                className={`flex items-center text-sm gap-3 p-3 rounded-md ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                } transition-all duration-200`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${
                    open ? "opacity-100 w-auto" : "opacity-0 w-0"
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
        <header className="mb-8">
          <h1 className={`text-2xl md:text-3xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
            Photographer Dashboard
          </h1>
          <p className={`mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Manage your photo collections and client assignments
          </p>
        </header>

        {/* Success/Error Message */}
        {comment && (
          <div className={`mb-4 p-3 rounded-md ${
            comment.includes("success") || comment.includes("uploaded") ? 
            "bg-green-100 text-green-700 border border-green-200" : 
            "bg-red-100 text-red-700 border border-red-200"
          }`}>
            {comment}
          </div>
        )}

        {/* Upload Section */}
        <div className={`p-6 rounded-lg shadow-md mb-8 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <MdPhotoLibrary className="mr-2" size={24} />
            Upload New Photos
          </h2>
          <form onSubmit={handleFileUpload} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="w-full">
                <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Select Images
                </label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => {
                    setImagesupload(e.target.files);
                  }}
                  className={`w-full px-4 py-2 border rounded-md ${
                    darkMode ? "bg-gray-700 border-gray-600 text-gray-200" : "bg-gray-50 border-gray-300 text-gray-900"
                  }`}
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto mt-4 sm:mt-0 flex-shrink-0"
              >
                Upload Images
              </button>
            </div>
          </form>
        </div>

        {/* Photo Gallery Tabs */}
        <div className="mb-6 flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('edited')}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'edited' 
                ? `border-b-2 border-blue-500 ${darkMode ? 'text-blue-400' : 'text-blue-600'}` 
                : `${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`
            }`}
          >
            <div className="flex items-center">
              <AiOutlineEdit className="mr-2" />
              Edited Photos ({editedPhotos.length})
            </div>
          </button>
          <button
            onClick={() => setActiveTab('unedited')}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'unedited' 
                ? `border-b-2 border-blue-500 ${darkMode ? 'text-blue-400' : 'text-blue-600'}` 
                : `${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`
            }`}
          >
            <div className="flex items-center">
              <MdPhotoFilter className="mr-2" />
              Unedited Photos ({uneditedPhotos.length})
            </div>
          </button>
        </div>

        {/* Photo Collections */}
        <div className={`p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <h2 className="text-xl font-semibold mb-4">
            {activeTab === 'edited' ? 'Edited Photos' : 'Unedited Photos'}
          </h2>
          
          {activeTab === 'edited' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {editedPhotos.length === 0 ? (
                <p className={`col-span-full text-center py-8 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  No edited photos yet. Mark some photos as edited to see them here.
                </p>
              ) : (
                editedPhotos.map((photo) => (
                  <div key={photo.id} className={`relative group rounded-lg overflow-hidden shadow-sm ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                    <img
                      src={photo.url}
                      alt={`Edited photo ${photo.id}`}
                      className="w-full h-48 object-cover cursor-pointer"
                      onClick={() => setSelectedImage(photo)}
                    />
                    <div className="p-3">
                      <div className="flex justify-between items-center">
                        <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? "bg-blue-900 text-blue-100" : "bg-blue-100 text-blue-800"}`}>
                          Edited
                        </span>
                        {photo.assigned_to ? (
                          <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? "bg-green-900 text-green-100" : "bg-green-100 text-green-800"}`}>
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
                ))
              )}
            </div>
          )}
          
          {activeTab === 'unedited' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {uneditedPhotos.length === 0 ? (
                <p className={`col-span-full text-center py-8 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  No unedited photos yet. Upload some photos to get started.
                </p>
              ) : (
                uneditedPhotos.map((photo) => (
                  <div key={photo.id} className={`relative group rounded-lg overflow-hidden shadow-sm ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                    <img
                      src={photo.url}
                      alt={`Unedited photo ${photo.id}`}
                      className="w-full h-48 object-cover cursor-pointer"
                      onClick={() => setSelectedImage(photo)}
                    />
                    <div className="p-3">
                      <div className="flex justify-between items-center">
                        <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? "bg-gray-600 text-gray-200" : "bg-gray-200 text-gray-700"}`}>
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
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
          <div className="relative max-w-5xl w-full">
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
            <div className="absolute bottom-4 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-md mx-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">{selectedImage.isEdited ? "Edited Photo" : "Unedited Photo"}</p>
                  <p className="text-xs text-gray-300">ID: {selectedImage.id}</p>
                </div>
                {selectedImage.isEdited && !selectedImage.assigned_to && (
                  <button
                    onClick={() => {
                      setSelectedImageId(selectedImage.id);
                      setIsAssigning(true);
                      setSelectedImage(null);
                    }}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                  >
                    Assign to Client
                  </button>
                )}
                {!selectedImage.isEdited && (
                  <button
                    onClick={() => {
                      handleMarkAsEdited(selectedImage);
                      setSelectedImage(null);
                    }}
                    className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700"
                  >
                    Mark as Edited
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Assign Photo Modal */}
      {isAssigning && selectedImageId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className={`relative p-6 rounded-lg shadow-xl w-full max-w-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <button
              onClick={() => {
                setIsAssigning(false);
                setSelectedImageId(null);
                setAssignClientId("");
              }}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
              Assign Photo to Client
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className={`block mb-1 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Client ID
                </label>
                <input
                  type="text"
                  value={assignClientId}
                  onChange={(e) => setAssignClientId(e.target.value)}
                  placeholder="Enter client ID"
                  className={`w-full px-4 py-2 border rounded-md ${
                    darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300 text-gray-900"
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
                  className={`px-4 py-2 rounded-md ${
                    darkMode ? "bg-gray-700 text-gray-200 hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleAssignPhoto(selectedImageId)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Assign
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Sidenav;