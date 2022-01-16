// all reducers
import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
   productsReducer,
   cartReducer,
});