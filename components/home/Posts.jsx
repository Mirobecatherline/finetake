// import React, { useEffect, useState } from 'react';

// function Posts() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch posts from an API or use static data here
//     const fetchedPosts = [
//       {
//         id: 1,
//         username: "Ricky Martins",
//         userImageUrl: "https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg",
//         imageUrl:
//           "https://res.cloudinary.com/dacpiss4b/image/upload/v1736819332/finetake/bqcds0cycvz3m0363fa1.jpg",
//         caption: "Epic shot,, Street legends in the making! 🌟",
//       },
//       {
//         id: 2,
//         username: "Dorean",
//         userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737280379/DSC_0283_kgowfp.jpg",
//         imageUrl:
//           "https://res.cloudinary.com/dacpiss4b/image/upload/v1737280379/DSC_0305_xop9id.jpg",
//         caption: "A timeless moment captured in depth ☺️",
//       },


//       {
//         id: 3,
//         username: "Masika Emanuel",
//         userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736812671/efgwnsfqq5ss81vsjdxa.jpg",
//         imageUrl:
//           "https://res.cloudinary.com/dacpiss4b/image/upload/v1736812671/s1m7vvtnwrceiygkscqc.jpg",
//         caption: "Sitting still, but the hustle never stops. 🔥",
//       },
  
  
  
//        {
//         id: 4,
//         username: "kipkoril bett",
//         userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736812470/ofqv4zhelenfbrkxmcbr.jpg",
//         imageUrl:
//           "https://res.cloudinary.com/dacpiss4b/image/upload/v1736938818/WhatsApp_Billede_2_uqadkb.jpg",
//         caption: "That peaceful vibe hits differently. 🌿✨",
//       },
      
//       {
//         id: 5,
//         username: "cate",
//         userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736813014/wse71icsmj8k1fffkl8p.jpg",
//         imageUrl:
//           "https://res.cloudinary.com/dacpiss4b/image/upload/v1736818026/finetake/e0vb2hbu6ao7znxa3eyi.jpg",
//         caption: "On the go and making it happen! 🙌",
//       },
  
//       {
//         id: 6,
//         username: "Ronnie",
//         userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736813366/xo6qz4tkaqmtmurs7wuv.jpg",
//         imageUrl:
//           "https://res.cloudinary.com/dacpiss4b/image/upload/v1736939886/WhatsApp_Billede_202_exb17j.jpg",
//         caption: "Behind the lens, where magic happens! 🌟📷",
//       },
      
      
//       {
//         id: 7,
//         username: "Macdonald shiwan",
//         userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736813860/mihydassyxb2z3kyhhe6.jpg",
//         imageUrl:
//           "https://res.cloudinary.com/dacpiss4b/image/upload/v1736813860/rmueud6my9kws5vbu5ml.jpg",
//         caption: "A perfect blend of urban and natural beauty. 🌼🏢",
//       },
  
  
//       {
//         id: 8,
//         username: "Dr.Machoka",
//         userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736814333/ylsw5dsvffxu6yfjlmyw.jpg",
//         imageUrl:
//           "https://res.cloudinary.com/dacpiss4b/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1736938818/DSC_038757_mjzhiy.jpg",
//         caption: "The journey is just as beautiful as the destination. 🚶‍♂️🌳",
//       },
  
//       {
//         id: 9,
//         username: "Waxine",
//         userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736785054/cld-sample.jpg",
//         imageUrl:
//           "https://res.cloudinary.com/dacpiss4b/image/upload/v1736814570/nowd4ukv0ihmfl3fyvzs.jpg",
//         caption: "Blooming brighter than the flowers  🌼🌟",
//       },
  
//       {
//         id: 10,
//         username: "Davie m",
//         userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736815025/finetake/yag2r2cmo4hrtuxpswtn.jpg",
//         imageUrl:
//           "https://res.cloudinary.com/dacpiss4b/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1736940689/WhatsApp_Billede_202544_we9e4i.jpg",
//         caption: "The best seat in the house,right next to the action! ",
//       },
  
//     ];

//     setPosts(fetchedPosts);
//   }, []);

