// cart reducer
import _ from "lodash";

const initialState = {
   cart: []
}

export const cartReducer = (state = initialState, action) => {
   switch(action.type){
      case "ADD_TO_CART": {
         let existingCartItem = {};

         state.cart.filter((cartItem) => cartItem.id === action.payload.id ? existingCartItem = cartItem : null);
         
         const newCartState = _.pull(state.cart, existingCartItem);

         
         if(action.payload.id === existingCartItem.id) {
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
         state.cart.filter((cartItem) => cartItem.id === action.payload.id ? cartItemToBeRemoved = cartItem : null);
         const newCartState = _.pull(state.cart, cartItemToBeRemoved);
         return {...state, cart: [...newCartState]}
      }
      default:
         return state;
   }
}