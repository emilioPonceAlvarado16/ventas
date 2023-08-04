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
import { Auth } from 'aws-amplify'
import RequireAuth from '../components/RequireAuth';
import { useAuth } from '../hooks/useAuth';

function Posi() {

  // const [currentUser, setcurrentUser] = useState(null);


  // useEffect(() => {
  //   const authListener = (event) => {
  //     if (event.payload.event === 'signIn') {
  //       checkAuth();
  //     } else if (event.payload.event === 'signOut') {
  //       setcurrentUser(null);
  //       localStorage.removeItem('authUser');
  //     }
  //   };

  //   Hub.listen('auth', authListener);

  //   // Check if the user is already authenticated on component mount
  //   checkAuth();

  //   // Cleanup the event listener when the component unmounts
  //   return () => {
  //     Hub.remove('auth', authListener);
  //   };
  // }, []);


  // const checkAuth = async () => {
  //   try {
  //     const user = await Auth.currentAuthenticatedUser();
  //     localStorage.setItem('authUser', JSON.stringify(user));
  //     setcurrentUser(user);
  //   } catch (error) {
  //     setcurrentUser(null);
  //     localStorage.removeItem('authUser');
  //   }
  // };

  
  return (
 
<>
    {/* { currentUser ?<Navbar/>: <Account/> } */}

       <RequireAuth>
        <Navbar />
      </RequireAuth>
     
    {/* {isSignedIn ? <Navbar /> : <Account />} */}

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


export default Posi;
