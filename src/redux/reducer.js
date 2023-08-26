import { combineReducers } from "redux";
import { PosReducer } from "./posReducer/PosReducer.js";
import { devReducer } from "./forDevelopment/devReducer.js";

export const Reducer = combineReducers({
  pos: PosReducer,
  // devReducer: devReducer,
});
