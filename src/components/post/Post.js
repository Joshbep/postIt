import React, { useContext, useState, useEffect } from 'react'
import {Delete, Favorite, Edit} from '@material-ui/icons'
import './post.css'
import axios from "axios";
import {format} from "timeago.js"
import {Link} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
import EditPost from "../editPost/EditPost.js"

function Post({post, deletePost, i, handleEdit}) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const [postIndex, setPostIndex] = useState(null)
  const [showEdit, setShowEdit] = useState(false)
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

  const showEditPopup = (e, i) => {
    console.log("form popup triggered")
    console.log(i)
    setShowEdit(!showEdit)
    setPostIndex(i)
  }

  const closeEditPopup = () => {
    console.log("form popup closed")
      setShowEdit(!showEdit)
      setPostIndex(null)
  }

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
            <Edit onClick={(e) => {showEditPopup(e)}}>
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
        {showEdit && (
          <EditPost post={post} setPostIndex={postIndex} handleEdit={handleEdit} closeEditPopup={closeEditPopup}/>
        )}
    </div>
  );
}

export default Post;
