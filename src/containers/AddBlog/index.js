import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveBlog,showToast} from '../../actions/blogActions';
import AddBlogComponent from '../../components/AddBlogComponent';

class AddBlog extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    saveBlog = (data) => {
      const JSONObj = {
        id: new Date().getTime(),
        type:'success',
        interval:3000,
        data:"Post saved successfully"
      };
      this.props.saveBlog(data);
      this.props.showToast(JSONObj);
      this.props.history.push('/')
    }
    render() {
        return (
            <div className="col-md-12">
                <AddBlogComponent saveBlog={this.saveBlog}/>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({
      saveBlog,
      showToast
    },dispatch);
}

export default connect (null,mapDispatchToProps)(AddBlog);
