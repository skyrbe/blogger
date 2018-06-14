import React,{Component} from 'react';
import BlogComments from '../../containers/BlogComments';

export default class Detail extends Component {

    render() {

      const {blogDetail} = this.props;
      console.log("blog Detail ", blogDetail);
      return (
          <div className="col-md-12">
              <h1>{blogDetail.title}</h1>
              <h3>{blogDetail.category}</h3>
              <BlogComments id = {blogDetail.id}/>
          </div>

      );
    }
}
