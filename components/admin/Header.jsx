import React from 'react';

const admin = {
  name: 'Logan Machoka',
  role: 'Administrator',
  profilePicture: 'https://res.cloudinary.com/dacpiss4b/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1736938818/DSC_038757_mjzhiy.jpg', // Replace with the actual image URL
};

const Header = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 border-b border-gray-300 shadow-md">
      <img
        src={admin.profilePicture}
        alt={admin.name}
        className="w-40 h-40 mb-4 rounded-full object-cover"
      />
      <div className="text-center mb-4">
        <span className="text-lg font-semibold text-gray-800">{admin.name}</span>
        <div className="text-sm text-gray-600">{admin.role}</div>
      </div>
      <div className="self-end mr-6">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Create New Account
        </button>
      </div>
    </div>
  );
};

export default Header;
