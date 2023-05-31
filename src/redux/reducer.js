import * as actionTypes from "./actionTypes";
const productState = {
  products: [],
  currentOrder: [],
};

export const reducer = (state = productState, action) => {
  switch (action.type) {
    case actionTypes.CRATE_PRODUCT_LIST:
      // console.log(action.payload);
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
