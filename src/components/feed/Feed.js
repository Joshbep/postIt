import './feed.css';
import React from 'react'
import Makepost from '../makePost/Makepost.js'
import Post from '../post/Post.js'


function Feed() {
  return (
    <div className="feed">
      <div className="wrapper">
        <Makepost />
        <Post />
      </div>
    </div>
  );
}

export default Feed;
