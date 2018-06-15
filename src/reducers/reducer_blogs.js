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
    case "GET_ALL_POSTS":
      return {
        ...state,
        loading : false,
        data : state.data.concat(action.data)
      }
    case "REMOVE_ALL_BLOGS":
      return{
        ...state,
          loading : false,
          data : []
      }
    case "SAVE_BLOG":
      return {
        ...state,
        loading : false
      }
    default:
      console.log('Reducer blog',state);
      return state;
  }

}

export default reducer;
