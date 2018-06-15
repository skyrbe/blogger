import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ToastComponent from '../../../components/shared/ToasterComponent';

class Toaster extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    renderToasts = () => {
      return this.props.toasts.map(toast => {
        return (
          <ToastComponent key = {toast.id} type={toast.type} data={toast.data} interval={toast.interval} />
        );
      })
    }
    render() {
        return (
            <div className="toaster-container">
                {this.renderToasts()}
            </div>
        );
    }
}

function mapStateToProps({ui}){
    return {toasts:ui.data};
}

export default connect (mapStateToProps)(Toaster);
