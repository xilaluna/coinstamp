import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./slices/cartSlice"
import stampReducer from "./slices/stampSlice"

export default configureStore({
  reducer: {
    cart: cartReducer,
    stamp: stampReducer,
  },
})
