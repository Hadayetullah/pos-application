import { createStore } from "redux";
import { Reducer } from "./reducer.js";

export const store = createStore(Reducer);
