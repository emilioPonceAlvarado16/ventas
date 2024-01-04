import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import SvgIcons from './svgIcons';
import { useLanguage } from '../hooks/useLanguage'; // Asegúrate de que la ruta sea correcta

export default function navbar() {
  const { currentUser, signOut, isSigningOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Spanish' },
  ];

  const { language, changeLanguage } = useLanguage();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };



  return (
    <>
      <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="f-navigation w-nav">
        {language}
        <div className="f-navigation-container">
          <button href="#" className="f-navigation-logo-link w-inline-block" style={{ backgroundColor: 'transparent', border: 'none' }}>
            <div style={{
              fontFamily: '"Arial", sans-serif',
              fontSize: '24px',
              backgroundColor: '#445566', // Gris azulado suave para el fondo del logo
              padding: '10px',
              borderRadius: '5px',
              boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)'
            }}>
              <span style={{
                color: 'white', // Blanco para alto contraste en la primera parte del texto
                fontWeight: 'bold',
                fontStyle: 'italic'
              }}>Format</span>
              <span style={{
                color: '#708090', // Gris azulado para complementar en la segunda parte del texto
                fontWeight: 'bold',
                fontStyle: 'italic'
              }}>Maker</span>
            </div>
          </button>


          <nav role="navigation" className="f-navigation-menu w-nav-menu">
            <a href="#" className="f-navigation-link w-nav-link">Link One</a>
            <a href="#" className="f-navigation-link w-nav-link">Link Two</a>
            <a href="#" className="f-navigation-link w-nav-link">Link Three</a>
            <a href="#" className="f-navigation-link w-nav-link">Pricing</a>
          </nav>
          <div className="f-navigation-content">
            <div className="f-navigation-menu-button w-nav-button">
              <div className="w-icon-nav-menu"></div>
            </div>



            <SvgIcons type="international" onClick={toggleDropdown} />
            <div data-hover="false" data-delay="0" onClick={toggleDropdown} className="w-dropdown">
              <div className="f-banner-dropdown-toggle w-dropdown-toggle">
                <div className="f-banner-caption">{language}</div>
                <div className="f-icon-small w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10.5832 5.99999L7.99657 8.58666L5.4099 5.99999C5.1499 5.73999 4.7299 5.73999 4.4699 5.99999C4.2099 6.25999 4.2099 6.67999 4.4699 6.93999L7.5299 9.99999C7.7899 10.26 8.2099 10.26 8.4699 9.99999L11.5299 6.93999C11.7899 6.67999 11.7899 6.25999 11.5299 5.99999C11.2699 5.74666 10.8432 5.73999 10.5832 5.99999Z" fill="currentColor"></path>
                </svg></div>
              </div>
              <div className={`f-banner-dropdown-list w-dropdown-list ${dropdownOpen ? 'w--open' : ''}`}>
                {languages.map((lang) => (
                  <a
                    key={lang.code}
                    href="#"
                    className="f-banner-dropdown-link w-dropdown-link"
                    onClick={() => changeLanguage(lang.code)}
                  >
                    {lang.name}
                  </a>
                ))}
              </div>

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
