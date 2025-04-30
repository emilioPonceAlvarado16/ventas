import React, { useState, useContext,useEffect, useRef  } from 'react';
import SvgIcons from '../svgIcons';
import { useLanguage } from '@/hooks/useLanguage';
import Link from 'next/link';
import { LanguageContext } from '@/contexts/LanguageContext';

import styles from "./Navbar.module.css"

export default function Navbar() {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { translations } = useContext(LanguageContext);
  const navbarTranslations = translations.navbar;
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { language, changeLanguage } = useLanguage();
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleMenuClick = (menuObj) => {

  };
  

  return (
      <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="f-navigation w-nav">
        <div className="f-navigation-container"
        >
          <button href="/default-route" className="f-navigation-logo-link w-inline-block" style={{ backgroundColor: 'transparent', border: 'none' }}>
            <div style={{
              fontFamily: '"Arial", sans-serif',
              fontSize: '24px',
              backgroundColor: '#445566', 
              padding: '10px',
              borderRadius: '5px',
              boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)'
            }}>
              <span style={{
                color: 'white',
                fontWeight: 'bold',
                fontStyle: 'italic'
              }}>Bellisimas S.A.</span>
              <span style={{
                color: '#708090', 
                fontWeight: 'bold',
                fontStyle: 'italic'
              }}>!!!</span>
            </div>
          </button>


          <nav role="navigation" className={`${styles["f-navigation-menu"]} w-nav-menu`}>

            {navbarTranslations?.routes.map((routeObj, index) => (
              <Link href={routeObj.route} key={index} legacyBehavior>
                <button className={`${styles["f-navigation-link"]} w-nav-link`}>{routeObj.label}</button>
              </Link>
            ))}
          </nav>
          <div className="f-navigation-content">
       
            <SvgIcons type="international" onClick={toggleDropdown} />
            <div ref={dropdownRef} data-hover="false" onClick={toggleDropdown} className="w-dropdown">
              <div className="f-banner-dropdown-toggle w-dropdown-toggle">
                <div className="f-banner-caption">{language}</div>
                <div className="f-icon-small w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10.5832 5.99999L7.99657 8.58666L5.4099 5.99999C5.1499 5.73999 4.7299 5.73999 4.4699 5.99999C4.2099 6.25999 4.2099 6.67999 4.4699 6.93999L7.5299 9.99999C7.7899 10.26 8.2099 10.26 8.4699 9.99999L11.5299 6.93999C11.7899 6.67999 11.7899 6.25999 11.5299 5.99999C11.2699 5.74666 10.8432 5.73999 10.5832 5.99999Z" fill="currentColor"></path>
                </svg></div>
              </div>
              <div className={`f-banner-dropdown-list w-dropdown-list ${dropdownOpen ? 'w--open' : ''}`}>
                {navbarTranslations?.languages.map((lang) => (
                  <a
                    key={lang.code}
                    className="f-banner-dropdown-link w-dropdown-link"
                    onClick={() => changeLanguage(lang.code)}
                  >
                    {lang.name}
                  </a>
                ))}
              </div>
            </div>
            {/* Menú de navegación responsive */}
            <div className={styles['w-nav-overlay-visibility']} data-wf-ignore="" id="w-nav-overlay-2" style={{ display: isNavOpen ? 'block' : 'none' }}>
              <nav role="navigation"className={`${styles["f-navigation-l"]} "w-nav-menu" ${isNavOpen ? styles['f-navigation-visible'] : styles['f-navigation-hidden']}`} 
                
                data-nav-menu-open>
                {navbarTranslations?.routes.map((routeObj, index) => (
                  <Link href={routeObj.route} key={index} legacyBehavior>
                    <a className={`${styles["f-navigation-link"]} w-nav-link w--nav-link-open`}>{routeObj.label}</a>
                  </Link>
                ))}

                {/* Añade el botón de Login para dispositivos móviles */}
                {navbarTranslations?.mobileMenu.map((menuObj, index) => (
                  <div key={index}  >
                    
                    <Link href={menuObj.route} legacyBehavior>
                      <button

                        onClick={() => handleMenuClick(menuObj)}

                         className={false ? "d-none" : "f-navigation-link w-nav-link w--nav-link-open"}>{menuObj.label}</button>
                    </Link>
                    <div className={`spin ${false ? "" : "d-none"}`}></div>
                  </div>
                ))}
              </nav>
            </div>
     
            
            <div className={`f-navigation-menu-button w-nav-button ${isNavOpen ? 'w--open' : ''}`} onClick={toggleNav}>
              <div className="w-icon-nav-menu">

              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
