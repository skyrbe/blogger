import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BlogCommentsComponent from '../../components/BlogComments';
import {getComments,removeAllComments} from '../../actions/blogActions';

class BlogComments extends Component {

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
      removeAllComments
    },dispatch);
}

export default connect (mapStateToProps,mapDispatchToProps)(BlogComments);
