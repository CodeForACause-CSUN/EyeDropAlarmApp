import { CHANGE_LANGUAGE } from "../actions/dropsActions.js";

const initialState = {
  language: "en", // default language, English
};

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload.language,
      };
    default:
      return state;
  }
}
