import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import BlogItem from '../../components/BlogItem';

import { getAllBlogs } from '../../actions/blogActions'

class BlogList extends Component {

  componentDidMount() {
      this.props.getAllBlogs();
  }

  renderList = (blogs) => {
    return blogs.map(blog => {
      return (
        <BlogItem blog = {blog} />
      );
    })
  }
  render() {
    const { isLoading, blogs } = this.props;

    return (
      <div className = "col-md-12 list-group">
          {isLoading && <span>Loading</span>}
          {!isLoading && blogs.length ==0 && <span>No Data to show!</span>}
          {this.renderList(blogs)}
      </div>
    )
  }
}

function mapStateToProps({blogList}) {
  return{
    blogs:blogList.data,
    isLoading:blogList.loading
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAllBlogs
  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BlogList);
