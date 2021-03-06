import React from 'react';


const Post = ({post}) => (
  <div>
    {post.saving ? <p>Saving...</p> : null}
    <h2>{post.title}</h2>
    <p>
      {post.content}
    </p>
    <div>
      <h4>Comments</h4>
      <CommentList postId={post._id}/>
    </div>
  </div>
);

export default Post;
