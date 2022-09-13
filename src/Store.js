import { createStore } from "redux";
import rootReducer from './state/reducer/main';

export const store = createStore(rootReducer);