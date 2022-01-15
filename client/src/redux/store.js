import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./slices/cartSlice"
import stampReducer from "./slices/stampSlice"
import orderReducer from "./slices/orderSlice"

export default configureStore({
  reducer: {
    cart: cartReducer,
    stamp: stampReducer,
    order: orderReducer,
  },
})
