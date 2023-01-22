export const CHANGE_LANGUAGE = "change_language";

export const changeLanguage = (language) => {
  return {
    type: CHANGE_LANGUAGE,
    payload: language,
  };
};
