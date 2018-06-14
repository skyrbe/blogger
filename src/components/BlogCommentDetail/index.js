import React from 'react';

 const BlogCommentDetail = (props) => {
   return (
       <div className="class-name">
           <span>{props.comment.body}</span>
       </div>
   );
}

export default BlogCommentDetail;
