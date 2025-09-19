import React, { createContext, useState } from 'react';

// This is our dictionary of translations
const translations = {
  en: { // English
    logo: "FarmWise",
    loginButton: "Login",
    heroSubtitle: "SMART FARMING SOLUTIONS FOR MODERN FARMERS",
    heroTitle: "AI-Powered Farming Advisory at Your Fingertips",
  },
  ta: { // Tamil (தமிழ்)
    logo: "பார்ம்வைஸ்",
    loginButton: "உள்நுழை",
    heroSubtitle: "நவீன விவசாயிகளுக்கான ஸ்மார்ட் விவசாய தீர்வுகள்",
    heroTitle: "AI- அடிப்படையிலான விவசாய ஆலோசனை உங்கள் விரல் நுனியில்",
  },
  ml: { // Malayalam (മലയാളം)
    logo: "ഫാംവൈസ്",
    loginButton: "ലോഗിൻ ചെയ്യുക",
    heroSubtitle: "ആധുനിക കർഷകർക്കുള്ള സ്മാർട്ട് ഫാമിംഗ് സൊല്യൂഷനുകൾ",
    heroTitle: "AI- പവർഡ് ഫാമിംഗ് ഉപദേശം നിങ്ങളുടെ വിരൽത്തുമ്പിൽ",
  },
};

// Create the context
export const LanguageContext = createContext();

// Create a provider component to share the language data
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  // Provide the current language, the translations, and the function to change it
  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};