import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    async function loadTranslations() {
      try {
        // Suponiendo que tus archivos de traducción están en la carpeta 'i18n'
        // y se llaman 'ENtranslations.js', 'EStranslations.js', etc.
        const langTranslations = await import(`../../i18n/${language}Translations.js`);
        setTranslations(langTranslations.default);
      } catch (error) {
        console.error("Error loading translations", error);
        // Considera establecer unas traducciones predeterminadas en caso de error
      }
    }

    loadTranslations();
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
