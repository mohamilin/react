// krn kta ambil data dari API dan menggunakan axios,
    // import axios, jngn lupa install dlu....
import axios from 'axios';

export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL';

export function getProductData(){
    return {
        type : GET_PRODUCT,
    };
} 

export function getProSuccess(result){
    return {
        type : GET_PRODUCT_SUCCESS,
        result,
    };
} 

export function getProFailed(error){
    return {
        type : GET_PRODUCT_FAIL,
        error,
    };
} 


export function getProducts() {
    return function (dispatch) {
        dispatch(getProductData());

        axios 
        .get('https://5f51a6865e98480016123bdd.mockapi.io/products')
        .then((result) => dispatch(getProSuccess(result.dataProduct)))
        .catch((error) => dispatch(getProFailed(error)))
        
    };
}
