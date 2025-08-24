import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";  // Import your cart slice
import productSlice from "./productSlice";  // Import your product slice

// Configuring the store
const store = configureStore({
  reducer: {
    cart: cartSlice,  // Assigning the cart slice to the 'cart' section in the store
    products: productSlice,  // Assigning the product slice to the 'products' section in the store
  },
});

export default store;
