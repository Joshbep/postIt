import './feed.css';
import React from 'react'
import Makepost from '../makePost/Makepost.js'
import Post from '../post/Post.js'
import { Posts } from "../../data.js"

function Feed() {
  return (
    <div className="feed">
      <div className="wrapper">
        <Makepost />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
