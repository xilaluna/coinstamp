import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const createStamp = createAsyncThunk("stamp/createStamp", async (newStamp) => {
  const response = await axios.post("/stamp/create", newStamp)
  return response.data
})

export const getAddresses = createAsyncThunk("stamp/getAddresses", async (adresses) => {
  const response = await axios.get(
    `/stamp/addresses?to_address=${adresses.to_address}&from_address=${adresses.from_address}`
  )
  return response.data
})

export const stampSlice = createSlice({
  name: "stamps",
  initialState: {
    shipment: {},
    addresses: {},
  },
  reducers: {},
  extraReducers: {
    [createStamp.fulfilled]: (state, action) => {
      state.shipment = action.payload
    },
    [getAddresses.fulfilled]: (state, action) => {
      state.addresses = action.payload
    },
  },
})

export const { sendStamp, setStamp } = stampSlice.actions

export default stampSlice.reducer
