import React from 'react';

const AdminFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4">
          <h4 className="text-lg font-semibold">Admin Navigation</h4>
          <ul className="mt-2">
            <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
            <li><a href="/user-management" className="hover:underline">User  Management</a></li>
            <li><a href="/settings" className="hover:underline">Settings</a></li>
            <li><a href="/logs" className="hover:underline">Activity Logs</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-4">
          <h4 className="text-lg font-semibold">Support</h4>
          <p className="mt-2">Email: muigaid91@gmail.com</p>
          <p>Phone: (254) 456-7890</p>
        </div>
        <div className="w-full md:w-1/3 mb-4">
          <h4 className="text-lg font-semibold">Connect with Us</h4>
          <ul className="mt-2 flex space-x-4">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Finetake group . All rights reserved.</p>
      </div>
    </footer>
  );
}

export default AdminFooter;