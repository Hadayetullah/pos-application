import * as actionTypes from "./actionTypes";
import { Products } from "./data/Products";

export const createProductList = (name) => {
  if (name === "all") {
    // let productList = Products.flatMap((item) => item.data);
    let productList = Products.flatMap((item) =>
      item.data.map((childItem) => ({
        title: item.title,
        category: item.category,
        subtitle: item.subtitle,
        subcategory: item.subcategory,
        productTitle: childItem.title,
        price: childItem.price,
        img: childItem.img,
        stock: childItem.stock,
      }))
    );
    return {
      type: actionTypes.CRATE_PRODUCT_LIST,
      payload: productList,
    };
  } else {
    let categoryData = Products.filter(
      (item) => item.category === name
    ).flatMap((item) => item.data);
    return {
      type: actionTypes.CRATE_PRODUCT_LIST,
      payload: categoryData,
    };
  }
};

export const currentOrder = (product) => {
  // let order = Products.filter(
  //   (item) => item.data.filter((item) => item.title === title)[0]
  // );
  return {
    type: actionTypes.CURRENT_ORDER,
    payload: product,
  };
};
