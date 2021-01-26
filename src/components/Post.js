import React from 'react';

const Post = ({ post: { title, body } }) => {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
};

export default Post;
