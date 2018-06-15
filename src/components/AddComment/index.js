import React from 'react';



 const AddComment = (props) => {
   return (
       <div className="class-name">
       		<div>
	           <textarea className = "full-width" value={props.commentText} onChange={props.handleInputEvent} rows="4" >

				</textarea>
			</div>
			<div>
				<button type="button" className = "btn btn-primary d-block mx-auto mt_20 mb_20" onClick={props.saveCommentsData}>Add Comment</button>
			</div>
       </div>
   );
}

export default AddComment;