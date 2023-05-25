import { createStore } from "react-redux";
import { reducer } from "./reducer";

export const store = createStore(reducer);
