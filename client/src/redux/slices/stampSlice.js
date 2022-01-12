import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const createNewStamp = createAsyncThunk(
  "stamp/createNewStamp",
  async (newStamp) => {
    const response = await axios.post("http://localhost:8000/stamp/create", newStamp)
    return response.data
  }
)

export const stampSlice = createSlice({
  name: "stamps",
  initialState: {
    stamp: {},
    status: null,
  },
  reducers: {},
  extraReducers: {
    [createNewStamp.pending]: (state, action) => {
      state.status = "loading"
    },
    [createNewStamp.fulfilled]: (state, action) => {
      state.status = "success"
      state.stamp = action.payload
    },
    [createNewStamp.rejected]: (state, action) => {
      state.status = "failed"
      console.log("failed")
    },
  },
})

export const { sendStamp, setStamp } = stampSlice.actions

export default stampSlice.reducer
