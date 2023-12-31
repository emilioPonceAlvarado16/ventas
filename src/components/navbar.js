import { useAuth } from '../hooks/useAuth';
import React from 'react'

export default function navbar() {
  const { currentUser, signOut, isSigningOut } = useAuth();

  return (
    <>
      <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="f-navigation w-nav">
        <div className="f-navigation-container">
          {/* Logo Tipográfico */}
          <button href="#" className="f-navigation-logo-link w-inline-block ">
            <div style={{ fontFamily: '"Arial", sans-serif', fontSize: '24px', backgroundColor: 'white', padding: '10px', borderRadius: '5px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)' }}>
              <span style={{ color: '#080f25', fontWeight: 'bold', fontStyle: 'italic' }}>Format</span>
              <span style={{ color: '#FFC107', fontWeight: 'bold', fontStyle: 'italic' }}>Maker</span>
            </div>
          </button>
          <nav role="navigation" className="f-navigation-menu w-nav-menu">
            <a href="#" className="f-navigation-link w-nav-link">Link One</a>
            <a href="#" className="f-navigation-link w-nav-link">Link Two</a>
            <a href="#" className="f-navigation-link w-nav-link">Link Three</a>
            <a href="#" className="f-navigation-link w-nav-link">Link Four</a>
          </nav>
          <div className="f-navigation-content">
            <div className="f-navigation-menu-button w-nav-button">
              <div className="w-icon-nav-menu"></div>
            </div>
            <a 
              onClick={signOut} 
              className={`f-navigation-button w-inline-block ${isSigningOut ? "button-loading" : ""}`}
            >
              <div className={`spin ${isSigningOut ? "" : "d-none"}`} />
              <span className={isSigningOut ? "d-none" : ""}>Salir</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
