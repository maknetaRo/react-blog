import React from 'react';

const PostItem = ({ article }) => {
  return (
    <div>
      Post
      <h3>{article.title}</h3>
      <p>{article.body}</p>
    </div>
  );
};

export default PostItem;
