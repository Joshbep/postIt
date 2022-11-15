import {React, useState} from 'react'
import {MoreVert, Favorite} from '@material-ui/icons'
import './post.css'
import { Users } from "../../data.js"

function Post({post}) {
  const [like, setLike] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const user = Users.filter(u=>u.id===1);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
