import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import arTranslations from './translations/ar.json';
import enTranslations from './translations/en.json';
import frTranslations from './translations/fr.json';

const resources = {
  ar: {
    translation: arTranslations,
  },
  en: {
    translation: enTranslations,
  },
  fr: {
    translation: frTranslations,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar', // Default to Arabic
    lng: 'ar', // Set Arabic as initial language
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

// Function to get text direction based on language
export const getTextDirection = (language: string): 'rtl' | 'ltr' => {
  return language === 'ar' ? 'rtl' : 'ltr';
};

// Function to update document direction and language
export const updateDocumentLanguage = (language: string) => {
  const direction = getTextDirection(language);
  document.documentElement.dir = direction;
  document.documentElement.lang = language;
};

export default i18n;