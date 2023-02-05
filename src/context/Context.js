import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { createContext } from 'react';
import { cartReducer } from './Reducer';
import { ADD_PRODUCTS_SUCCESS } from './Constants';


const Cart = createContext()

const Context = ({children}) => {
 
  useEffect(() => {
    const fetchData = async () => {
        const result = await axios.get(`https://fakestoreapi.com/products`);
        const res = await result.data;
        dispatch({
            type:ADD_PRODUCTS_SUCCESS,
            payload: res
        })
    }

    fetchData().catch(err => console.log('err', err))
  }, []);

   
    // cart reducers
    const [state, dispatch] = useReducer(cartReducer)
   

    // return statement
  return (
    <div>
       <Cart.Provider value={{state, dispatch}}>
        {children}
       </Cart.Provider>

    </div>
  )
}

export default Context;

export function useAPI() {
    const context = useContext(Cart);
    if (context === undefined) {
      throw new Error("Context must be used within a Provider");
    }
    return context;
  }

