'use client';
import React from "react";
import Header from '../../../components/admin/Header';
import Loggedinusers from '../../../components/admin/Loggedinusers';
import Footer from '../../../components/admin/Adminfooter';

const Adminpage = () => {
  return (
    <div>
      <Header />
      <Loggedinusers />
      <Footer/>
    </div>
  );
};

export default Adminpage;
