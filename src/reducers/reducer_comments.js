const initialState = {
  data : [],
  loading  : false
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_LOADING":
      return {
        ...state,
        loading : true
      }
    case "GET_ALL_COMMENTS":
      console.log("action data ", action.data);
      return {
        ...state,
        loading : false,
        data : state.data.concat(action.data)
      }
    case "REMOVE_ALL_COMMENTS":
      return {
        ...state,
        data: []
      }
    case "SAVE_COMMENT":
      return {
        ...state,
        loading : false,
        data : state.data.concat(action.data)
      }
    default:
      return state;
  }
}

export default reducer;
