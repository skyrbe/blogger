import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Detail from '../../components/Detail';
import { getBlogDetail } from '../../actions/blogActions';

class BlogDetail extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log('componentDidMount',this.props);
      this.props.getBlogDetail(this.props.match.params.id)
    }

    render() {
        console.log("props BlogDetail ", this.props);
        return (
            <div className="col-md-12">
                {this.props.isLoading && <span>Loading!!</span>}
                {!this.props.isLoading && this.props.blogDetail && <Detail blogDetail = {this.props.blogDetail} />}
            </div>
        );
    }
}

function mapStateToProps({selectedBlog}){
    return {
      isLoading : selectedBlog.loading,
      blogDetail : selectedBlog.data
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
      getBlogDetail
    },dispatch);
}

export default connect (mapStateToProps,mapDispatchToProps)(BlogDetail);
