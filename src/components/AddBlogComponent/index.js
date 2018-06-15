import React,{Component} from 'react';

export default class AddBlogComponent extends Component {
    constructor(props){
    	super(props);
    	this.state = {
        title:'',
        category:'',
        description:''
      };
    }

    onChange = (e) => {
      let name = e.target.name
      console.log("event ", e.target.name);
      this.setState({
        [e.target.name] : e.target.value
      },() => {
        console.log("state ", this.state);
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.saveBlog(this.state);
      this.setState({
        title:'',
        category:'',
        description:''
      });
    }

    render() {
        const {title, description, category } = this.state;
        return (
            <div className="col-md-4">
                <form onSubmit = {event=>this.handleSubmit(event)}>
                <div className="input-group">
                  <input type="text" className="form-control" name="title" placeholder="title"  value = {title} aria-describedby="basic-addon1" onChange = {(e)=>this.onChange(e)}/>
                </div>
                <div className="input-group">
                  <input type="text" className="form-control" name = "category" placeholder="category"  value = {category} aria-describedby="basic-addon1" onChange = {(e)=>this.onChange(e)}/>
                </div>
                <div className="input-group">
                  <textarea className="form-control" name = "description" placeholder="description"  value = {description} aria-describedby="basic-addon1" onChange = {(e)=>this.onChange(e)}/>
                </div>
                <input type = "submit" value = "submit" className = "btn btn-info"/>
                </form>
            </div>
        );
    }
}
