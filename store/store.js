import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import dropsReducer from "../reducers/dropsReducer";
import settingsReducer from "../reducers/settingsReducer";

const rootReducer = combineReducers({
  drops: dropsReducer,
  settings: settingsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
