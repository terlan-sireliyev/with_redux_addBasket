import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    count: 0,
  },
  reducers: {
    addtoCart: (state, action) => {
      const { payload } = action;
      const findPro = state.cart.find((item) => item.id === payload.id);
      if (findPro) {
        const updatedBasket = state.cart.map((item) =>
          item.id === payload.id ? { ...item } : item
        );
        return {
          ...state,
          cart: updatedBasket,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...payload, count: 1 }],
        };
      }
    },

    decrement: (state, action) => {
      const { payload } = action;
      const findPro = state.cart.find((item) => item.id === payload.id);
      if (findPro) {
        const updatedBasket = state.cart.map((item) =>
          item.id === payload.id ? { ...item, count: item.count + 1 } : item
        );
        return {
          ...state,
          cart: updatedBasket,
        };
      } else {
        return state;
      }
    },
    increment: (state, action) => {
      const { id } = action.payload;
      const findMinus = state.cart.find(
        (itemMinusFind) => itemMinusFind.id === id
      );
      if (findMinus && findMinus.count > 1) {
        const mapMinus = state.cart.map((itemMinusMap) =>
          itemMinusMap.id === id
            ? { ...itemMinusMap, count: itemMinusMap.count - 1 }
            : itemMinusMap
        );
        return { ...state, cart: mapMinus };
      } else {
        return state;
      }
    },
  },
});
export default cartSlice.reducer;
export const { addtoCart, decrement, increment } = cartSlice.actions;
