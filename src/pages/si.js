import App from '@/components/App'
import MouseEffect from '@/components/MouseEffect'
import Plagiarism from '@/components/Plagiarism'
import RequireAuth from '@/components/RequireAuth'
import TemplateConfig from '@/components/TemplateConfig'
import Hero from '@/components/hero/Hero'
import Navbar from '@/components/navbar'
import Pricing from '@/components/pricing'
import React from 'react'
import Features from "../components/features"
import Footer from '@/components/footer'
// import Features from "../components/features_new"

// import TemplateConfig from '@/components/TemplateConfigBorrar'

export default function si() {

  return (
    <>
    <RequireAuth> 
    <Navbar/>
    </RequireAuth>
    {/* 


    {/* 
    
    <Footer/>
    <Features/>
    <Hero/> */}
    {/* <MouseEffect/>  */}
    {/* <Pricing /> */}
    {/*
    */}
    </>
  )
}
