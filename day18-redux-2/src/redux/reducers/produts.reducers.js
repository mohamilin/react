import {  GET_PRODUCT,
        GET_PRODUCT_SUCCESS,
        GET_PRODUCT_FAIL
} from '../actions/products.actions';

const initialState = {
    data: [],
    error : null,
    isLoading: false,
}

 export function productReducers (state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                isLoading: true,
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data : action.result,
            }
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        default:
            return state;
    }
}

// export default productReducers;