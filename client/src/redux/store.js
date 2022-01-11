import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit"

import cartReducer from "./slices/cartSlice"
import stampReducer from "./slices/stampSlice"

import createSagaMiddleware from "redux-saga"
import { watcherSaga } from "./sagas/rootSaga"

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  cart: cartReducer,
  stamps: stampReducer,
})

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
})
sagaMiddleware.run(watcherSaga)

export default store
