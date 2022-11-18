import React, { useState, useEffect } from 'react'
import {Delete, Favorite} from '@material-ui/icons'
import './post.css'
import {useParams} from 'react-router-dom';
import axios from "axios";

function Post({post}) {
  const [like, setLike] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  let {id} = useParams()
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  //

  useEffect(()=>{
    const getUsers = async () => {
      const res = await axios.get(`/users/${post.userId}`);
      setUser(res.data)
    }
    getUsers();
  }, [])

  const heartHandler = () => {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="posts">
      <div className="postsWrapper">
      </div>
        <div className="postsTop">
          <div className="postsTopLeft">
            <img  className="postsProfileImage" alt="" src={user.profilePicture}/>
            <span className="postsUsername">{user.username}</span>
            <span className="postsDate">{post.date}</span>
          </div>
          <div className="postsTopRight">
            <Delete />
          </div>
        </div>
        <div className="postsCenter">
          <span className="postsText">{post?.description}</span>
          <img className="postsImage" src={PF+post.photo} alt=""/>
        </div>
        <div className="postsBottom">
          <div className="postsBottomLeft">
            <Favorite  className="heartIcon" onClick={heartHandler}/>
            <span className="heartCounter"> {like}</span>
          </div>
          <div className="postsBottomRight">
            <span className="postsComment">{post.comments} comments</span>
          </div>
        </div>
    </div>
  );
}

export default Post;
