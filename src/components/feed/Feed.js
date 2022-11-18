import './feed.css';
import React, { useState, useEffect } from 'react'
import Makepost from '../makePost/Makepost.js'
import Post from '../post/Post.js'
import axios from "axios";


function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const getPosts = async () => {
      const res = await axios.get("/posts/timeline/637678c195278b27cfd24d7a")
      setPosts(res.data)
    }
    getPosts();
  }, [])

  return (
    <div className="feed">
      <div className="wrapper">
        <Makepost />
        { posts.map((post, i) => {
          return (
            <Post key={post.id} post={post} />
          )
        })
        }
      </div>
    </div>
  )
}

export default Feed;
