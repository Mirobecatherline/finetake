"use client"


import Header from '@/components/admin/Header';
import Sidenav from '../../../components/client/Sidenav';
import React from 'react';
import RouteGuard from '../../../components/RouteGuard';

function Page() {
  return (
    <RouteGuard allowedRoles={['client', 'admin']}>
    <div >
       <Header />
      <Sidenav/>
    </div>
     </RouteGuard>
  );
}

export default Page;

