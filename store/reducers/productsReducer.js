// products reducer

const initialState = {
   products: []
}

export const productsReducer = (state = initialState, action) => {
   switch(action.type){
      case "FETCH_PRODUCTS": {
         return {...state, products: [...action.payload]};
      }
      default:
         return state;
   }
};