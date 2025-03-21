"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import {
  FaUser,
  FaTrash,
  FaBars,
  FaSearch,
  FaUserPlus,
  FaSignOutAlt,
  FaBell,
  FaEnvelope,
  FaCog,
} from "react-icons/fa";

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentuser, setCurrentuser] = useState(null);
  const [adminId, setAdminId] = useState(null);
  //   const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedFilter, setSelectedFilter] = useState("client");
  const USERS_PER_PAGE = 10;

//   const currentuser = JSON.parse(localStorage.getItem("user"));
//   const adminId = currentuser.id;

  
  useEffect(() => {
    try {
      const userFromStorage = localStorage.getItem("user");
      if (userFromStorage) {
        const parsedUser = JSON.parse(userFromStorage);
        setCurrentuser(parsedUser);
        setAdminId(parsedUser.id);
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/users", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setAllUsers(data);
      } catch (error) {
        console.error("Error in API call:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleChangeRole = async (userId, newrole) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:3000/users/${userId}/update_role`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role: newrole,
            admin_id: adminId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update role");
      }

      setAllUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, role: newrole } : user
        )
      );

      alert("Role updated successfully!");
    } catch (error) {
      console.error("Error updating role:", error);
      alert("Failed to update role");
    }
  };

  const filteredUsers = allUsers.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    // const matchesFilter = selectedFilter === "all" || user.role === selectedFilter;
    // return matchesSearch && matchesFilter;
    return matchesSearch && user.role === "client";
  });

  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const endIndex = startIndex + USERS_PER_PAGE;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);


  const router = useRouter();
  
  // Add this function to handle the back button click
  const handleGoBack = () => {
    // If using Next.js
    router.back();
    // OR if using regular React without Next.js
    // window.history.back();
  };

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

  const renderUserStats = () => {
    const totalUsers = allUsers.length;
    const adminCount = allUsers.filter((user) => user.role === "admin").length;
    const photographerCount = allUsers.filter(
      (user) => user.role === "photographer"
    ).length;
    const clientCount = allUsers.filter(
      (user) => user.role === "client"
    ).length;

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      
    
        {/* <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
          <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
          <p className="text-2xl font-bold text-gray-800">{totalUsers}</p>
        </div> */}
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
          <h3 className="text-gray-500 text-sm font-medium">Clients</h3>
          <p className="text-2xl font-bold text-gray-800">{clientCount}</p>
        </div>
        {/* <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500">
          <h3 className="text-gray-500 text-sm font-medium">Photographers</h3>
          <p className="text-2xl font-bold text-gray-800">
            {photographerCount}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-500">
          <h3 className="text-gray-500 text-sm font-medium">Admins</h3>
          <p className="text-2xl font-bold text-gray-800">{adminCount}</p>
        </div> */}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        {/* <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">User Management</h2> */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
          Client Management
        </h2>

        {/* <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
          <a href="/create-user" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150">
            <FaUserPlus className="mr-2" />
            Create New User
          </a>
        </div> */}
          <button 
        onClick={handleGoBack}
        className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back
      </button>
      </div>

      {renderUserStats()}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between space-y-3 md:space-y-0">
          <div className="flex items-center space-x-2">
            {/* <h3 className="font-medium text-gray-700">User List</h3>
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{filteredUsers.length} users</span> */}

            <h3 className="font-medium text-gray-700">Client List</h3>
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              {filteredUsers.length} clients
            </span>
          </div>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>

            {/* <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="border border-gray-300 rounded-lg py-2 px-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="client">Client</option>
              <option value="photographer">Photographer</option>
            </select> */}
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading users...</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      User
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={user.photo_url}
                              alt={user.name}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.role === "admin"
                              ? "bg-yellow-100 text-yellow-800"
                              : user.role === "photographer"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end items-center space-x-3">
                          <select
                            value={user.role}
                            onChange={(e) =>
                              handleChangeRole(user.id, e.target.value)
                            }
                            className="text-sm border border-gray-300 rounded-md py-1 px-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="admin">Admin</option>
                            <option value="client">Client</option>
                            <option value="photographer">Photographer</option>
                          </select>

                          <a
                            href={`/view-account/${user.id}`}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <FaUser />
                          </a>

                          <a
                            href={`/delete-account/${user.id}`}
                            className="text-red-600 hover:text-red-900"
                          >
                            <FaTrash />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredUsers.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  No users found matching your search criteria.
                </p>
              </div>
            )}

            {filteredUsers.length > 0 && (
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing{" "}
                      <span className="font-medium">{startIndex + 1}</span> to{" "}
                      <span className="font-medium">
                        {Math.min(endIndex, filteredUsers.length)}
                      </span>{" "}
                      of{" "}
                      <span className="font-medium">
                        {filteredUsers.length}
                      </span>{" "}
                      results
                    </p>
                  </div>

                  <div>
                    <div className="flex space-x-2">
                      <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                          currentPage === 1
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        Previous
                      </button>
                      <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                          currentPage === totalPages
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex sm:hidden justify-between w-full">
                  <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Previous
                  </button>
                  <p className="text-sm text-gray-700">
                    Page <span className="font-medium">{currentPage}</span> of{" "}
                    <span className="font-medium">{totalPages}</span>
                  </p>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                      currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      
    </div>
  );
};
export default Users;

