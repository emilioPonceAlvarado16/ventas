import React from 'react'
import Navbar from "@/components/navbar/Navbar"
import Hero from "@/components/hero/Hero"
import Pricing from "@/components/Pricing"
import MouseEffect from '@/components/MouseEffect'
import Footer from "@/components/Footer"
import Features from "@/components/Features"
import RequireAuth from '@/components/RequireAuth';

function Home() {
  
  return (
    <>
    <>

      <RequireAuth>
        <Navbar />
        </RequireAuth> 
   
    <Hero/>
    <Features/>
  <Pricing/>
    <Footer/>
</> 
  <MouseEffect/>
  </>
   
  )
}


export default Home;
