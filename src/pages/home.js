import React, { useEffect, useState } from 'react'
import Navbar from "../components/navbar"
import Hero from "../components/hero"
// import Pricing from "../components/pricing"
// import Inicio from "../components/inicio"
import Footer from "../components/footer"
// import ServiceList from "../components/serviceList"
// import Comparison from "../components/comparison"
import Alerts from "../components/alerts"
import ModalAlert from "../components/modalAlert"
// import Features from "../components/features"
// import FeaturesNew from "../components/features_new"
// import AvatarName from "../components/avatarName"
// import AvatarPhoto from "../components/avatarPhoto"
// import Contact from "../components/contact"
// import Account from "../components/account"
import ModalCard from "../components/modalCard"
import ModalHeading from "../components/modalHeading"
// import { Hub } from '@aws-amplify/core'
// import { useAuthenticator } from '@aws-amplify/ui-react';
// import { Auth } from 'aws-amplify'
import RequireAuth from '../components/RequireAuth';
import { withAuthenticator } from '@aws-amplify/ui-react'
// import { useAuth } from '../hooks/useAuth';
function Home() {
  
  return (
 
<>

       {/* <RequireAuth>
        <Navbar />
        </RequireAuth> */}
      <br/>

      <Navbar />

    {/* {isSignedIn ? <Navbar /> : <Account />} */}

    {/* <Account/> */}
    {/* <Navbar/> */}
    {/* <ModalCard/>  */}
    {/* <ModalHeading/> */}
    {/* <AvatarName size="large" names="IA"/> */}
    {/* <AvatarPhoto/>
    <FeaturesNew/>
    <Features/>
    <Pricing/>*/}
   {/* <ModalAlert type="error" message="Guardado correctamente!"/>  */}
    {/* <Inicio/> */}
    <Hero/>

    <Footer/>
</>
   
  )
}


export default withAuthenticator(Home);
