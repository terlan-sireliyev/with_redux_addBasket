import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    count: 0,
    free: 0,
    delivery: 9,
  },
  reducers: {
    addtoCart: (state, action) => {
      console.log("addtoCart reducer called");
      const { payload } = action;
      const findPro = state.cart.find((item) => item.id === payload.id);
      if (findPro) {
        
        const updatedBasket = state.cart.map((item) =>
          item.id === payload.id
            ? { ...item, delivery: item.delivery, count: item.count + 1 }
            : item
        );

        return {
          ...state,
          cart: updatedBasket,
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            { ...payload, count: 1, delivery: state.delivery },
          ],
        };
      }
    },

    decrement: (state, action) => {
      const { payload } = action;
      const findPro = state.cart.find((item) => item.id === payload.id);
      if (findPro && findPro.count > 1) {
        const updatedBasket = state.cart.map((item) =>
          item.id === payload.id ? { ...item, count: item.count - 1 } : item
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
      const { payload } = action;
      const findMinus = state.cart.find(
        (itemMinusFind) => itemMinusFind.id === payload.id
      );
      if (findMinus) {
        const updatedBasket = state.cart.map((itemMinusMap) =>
          itemMinusMap.id === payload.id
            ? { ...itemMinusMap, count: itemMinusMap.count + 1 }
            : itemMinusMap
        );
        return { ...state, cart: updatedBasket };
      } else {
        return state;
      }
    },
    deleteFunc: (state, action) => {
      const { id } = action.payload;
      const filter = state.cart.filter(
        (deleteFilter) => deleteFilter.id !== id
      );
      return {
        ...state,
        cart: filter,
      };
    },
  },
});
export default cartSlice.reducer;
export const { addtoCart, decrement, increment, deleteFunc } =
  cartSlice.actions;
