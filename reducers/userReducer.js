// Description: This file contains the reducer for the user state, for later use in the app.

import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  DELETE_ACCOUNT,
} from "../actions/userActions.js";

const initialState = {
  uid: undefined,
  email: undefined,
  error: undefined,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      // console.log("Login action dispatched");
      return {
        ...state,
        uid: action.payload.uid,
      };
    case SIGNUP:
      return {
        ...state,
        uid: action.payload.uid,
      };
    case LOGOUT:
      return {
        ...state,
        uid: undefined,
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        uid: undefined,
      };
    default:
      return state;
  }
}

export default userReducer;
