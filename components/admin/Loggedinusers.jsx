import React, { useState } from 'react';
import { FaUser, FaTrash } from 'react-icons/fa'; // Import icons from react-icons

// Sample data for logged-in users
const users = [
  {
    id: 1,
    name: 'Emanuel masika',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1736812671/efgwnsfqq5ss81vsjdxa.jpg',
  },
  {
    id: 2,
    name: 'kipkoril bett',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1736938818/WhatsApp_Billede_2_uqadkb.jpg',
  },
  {
    id: 3,
    name: 'Cate',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1736818026/finetake/e0vb2hbu6ao7znxa3eyi.jpg',
  },


  {
    id: 4,
    name: 'Ronnie',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1736813366/xo6qz4tkaqmtmurs7wuv.jpg',
  },

  {
    id: 5,
    name: 'Macdonald shiwan',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1736813860/mihydassyxb2z3kyhhe6.jpg',
  },

  {
    id: 6,
    name: 'Waxine',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1736814570/nowd4ukv0ihmfl3fyvzs.jpg',
  },
  {
    id: 7,
    name: 'Davie m',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1736815025/finetake/yag2r2cmo4hrtuxpswtn.jpg',
  },
  {
    id: 8,
    name: 'Ruth',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1736815603/finetake/gccz1kgd9nggxgwt69nb.jpg',
  },
  {
    id: 9,
    name: 'Chuka basketball',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1736816283/finetake/xpuwmdblbpqgexotnrmf.jpg',
  },
  {
    id: 10,
    name: 'mary',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1736816663/finetake/zvahivmj4jxmaux7pxkr.jpg',
  },
  {
    id: 11,
    name: 'Faustine',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1736816833/finetake/ytwwdbkr4kvzhxun4ifz.jpg',
  },
  {
    id: 12,
    name: 'Johnny',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1736817296/finetake/twjeaiq135uccznjma8g.jpg',
  },
  {
    id: 13,
    name: 'Vivian',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1736817655/finetake/kjeg1tbpe0aejf2t0yez.jpg',
  },
  {
    id: 14,
    name: 'Morris',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1736819016/finetake/j3ajfmsmev91ncp2emnd.jpg',
  },
  {
    id: 15,
    name: 'Sammy',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1736816283/finetake/xpuwmdblbpqgexotnrmf.jpg',
  },
  {
    id: 16,
    name: 'Brian',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1736940688/WhatsApp_Billede_20236e_eifddl.jpg',
  },
  {
    id: 17,
    name: 'Vera m',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1737148451/DSC_0653_inypoe.jpg',
  },
  {
    id: 18,
    name: 'Muli sicily',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1737148451/DSC_0688_dnkkfo.jpg',
  },
  {
    id: 19,
    name: 'Brendah',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1737148451/DSC_0651_mynmvn.jpg',
  },
  {
    id: 20,
    name: 'Natasha',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1737279060/DSC_0650_qrgusm.jpg',
  },
  {
    id: 21,
    name: 'Pricillah',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1737280741/DSC_0342_eewlej.jpg',
  },
  {
    id: 22,
    name: 'Duncan',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1737281608/DSC_0155_cxjcr2.jpg',
  },
  {
    id: 23,
    name: 'Baloli',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1737282156/DSC_0132_dfvnes.jpg',
  },
  {
    id: 24,
    name: 'John security',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1737282276/DSC_0220_egzuhe.jpg',
  },
  {
    id: 25,
    name: 'caren w',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1737282535/DSC_0397_vb4dqj.jpg',
  },
  {
    id: 26,
    name: 'Joel security',
    profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1737282395/DSC_0254_ce5is6.jpg',
  },


  
  // Add more users as needed
];

const USERS_PER_PAGE = 10;

const Loggedinusers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const endIndex = startIndex + USERS_PER_PAGE;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Logged-in Users</h2>
        <div className="flex-grow text-center">
          <input
            type="text"
            placeholder="Search accounts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg text-black w-1/3"
          />
        </div>
      </div>
      <div className="space-y-2"> {/* Reduced space between users */}
        {currentUsers.map(user => (
          <div key={user.id} className="flex items-center p-4 bg-white rounded-lg shadow-md">
            <img
              src={user.profilePicture}
              alt={user.name}
              className="w-12 h-12 rounded-full mr-3 object-cover" // Added 'object-cover' to maintain aspect ratio
            />
            <span className="text-lg text-gray-700 flex-grow">{user.name}</span> {/* Flex-grow for spacing */}
            <div className="flex space-x-4"> {/* Container for icons */}
              <a href={`/view-account/${user.id}`} className="flex items-center"> {/* Placeholder link for View Account */}
                <FaUser className="text-blue-500" />
                <span className="text-blue-500 ml-1">View</span>
              </a>
              <a href={`/delete-account/${user.id}`} className="flex items-center"> {/* Placeholder link for Delete Account */}
                <FaTrash className="text-red-500" />
                <span className="text-red-500 ml-1">Delete</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center mt-4">
        <div className="flex space-x-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-6 rounded-full w-32 text-center"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-6 rounded-full w-32 text-center"
          >
            Next
          </button>
        </div>
        <span className="mt-2 text-gray-700 text-center">Page {currentPage} of {totalPages}</span>
      </div>
    </div>
  );
};

export default Loggedinusers;
