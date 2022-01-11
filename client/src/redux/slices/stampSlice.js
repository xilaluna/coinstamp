import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  stamps: [],
}

export const stampSlice = createSlice({
  name: "stamps",
  initialState,
  reducers: {
    sendStamp: (state) => {},
    setStamp: (state, action) => {
      state.stamps.push(action.payload)
    },
  },
})

export const { sendStamp, setStamp } = stampSlice.actions

export default stampSlice.reducer
