import React,{Component} from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({blog}) => {
  return (
      <div className="col-md-12 list-group-item" key = {blog.id}>
          <h1><Link to = {`/detail/${blog.id}`}>{blog.title}</Link></h1>
          <h4>{blog.category}</h4>
      </div>
  );
}
export default BlogItem;
