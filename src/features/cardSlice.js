import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      const { payload } = action;
      const id = payload.id;

      const limitedCard = state.cart.findIndex((item) => item.id === id);

      if (limitedCard !== -1) {
        alert("Bir ədəddən artıq əlavə edə bilmərsiz!");
        return;
      }
      state.cart.push(payload);
    },
  },
});
export default cartSlice.reducer;
export const { addtoCart } = cartSlice.actions;
