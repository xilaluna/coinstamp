import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.cart.push({})
    },
    deleteFromCart: (state, action) => {
      state.cart.splice(action.payload, 1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer
