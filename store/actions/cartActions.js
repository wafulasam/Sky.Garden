// cart actions
import { store } from "../store";

export const addToCart = (product) => {
   store.dispatch({type: "ADD_TO_CART", payload: product})
};

export const removeFromCart = (product) => {
   store.dispatch({type: "REMOVE_FROM_CART", payload: product})
}

export const increaseQuatity = (product) => {
   store.dispatch({type: "INCREASE_QUANTITY", payload: product})
};

export const decreaseQuantity = (product) => {
   store.dispatch({type: "DECREASE_QUANTITY", payload: product})
}