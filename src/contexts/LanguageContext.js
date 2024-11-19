// src/contexts/LanguageContext.js

import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    async function loadTranslations() {
      try {
        // En la carpeta 'i18n'
        // y se llaman 'ENtranslations.js', 'EStranslations.js', etc.
        const langTranslations = await import(`../../i18n/${language}Translations.js`);
        setTranslations(langTranslations.default);
      } catch (error) {
        console.error("Error loading translations", error);
        // Considera establecer unas traducciones predeterminadas en caso de error
        setTranslations({});
      }
    }

    loadTranslations();
  }, [language]);

  // Memoizar la función changeLanguage para evitar recreación en cada renderizado
  const changeLanguage = useCallback((lang) => {
    setLanguage(lang);
  }, []);

  // Memoizar el objeto value para evitar cambios innecesarios
  const value = useMemo(() => ({
    language,
    changeLanguage,
    translations
  }), [language, changeLanguage, translations]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
