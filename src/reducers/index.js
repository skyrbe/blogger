import { combineReducers } from 'redux';
import BlogsReducer from './reducer_blogs';
import SelectedBlogReducer from './reducer_selected_blog';
import CommentsReducer from './reducer_comments';
import UIReducer from './reducer_ui';

const reducer = combineReducers({
  blogList : BlogsReducer,
  selectedBlog : SelectedBlogReducer,
  comments : CommentsReducer,
  ui: UIReducer
})

export default reducer;
