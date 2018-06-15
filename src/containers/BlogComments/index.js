import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BlogCommentsComponent from '../../components/BlogComments';
import AddComment from '../../components/AddComment'
import {getComments,removeAllComments,saveComments} from '../../actions/blogActions';

class BlogComments extends Component {
  constructor(props) {
    super(props);
    this.state={
      commentData:''
    }
    this.saveCommentToDB=this.saveCommentToDB.bind(this);
    this.handleInputEvent=this.handleInputEvent.bind(this);
  }
  saveCommentToDB(){
    let jsonData={        
        "body":this.state.commentData,
        "postId":this.props.id,
      } 
    
    this.props.saveComments(jsonData);
    this.setState({
      commentData:''
    });
    //removeAllComments();

  }
  handleInputEvent(e){
    
    this.setState(
      {
        commentData:e.target.value
      }
    );
  }
    componentDidMount() {
      this.props.removeAllComments();
      this.props.getComments(this.props.id);
    }

    render() {
        const { comments } = this.props;
        //console.log("blog container comments ", comments);
        return (
            <div className="class-name">
                <BlogCommentsComponent comments = {comments}/>
                <AddComment comments={comments} 
                commentText={this.state.commentData} 
                handleInputEvent={this.handleInputEvent} 
                saveCommentsData={this.saveCommentToDB}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    //console.log("app state -- comments ", state);
    return {
      comments : state.comments
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
      getComments,
      removeAllComments,
      saveComments
    },dispatch);
}

export default connect (mapStateToProps,mapDispatchToProps)(BlogComments);
