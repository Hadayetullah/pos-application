import * as actionTypes from "./posActionTypes";

// const formatProductListObj = (item) => {
//   return item.data.map((childItem) => ({
//     title: item.title,
//     category: item.category,
//     subtitle: item.subtitle,
//     subcategory: item.subcategory,
//     productTitle: childItem.title,
//     price: childItem.price,
//     img: childItem.img,
//     qty: childItem.qty,
//     stock: childItem.stock,
//   }));
// };

export const createProductList = (name) => {
  return {
    type: actionTypes.CRATE_PRODUCT_LIST,
    payload: name,
  };
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

export const removeItem = (item) => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item,
});

export const closeModal = () => ({
  type: actionTypes.CLOSE_MODAL,
});

export const decreaseCartItem = (item) => ({
  type: actionTypes.DECREASE_CART_ITEM,
  payload: item,
});

export const increaseCartItem = (item) => ({
  type: actionTypes.INCREASE_CART_ITEM,
  payload: item,
});

export const selectedData = (data) => ({
  type: actionTypes.SELECTED_SEARCHED_DATA,
  payload: data,
});

export const cancelOrder = () => ({
  type: actionTypes.CANCEL_ORDER,
});
