export const CHANGE_LANGUAGE = "change_language";

import { saveData } from "../store/localStorage.js";

export const changeLanguage = (language) => {
  saveData(JSON.stringify({ language: language }), "@eye-app-language"); // saving the language change in the local storage
  console.log("ACTION - Language changed to ", language);

  return {
    type: CHANGE_LANGUAGE,
    payload: language,
  };
};
