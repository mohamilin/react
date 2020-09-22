import {UP_PRODUCT, DOWN_PRODUCT } from '../actions/cart.actions';

const defaultProduct = {
    cart : 0,
}

const counterProduct = (state = defaultProduct, action) => {
    switch (action.type) {
        case UP_PRODUCT:
            return {
                ...state,
                cart : state.cart + 1
            }
        case DOWN_PRODUCT: 
            return {    
                ...state,
                cart : state - 1
            }
        default:
            return state;
    }
}

export default counterProduct;