// cart reducer
import _ from "lodash";

const initialState = {
   cart: []
}

export const cartReducer = (state = initialState, action) => {
   switch(action.type){
      case "ADD_TO_CART": {
         let existingCartItem = {};

         state.cart.filter((cartItem) => cartItem.productId === action.payload.productId ? existingCartItem = cartItem : null);
         
         const newCartState = _.pull(state.cart, existingCartItem);

         
         if(action.payload.productId === existingCartItem.productId) {
            const newActionPayload = {
               "searchScore": existingCartItem.searchScore,
               "title": existingCartItem.title,
               "stock_record_price_retail": existingCartItem.stock_record_price_retail,
               "stock_record_price_currency": existingCartItem.stock_record_price_currency,
               "thumbnail": existingCartItem.thumbnail,
               "offer_benefit_type": existingCartItem.offer_benefit_type,
               "offer_benefit_value": existingCartItem.offer_benefit_type,
               "partner_name": existingCartItem.partner_name,
               "quantity": existingCartItem.quantity +1 // increase quantity
            }
            return {...state, cart: [...newCartState, {...newActionPayload}]}
         } else {
            return {...state, cart: [...state.cart, {...action.payload, ...{"quantity": 1}}]};
         }
         
      }
      case "REMOVE_FROM_CART": {
         let cartItemToBeRemoved = {};
         state.cart.filter((cartItem) => cartItem.productId === action.payload.productId ? cartItemToBeRemoved = cartItem : null);
         const newCartState = _.pull(state.cart, cartItemToBeRemoved);
         return {...state, cart: [...newCartState]}
      }
      case "INCREASE_QUANTITY": {
         console.log(globalProducts);
         // const initialProductState = {};
         // globalProducts.filter((product) => product.productId === action.payload.productId ? initialProductState = product : null);

         // const cart = state.cart && state.cart; 
         // objIndex = cart.findIndex((obj => obj.productId === action.payload.productId));
         // cart[objIndex].quantity = action.payload.quantity + 1;
         // cart[objIndex].stock_record_price_retail = initialProductState[objIndex].stock_record_price_retail * cart[objIndex].quantity
         // const afterIncreamentState = cart;
         
         // return {
         //    ...state, 
         //    cart: [...afterIncreamentState]
         // }
      } 
      case "DECREASE_QUANTITY": {
         // const initialProductState = {};
         // globalProducts.filter((product) => product.productId === action.payload.productId ? initialProductState = product : null);

         // const cart = state.cart && state.cart; 
         // objIndex = cart.findIndex((obj => obj.productId === action.payload.productId));
         // cart[objIndex].quantity = action.payload.quantity - 1;
         //          cart[objIndex].stock_record_price_retail = initialProductState[objIndex].stock_record_price_retail * cart[objIndex].quantity
         // const afterDecreamentState = cart;

         // // remove item from cart from when quantity is
         // const itemToRemoveWhenQuantityIsZero = cart[objIndex];
         // if(itemToRemoveWhenQuantityIsZero.quantity <1) {
         //    const newCartStateWhenQuantityIsZero = _.pull(state.cart, itemToRemoveWhenQuantityIsZero);
         //    return {
         //       ...state, 
         //       cart: [...newCartStateWhenQuantityIsZero]
         //    }
         // } else {
         //    return {
         //       ...state, 
         //       cart: [...afterDecreamentState]
         //    }
         // }
      }     
      default:
         return state;
   }
}