const initialState = {
  data : []
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        data : state.data.concat(action.data)
      }
    case "DELETE_TOAST":
      return {
        ...state,
        data : state.data.filter((result) => result.id != action.id)
      }
    default:
      return state;
  }
}

export default reducer;
