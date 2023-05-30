import * as actionTypes from "./actionTypes";
import { Products } from "./data/Products";

export const createProductList = (name) => {
  if (name === "all") {
    let productList = Products.flatMap((item) => item.data);
    return {
      type: actionTypes.CRATE_PRODUCT_LIST,
      payload: productList,
    };
  }
};
