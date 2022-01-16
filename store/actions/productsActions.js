// products actions
import { store } from "../store";

export const fetchProducts = (products) => {
   store.dispatch({type: "FETCH_PRODUCTS", payload: products})
}