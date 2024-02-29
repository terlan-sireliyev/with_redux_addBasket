import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  count:"counter",
  initialState: {
    cart: [],
    value:0
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

    decrement: (state, action) => {
      if (state.counter) {
        console.log(state.counter++); // Decrement counter only if it's greater than 0
      }
    }
  
    
  },
});
export default cartSlice.reducer;
export const { addtoCart,  decrement } = cartSlice.actions;
