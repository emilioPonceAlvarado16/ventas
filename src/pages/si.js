import App from '@/components/App'
import MouseEffect from '@/components/MouseEffect'
import Plagiarism from '@/components/Plagiarism'
import RequireAuth from '@/components/RequireAuth'
import TemplateConfig from '@/components/TemplateConfig'
import Hero from '@/components/hero/Hero'
import Navbar from '@/components/navbar'
import Pricing from '@/components/pricing'
import React from 'react'
import { useLanguage } from '../hooks/useLanguage'; // Asegúrate de que la ruta sea correcta

// import TemplateConfig from '@/components/TemplateConfigBorrar'

export default function si() {
  const { language } = useLanguage();

  return (
    <>
    <RequireAuth>

    <Navbar/>
    </RequireAuth>
    <Pricing language={language}/>
    {/* <Hero/>
    <MouseEffect/> */}
    </>
  )
}
