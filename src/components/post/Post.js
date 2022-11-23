import React, { useContext, useState, useEffect } from 'react'
import {Delete, Favorite, Edit} from '@material-ui/icons'
import './post.css'
import axios from "axios";
import {format} from "timeago.js"
import {Link} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";

function Post({post, deletePost}) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);
  //

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(()=>{
    const getUsers = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data)
    }
    getUsers();
  }, [post.userId])

  const heartHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="posts">
      <div className="postsWrapper">
      </div>
        <div className="postsTop">
          <div className="postsTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
              className="postsProfileImage"
              alt=""
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF+"profile/avatar.png"
              }
              />
            </Link>
            <span className="postsUsername">{user.username}</span>
            <span className="postsDate">{format(post.createdAt)}</span>
          </div>
          <div className="postsTopRight">
            <Delete onClick={() => deletePost(post._id)} >
            </Delete>
            <Edit>
            </Edit>
          </div>
        </div>
        <div className="postsCenter">
          <span className="postsText">{post?.description}</span>
          <img
          className="postsImage"
          src={PF + post.img}
          alt=""
          />
        </div>
        <div className="postsBottom">
          <div className="postsBottomLeft">
            <Favorite  className="heartIcon" onClick={heartHandler}/>
            <span className="heartCounter"> {like} people like it</span>
          </div>
          <div className="postsBottomRight">
            <span className="postsComment">{post.comments} comments</span>
          </div>
        </div>
    </div>
  );
}

export default Post;
