// src/components/Navbar.js

import React, { useState, useContext } from 'react';
import { useAuth } from '../hooks/useAuth';
import SvgIcons from './svgIcons';
import { useLanguage } from '../hooks/useLanguage';
import Link from 'next/link';
import { LanguageContext } from '@/contexts/LanguageContext';

export default function Navbar() {

  const { signOut, isSigningOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { translations } = useContext(LanguageContext);
  const navbarTranslations = translations.navbar;
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { language, changeLanguage } = useLanguage();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleMenuClick = (menuObj) => {
    if (menuObj?.onClick === 'Logout') {
      signOut();
    }
  };

  return (
    <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="f-navigation w-nav">
      <div className="f-navigation-container">
        <button href="/default-route" className="f-navigation-logo-link w-inline-block" style={{ backgroundColor: 'transparent', border: 'none' }}>
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
          {navbarTranslations?.routes.map((routeObj) => (
            <Link href={routeObj.route} key={routeObj.label} legacyBehavior>
              <a href={routeObj.route} className="f-navigation-link w-nav-link">{routeObj.label}</a>
            </Link>
          ))}
        </nav>
        <div className="f-navigation-content">
          {/* Botón para seleccionar idioma */}
          <button
            onClick={toggleDropdown}
            className="w-dropdown-button"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            aria-label="Seleccionar idioma"
          >
            <SvgIcons type="international" />
          </button>
          <div className={`f-banner-dropdown-list w-dropdown-list ${dropdownOpen ? 'w--open' : ''}`}>
            {navbarTranslations?.languages.map((lang) => (
              <button
                key={lang.code}
                className="f-banner-dropdown-link w-dropdown-link"
                onClick={() => changeLanguage(lang.code)}
                aria-label={`Cambiar idioma a ${lang.name}`}
              >
                {lang.name}
              </button>
            ))}
          </div>

          {/* Menú de navegación responsive */}
          <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-2" style={{ display: isNavOpen ? 'block' : 'none' }}>
            <nav
              role="navigation"
              className="f-navigation-l w-nav-menu"
              style={{
                transform: `translateY(75px) translateX(0px)`,
                transition: 'transform 400ms ease 0s'
              }}
              data-nav-menu-open
            >
              {navbarTranslations?.routes.map((routeObj) => (
                <Link href={routeObj.route} key={routeObj.label} legacyBehavior>
                  <a href={routeObj.route} className="f-navigation-link w-nav-link w--nav-link-open">{routeObj.label}</a>
                </Link>
              ))}

              {/* Botones de menú para dispositivos móviles */}
              {navbarTranslations?.mobileMenu.map((menuObj) => (
                <div key={menuObj.label}>
                  <Link href={menuObj.route} legacyBehavior>
                    <a
                      onClick={() => handleMenuClick(menuObj)}
                      className={isSigningOut ? "d-none" : "f-navigation-link w-nav-link w--nav-link-open"}
                    >
                      {menuObj.label}
                    </a>
                  </Link>
                  <div className={`spin ${isSigningOut ? "" : "d-none"}`}></div>
                </div>
              ))}
            </nav>
          </div>

          {/* Botón de Logout */}
          <button
            onClick={signOut}
            className={`f-navigation-button w-nav-menu w-inline-block ${isSigningOut ? "button-loading" : ""}`}
            aria-label="Cerrar sesión"
          >
            {isSigningOut ? (
              <div className="spin" aria-label="Cerrando sesión"></div>
            ) : (
              <span>{navbarTranslations?.logout}</span>
            )}
          </button>

          {/* Botón de menú para dispositivos móviles */}
          <button
            className={`f-navigation-menu-button w-nav-button ${isNavOpen ? 'w--open' : ''}`}
            onClick={toggleNav}
            aria-label="Abrir menú de navegación"
            aria-expanded={isNavOpen}
            aria-controls="w-nav-overlay-2"
          >
            <div className="w-icon-nav-menu"></div>
          </button>
        </div>
      </div>
    </div>
  )
}
