import { combineReducers } from "redux"

import counterReducer from "./counter"
import isLoggedReducer from "./isLogged"

const rootReducers = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
})

export default rootReducers