//   return (
//     <div className="flex flex-col items-center w-full sm:w-auto lg:px-16">
//       {posts.map((post) => (
//         <div key={post.id} className="bg-white overflow-hidden border-b border-gray-300 w-full sm:max-w-md lg:max-w-full lg:flex lg:space-x-4">
//           <div className="lg:w-1/2">
//             <a href={post.imageUrl} target="_self">
//               <img
//                 src={post.imageUrl}
//                 alt={post.caption}
//                 className="w-full h-64 lg:h-96 object-cover cursor-pointer"
//               />
//             </a>
//           </div>
//           <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-between lg:px-4 py-4 sm:px-4 sm:py-4">
//             <div className="flex items-center mb-4 px-4 sm:px-4">
//               <img
//                 src={post.userImageUrl}
//                 alt={`${post.username}'s profile`}
//                 className="mr-2 w-8 h-8 rounded-full object-cover"
//               />
//               <h2 className="font-semibold text-lg text-black">{post.username}</h2> {/* Change username color to black */}
//             </div>
//             <p className="text-gray-600 mb-4 px-4 sm:px-4">{post.caption}</p>
//             <div className="flex justify-end space-x-2 mt-4 px-4 sm:px-4">
//               <button className="flex items-center">
//                 <img src="/like.svg" alt="Like" className="w-6 h-6" />
//               </button>
//               <button className="flex items-center">
//                 <img src="/comment.svg" alt="Comment" className="w-6 h-6" />
//               </button>
//               <button className="flex items-center">
//                 <img src="/share12.svg" alt="Share" className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Posts;


