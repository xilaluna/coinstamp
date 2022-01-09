import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.cart += 1
    },
    decrement: (state) => {
      state.cart -= 1
    },
    incrementByAmount: (state, action) => {
      state.cart += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer
