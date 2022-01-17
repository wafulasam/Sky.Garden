import { createStore } from "redux";
import { rootReducer } from "./reducers";
import { useSelector } from "react-redux";

export const store = createStore(rootReducer);

export const useAppStore = () => {
    const products = useSelector((state) => state.products.products).flat();
    const cart = useSelector((state) => state.cart.cart);
 
    return {
      products,
      cart,
    }
 }