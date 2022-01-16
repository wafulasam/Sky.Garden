import { createStore } from "redux";
import { rootReducer } from "./reducers";
import { useSelector } from "react-redux";

export const store = createStore(rootReducer);

export const useAppStore = () => {
    const products = useSelector((state) => state.productsReducer.products).flat(); // flat is used to remove the second bracket.
 
    return {
       products,
    }
 }