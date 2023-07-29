import React from 'react'
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Pricing from "../components/pricing"
import Inicio from "../components/inicio"
import Footer from "../components/footer"
import ServiceList from "../components/serviceList"
import Comparison from "../components/comparison"
import Alerts from "../components/alerts"
import ModalAlert from "../components/modalAlert"
import Features from "../components/features"
import FeaturesNew from "../components/features_new"
import AvatarName from "../components/avatarName"
export default function posi() {
  return (
    <>

    <Navbar/>
    <AvatarName/>
    <FeaturesNew/>
    <Features/>
    <Pricing/>
    {/* <ModalAlert type="success" message="Guardado correctamente!"/> */}
    {/* <Inicio/> */}
    <Hero/>
    {/* <Alerts type="success" message="Guardado correctamente!"/> */}

    <Footer/>
   
   </>
  )
}
