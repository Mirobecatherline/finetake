import React, { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from an API or use static data here
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
        username: "caren",
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

    setPosts(fetchedPosts);
  }, []);

  return (
    <div className="flex flex-col items-center w-full sm:w-auto lg:px-16">
      {posts.map((post) => (
        <div key={post.id} className="bg-white overflow-hidden border-b border-gray-300 w-full sm:max-w-md lg:max-w-full lg:flex lg:space-x-4">
          <div className="lg:w-1/2">
            <a href={post.imageUrl} target="_self">
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-64 lg:h-96 object-cover cursor-pointer"
              />
            </a>
          </div>
          <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-between lg:px-4 py-4 sm:px-4 sm:py-4">
            <div className="flex items-center mb-4 px-4 sm:px-4">
              <img
                src={post.userImageUrl}
                alt={`${post.username}'s profile`}
                className="mr-2 w-8 h-8 rounded-full object-cover"
              />
              <h2 className="font-semibold text-lg text-black">{post.username}</h2> {/* Change username color to black */}
            </div>
            <p className="text-gray-600 mb-4 px-4 sm:px-4">{post.caption}</p>
            <div className="flex justify-end space-x-2 mt-4 px-4 sm:px-4">
              <button className="flex items-center">
                <img src="/like.svg" alt="Like" className="w-6 h-6" />
              </button>
              <button className="flex items-center">
                <img src="/comment.svg" alt="Comment" className="w-6 h-6" />
              </button>
              <button className="flex items-center">
                <img src="/share12.svg" alt="Share" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
