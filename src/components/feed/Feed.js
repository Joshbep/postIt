import './feed.css';
import React from 'react'
import Makepost from '../makePost/Makepost.js'


function Feed() {
  return (
    <div className="feed">
      <div className="wrapper">
        <Makepost />
      </div>
    </div>
  );
}

export default Feed;
