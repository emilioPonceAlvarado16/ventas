import App from '@/components/App'
import MouseEffect from '@/components/MouseEffect'
import Plagiarism from '@/components/Plagiarism'
import RequireAuth from '@/components/RequireAuth'
import TemplateConfig from '@/components/TemplateConfig'
import Hero from '@/components/hero/Hero'
import Navbar from '@/components/navbar/Navbar'
import Pricing from '@/components/pricing'
import React from 'react'
import Features from "@/components/Features"
import Footer from '@/components/Footer'
// import Features from "@/components/features_new"

// import TemplateConfig from '@/components/TemplateConfigBorrar'

export default function si() {

  return (
    <>
    <RequireAuth> 
    <Navbar/>
    </RequireAuth>
    <Features/>
    {/* 


    {/* 
    
    <Footer/>
    <Hero/> */}
    {/* <MouseEffect/>  */}
    {/* <Pricing /> */}
    {/*
    */}
    </>
  )
}