"use client"

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Posts() {
  const [allPosts, setAllPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const postsPerPage = 10;

  // Initialize posts data and set up first page
  useEffect(() => {
    initializePosts();
  }, []);

  const initializePosts = () => {
    // Static posts data - in a real app, this would come from an API
    const fetchedPosts = [
      {
        id: 1,
        username: "Ricky Martins",
        userImageUrl: "https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1736819332/finetake/bqcds0cycvz3m0363fa1.jpg",
        caption: "Epic shot,, Street legends in the making! 🌟",
      },
      {
        id: 2,
        username: "Dorean",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737280379/DSC_0283_kgowfp.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1737280379/DSC_0305_xop9id.jpg",
        caption: "A timeless moment captured in depth ☺️",
      },
      {
        id: 3,
        username: "Masika Emanuel",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736812671/efgwnsfqq5ss81vsjdxa.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1736812671/s1m7vvtnwrceiygkscqc.jpg",
        caption: "Sitting still, but the hustle never stops. 🔥",
      },
      {
        id: 4,
        username: "kipkoril bett",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736812470/ofqv4zhelenfbrkxmcbr.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1736938818/WhatsApp_Billede_2_uqadkb.jpg",
        caption: "That peaceful vibe hits differently. 🌿✨",
      },
      {
        id: 5,
        username: "cate",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736813014/wse71icsmj8k1fffkl8p.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1736818026/finetake/e0vb2hbu6ao7znxa3eyi.jpg",
        caption: "On the go and making it happen! 🙌",
      },
      {
        id: 6,
        username: "Ronnie",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736813366/xo6qz4tkaqmtmurs7wuv.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1736939886/WhatsApp_Billede_202_exb17j.jpg",
        caption: "Behind the lens, where magic happens! 🌟📷",
      },
      {
        id: 7,
        username: "Macdonald shiwan",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736813860/mihydassyxb2z3kyhhe6.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1736813860/rmueud6my9kws5vbu5ml.jpg",
        caption: "A perfect blend of urban and natural beauty. 🌼🏢",
      },
      {
        id: 8,
        username: "Dr.Machoka",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736814333/ylsw5dsvffxu6yfjlmyw.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1736938818/DSC_038757_mjzhiy.jpg",
        caption: "The journey is just as beautiful as the destination. 🚶‍♂️🌳",
      },
      {
        id: 9,
        username: "Waxine",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736785054/cld-sample.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1736814570/nowd4ukv0ihmfl3fyvzs.jpg",
        caption: "Blooming brighter than the flowers  🌼🌟",
      },
      {
        id: 10,
        username: "Davie m",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736815025/finetake/yag2r2cmo4hrtuxpswtn.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1736940689/WhatsApp_Billede_202544_we9e4i.jpg",
        caption: "The best seat in the house,right next to the action! ",
      },
      {
        id: 11,
        username: "Ruth",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736785042/samples/food/dessert.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1736815603/finetake/gccz1kgd9nggxgwt69nb.jpg",
        caption: "Chasing dreams, one step at a time. 🌟🚶‍♂️",
      },
  
      {
        id: 12,
        username: "Chuka basketball",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736816283/finetake/xpuwmdblbpqgexotnrmf.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1736816283/finetake/w0xj2npmqivbqz3k4vtj.jpg",
        caption: "Strength in numbers – this squad is unstoppable! 💪",
      },
  
  
      {
        id: 13,
        username: "mary",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736816663/finetake/quaxm6bbbo00hyrjr3rm.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1736816663/finetake/zvahivmj4jxmaux7pxkr.jpg",
        caption: "Nature’s therapy and pure happiness. 🌿💚",
      },
  
  
      {
        id: 14,
        username: "Faustine",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736816833/finetake/ytwwdbkr4kvzhxun4ifz.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1736816834/finetake/aiia4v4rnuo1hdzo4pzk.jpg",
        caption: "Basketball isn’t just a game; it’s a lifestyle. 🌟🏀",
      },
  
  
      {
        id: 15,
        username: "Johnny",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736817296/finetake/aggubp0dah4huvxfn2c8.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1736817296/finetake/twjeaiq135uccznjma8g.jpg",
        caption: "The court is yours, go for the win! 🌟",
      },
  
      {
        id: 16,
        username: "Vivian",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736785042/samples/food/pot-mussels.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1736817655/finetake/kjeg1tbpe0aejf2t0yez.jpg",
        caption: "A tranquil reflection that speaks volumes. 💧🌟",
      },
  
      {
        id: 17,
        username: "Morris",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736785043/samples/animals/three-dogs.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1736819016/finetake/j3ajfmsmev91ncp2emnd.jpg",
        caption: "A starry night, a fearless spirit. 🌟✨",
      },
  
      {
        id: 18,
        username: "James",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736785041/samples/ecommerce/analog-classic.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1736819713/finetake/jsmsxwzj7dmishpwtq32.jpg",
        caption: "A building that stands out, even away from the city buzz. 🏢✨",
      },
  
      {
        id: 19,
        username: "Sammy",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736785044/samples/ecommerce/leather-bag-gray.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1736816283/finetake/xpuwmdblbpqgexotnrmf.jpg",
        caption: "Nothing but the net! 🏀✨",
      },
  
      {
        id: 20,
        username: "Brian",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736785052/samples/smile.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1736940688/WhatsApp_Billede_20236e_eifddl.jpg",
        caption: "just after sunset 🌞",
      },

      {
        id: 21,
        username: "Vera m",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737148450/DSC_0819_upmccf.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1737148451/DSC_0653_inypoe.jpg",
        caption: "Such a cute and innocent expression! Absolutely adorable! ☺️",
      },

      {
        id: 22,
        username: "Muli sicily",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737148451/DSC_0684_fkgdhj.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1737148451/DSC_0688_dnkkfo.jpg",
        caption: "Golden hour magic with a smile to match. ✨🌄",
      },

      {
        id: 23,
        username: "Brendah",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737148450/DSC_0876_crsknw.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1737148451/DSC_0651_mynmvn.jpg",
        caption: "Tiny but mighty in charm, even as the sun sets. 👶✨",
      },

  
      {
        id: 24,
        username: "Natasha",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737279060/DSC_0649_rl0kq8.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1737279060/DSC_0650_qrgusm.jpg",
        caption: "An exquisite portrait that captures the essence of nighttime elegance💖",
      },

      {
        id: 25,
        username: "Pricillah",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737280741/DSC_0623_abwta9.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1737280741/DSC_0342_eewlej.jpg",
        caption: "A dreamy combination of beauty and nature 🥰",
      },

      {
        id: 26,
        username: "Duncan",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737281608/DSC_0155_cxjcr2.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1737281607/DSC_0152_hexd1v.jpg",
        caption: "Keeping it sharp, no matter the time 🕶️",
      },

      {
        id: 27,
        username: "Baloli",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737282156/DSC_0134_e774xo.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1737282156/DSC_0132_dfvnes.jpg",
        caption: "Silent moves, loud impact 🔥",
      },

      {
        id: 28,
        username: "John security",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737282276/DSC_0227_zqg9hr.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1737282276/DSC_0220_egzuhe.jpg",
        caption: "Just out here doing my thing ✌️",
      },

      {
        id: 29,
        username: "caren w",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737282533/DSC_0724_s5ifqm.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1737282535/DSC_0397_vb4dqj.jpg",
        caption: "Nature and me—a perfect match 🌸",
      },

      {
        id: 30,
        username: "Joel security",
        userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737282395/DSC_0248_h6duwx.jpg",
        imageUrl:
          "https://res.cloudinary.com/dacpiss4b/image/upload/v1737282395/DSC_0254_ce5is6.jpg",
        caption: "Stay low-key, keep it real 🖤",
      },


    ];

    // Set all posts
    setAllPosts(fetchedPosts);
    
    // Initialize with only first page
    const firstPagePosts = fetchedPosts.slice(0, postsPerPage);
    setVisiblePosts(firstPagePosts);
    setHasMore(fetchedPosts.length > postsPerPage);
    
    // Log for debugging
    console.log("Initialized with", firstPagePosts.length, "posts out of", fetchedPosts.length);
  };

  // Handle "Load More" button click
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    
    // Calculate new posts to show
    const endIndex = nextPage * postsPerPage;
    const newVisiblePosts = allPosts.slice(0, endIndex);
    
    console.log("Loading more posts. Now showing", newVisiblePosts.length, "out of", allPosts.length);
    
    setVisiblePosts(newVisiblePosts);
    setHasMore(endIndex < allPosts.length);
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = allPosts.findIndex(post => post.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % allPosts.length;
        setSelectedImage(allPosts[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = allPosts.findIndex(post => post.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + allPosts.length) % allPosts.length;
        setSelectedImage(allPosts[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, selectedImage, allPosts]);

  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Item variants for individual post animations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        Featured Post from clients
      </h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={`posts-grid-${visiblePosts.length}`} // Force re-animation when posts change
      >
        {visiblePosts.map((post) => (
          <motion.div 
            key={post.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105"
            variants={itemVariants}
            layoutId={`card-${post.id}`}
          >
            <div className="relative">
              {/* Overlay gradient on hover */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium">{post.caption}</p>
                </div>
              </div> */}
              
              <div 
                onClick={() => {
                  setSelectedImage(post);
                  setLightboxOpen(true);
                }}
                className="cursor-pointer"
              >
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex items-center mb-3">
                <div className="relative">
                  <img
                    src={post.userImageUrl}
                    alt={`${post.username}'s profile`}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-500"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-800">{post.username}</h3>
                  <p className="text-xs text-gray-500">Photographer</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-2">{post.caption}</p>
              
              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <div className="flex space-x-3">
                  <button className="flex items-center text-gray-500 hover:text-red-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-sm">Like</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-sm">Comment</span>
                  </button>
                </div>
                <button className="flex items-center text-gray-500 hover:text-indigo-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Load More Button - Only show if there are more posts to load */}
      {hasMore && (
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button 
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLoadMore}
          >
            <div className="flex items-center">
              <span>Load More</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </motion.button>
        </motion.div>
      )}
      
      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && selectedImage && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div 
              className="relative max-w-5xl max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 bg-white bg-opacity-25 hover:bg-opacity-50 rounded-full p-2 text-white z-10 transition-all duration-300"
                onClick={() => setLightboxOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Image container with animations */}
              <motion.div
                layoutId={`image-${selectedImage.id}`}
                className="w-full h-full"
              >
                <img 
                  src={selectedImage.imageUrl} 
                  alt={selectedImage.caption}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              </motion.div>
              
              {/* Image info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6"
              >
                <div className="flex items-center mb-2">
                  <img 
                    src={selectedImage.userImageUrl} 
                    alt={selectedImage.username}
                    className="w-8 h-8 rounded-full mr-3 border-2 border-white"
                  />
                  <h3 className="text-white font-medium">{selectedImage.username}</h3>
                </div>
                <p className="text-white text-lg">{selectedImage.caption}</p>
              </motion.div>
              
              {/* Navigation buttons */}
              <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">
                <button 
                  className="bg-white bg-opacity-25 hover:bg-opacity-50 rounded-full p-2 text-white transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = allPosts.findIndex(post => post.id === selectedImage.id);
                    const prevIndex = (currentIndex - 1 + allPosts.length) % allPosts.length;
                    setSelectedImage(allPosts[prevIndex]);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="bg-white bg-opacity-25 hover:bg-opacity-50 rounded-full p-2 text-white transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = allPosts.findIndex(post => post.id === selectedImage.id);
                    const nextIndex = (currentIndex + 1) % allPosts.length;
                    setSelectedImage(allPosts[nextIndex]);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Posts;