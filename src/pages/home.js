import React, { useEffect, useState } from 'react'
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
import AvatarPhoto from "../components/avatarPhoto"
import Contact from "../components/contact"
import Account from "../components/account"
import ModalCard from "../components/modalCard"
import ModalHeading from "../components/modalHeading"
import { Hub } from '@aws-amplify/core'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react';

function Posi() {
  const [currentUser, setcurrentUser] = useState()
  // const [route, SignOut] = useState(context=>[
  //   context.route,
  //   context.SignOut
  // ])

  // function logout(){
  //   SignOut();
    
  // }
  // useEffect(() => {
  //   Hub.listen('auth', (event)=>{
  //     console.log("auth event", event)
  //   })
  
  // })
  
  return (
 
<>
    { currentUser ?<Navbar/>: <Account/> }
    {/* <Account/> */}
    {/* <Navbar/> */}
    {/* <ModalCard/>  */}
    {/* <ModalHeading/> */}
    {/* <AvatarName size="large" names="IA"/> */}
    {/* <AvatarPhoto/>
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
// export default withAuthenticator(Posi);
export default Posi;
