import { createSlice } from "@reduxjs/toolkit";

export let cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localStorage.getItem("CART")
      ? JSON.parse(localStorage.getItem("CART"))
      : [],
  },
  reducers: {
    addTocart: (state, reqData) => {
      let { cartObj } = reqData.payload;
      state.cart = [cartObj, ...state.cart];
      localStorage.setItem("CART", JSON.stringify(state.cart));
    },
    deleteCart: (state, reqData) => {
      let { id } = reqData.payload;
      state.cart = state.cart.filter((item) => item.id !== id)
      localStorage.setItem("CART", JSON.stringify(state.cart));;
    },
    changeQty: (state) => {},
  },
});
export const { addTocart, deleteCart, changeQty } = cartSlice.actions;
export default cartSlice.reducer;
