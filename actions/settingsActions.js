export const CHANGE_LANGUAGE = "change_language";

import { saveData } from "../store/localStorage.js";

// multi lang stuff
import "../helpers/i18n";
import { useTranslation } from "react-i18next";

export const changeLanguage = (language) => {
  saveData(JSON.stringify({ language: language }), "@eye-app-language");
  console.log("ACTION - Language changed to ", language);

  return {
    type: CHANGE_LANGUAGE,
    payload: language,
  };
};
