import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const createStamp = createAsyncThunk("stamp/createStamp", async (newStamp) => {
  const response = await axios.post("/stamp", newStamp)
  return response.data
})

export const getStamp = createAsyncThunk("stamp/getStamp", async () => {
  const response = await axios.get("/stamp")
  return response.data
})

export const stampSlice = createSlice({
  name: "stamp",
  initialState: {
    stamp: {},
    status: "idle",
  },
  extraReducers: {
    [createStamp.pending]: (state) => {
      state.status = "loading"
    },
    [createStamp.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.stamp = action.payload
    },
    [createStamp.rejected]: (state) => {
      state.status = "failed"
    },

    [getStamp.pending]: (state) => {
      state.status = "loading"
    },
    [getStamp.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.stamp = action.payload
    },
    [getStamp.rejected]: (state) => {
      state.status = "failed"
    },
  },
})

export default stampSlice.reducer
