import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      state.cart.push(item)
    },
    deleteFromCart: (state, action) => {
      const shipmentId = action.payload
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].shipment.id === shipmentId) {
          state.cart.splice(i, 1)
        }
      }
    },
  },
})

export const { addToCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer
