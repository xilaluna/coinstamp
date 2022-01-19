import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getCart = createAsyncThunk("cart/getCart", async () => {
  const response = await axios.get("/cart")
  return response.data
})

export const addToCart = createAsyncThunk("cart/addToCart", async (rateId) => {
  const response = await axios.post("/cart", { params: { id: rateId } })
  return response.data
})

export const deleteFromCart = createAsyncThunk("cart/deleteFromCart", async (rateId) => {
  const response = await axios.delete("/cart", { params: { id: rateId } })
  return response.data
})

export const checkoutCart = createAsyncThunk("cart/checkoutCart", async () => {
  const response = await axios.get("/cart")
  return response.data
})

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    status: "idle",
  },
  extraReducers: {
    [getCart.pending]: (state) => {
      state.status = "loading"
    },
    [getCart.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.cart = action.payload
    },
    [getCart.rejected]: (state) => {
      state.status = "failed"
    },

    [addToCart.pending]: (state) => {
      state.status = "loading"
    },
    [addToCart.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.cart = action.payload
    },
    [addToCart.rejected]: (state) => {
      state.status = "failed"
    },

    [deleteFromCart.pending]: (state) => {
      state.status = "loading"
    },
    [deleteFromCart.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.cart = action.payload
    },
    [deleteFromCart.rejected]: (state) => {
      state.status = "failed"
    },

    [checkoutCart.pending]: (state) => {
      state.status = "loading"
    },
    [checkoutCart.fulfilled]: (state, action) => {
      state.status = "succeeded"
      window.location.replace(action.payload.hosted_url)
    },
    [checkoutCart.rejected]: (state) => {
      state.status = "failed"
    },
  },
})

export default cartSlice.reducer
