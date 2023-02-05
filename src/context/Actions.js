import axios from "axios";
import { ADD_PRODUCTS_FAIL, ADD_PRODUCTS_REQUEST, ADD_PRODUCTS_SUCCESS } from "./Constants";


// GET ALL PRODUCTS
export const fetchProducts = () => async (dispatch) => {
    console.log('Hello')
    try {
        dispatch({type:ADD_PRODUCTS_REQUEST});
        const {data} = await axios.get(`https://fakestoreapi.com/products`);

        dispatch({type:ADD_PRODUCTS_SUCCESS, payload:data})
        console.log('result', data)


    } catch (error) {
        dispatch({type:ADD_PRODUCTS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message})
       
    }
}