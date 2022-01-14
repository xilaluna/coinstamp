import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const checkoutCart = createAsyncThunk("order/checkoutCart", async (newOrder) => {
  const response = await axios.post("/stamp/checkout", newOrder)
  return response.data
})

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
    checkoutUrl: null,
  },
  reducers: {},
  extraReducers: {
    [checkoutCart.fulfilled]: (state, action) => {
      state.checkoutUrl = action.payload.hosted_url
      window.location.replace(action.payload.hosted_url)
    },
  },
})

export default orderSlice.reducer
