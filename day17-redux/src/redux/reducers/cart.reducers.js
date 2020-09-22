import { UP_PRODUCT, DOWN_PRODUCT } from "../actions/cart.actions";

const defaultProduct = {
  cart: 0,
};


const counterProduct = (state = defaultProduct, action) => {
  if (action.type === "UP_PRODUCT") {
    return {
      ...state,
      cart: state.cart + 1,
    };
  }
  if (action.type === "DOWN_PRODUCT") {
    let cart = 0;
    if (state.cart > 0) {
      return {
        ...state,
        cart: state.cart - 1,
      };
    }
    return {
      ...state,
      cart: cart,
    };
  }

  return state;
};

export default counterProduct;
