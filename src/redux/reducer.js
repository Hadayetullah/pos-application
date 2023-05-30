import * as actionTypes from "./actionTypes";
const productState = {
  products: [],
};

export const reducer = (state = productState, action) => {
  switch (action.type) {
    case actionTypes.CRATE_PRODUCT_LIST:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
