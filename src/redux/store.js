import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cardSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    counter: cartSlice,
  },
});

export default store;
