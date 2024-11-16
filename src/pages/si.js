import RequireAuth from '@/components/RequireAuth'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import Features from "@/components/Features"

export default function si() {

  return (
    <>
    <RequireAuth> 
    <Navbar/>
    </RequireAuth>
    <Features/>
    </>
  )
}
