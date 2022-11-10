import React from 'react'
import {MoreVert, Favorite} from '@material-ui/icons'
import './post.css'

function Post() {
  return (
    <div className="posts">
      <div className="postsWrapper">
      </div>
        <div className="postsTop">
          <div className="postsTopLeft">
            <img  className="postsProfileImage" alt="" src=""/>
            <span className="postsUsername">Josh Pasour</span>
            <span className="postsDate">2 days ago</span>
          </div>
          <div className="postsTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postsCenter">
          <span className="postsText">Posting here right now</span>
          <img className="postsImage" src="" alt=""/>
        </div>
        <div className="postsBottom">
          <div className="postsBottomLeft">
            <Favorite  className="heartIcon"/>
            <span className="heartCounter"> 32 likes</span>
          </div>
          <div className="postsBottomRight">
            <span className="postsComment">5 comments</span>
          </div>
        </div>
    </div>
  );
}

export default Post;
