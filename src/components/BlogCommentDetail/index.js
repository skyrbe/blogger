import React from 'react';

 const BlogCommentDetail = (props) => {
   return (
       <div className="list-group-item">
           <span>{props.comment.body}</span>
       </div>
   );
}

export default BlogCommentDetail;
