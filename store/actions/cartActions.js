// cart actions
import { store } from "../store";

export const addToCart = (product) => {
   store.dispatch({type: "ADD_TO_CART", payload: product})
};

export const removeFromCart = (product) => {
   store.dispatch({type: "REMOVE_FROM_CART", payload: product})
}