import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const postFormStamp = createAsyncThunk("stamp/postFormStamp", async () => {
  return fetch("http://localhost:8000/stamp/create").then((res) => {
    res.json()
  })
})

export const stampSlice = createSlice({
  name: "stamps",
  initialState: {
    stamps: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [postFormStamp.pending]: (state, action) => {
      state.status = "loading"
    },
    [postFormStamp.fulfilled]: (state, action) => {
      state.status = "success"
      state.stamp.push(action.payload)
    },
    [postFormStamp.rejected]: (state, action) => {
      state.status = "failed"
    },
  },
})

export const { sendStamp, setStamp } = stampSlice.actions

export default stampSlice.reducer
