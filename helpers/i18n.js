import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Available languages translations JSON files
import en from "../assets/languages/en.json";
import es from "../assets/languages/es.json";
import hi from "../assets/languages/hi.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en,
    es,
    hi,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
