import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state) => {
      state.cart.push({})
    },
    deleteFromCart: (state, action) => {
      state.cart.splice(action.payload, 1)
    },
  },
})

export const { addToCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer
