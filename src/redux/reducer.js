import * as actionTypes from "./actionTypes";
const productState = {
  products: [],
  currentOrder: [],
};

export const reducer = (state = productState, action) => {
  switch (action.type) {
    case actionTypes.CRATE_PRODUCT_LIST:
      return {
        ...state,
        products: action.payload,
      };

    case actionTypes.CURRENT_ORDER:
      return {
        ...state,
        currentOrder: [...state.currentOrder.concat(action.payload)],
      };

    default:
      return state;
  }
};

// console.log(action.payload);
