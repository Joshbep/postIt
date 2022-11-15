import './feed.css';
import React, { useState, useEffect } from 'react'
import Makepost from '../makePost/Makepost.js'
import Post from '../post/Post.js'

let baseURL = ""

if(process.env.NODE_ENV === "development"){
  baseURL = "http://localhost:3001"
} else {
  baseURL = `${process.env.REACT_APP_BACKEND_URL}`
}

function Feed() {
  const [posts, setPosts] = useState([])
  const getPosts = () => {
    // fetch to the backend
    fetch(baseURL + "posts/",{
      credentials: "include"
    })
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return []
      }
    }).then(data => {
      console.log(data.data)
      setPosts(data.data)
    })
  }
  return (
    <div className="feed">
      <div className="wrapper">
        <Makepost />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
