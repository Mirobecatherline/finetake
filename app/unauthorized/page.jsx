// app/unauthorized/page.js
"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Unauthorized() {
  const [userRole, setUserRole] = useState(null);
  
  useEffect(() => {
    try {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        setUserRole(user.role);
      }
    } catch (error) {
      console.error('Error getting user role:', error);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="text-red-500 text-5xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Access Denied</h1>
        
        <p className="text-gray-600 mb-6">
          You don't have permission to access this page. This area is restricted to 
          {userRole && <span className="font-medium"> users with higher privileges than {userRole}</span>}.
        </p>
        
        <div className="flex flex-col space-y-3">
          {userRole === 'admin' && (
            <Link href="/application/admin" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
              Go to Admin Dashboard
            </Link>
          )}
          
          {userRole === 'photographer' && (
            <Link href="/application/photographerdashboard" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
              Go to Photographer Dashboard
            </Link>
          )}
          
          {userRole === 'client' && (
            <Link href="/application/clientdashboard" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
              Go to Client Dashboard
            </Link>
          )}
          
          <Link href="/" className="text-blue-500 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}