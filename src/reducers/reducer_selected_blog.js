const initialState = {
  loading  : false,
  data : null
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_LOADING":
      return {
        ...state,
        loading : true
      }
    case "BLOG_DETAIL": {
      return {
        ...state,
        loading : false,
        data : action.data
      }
    }
    default:
      return state;
  }
}

export default reducer;
