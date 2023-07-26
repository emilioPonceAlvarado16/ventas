import React from 'react'


export default function navbar() {
  return (
    <>
    
    <div  className="navbar-no-shadow-container w-nav">
      <div className="container-regular">
        <div className="navbar-wrapper">
          <a href="#" className="navbar-brand w-nav-brand">
          <img src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a332512aaee_placeholder-1.svg" loading="lazy" alt=""/>
          </a>
          <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
            <ul role="list" className="nav-menu w-list-unstyled">
              <li>
                <a href="#" className="nav-link">About</a>
              </li>
              <li>
                <a href="#" className="nav-link">Feature</a>
              </li>
              <li>
                <a href="#" className="nav-link">User Examples</a>
              </li>
              <li>
                <a href="#" className="nav-link">Pricing</a>
              </li>
              <li>
                <a href="#" className="nav-link">Pricing</a>
              </li>
             
              <li className="mobile-margin-top-10">
                <div className="nav-button-wrapper">
                  <a href="#" className="button-primary w-button">Get Started</a>
                </div>
              </li>
            </ul>
          </nav>
          <div className="menu-button w-nav-button">
            <div className="w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
