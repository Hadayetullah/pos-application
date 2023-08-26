import * as actionTypes from "./posActionTypes";
import { Products } from "../data/Products";
const productState = {
  allProductsData: [],
  products: [],
  currentOrder: [],
  isProductAvailable: null,
  totalQty: 0,
  totalPrice: 0,
};

const formatProductListObj = (item) => {
  return item.data.map((childItem) => ({
    title: item.title,
    category: item.category,
    subtitle: item.subtitle,
    subcategory: item.subcategory,
    productTitle: childItem.title,
    price: childItem.price,
    img: childItem.img,
    qty: childItem.qty,
    stock: childItem.stock,
  }));
};

// const normalizeAllData = () => {
//   let dataList = Products.flatMap((item) => formatProductListObj(item));
//   console.log(dataList);
//   return {
//     ...productState,
//     allProductsData: dataList,
//   };
// };
export const PosReducer = (state = productState, action) => {
  const getItem = (orderItem) => {
    let getItemFromProductList = state.products.find(
      (item) =>
        item.category === orderItem.category &&
        item.subcategory === orderItem.subcategory &&
        item.productTitle === orderItem.productTitle
    );

    return getItemFromProductList;
  };

  const getObjeFromCart = (orderItem) => {
    let getItemFromProductList = state.currentOrder.find(
      (item) =>
        item.category === orderItem.category &&
        item.subcategory === orderItem.subcategory &&
        item.productTitle === orderItem.productTitle
    );

    return getItemFromProductList;
  };

  const getProductObjIndex = (orderItem) => {
    const productObjIndex = state.products.findIndex((order) => {
      return (
        order.category === orderItem.category &&
        order.subcategory === orderItem.subcategory &&
        order.productTitle === orderItem.productTitle
      );
    });

    return productObjIndex;
  };

  const getCurrentOrderIndex = (orderItem) => {
    const orderIndex = state.currentOrder.findIndex((order) => {
      return (
        order.category === orderItem.category &&
        order.subcategory === orderItem.subcategory &&
        order.productTitle === orderItem.productTitle
      );
    });
    return orderIndex;
  };

  // SWITCH CASE
  switch (action.type) {
    // case actionTypes.NORMALIZE_ALL_DATA:
    //   console.log(action.payload);
    //   return {
    //     ...state,
    //     allProductsData: action.payload,
    //   };

    case actionTypes.CRATE_PRODUCT_LIST:
      if (state.allProductsData.length > 0) {
        if (action.payload === "all") {
          return {
            ...state,
            products: state.allProductsData,
          };
        } else {
          let categoryData = state.allProductsData.filter(
            (item) => item.category === action.payload
          );
          // let productList = categoryData.flatMap((item) =>
          //   formatProductListObj(item)
          // );

          return {
            ...state,
            products: categoryData,
          };
        }
      } else {
        let productList = Products.flatMap((item) =>
          formatProductListObj(item)
        );
        // let normalizeData = formatProductListObj(productList);
        // console.log(productList);
        return {
          ...state,
          allProductsData: productList,
          products: productList,
        };
      }

    case actionTypes.SELECTED_SEARCHED_DATA:
      return {
        ...state,
        products: [action.payload],
      };

    case actionTypes.CURRENT_ORDER:
      let orderItem = action.payload;
      let getItemFromProductList = getItem(orderItem);

      if (getItemFromProductList.stock > 0) {
        const productObjIndex = getProductObjIndex(orderItem);

        let increaseOrderQty = getObjeFromCart(orderItem);
        let increaseQty = getItemFromProductList;
        increaseQty.stock = increaseQty.stock - 1;

        // console.log("Before: ", getItemFromProductList);

        // console.log("After: ", increaseOrderQty.qty);
        if (getCurrentOrderIndex(orderItem) !== -1) {
          increaseOrderQty.qty = increaseOrderQty.qty + 1;
          return {
            ...state,
            isProductAvailable: null,
            totalQty: state.totalQty + 1,
            totalPrice: state.totalPrice + orderItem.price,
            ...state.products.splice(productObjIndex, 1, increaseQty),
            ...state.currentOrder.splice(
              getCurrentOrderIndex(orderItem),
              1,
              increaseOrderQty
            ),
          };
        } else {
          return {
            ...state,
            isProductAvailable: null,
            totalQty: state.totalQty + orderItem.qty,
            totalPrice: state.totalPrice + orderItem.price,
            ...state.products.splice(productObjIndex, 1, increaseQty),
            currentOrder: [...state.currentOrder.concat(orderItem)],
          };
        }
      } else {
        return {
          ...state,
          isProductAvailable: "Stock Unavilable",
        };
      }

    case actionTypes.REMOVE_ITEM:
      const item = action.payload;

      let returnItemToProduct = getObjeFromCart(item);
      let returnableQty = returnItemToProduct.qty;
      returnItemToProduct.stock =
        returnItemToProduct.stock + returnItemToProduct.qty;
      returnItemToProduct.qty = 1;

      return {
        ...state,
        totalQty: state.totalQty - returnableQty,
        totalPrice: state.totalPrice - item.price * returnableQty,
        ...state.products.splice(
          getProductObjIndex(item),
          1,
          returnItemToProduct
        ),
        ...state.currentOrder.splice(getCurrentOrderIndex(item), 1),
      };

    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        isProductAvailable: null,
      };

    case actionTypes.DECREASE_CART_ITEM:
      const decreasableItem = action.payload;

      let returnDecreasableItemToProduct = getObjeFromCart(decreasableItem);
      if (returnDecreasableItemToProduct.qty > 1) {
        let returnDecreasableItem = returnDecreasableItemToProduct;
        // returnDecreasableItemToProduct.stock -= 1;
        returnDecreasableItemToProduct.qty -= 1;
        // console.log(returnDecreasableItem);

        const productObjIndex = getItem(decreasableItem);

        const newProductObjIndex = productObjIndex;
        newProductObjIndex.stock += 1;

        return {
          ...state,
          totalQty: state.totalQty - 1,
          totalPrice: state.totalPrice - decreasableItem.price,
          ...state.products.splice(
            getProductObjIndex(decreasableItem),
            1,
            newProductObjIndex
          ),
          ...state.currentOrder.splice(
            getCurrentOrderIndex(decreasableItem),
            1,
            returnDecreasableItem
          ),
        };
      } else {
        return state;
      }

    case actionTypes.INCREASE_CART_ITEM:
      let increasableItem = action.payload;

      // console.log(increasableItem);
      let getIncreasableItemFromProductList = getItem(increasableItem);

      if (getIncreasableItemFromProductList.stock > 0) {
        const productObjIndex = getProductObjIndex(increasableItem);

        let increaseOrderQty = getObjeFromCart(increasableItem);
        let increaseQty = getIncreasableItemFromProductList;
        increaseQty.stock = increaseQty.stock - 1;

        if (getCurrentOrderIndex(increasableItem) !== -1) {
          increaseOrderQty.qty = increaseOrderQty.qty + 1;
          return {
            ...state,
            isProductAvailable: null,
            totalQty: state.totalQty + 1,
            totalPrice: state.totalPrice + increasableItem.price,
            ...state.products.splice(productObjIndex, 1, increaseQty),
            ...state.currentOrder.splice(
              getCurrentOrderIndex(increasableItem),
              1,
              increaseOrderQty
            ),
          };
        } else {
          return {
            ...state,
            isProductAvailable: null,
            totalQty: state.totalQty + increasableItem.qty,
            totalPrice: state.totalPrice + increasableItem.price,
            ...state.products.splice(productObjIndex, 1, increaseQty),
            currentOrder: [...state.currentOrder.concat(increasableItem)],
          };
        }
      } else {
        return {
          ...state,
          isProductAvailable: "Stock Unavilable",
        };
      }

    case actionTypes.CANCEL_ORDER:
      return {
        ...state,
        currentOrder: [],
      };
    // case actionTypes.SEARCH_DATA:
    // console.log(action.payload);
    // const filterData = filterData(state.products);

    default:
      return state;
  }
};
