import {  GET_PRODUCT,
        GET_PRODUCT_SUCCES,
        GET_PRODUCT_FAIL
} from './actions/products.actions';

const initialState = {
    dataProduct : [],
    eror : null,
    isLoading: false,
}
 function productReducers (state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                isLoading: true,
            }
        case GET_PRODUCT_SUCCES:
            return {
                ...state,
                isLoading: false,
                dataProduct : action.results,
            }
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                isLoading: false,
                dataProduct: action.error,
            }
    }
}

export default productReducers;