'use client';
import React from "react";
import Header from '../../../components/admin/Header';
import Loggedinusers from '../../../components/admin/Loggedinusers';
import Footer from '../../../components/admin/Adminfooter';
import Admin from '../../../components/admin/AdminPage';
import RouteGuard from '../../../components/RouteGuard';

const Adminpage = () => {
  return (
    <RouteGuard allowedRoles={['admin']}>
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* <Admin/> */}
      <Header />
      <main className="flex-grow">
      <Loggedinusers />
      </main>
      <Footer/> 
    </div>
    </RouteGuard>
    
  );
};

export default Adminpage;

