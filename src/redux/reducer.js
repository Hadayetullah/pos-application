import * as actionTypes from "./actionTypes";
const productState = {
  products: [],
  currentOrder: [],
  isProductAvailable: null,
  totalQty: 0,
  totalPrice: 0,
};

export const reducer = (state = productState, action) => {
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
    case actionTypes.CRATE_PRODUCT_LIST:
      return {
        ...state,
        products: action.payload,
      };

    case actionTypes.CURRENT_ORDER:
      let orderItem = action.payload;
      let getItemFromProductList = getItem(orderItem);

      if (getItemFromProductList.stock > 0) {
        const productObjIndex = getProductObjIndex(orderItem);

        let increaseOrderQty = getItemFromProductList;
        let increaseQty = getItemFromProductList;
        increaseQty.stock = increaseQty.stock - 1;

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
      let getIncreasableItemFromProductList = getItem(increasableItem);

      if (getIncreasableItemFromProductList.stock > 0) {
        const productObjIndex = getProductObjIndex(increasableItem);

        let increaseOrderQty = getIncreasableItemFromProductList;
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

    default:
      return state;
  }
};
