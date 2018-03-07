import React from 'react';
import Post from './Post';

const PostList = ({posts}) => {
  return (
    <div>
      <h1>PostList</h1>
      {Object.keys(posts).map((key, index) => (
        <Post post={posts[key]} key={key}/>
      ))}
    </div>
  )
};

export default PostList;