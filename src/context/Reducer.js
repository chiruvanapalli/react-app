import { ADD_PRODUCTS_SUCCESS } from "./Constants";

const initialState = {
    products: [],
    cart:[],
    loading:false
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type){
       case ADD_PRODUCTS_SUCCESS:
        return {...state, products:action.payload, loading:false}
       
        default:
            return state;
    }
}



// export const cartReducer = (state = initialState, action) => {
//   switch(action.type){
//       case "ADD_PRODUCTS":
//     console.log(action.payload);
//     return {...state, products:action.payload}
//       default:
//           return state;
//   }
// }