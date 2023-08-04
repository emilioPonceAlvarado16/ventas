import { useAuth } from '../hooks/useAuth';
import React from 'react'


export default function navbar() {
  const { currentUser, signOut,isSigningOut } = useAuth();


  return (
    <>
  
  <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="f-navigation w-nav">
    <div className="f-navigation-container">
      <a href="#" className="f-navigation-logo-link w-inline-block"><img src="images/FlowUI-Nav.png" loading="lazy" width="124" alt="" className="f-logo"/></a>
      <nav role="navigation" className="f-navigation-menu w-nav-menu">
        <a href="#" className="f-navigation-link w-nav-link">Link One</a>
        <a href="#" className="f-navigation-link w-nav-link">Link Two</a>
        <a href="#" className="f-navigation-link w-nav-link">Link Three</a>
        <a href="#" className="f-navigation-link w-nav-link">Link Four</a>
      </nav>
      <div className="f-navigation-content">
        <div className="f-navigation-menu-button w-nav-button">
          <div className="w-icon-nav-menu"></div>
        </div>
     
        <a onClick={signOut} className="f-navigation-button w-inline-block">
        {isSigningOut ? <div className=" spin"></div> : 'Salir'}
      </a>

      </div>
    </div>
  </div>

 
    </>
  )
}