// {
//     id: 10,
//     username: "Davie m",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736815025/finetake/yag2r2cmo4hrtuxpswtn.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1736940689/WhatsApp_Billede_202544_we9e4i.jpg",
//     caption: "The best seat in the house,right next to the action! ",
//   },

//   {
//     id: 11,
//     username: "Ruth",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736785042/samples/food/dessert.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1736815603/finetake/gccz1kgd9nggxgwt69nb.jpg",
//     caption: "Chasing dreams, one step at a time. 🌟🚶‍♂️",
//   },

//   {
//     id: 12,
//     username: "Chuka basketball",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736816283/finetake/xpuwmdblbpqgexotnrmf.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1736816283/finetake/w0xj2npmqivbqz3k4vtj.jpg",
//     caption: "Strength in numbers – this squad is unstoppable! 💪",
//   },


//   {
//     id: 13,
//     username: "mary",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736816663/finetake/quaxm6bbbo00hyrjr3rm.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1736816663/finetake/zvahivmj4jxmaux7pxkr.jpg",
//     caption: "Nature’s therapy and pure happiness. 🌿💚",
//   },


//   {
//     id: 14,
//     username: "Faustine",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736816833/finetake/ytwwdbkr4kvzhxun4ifz.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1736816834/finetake/aiia4v4rnuo1hdzo4pzk.jpg",
//     caption: "Basketball isn’t just a game; it’s a lifestyle. 🌟🏀",
//   },


//   {
//     id: 15,
//     username: "Johnny",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736817296/finetake/aggubp0dah4huvxfn2c8.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1736817296/finetake/twjeaiq135uccznjma8g.jpg",
//     caption: "The court is yours, go for the win! 🌟",
//   },

//   {
//     id: 16,
//     username: "Vivian",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736785042/samples/food/pot-mussels.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1736817655/finetake/kjeg1tbpe0aejf2t0yez.jpg",
//     caption: "A tranquil reflection that speaks volumes. 💧🌟",
//   },

//   {
//     id: 17,
//     username: "Morris",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736785043/samples/animals/three-dogs.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1736819016/finetake/j3ajfmsmev91ncp2emnd.jpg",
//     caption: "A starry night, a fearless spirit. 🌟✨",
//   },

//   {
//     id: 18,
//     username: "James",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736785041/samples/ecommerce/analog-classic.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1736819713/finetake/jsmsxwzj7dmishpwtq32.jpg",
//     caption: "A building that stands out, even away from the city buzz. 🏢✨",
//   },

//   {
//     id: 19,
//     username: "Sammy",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736785044/samples/ecommerce/leather-bag-gray.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1736816283/finetake/xpuwmdblbpqgexotnrmf.jpg",
//     caption: "Nothing but the net! 🏀✨",
//   },

//   {
//     id: 20,
//     username: "Brian",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1736785052/samples/smile.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1736940688/WhatsApp_Billede_20236e_eifddl.jpg",
//     caption: "just after sunset 🌞",
//   },

//   {
//     id: 21,
//     username: "Vera m",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737148450/DSC_0819_upmccf.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1737148451/DSC_0653_inypoe.jpg",
//     caption: "Such a cute and innocent expression! Absolutely adorable! ☺️",
//   },

//   {
//     id: 22,
//     username: "Muli sicily",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737148451/DSC_0684_fkgdhj.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1737148451/DSC_0688_dnkkfo.jpg",
//     caption: "Golden hour magic with a smile to match. ✨🌄",
//   },

//   {
//     id: 23,
//     username: "Brendah",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737148450/DSC_0876_crsknw.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1737148451/DSC_0651_mynmvn.jpg",
//     caption: "Tiny but mighty in charm, even as the sun sets. 👶✨",
//   },


//   {
//     id: 24,
//     username: "Natasha",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737279060/DSC_0649_rl0kq8.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1737279060/DSC_0650_qrgusm.jpg",
//     caption: "An exquisite portrait that captures the essence of nighttime elegance💖",
//   },

//   {
//     id: 25,
//     username: "Pricillah",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737280741/DSC_0623_abwta9.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1737280741/DSC_0342_eewlej.jpg",
//     caption: "A dreamy combination of beauty and nature 🥰",
//   },

//   {
//     id: 26,
//     username: "Duncan",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737281608/DSC_0155_cxjcr2.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1737281607/DSC_0152_hexd1v.jpg",
//     caption: "Keeping it sharp, no matter the time 🕶️",
//   },

//   {
//     id: 27,
//     username: "Baloli",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737282156/DSC_0134_e774xo.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1737282156/DSC_0132_dfvnes.jpg",
//     caption: "Silent moves, loud impact 🔥",
//   },

//   {
//     id: 28,
//     username: "John security",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737282276/DSC_0227_zqg9hr.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1737282276/DSC_0220_egzuhe.jpg",
//     caption: "Just out here doing my thing ✌️",
//   },

//   {
//     id: 29,
//     username: "caren w",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737282533/DSC_0724_s5ifqm.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1737282535/DSC_0397_vb4dqj.jpg",
//     caption: "Nature and me—a perfect match 🌸",
//   },

//   {
//     id: 30,
//     username: "Joel security",
//     userImageUrl: "https://res.cloudinary.com/dacpiss4b/image/upload/v1737282395/DSC_0248_h6duwx.jpg",
//     imageUrl:
//       "https://res.cloudinary.com/dacpiss4b/image/upload/v1737282395/DSC_0254_ce5is6.jpg",
//     caption: "Stay low-key, keep it real 🖤",
//   },
