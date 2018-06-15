import React,{Component} from 'react';
import BlogComments from '../../containers/BlogComments';

export default class Detail extends Component {

    render() {      
      const {blogDetail} = this.props;
      return (
          <div className="col-md-4 col-md-offset-4">
          <div className=" mx-auto w-50">
             <h1>{blogDetail.title}</h1>
              <h3>{blogDetail.category}</h3>
              <BlogComments id = {blogDetail.id}/>
          </div>
             
          </div>

      );
    }
}
