const isLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case "INCREMENT":
      return !state
    default:
      return state
  }
}

export default isLoggedReducer
