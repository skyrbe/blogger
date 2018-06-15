import React from 'react';

const ToasterComponent = (props) => {
  return (
    <div className = {`toaster ${props.type == 'success' ? 'success' : 'failure'}`}>
      {props.data}
    </div>
  )
}
export default ToasterComponent;
