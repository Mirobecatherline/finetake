"use client"

import React from 'react'
import Dashboard from '../../../components/photographer/Dashboard'
import Header from '@/components/admin/Header'
import RouteGuard from '../../../components/RouteGuard';


function page() {
  return (
    <RouteGuard allowedRoles={['photographer', 'admin']}>
    <div>
      <Header/>
      <Dashboard/>
    </div>
    </RouteGuard>
  )
}

export default page
