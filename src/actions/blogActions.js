import request from 'superagent';

const API_BASE_URL = 'http://localhost:3004';

const showLoading = () => {
  return {
    type : 'SHOW_LOADING'
  }
}

const getAllPosts = (data) => {
  return {
    type : 'GET_ALL_POSTS',
    data
  }
}

export const getAllBlogs = () => {
  return (dispatch) => {
    dispatch(showLoading());
    request
     .get(`${API_BASE_URL}/posts`)
     .then(function(res) {
        dispatch(getAllPosts(res.body))
     });
  }
}

const getPostDetail = (data) => {
  return {
    type: 'BLOG_DETAIL',
    data
  }
}

export const getBlogDetail = (id) => {
  return (dispatch) => {
    dispatch(showLoading());
    request
     .get(`${API_BASE_URL}/posts/${id}`)
     .then(function(res) {
        dispatch(getPostDetail(res.body))
     });
  }
}

const getAllComments = (data) => {
  return {
    type: 'GET_ALL_COMMENTS',
    data
  }
}

export const removeAllComments = () => {
  return {
    type: 'REMOVE_ALL_COMMENTS'
  }
}

export const getComments = (id) => {
  return (dispatch) => {
    dispatch(showLoading());
    request
     .get(`${API_BASE_URL}/comments?postId=${id}`)
     .then(function(res) {
        console.log("comment data ", res.body);
        dispatch(getAllComments(res.body))
     });
  }
}
