import React,{Component} from 'react';
import BlogCommentDetail from '../BlogCommentDetail';

export default class BlogComments extends Component {
    createCommentList = (comments) => {
      return comments.data.map(comment => {
        return (
          <BlogCommentDetail key = {comment.id} comment = {comment} />
        )
      })
    }

    render() {
        return (
            <div className="class-name">
                {this.createCommentList(this.props.comments)}
            </div>
        );
    }
}
