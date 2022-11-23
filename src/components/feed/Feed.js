import './feed.css';
import React, { useContext, useState, useEffect } from 'react'
import Makepost from '../makePost/Makepost.js'
import Post from '../post/Post.js'
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

let baseUrl = 'http://localhost:3001'

function Feed({username}) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  const deletePost = (id) => {
    fetch(baseUrl + '/posts/' + id, {
      method: 'DELETE'
    }).then( res => {
      const copyPosts = [...posts]
      const findIndex = posts.findIndex(post => post._id === id)
      copyPosts.splice(findIndex, 1)
      setPosts(copyPosts)
    });
  }

  useEffect(()=>{
    const getPosts = async () => {
      const res = username
      ? await axios.get("/posts/profile/" + username)
      : await axios.get("/posts/timeline/" + user._id)
      setPosts(res.data)
    }
    getPosts();
  }, [username, user._id])

  return (
    <div className="feed">
      <div className="wrapper">
        <Makepost />
        { posts.map((post, i) => {
          return (
            <Post key={post.id} post={post} deletePost={deletePost}/>
          )
        })
        }
      </div>
    </div>
  )
}

export default Feed;
