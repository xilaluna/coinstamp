import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getOrder = createAsyncThunk("order/getOrder", async () => {
  const response = await axios.get("/order")
  return response.data
})

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
    status: "idle",
  },
  extraReducers: {
    [getOrder.pending]: (state) => {
      state.status = "loading"
    },
    [getOrder.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.order = action.payload
    },
    [getOrder.rejected]: (state) => {
      state.status = "failed"
    },
  },
})

export default orderSlice.reducer
