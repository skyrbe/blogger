import request from 'superagent';
import {COMMENTS_SHOW_LOADING,BLOG_DETAIL_SHOW_LOADING} from './actionTypes'
const API_BASE_URL = 'http://localhost:3004';

const blogDetailShowLoading = () => {
  return {
    type : 'BLOG_DETAIL_SHOW_LOADING'
  }
}
const commentsShowLoading = () => {
  return {
    type : 'COMMENTS_SHOW_LOADING'
  }
}
const getAllPosts = (data) => {
  return {
    type : 'GET_ALL_POSTS',
    data
  }
}

const showLoading = (data) => {
  return {
    type : 'SHOW_LOADING',
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
    dispatch(blogDetailShowLoading());
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
export const removeAllBlogs = () => {
  return {
    type: 'REMOVE_ALL_BLOGS'
  }
}
export const saveComments = (commentData) => {
  console.log('action',commentData);
  return (dispatch) => {
    console.log('Save comments')
    dispatch(commentsShowLoading());
    request
     .post(`${API_BASE_URL}/comments`)
     .set('Content-Type','application/json')
     .send(commentData)
     .then(function(res) {
        dispatch(saveCommentsData(res.body))
     });
  }
}

const saveCommentsData = (data) => {
  return {
    type: 'SAVE_COMMENT',
    data
  }
}
export const getComments = (id) => {
  return (dispatch) => {
    dispatch(commentsShowLoading());
    request
     .get(`${API_BASE_URL}/comments?postId=${id}`)
     .then(function(res) {
        console.log("comment data ", res.body);
        dispatch(getAllComments(res.body))
     });
  }
}



