import React from 'react'
import {MoreVert, Favorite} from '@material-ui/icons'
import './post.css'
import { Users } from "../../data.js"

function Post({post}) {
  const user = Users.filter(u=>u.id===1)
  return (
    <div className="posts">
      <div className="postsWrapper">
      </div>
        <div className="postsTop">
          <div className="postsTopLeft">
            <img  className="postsProfileImage" alt="" src={Users.filter((u)=>u.id === post.userId)[0].profilePicture}/>
            <span className="postsUsername">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
            <span className="postsDate">{post.date}</span>
          </div>
          <div className="postsTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postsCenter">
          <span className="postsText">{post?.description}</span>
          <img className="postsImage" src={post.photo} alt=""/>
        </div>
        <div className="postsBottom">
          <div className="postsBottomLeft">
            <Favorite  className="heartIcon"/>
            <span className="heartCounter"> {post.likes}</span>
          </div>
          <div className="postsBottomRight">
            <span className="postsComment">{post.comments}</span>
          </div>
        </div>
    </div>
  );
}

export default Post;
