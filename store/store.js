import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import dropsReducer from "../reducers/dropsReducer";

const rootReducer = combineReducers({
  drops: dropsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
