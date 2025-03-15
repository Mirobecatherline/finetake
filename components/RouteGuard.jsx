// components/RouteGuard.js
"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from './Loading'; // Create a simple loading component

const RouteGuard = ({ children, allowedRoles }) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      const userData = localStorage.getItem('user');
      
      if (!userData) {
        // Not logged in, redirect to login
        router.push('/login');
        return;
      }

      try {
        const user = JSON.parse(userData);
        
        // Check if user has the required role
        if (allowedRoles && !allowedRoles.includes(user.role)) {
          // User doesn't have the required role, redirect to unauthorized page
          router.push('/unauthorized');
          return;
        }
        
        // User is authorized
        setAuthorized(true);
      } catch (error) {
        console.error('Error checking auth:', error);
        // Invalid user data in localStorage, redirect to login
        localStorage.removeItem('user');
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
    
    // Add event listener for route changes
    const handleRouteChange = () => {
      checkAuth();
    };
    
    window.addEventListener('storage', handleRouteChange);
    
    return () => {
      window.removeEventListener('storage', handleRouteChange);
    };
  }, [router, allowedRoles]);

  if (loading) {
    return <Loading />;  // Show loading component while checking auth
  }

  return authorized ? children : null;
};

export default RouteGuard;