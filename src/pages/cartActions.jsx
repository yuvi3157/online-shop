// src/actions/cartActions.js (ensure this file exists or correct path if using .jsx)
export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: productId,
  };
};

export const updateQuantity = (productId, quantity) => {
  return {
    type: "UPDATE_QUANTITY",
    payload: { productId, quantity },
  };
};
