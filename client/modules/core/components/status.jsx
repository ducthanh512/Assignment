import React from 'react';


const Status = ({status}) => (
  <div>
    {status.saving ? <p>Saving...</p> : null}
    <h2>{status.user}</h2>

    <div>
      <h4>Comments</h4>
      <CommentList statusId={status._id}/>
    </div>
  </div>
);

export default Status;
