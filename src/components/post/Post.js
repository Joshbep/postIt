import React, { useState, useEffect } from 'react'
import {MoreVert, Favorite} from '@material-ui/icons'
import './post.css'
import {useParams} from 'react-router-dom';

let baseURL = ""

if(process.env.NODE_ENV === "development"){
  baseURL = "http://localhost:3001"
} else {
  baseURL = `${process.env.REACT_APP_BACKEND_URL}`
}

function Post({post}) {
  const [like, setLike] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  let {id} = useParams()
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // const getUser = (id) => {
  //   fetch(baseURL + "/users/" + id, {
  //     credentials: "include"
  //   })
	// 		.then(res => {
	// 			if(res.status === 200) {
	// 				return res.json()
	// 			} else {
	// 				return []
	// 			}
	// 		}).then(data => {
	// 			console.log('data', data)
	// 			setUser(data.user)
	// 		})
	// }
  //
  // useEffect(()=>{
  //   getUser(id)
  // }, [])

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
